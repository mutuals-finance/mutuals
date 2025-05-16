// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import { IPool } from "./interfaces/IPool.sol";
import { Extensions } from "./libraries/Extensions.sol";
import { Claim } from "./types/Claim.sol";
import { WithdrawParams } from "./types/WithdrawParams.sol";

import { OwnableUpgradeable } from "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import { PausableUpgradeable } from "@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol";

contract Pool is OwnableUpgradeable, PausableUpgradeable {
    using Extensions for Extensions.State;

    /* -------------------------------------------------------------------------- */
    /*                                   EVENTS                                   */
    /* -------------------------------------------------------------------------- */

    event Withdraw(address indexed recipient, address indexed token, uint256 amount);

    /* -------------------------------------------------------------------------- */
    /*                            STORAGE                                         */
    /* -------------------------------------------------------------------------- */
    Extensions.State internal extensions;

    // token -> released amount
    mapping(Token => uint256) totalReleased;
    // token -> claim id -> released amount
    mapping(Token => mapping(bytes32 => uint256)) released;

    /* -------------------------------------------------------------------------- */
    /*                             INITIALIZATION                             */
    /* -------------------------------------------------------------------------- */

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    /**
     * @dev Initializes the contract and its extended storage.
     */
    function __Pool_init(address _initialOwner, bytes32 _allocationRoot) external initializer {
        __Context_init_unchained();
        __Ownable_init_unchained(_initialOwner);
        __Pausable_init_unchained();
    }

    /**
     * @dev Initializes only the contract specific storage.
     */
    function __Pool_init_unchained(bytes32 _allocationRoot) internal onlyInitializing {}

    /* -------------------------------------------------------------------------- */
    /*                             EXTERNAL FUNCTIONS                             */
    /* -------------------------------------------------------------------------- */

    function pause() external onlyOwner {
        _pause();
    }

    function unpause() external onlyOwner {
        _unpause();
    }

    /**
     * @notice Returns the total amount received for a specific token.
     * @param claim The claim object containing recipient and token information.
     * @return totalReleased The total released amount for the token.
     */
    function totalReceived(Token token) external view returns (uint256) {
        return token.balanceOfSelf() + totalReleased[token];
    }

    /**
     * @notice Returns the total amount released for a specific token.
     * @param claim The claim object containing recipient and token information.
     * @return totalReleased The total released amount for the token.
     */
    function totalReleased(Token token) external view returns (uint256) {
        return totalReleased[token];
    }

    /**
     * @notice Returns the total amount released for a specific token.
     * @param claim The claim object containing recipient and token information.
     * @return totalReleased The total released amount for the token.
     */
    function released(uint256 claimId, Token token) external view returns (uint256) {
        return released[token][claimId];
    }

    function releasable(Claim calldata claim, WithdrawParams params) external {
        return extensions.releasable(claim, params);
    }

    function batchReleasable(Claim[] calldata claims, WithdrawParams[] calldata params) external {
        return extensions.batchReleasable(claims, params);
    }

    /**
     * @notice Withdraws token from the pool for recipient.
     * @param recipient The address whose tokens are withdrawn.
     * @param token The address of the token to be withdrawn.
     * @param request The withdraw request to perform proof verification.
     */
    function withdraw(Claim claim, WithdrawParams calldata params) external whenNotPaused {
        extensions.checkState(claim, params);
        extensions.beforeWithdraw(claim, params);
        _withdraw(claim, params);
        extensions.afterWithdraw(claim, params);
    }

    /**
     * @notice Withdraws token from the pool for recipient.
     * @param recipient The address whose tokens are withdrawn.
     * @param token The address of the token to be withdrawn.
     * @param request The withdraw request to perform proof verification.
     */
    function batchWithdraw(Claim[] calldata claims, WithdrawParams[] calldata params) external whenNotPaused {
        extensions.checkBatchState(claims, params);
        extensions.beforeBatchWithdraw(claims, params);
        _batchWithdraw(claims, params);
        extensions.afterBatchWithdraw(claims, params);
    }

    /* -------------------------------------------------------------------------- */
    /*                              INTERNAL/PRIVATE                              */
    /* -------------------------------------------------------------------------- */

    function _withdraw(Claim calldata claim, WithdrawParams calldata params) internal {
        if (claim.recipient == address(0)) {
            revert Pool_InvalidRecipient();
        }
        released[params.token][claim.recipient] += params.amount;
        totalReleased[params.token] += params.amount;
        params.token.transfer(claim.recipient, params.amount);

        emit Withdraw(claim, params);
    }

    function _batchWithdraw(Claim[] calldata claims, WithdrawParams[] calldata params) internal {
        uint256 amount;
        for (uint256 i = claims.length - 1; i > 0; i--) {
            amount += params[i].amount;
        }

        released[params[0].token][claims[claims.length - 1].recipient] += amount;
        totalReleased[params[0].token] += amount;

        params[0].token.transfer(claims[claims.length - 1].recipient, amount);

        emit BatchWithdraw(claims, params);
    }
}
