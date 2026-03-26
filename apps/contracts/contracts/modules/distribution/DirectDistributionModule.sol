// SPDX-License-Identifier: MIT
pragma solidity ^0.8.29;

import {IERC165} from "@openzeppelin/contracts/utils/introspection/IERC165.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {Math} from "@openzeppelin/contracts/utils/math/Math.sol";

import {IPool} from "../../interfaces/IPool.sol";
import {IModule} from "../../interfaces/IModule.sol";
import {IDistributionModule} from "../../interfaces/IDistributionModule.sol";
import {Claim, TransferInstruction, TokenType, Token, TokenLibrary} from "../../types/Token.sol";
import {PreHookResult} from "../../types/PreHookResult.sol";
import {BaseModule} from "../BaseModule.sol";

/**
 * @title Direct Distribution Module
 * @notice Allows recipients to claim a fixed amount or a proportional share of the total pool inflow.
 */
contract DirectDistributionModule is IDistributionModule, BaseModule {
  /* -------------------------------------------------------------------------- */
  /* STATE VARIABLES & STRUCTS                                                  */
  /* -------------------------------------------------------------------------- */

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
    uint256[] values;
    uint256[] denominators;
    bool[] percentages;
  }

  struct Args {
    Token[] tokens;
    TokenType[] tokenTypes;
    uint256[] tokenIds;
    uint256[] values;
    uint256[] indices;
  }

  error InsufficientAllocation();
  error PercentageNotSupportedForNFTs();
  error InvalidDenominator();
  error TokenNotAllowed(Token token);

  /* -------------------------------------------------------------------------- */
  /* MODULE INTERFACE FUNCTIONS                                                 */
  /* -------------------------------------------------------------------------- */

  /// @inheritdoc IModule
  function moduleId() external pure override returns (string memory) {
    return "mutuals.direct-distribution-module.1.0.0";
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
  function aggregationParameters(Claim calldata claim, Token token, uint256 index) external pure override returns (uint256, uint256, bool) {
    Data memory data = abi.decode(claim.distributionData, (Data));

    if (data.tokens.length > 0) {
      if (index >= data.tokens.length || !(data.tokens[index].equals(token))){
        return (0, 0, false);
      }
    } else {
      index = 0;
    }

    if (data.values.length == 0 || index >= data.values.length) {
      return (0, 0, false);
    }

    if (data.percentages[index]) {
      if (data.denominators[index] == 0) {
        revert InvalidDenominator();
      }
      uint256 bps = Math.mulDiv(data.values[index], 10000, data.denominators[index]);
      return (0, bps, false);
    } else {
      return (data.values[index], 0, false);
    }
  }

  /// @inheritdoc IDistributionModule
  function totalAllocated(Claim calldata claim, Token token, uint256 index, uint256 totalReceived) external pure override returns (uint256) {
    Data memory data = abi.decode(claim.distributionData, (Data));

    if (data.tokens.length > 0) {
      if (index >= data.tokens.length || !(data.tokens[index].equals(token))) {
        return 0;
      }
    } else {
      index = 0;
    }

    if (data.values.length == 0 || index >= data.values.length) {
      return 0;
    }

    if (data.percentages[index]) {
      if (data.tokenTypes[index] == TokenType.ERC721) {
        revert PercentageNotSupportedForNFTs();
      }
      if (data.denominators[index] == 0) {
        revert InvalidDenominator();
      }
      return Math.mulDiv(totalReceived, data.values[index], data.denominators[index]);
    }
    return data.values[index];
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
        revert InsufficientAllocation();
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
    (Token[] memory tokens, uint256[] memory amounts) = abi.decode(dContext, (Token[], uint256[]));
    for (uint i = 0; i < tokens.length; i++) {
      claimed[msg.sender][claim.id][tokens[i]] += amounts[i];
    }
  }

  /**
  * Calculates allocations based on either a fixed absolute amount or a percentage of the pool's total historical inflow.
  * Deducts previously claimed amounts and respects optional user-defined request caps.
  * @dev Iterates over the requested tokens and applies an index-based allowlist verification.
  * @param claim The static claim struct containing the encoded `Data`.
  * @param dArgs The dynamically encoded `Args`.
  * @return instructions An array of `TransferInstruction` structs detailing the tokens, recipient, and exact amounts to transfer.
  */
  function _releasable(Claim calldata claim, bytes calldata dArgs) internal view returns (TransferInstruction[] memory) {
    Data memory data = abi.decode(claim.distributionData, (Data));
    Args memory args = abi.decode(dArgs, (Args));

    uint256 len = args.tokens.length;
    TransferInstruction[] memory instructions = new TransferInstruction[](len);

    for (uint i = 0; i < len; i++) {
      Token currentToken = args.tokens[i];
      uint256 index = args.indices[i];

      if (data.tokens.length > 0) {
        if (index >= data.tokens.length || !(data.tokens[index].equals(currentToken))) {
          revert TokenNotAllowed(currentToken);
        }
      } else {
        index = 0;
      }

      uint256 available;
      {
        uint256 maxAllocation;
        if (data.percentages[index]) {
          uint256 totalReceived = currentToken.balanceOf(args.tokenTypes[i], msg.sender) + IPool(msg.sender).totalReleased(Token.unwrap(currentToken), args.tokenIds[i]);
          maxAllocation = Math.mulDiv(totalReceived, data.values[index], data.denominators[index]);
        } else {
          maxAllocation = data.values[index];
        }

        uint256 cClaimed = claimed[msg.sender][claim.id][currentToken];
        available = maxAllocation > cClaimed ? maxAllocation - cClaimed : 0;
      }

      if (args.values[i] > 0 && args.values[i] < available) {
        available = args.values[i];
      }

      instructions[i] = TransferInstruction({
        tokenType: args.tokenTypes[i],
        token: currentToken,
        recipient: data.recipient,
        tokenId: args.tokenIds[i],
        amount: available,
        data: ""
      });
    }

    return instructions;
  }
}
