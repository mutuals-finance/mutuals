// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {IERC165} from "@openzeppelin/contracts/utils/introspection/IERC165.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {Math} from "@openzeppelin/contracts/utils/math/Math.sol";

import {IPool} from "../../interfaces/IPool.sol";
import {IDistributionModule} from "../../interfaces/IDistributionModule.sol";
import {Claim, TransferInstruction, TokenType, Token} from "../../types/Token.sol";
import {PreHookResult} from "../../types/PreHookResult.sol";
import {BaseModule} from "../BaseModule.sol";

/**
 * @title Direct Distribution Module
 * @notice Allows recipients to claim a fixed amount or a proportional share (percentage/shares) of the total pool inflow.
 * @dev Replaces the legacy 'DefaultAllocation' extension, utilizing OZ Math.mulDiv for overflow-safe precision.
 */
contract DirectDistributionModule is IDistributionModule, BaseModule {
  // State: Tracks how much has already been claimed per Pool -> Claim ID
  mapping(address => mapping(uint256 => uint256)) public alreadyClaimed;

  struct DirectConfig {
    TokenType tokenType;
    Token token;
    address recipient;
    uint256 tokenId; // Used for ERC721/1155
    uint256 value;   // Fixed amount OR the numerator (shares/percentage)
    uint256 denominator; // Used only if isPercentage is true (e.g., 10000 for BPS, 1e18 for WAD, or totalShares)
    bool isPercentage; // If true, calculates: (totalReceived * value) / denominator
  }

  error InsufficientAllocation();
  error PercentageNotSupportedForNFTs();
  error InvalidDenominator();

  // ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
  // ┃    Module interface functions    ┃
  // ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

  function moduleId() external pure override returns (string memory) {
    return "mutuals.direct-distribution-module.1.0.0";
  }

  function onInstall(bytes calldata /* data */) external override {}
  function onUninstall(bytes calldata /* data */) external override {}

  function supportsInterface(bytes4 interfaceId) public view virtual override(BaseModule, IERC165) returns (bool) {
    return interfaceId == type(IDistributionModule).interfaceId || super.supportsInterface(interfaceId);
  }

  // ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
  // ┃    Distribution functions        ┃
  // ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

  function releasable(Claim calldata claim, bytes calldata distributionArgs) external view override returns (TransferInstruction memory) {
    return _releasable(claim, distributionArgs);
  }

  function preDistributionHook(Claim calldata claim, bytes calldata distributionArgs) external override returns (PreHookResult memory) {
    TransferInstruction memory inst = _releasable(claim, distributionArgs);

    if (inst.amount == 0 && inst.tokenId == 0 && inst.tokenType != TokenType.ERC721) {
      revert InsufficientAllocation();
    }

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
    DirectConfig memory config = abi.decode(claim.distributorData, (DirectConfig));

    uint256 maxAllocation;

    if (config.isPercentage) {
      if (config.tokenType == TokenType.ERC721) revert PercentageNotSupportedForNFTs();
      if (config.denominator == 0) revert InvalidDenominator();

      // Calculate Total Historical Inflow: Current Balance + Everything the pool has ever released
      uint256 currentBalance = _getPoolBalance(msg.sender, config.token, config.tokenType);
      uint256 historicalReleased = IPool(msg.sender).totalReleased(Token.unwrap(config.token));
      uint256 totalReceived = currentBalance + historicalReleased;

      // Safe, high-precision calculation: (totalReceived * value) / denominator
      maxAllocation = Math.mulDiv(totalReceived, config.value, config.denominator);
    } else {
      maxAllocation = config.value;
    }

    uint256 claimed = alreadyClaimed[msg.sender][claim.id];
    uint256 available = maxAllocation > claimed ? maxAllocation - claimed : 0;

    // Optional: User can request a smaller, partial claim
    if (distributionArgs.length > 0 && available > 0) {
      uint256 requestedAmount = abi.decode(distributionArgs, (uint256));
      if (requestedAmount > 0 && requestedAmount < available) {
        available = requestedAmount;
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

  function _getPoolBalance(address pool, Token token, TokenType tokenType) internal view returns (uint256) {
    if (tokenType == TokenType.NATIVE) {
      return pool.balance;
    } else if (tokenType == TokenType.ERC20) {
      return IERC20(Token.unwrap(token)).balanceOf(pool);
    }
    return 0;
  }
}
