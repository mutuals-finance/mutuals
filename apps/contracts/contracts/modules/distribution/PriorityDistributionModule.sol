// SPDX-License-Identifier: MIT
pragma solidity ^0.8.29;

import {IERC165} from "@openzeppelin/contracts/utils/introspection/IERC165.sol";
import {IModule} from "../../interfaces/IModule.sol";
import {IDistributionModule} from "../../interfaces/IDistributionModule.sol";
import {Claim, TransferInstruction, TokenType, Token} from "../../types/Token.sol";
import {PreHookResult} from "../../types/PreHookResult.sol";
import {BaseModule} from "../BaseModule.sol";

/**
 * @title Priority Distribution Module
 * @notice Enforces waterfall/priority logic based on previous claims.
 */
contract PriorityDistributionModule is IDistributionModule, BaseModule {

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
    uint256[] maxAllocations;
    Claim previousClaim;
    uint256[] thresholds;
  }

  struct Args {
    Token[] tokens;
    TokenType[] tokenTypes;
    uint256[] tokenIds;
    uint256[] values;
    uint256[] indices;
  }

  error PriorityConditionNotMet(Token token);
  error TokenNotAllowed(Token token);

  /* -------------------------------------------------------------------------- */
  /* MODULE INTERFACE FUNCTIONS                                                 */
  /* -------------------------------------------------------------------------- */

  /// @inheritdoc IModule
  function moduleId() external pure override returns (string memory) {
    return "mutuals.priority-distribution-module.1.0.0";
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
      if (index >= data.tokens.length || !(data.tokens[index].equals(token))) {
        return (0, 0, false);
      }
    } else {
      index = 0;
    }
    if (data.maxAllocations.length == 0 || index >= data.maxAllocations.length) {
      return (0, 0, false);
    }
    return (data.maxAllocations[index], 0, false);
  }

  /// @inheritdoc IDistributionModule
  function totalAllocated(Claim calldata claim, Token token, uint256 index, uint256 /* totalReceived */) external pure override returns (uint256) {
    Data memory data = abi.decode(claim.distributionData, (Data));
    if (data.tokens.length > 0) {
      if (index >= data.tokens.length || !(data.tokens[index].equals(token))) {
        return 0;
      }
    } else {
      index = 0;
    }
    if (data.maxAllocations.length == 0 || index >= data.maxAllocations.length) {
      return 0;
    }
    return data.maxAllocations[index];
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
        revert PriorityConditionNotMet(instructions[i].token);
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

    TransferInstruction[] memory prevInstructions = IDistributionModule(data.previousClaim.distributionModule)
      .releasable(data.previousClaim, "");

    TransferInstruction[] memory instructions = new TransferInstruction[](args.tokens.length);

    for (uint i = 0; i < args.tokens.length; i++) {
      uint256 index = args.indices[i];

      if (data.tokens.length > 0) {
        if (index >= data.tokens.length || (!data.tokens[index].equals(args.tokens[i]))){
          revert TokenNotAllowed(args.tokens[i]);
        }
      } else {
        index = 0;
      }

      uint256 prevAmountForToken = 0;
      for (uint j = 0; j < prevInstructions.length; j++) {
        if (Token.unwrap(prevInstructions[j].token) == Token.unwrap(args.tokens[i])) {
          prevAmountForToken += prevInstructions[j].amount;
        }
      }

      if (prevAmountForToken <= data.thresholds[index]) {
        instructions[i] = TransferInstruction({
          tokenType: args.tokenTypes[i],
          token: args.tokens[i],
          recipient: data.recipient,
          tokenId: args.tokenIds[i],
          amount: 0,
          data: ""
        });
        continue;
      }

      uint256 available;
      {
        uint256 cClaimed = claimed[msg.sender][claim.id][args.tokens[i]];
        available = data.maxAllocations[index] > cClaimed ? data.maxAllocations[index] - cClaimed : 0;
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
}
