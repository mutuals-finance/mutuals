// SPDX-License-Identifier: MIT
pragma solidity ^0.8.29;

import {IERC165} from "@openzeppelin/contracts/utils/introspection/IERC165.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {Math} from "@openzeppelin/contracts/utils/math/Math.sol";

import {IPool} from "../../interfaces/IPool.sol";
import {IModule} from "../../interfaces/IModule.sol";
import {IDistributionModule} from "../../interfaces/IDistributionModule.sol";
import {Claim, TransferInstruction, TokenType, Token} from "../../types/Token.sol";
import {PreHookResult} from "../../types/PreHookResult.sol";
import {BaseModule} from "../BaseModule.sol";

/**
 * @title Remainder Distribution Module
 * @notice Highly optimized remainder calculation utilizing off-chain aggregated static values.
 * Only loops over truly dynamic, non-aggregable sibling modules to save gas.
 */
contract RemainderDistributionModule is IDistributionModule, BaseModule {

  /* -------------------------------------------------------------------------- */
  /* STATE VARIABLES & STRUCTS                                                  */
  /* -------------------------------------------------------------------------- */

  // Pool -> Claim -> Token -> Amount
  mapping(address => mapping(uint256 => mapping(Token => uint256))) public claimed;

  struct Context {
    Token[] tokens;
    uint256[] amounts;
  }

  struct Data {
    address recipient;
    Token[] tokens;
    TokenType[] tokenTypes;
    uint256[] tokenIds;
    uint256[] fixedDeductions;
    uint256[] bpsDeductions;
    Claim[] dynamicSiblings;
  }

  struct Args {
    Token[] tokens;
    TokenType[] tokenTypes;
    uint256[] tokenIds;
    uint256[] values;
    uint256[] indices;
    uint256[][] siblingIndices;
  }

  error AllocationExceedsPool();
  error TokenNotAllowed(Token token);
  error ArrayLengthMismatch();

  /* -------------------------------------------------------------------------- */
  /* MODULE INTERFACE FUNCTIONS                                                 */
  /* -------------------------------------------------------------------------- */

  /// @inheritdoc IModule
  function moduleId() external pure override returns (string memory) {
    return "mutuals.remainder-distribution-module.1.0.0";
  }

  /// @inheritdoc IModule
  function onInstall(bytes calldata /* data */) external override {}

  /// @inheritdoc IModule
  function onUninstall(bytes calldata /* data */) external override {}

  /// @inheritdoc IERC165
  function supportsInterface(bytes4 interfaceId) public view virtual override(BaseModule, IERC165) returns (bool) {
    return interfaceId == type(IDistributionModule).interfaceId || super.supportsInterface(interfaceId);
  }

  /* -------------------------------------------------------------------------- */
  /* AGGREGATION & ALLOCATION                                                   */
  /* -------------------------------------------------------------------------- */

  /// @inheritdoc IDistributionModule
  function aggregationParameters(Claim calldata /* claim */, Token /* token */, uint256 /* index */) external pure override returns (uint256, uint256, bool) {
    // A remainder is inherently dynamic, as it depends on total pool inflow and other dynamic modules
    return (0, 0, true);
  }

  /// @inheritdoc IDistributionModule
  function totalAllocated(Claim calldata claim, Token token, uint256 index, uint256 totalReceived) external view override returns (uint256) {
    Data memory data = abi.decode(claim.distributionData, (Data));

    if (data.tokens.length > 0) {
      if (index >= data.tokens.length || !(data.tokens[index].equals(token))) {
        return 0;
      }
    } else {
      index = 0;
    }

    if (data.fixedDeductions.length == 0 || index >= data.fixedDeductions.length) {
      return totalReceived;
    }

    uint256 allocatedToSiblings = data.fixedDeductions[index];
    if (data.bpsDeductions[index] > 0) {
      allocatedToSiblings += Math.mulDiv(totalReceived, data.bpsDeductions[index], 10000);
    }

    if (allocatedToSiblings > totalReceived) {
      return 0;
    }

    return totalReceived - allocatedToSiblings;
  }

  /* -------------------------------------------------------------------------- */
  /* DISTRIBUTION FUNCTIONS                                                     */
  /* -------------------------------------------------------------------------- */

  /// @inheritdoc IDistributionModule
  function releasable(Claim calldata claim, bytes calldata dArgs) external view override returns (TransferInstruction[] memory) {
    return _releasable(claim, dArgs);
  }

  /// @inheritdoc IDistributionModule
  function preDistributionHook(Claim calldata claim, bytes calldata dArgs) external override returns (PreHookResult memory) {
    TransferInstruction[] memory instructions = _releasable(claim, dArgs);

    Context memory context;
    context.tokens = new Token[](instructions.length);
    context.amounts = new uint256[](instructions.length);

    for (uint i = 0; i < instructions.length; i++) {
      if (instructions[i].amount == 0 && instructions[i].tokenId == 0 && instructions[i].tokenType != TokenType.ERC721) {
        revert AllocationExceedsPool();
      }
      context.tokens[i] = instructions[i].token;
      context.amounts[i] = instructions[i].amount;
    }

    return PreHookResult({
      instructions: instructions,
      postHookContext: abi.encode(context),
      requiresPostHook: true
    });
  }

  /// @inheritdoc IDistributionModule
  function postDistributionHook(Claim calldata claim, bytes calldata dContext) external override {
    Context memory context = abi.decode(dContext, (Context));

    for (uint i = 0; i < context.tokens.length; i++) {
      claimed[msg.sender][claim.id][context.tokens[i]] += context.amounts[i];
    }
  }

  /* -------------------------------------------------------------------------- */
  /* INTERNAL LOGIC                                                             */
  /* -------------------------------------------------------------------------- */

  function _releasable(Claim calldata claim, bytes calldata dArgs) internal view returns (TransferInstruction[] memory) {
    Data memory data = abi.decode(claim.distributionData, (Data));
    Args memory args = abi.decode(dArgs, (Args));

    TransferInstruction[] memory instructions = new TransferInstruction[](args.tokens.length);

    for (uint i = 0; i < args.tokens.length; i++) {
      uint256 idx = args.indices[i];

      if (data.tokens.length > 0) {
        if (idx >= data.tokens.length || !(data.tokens[idx].equals(args.tokens[i]))) {
          revert TokenNotAllowed(args.tokens[i]);
        }
      } else {
        idx = 0;
      }

      uint256 totalRemainder;
      {
        uint256 totalReceived = args.tokens[i].balanceOf(args.tokenTypes[i], msg.sender)
          + IPool(msg.sender).totalReleased(Token.unwrap(args.tokens[i]), args.tokenIds[i]);

        uint256 allocatedToSiblings = data.fixedDeductions[idx];
        if (data.bpsDeductions[idx] > 0) {
          allocatedToSiblings += Math.mulDiv(totalReceived, data.bpsDeductions[idx], 10000);
        }

        if (data.dynamicSiblings.length > 0) {
          allocatedToSiblings += _sumDynamicSiblings(data.dynamicSiblings, args.tokens[i], args.siblingIndices[i], totalReceived);
        }

        if (totalReceived > allocatedToSiblings) {
          totalRemainder = totalReceived - allocatedToSiblings;
        } else {
          totalRemainder = 0;
        }
      }

      uint256 available;
      {
        uint256 currentClaimed = claimed[msg.sender][claim.id][args.tokens[i]];
        available = totalRemainder > currentClaimed ? totalRemainder - currentClaimed : 0;
      }

      if (args.values[i] > 0 && args.values[i] < available) {
        available = args.values[i];
      }

      instructions[i] = TransferInstruction({
        tokenType: args.tokenTypes[i],
        token: args.tokens[i],
        recipient: data.recipient,
        tokenId: args.tokenIds[i],
        amount: available,
        data: ""
      });
    }

    return instructions;
  }

  function _sumDynamicSiblings(
    Claim[] memory dynamicSiblings,
    Token token,
    uint256[] memory siblingIndices,
    uint256 totalReceived
  ) internal view returns (uint256) {
    uint256 totalAllocatedSiblings = 0;
    for (uint256 j = 0; j < dynamicSiblings.length; j++) {
      totalAllocatedSiblings += IDistributionModule(dynamicSiblings[j].distributionModule).totalAllocated(
        dynamicSiblings[j],
        token,
        siblingIndices[j],
        totalReceived
      );
    }
    return totalAllocatedSiblings;
  }
}
