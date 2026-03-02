// SPDX-License-Identifier: MIT
pragma solidity ^0.8.29;

import {IERC165} from "@openzeppelin/contracts/utils/introspection/IERC165.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {IERC721} from "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import {IERC1155} from "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";

import {IDistributionModule} from "../../interfaces/IDistributionModule.sol";
import {Claim, TransferInstruction, TokenType, Token} from "../../types/Token.sol";
import {PreHookResult} from "../../types/PreHookResult.sol";
import {BaseModule} from "../BaseModule.sol";

/**
 * @title Token Limit Distribution Module
 * @notice Requires the recipient to hold a specific external token balance to unlock claims.
 */
contract TokenLimitDistributionModule is IDistributionModule, BaseModule {
  mapping(address => mapping(uint256 => uint256)) public alreadyClaimed;

  struct TokenLimitConfig {
    TokenType gateTokenType;
    Token gateToken;
    uint256 gateTokenId; // Used for ERC721/1155
    uint256 threshold;
  }

  struct GatedClaimConfig {
    TokenType tokenType;
    Token token;
    address recipient;
    uint256 tokenId;
    uint256 maxAllocation;
    TokenLimitConfig gate;
  }

  error GateRequirementNotMet();
  error UnsupportedGateToken();

  function moduleId() external pure override returns (string memory) {
    return "mutuals.token-limit-distribution-module.1.0.0";
  }

  function onInstall(bytes calldata /* data */) external override {}
  function onUninstall(bytes calldata /* data */) external override {}

  function supportsInterface(bytes4 interfaceId) public view virtual override(BaseModule, IERC165) returns (bool) {
    return interfaceId == type(IDistributionModule).interfaceId || super.supportsInterface(interfaceId);
  }

  function releasable(Claim calldata claim, bytes calldata distributionArgs) external view override returns (TransferInstruction memory) {
    return _releasable(claim, distributionArgs);
  }

  function preDistributionHook(Claim calldata claim, bytes calldata distributionArgs) external override returns (PreHookResult memory) {
    TransferInstruction memory inst = _releasable(claim, distributionArgs);

    if (inst.amount == 0 && inst.tokenId == 0) revert GateRequirementNotMet();

    bytes memory context = abi.encode(inst.amount);

    return PreHookResult({
      instruction: inst,
      postHookContext: context,
      requiresPostHook: true
    });
  }

  function postDistributionHook(Claim calldata claim, bytes calldata distributionContext) external override {
    uint256 claimedNow = abi.decode(distributionContext, (uint256));
    alreadyClaimed[msg.sender][claim.id] += claimedNow;
  }

  function _releasable(Claim calldata claim, bytes calldata distributionArgs) internal view returns (TransferInstruction memory) {
    GatedClaimConfig memory config = abi.decode(claim.distributorData, (GatedClaimConfig));

    // 1. Check the Gate Balance
    uint256 userBalance = _getGateBalance(config.gate, config.recipient);

    uint256 available = 0;
    if (userBalance >= config.gate.threshold) {
      // 2. Calculate remaining allocation
      uint256 claimed = alreadyClaimed[msg.sender][claim.id];
      available = config.maxAllocation > claimed ? config.maxAllocation - claimed : 0;

      if (distributionArgs.length > 0 && available > 0) {
        uint256 requestedAmount = abi.decode(distributionArgs, (uint256));
        if (requestedAmount > 0 && requestedAmount < available) {
          available = requestedAmount;
        }
      }
    }

    return TransferInstruction({
      tokenType: config.tokenType,
      token: config.token,
      recipient: config.recipient,
      tokenId: config.tokenId,
      amount: available,
      data: ""
    });
  }

  function _getGateBalance(TokenLimitConfig memory gate, address user) internal view returns (uint256) {
    if (gate.gateTokenType == TokenType.ERC20) {
      return IERC20(Token.unwrap(gate.gateToken)).balanceOf(user);
    } else if (gate.gateTokenType == TokenType.ERC721) {
      return IERC721(Token.unwrap(gate.gateToken)).balanceOf(user);
    } else if (gate.gateTokenType == TokenType.ERC1155) {
      return IERC1155(Token.unwrap(gate.gateToken)).balanceOf(user, gate.gateTokenId);
    } else if (gate.gateTokenType == TokenType.NATIVE) {
      return user.balance;
    }
    revert UnsupportedGateToken();
  }
}
