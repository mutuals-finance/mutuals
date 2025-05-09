// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import { ExtensionInteraction } from "./libraries/Hooks.sol";
import { IPool } from "./interfaces/IPool.sol";
import { OwnableUpgradeable } from "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import { PausableUpgradeable } from "@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol";
import { Extensions } from "./libraries/Extensions.sol";

contract Pool is OwnableUpgradeable, PausableUpgradeable {
    using Extensions for *;

    /* -------------------------------------------------------------------------- */
    /*                                   EVENTS                                   */
    /* -------------------------------------------------------------------------- */

    event Withdraw(address indexed recipient, address indexed token, uint256 amount);

    /* -------------------------------------------------------------------------- */
    /*                            STORAGE                                         */
    /* -------------------------------------------------------------------------- */
    Extensions internal extensions;

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

    function releasable(IPool.Claim claim, IPool.WithdrawParams[] params) external {
        return extensions.releasable(claim, params);
    }

    function batchReleasable(
        IPool.Claim[] calldata claims,
        IPool.WithdrawParams[][] calldata params,
        bytes calldata context
    ) external {
        return extensions.batchReleasable(claims, params, context);
    }

    /**
     * @notice Withdraws token from the pool for recipient.
     * @param recipient The address whose tokens are withdrawn.
     * @param token The address of the token to be withdrawn.
     * @param request The withdraw request to perform proof verification.
     */
    function withdraw(IPool.Claim claim, IPool.WithdrawParams[] calldata params) external whenNotPaused {
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
    function batchWithdraw(
        IPool.Claim[] calldata claims,
        IPool.WithdrawParams[] calldata params,
        bytes calldata context
    ) external whenNotPaused {
        extensions.beforeBatchWithdraw(claims, params, context);
        _withdraw(claims, params);
        extensions.afterBatchWithdraw(claims, params, context);
    }

    /* -------------------------------------------------------------------------- */
    /*                              INTERNAL/PRIVATE                              */
    /* -------------------------------------------------------------------------- */

    function _withdraw(IPool.Claim calldata claim, IPool.WithdrawParams[] calldata params) internal {
        // token.transfer(owner, amount);
        // emit Withdraw(owner, token, amount);
    }

    function _batchWithdraw(IPool.Claim[] calldata claims, IPool.WithdrawParams[][] calldata params) internal {
        // token.transfer(owner, amount);
        // emit Withdraw(owner, token, amount);
    }
}
