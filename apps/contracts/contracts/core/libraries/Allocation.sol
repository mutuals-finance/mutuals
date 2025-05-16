// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import { IPool } from "../interfaces/IPool.sol";
import { Claim } from "../types/Claim.sol";
import { WithdrawParams } from "../types/WithdrawParams.sol";

/**
 * @title Allocation
 * @notice Library for managing fixed and percentage-based allocations
 */
library Allocation {
    uint256 public constant PRECISION = 10_000;

    // Container for allocation state
    struct State {
        IPool pool;
    }

    /**
     * @dev Initialization of library
     * @param pool - address of the pool contract
     */
    function initialize(State storage self, IPool pool) public virtual {
        self.pool = pool;
    }

    /**
     * @notice Calculates the actual amount based on allocation of native or erc20 token
     * @param recipientId The recipient identifier
     * @param token The token address
     * @param totalAmount The total amount available
     * @return The calculated allocation amount
     */
    function releasable(
        State storage self,
        Claim calldata claim,
        WithdrawParams calldata params
    ) internal view returns (uint256) {
        if (claim.isPercentage()) {
            return (self.pool.totalReceived()) / PRECISION - self.pool.released(params.token, claim.recipient);
        } else {
            return claim.value;
        }
    }
}
