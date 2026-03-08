// SPDX-License-Identifier: MIT
pragma solidity ^0.8.29;

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
 * @notice Allows recipients to claim a fixed amount or a proportional share of the total pool inflow.
 */
contract DirectDistributionModule is IDistributionModule, BaseModule {

  /* -------------------------------------------------------------------------- */
  /* STATE VARIABLES & STRUCTS                                                  */
  /* -------------------------------------------------------------------------- */

  mapping(address => mapping(uint256 => uint256)) public alreadyClaimed;

  struct Config {
    TokenType tokenType;
    Token token;
    address recipient;
    uint256 tokenId;
    uint256 value;
    uint256 denominator;
    bool isPercentage;
  }

  error InsufficientAllocation();
  error PercentageNotSupportedForNFTs();
  error InvalidDenominator();

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
  function aggregationParameters(Claim calldata claim) external pure override returns (uint256, uint256, bool) {
    Config memory config = abi.decode(claim.distributorData, (Config));
    if (config.isPercentage) {
      if (config.denominator == 0) revert InvalidDenominator();
      uint256 bps = Math.mulDiv(config.value, 10000, config.denominator);
      return (0, bps, false);
    } else {
      return (config.value, 0, false);
    }
  }

  /// @inheritdoc IDistributionModule
  function totalAllocated(Claim calldata claim, uint256 totalPoolInflow) external pure override returns (uint256) {
    Config memory config = abi.decode(claim.distributorData, (Config));
    if (config.isPercentage) {
      if (config.tokenType == TokenType.ERC721) revert PercentageNotSupportedForNFTs();
      if (config.denominator == 0) revert InvalidDenominator();
      return Math.mulDiv(totalPoolInflow, config.value, config.denominator);
    }
    return config.value;
  }

  /* -------------------------------------------------------------------------- */
  /* DISTRIBUTION FUNCTIONS                                                     */
  /* -------------------------------------------------------------------------- */

  /// @inheritdoc IDistributionModule
  function releasable(Claim calldata claim, bytes calldata distributionArgs) external view override returns (TransferInstruction memory) {
    return _releasable(claim, distributionArgs);
  }

  /// @inheritdoc IDistributionModule
  function preDistributionHook(Claim calldata claim, bytes calldata distributionArgs) external override returns (PreHookResult memory) {
    TransferInstruction memory inst = _releasable(claim, distributionArgs);

    if (inst.amount == 0 && inst.tokenId == 0 && inst.tokenType != TokenType.ERC721) {
      revert InsufficientAllocation();
    }

    return PreHookResult({
      instruction: inst,
      postHookContext: abi.encode(inst.amount),
      requiresPostHook: true
    });
  }

  /// @inheritdoc IDistributionModule
  function postDistributionHook(Claim calldata claim, bytes calldata distributionContext) external override {
    uint256 claimedNow = abi.decode(distributionContext, (uint256));
    alreadyClaimed[msg.sender][claim.id] += claimedNow;
  }

  /* -------------------------------------------------------------------------- */
  /* INTERNAL LOGIC                                                             */
  /* -------------------------------------------------------------------------- */

  function _releasable(Claim calldata claim, bytes calldata distributionArgs) internal view returns (TransferInstruction memory) {
    Config memory config = abi.decode(claim.distributorData, (Config));

    uint256 maxAllocation;

    if (config.isPercentage) {
      uint256 currentBalance = _poolBalance(msg.sender, config.token, config.tokenType);
      uint256 historicalReleased = IPool(msg.sender).totalReleased(Token.unwrap(config.token));
      uint256 totalReceived = currentBalance + historicalReleased;

      maxAllocation = Math.mulDiv(totalReceived, config.value, config.denominator);
    } else {
      maxAllocation = config.value;
    }

    uint256 claimed = alreadyClaimed[msg.sender][claim.id];
    uint256 available = maxAllocation > claimed ? maxAllocation - claimed : 0;

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

  function _poolBalance(address pool, Token token, TokenType tokenType) internal view returns (uint256) {
    if (tokenType == TokenType.NATIVE) {
      return pool.balance;
    } else if (tokenType == TokenType.ERC20) {
      return IERC20(Token.unwrap(token)).balanceOf(pool);
    }
    return 0;
  }
}
