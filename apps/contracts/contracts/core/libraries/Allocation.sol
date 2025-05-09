// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import { IPool } from "../interfaces/IPool.sol";
import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 * @title Allocation
 * @notice Library for managing fixed and percentage-based allocations
 */
library Allocation {
    // Container for allocation state
    struct State {
        mapping(address => uint256) totalReleased;
        mapping(address => mapping(uint160 => uint256)) released;
    }

    address private constant NATIVE_TOKEN = 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE;
    uint256 private constant PERCENTAGE_BASE = 10 ** 18;
    uint256 private constant HUNDRED_PERCENT = 100 * PERCENTAGE_BASE;

    /**
     * @notice Returns the total token balance of the smart contract.
     * @param token The token to get the balance of. Either native or erc20.
     * @return balance The token balance in the smart contract.
     */
    function balanceOf(address token) internal view returns (uint256 balance) {
        if (token == NATIVE_TOKEN) {
            return address(this).balance;
        } else {
            return IERC20(token).balanceOf(address(this));
        }
    }

    /**
     * @notice Returns the total amount released for a specific token.
     * @param claim The claim object containing recipient and token information.
     * @return totalReleased The total released amount for the token.
     */
    function totalReceived(State storage self, IPool.Claim calldata claim) internal view returns (uint256 totalReleased) {
        return balanceOf(claim.token) + self.totalReleased[claim.token];
    }

    /**
     * @notice Calculates the actual amount based on allocation of native or erc20 token
     * @param recipientId The recipient identifier
     * @param token The token address
     * @param totalAmount The total amount available
     * @return The calculated allocation amount
     */
    function releasable(State storage self, IPool.Claim calldata claim) internal view returns (uint256) {
        if (claim.isPercentage) {
            return (self.totalReceived(claim) * claim.value) / HUNDRED_PERCENT - self.released[claim.token][claim.recipient];
        } else {
            return claim.value;
        }
    }

    /**
     * @notice Updates the new amount based on a previous state change of native or erc20 token
     * @param recipientId The recipient identifier
     * @param releasedAmount The released amount to update
     */
    function update(State storage self, IPool.Claim calldata claim, uint256 releasedAmount) internal {
        self.released[claim.token][claim.recipient] += releasedAmount;
        self.totalReleased[claim.token] += releasedAmount;
    }
}
