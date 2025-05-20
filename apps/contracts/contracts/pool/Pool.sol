// SPDX-License-Identifier: MIT

pragma solidity ^0.8.22;

import { Claim } from "./types/Claim.sol";
import { Extensions } from "./libraries/Extensions.sol";
import { IPool } from "./interfaces/IPool.sol";
import { Token } from "./types/Token.sol";
import { WithdrawParams } from "./types/WithdrawParams.sol";

import { OwnableUpgradeable } from "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import { PausableUpgradeable } from "@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol";

contract Pool is IPool, OwnableUpgradeable, PausableUpgradeable {
    using Extensions for Extensions.State;

    /* -------------------------------------------------------------------------- */
    /*                            STORAGE                                         */
    /* -------------------------------------------------------------------------- */
    Extensions.State internal extensions;

    // token -> released amount
    mapping(Token => uint256) _totalReleased;
    // token -> claim id -> released amount
    mapping(Token => mapping(uint256 => uint256)) _released;

    /* -------------------------------------------------------------------------- */
    /*                             INITIALIZATION                             */
    /* -------------------------------------------------------------------------- */

    /**
     * @dev Initializes the contract and its extended storage.
     */
    function __Pool_init(address _initialOwner, bytes32 _allocationRoot) external initializer {
        __Context_init_unchained();
        __Ownable_init_unchained(_initialOwner);
        __Pausable_init_unchained();
        __Pool_init_unchained(_allocationRoot);
    }

    /**
     * @dev Initializes only the contract specific storage.
     */
    /// @custom:oz-upgrades-unsafe-allow missing-initializer-call
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

    function totalReceived(Token token) external view returns (uint256) {
        return token.balanceOfSelf() + _totalReleased[token];
    }

    function totalReleased(Token token) external view returns (uint256) {
        return _totalReleased[token];
    }

    function released(uint256 claimId, Token token) external view returns (uint256) {
        return _released[token][claimId];
    }

    function releasable(Claim calldata claim, WithdrawParams calldata params) external view returns (uint256) {
        return extensions.releasable(claim, params);
    }

    //function batchReleasable(Claim[] calldata claims, WithdrawParams[] calldata params) external view returns (uint256) {
    //    return extensions.batchReleasable(claims, params);
    //}

    function withdraw(Claim calldata claim, WithdrawParams calldata params) external whenNotPaused {
        extensions.checkState(claim, params);
        extensions.beforeWithdraw(claim, params);
        _withdraw(claim, params);
        extensions.afterWithdraw(claim, params);
    }

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
        _released[params.token][claim.id] += params.amount;
        _totalReleased[params.token] += params.amount;
        params.token.transfer(claim.recipient, params.amount);

        // emit Withdraw(claim, params);
    }

    function _batchWithdraw(Claim[] calldata claims, WithdrawParams[] calldata params) internal {
        uint256 amount;
        for (uint256 i = claims.length - 1; i > 0; i--) {
            amount += params[i].amount;
        }

        _released[params[0].token][claims[claims.length - 1].id] += amount;
        _totalReleased[params[0].token] += amount;

        params[0].token.transfer(claims[claims.length - 1].recipient, amount);

        // emit BatchWithdraw(claims, params);
    }
}
