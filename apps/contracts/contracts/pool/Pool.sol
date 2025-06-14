// SPDX-License-Identifier: MIT

pragma solidity ^0.8.22;

import { Claim } from "./types/Claim.sol";
import { Token } from "./types/Token.sol";
import { WithdrawParams } from "./types/WithdrawParams.sol";
import { Extensions } from "./libraries/Extensions.sol";
import { IPool } from "./interfaces/IPool.sol";
import "hardhat/console.sol";

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
    function __Pool_init(
        address _initialOwner,
        address _registry,
        bytes32[] calldata _extensions,
        bytes[] calldata _data
    ) external initializer {
        __Context_init_unchained();
        __Ownable_init_unchained(_initialOwner);
        __Pausable_init_unchained();
        __Pool_init_unchained(_registry, _extensions, _data);
    }

    /**
     * @dev Initializes only the contract specific storage.
     */
    /// @custom:oz-upgrades-unsafe-allow missing-initializer-call
    function __Pool_init_unchained(
        address _registry,
        bytes32[] calldata _extensions,
        bytes[] calldata _data
    ) internal onlyInitializing {
        uint256 i;
        extensions.initialize(_registry);
        for (; i < _extensions.length; i++) {
            extensions.beforeInitializePool(_extensions[i], _data[i]);
        }
        for (i = 0; i < _extensions.length; i++) {
            extensions.afterInitializePool(_extensions[i], _data[i]);
        }
    }

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

    function withdraw(Claim calldata claim, WithdrawParams calldata params) external whenNotPaused {
        extensions.checkState(claim, params);
        extensions.beforeWithdraw(claim, params);
        if (claim.recipient == address(0)) {
            revert Pool_InvalidRecipient();
        }

        _released[params.token][claim.id] += params.amount;
        _totalReleased[params.token] += params.amount;
        params.token.transfer(claim.recipient, params.amount);

        emit Withdrawal(claim.recipient, params.token, params.amount);
        extensions.afterWithdraw(claim, params);
    }

    function batchWithdraw(Claim[] calldata claims, WithdrawParams[] calldata params) external whenNotPaused {
        extensions.checkBatchState(claims, params);
        extensions.beforeBatchWithdraw(claims, params);
        uint256 amount;
        for (uint256 i = claims.length - 1; i > 0; i--) {
            if (params[0].token.equals(params[i].token)) {
                amount += params[i].amount;
            }
        }

        _released[params[0].token][claims[claims.length - 1].id] += amount;
        _totalReleased[params[0].token] += amount;

        params[0].token.transfer(claims[claims.length - 1].recipient, amount);
        // emit BatchWithdraw(claim, params);
        extensions.afterBatchWithdraw(claims, params);
    }

    receive() external payable  {}
}
