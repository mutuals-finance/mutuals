// SPDX-License-Identifier: MIT

pragma solidity ^0.8.22;

import { Claim } from "../types/Claim.sol";
import { WithdrawParams } from "../types/WithdrawParams.sol";
import { Token } from "../types/Token.sol";

interface IPool {
    /* -------------------------------------------------------------------------- */
    /*                                   EVENTS                                   */
    /* -------------------------------------------------------------------------- */

    event Withdraw(address indexed recipient, address indexed token, uint256 amount);

    /* -------------------------------------------------------------------------- */
    /*                                   ERRORS                                   */
    /* -------------------------------------------------------------------------- */

    /// @notice Throws when the balance of the actor is insufficient
    error Pool_InvalidRecipient();

    /* -------------------------------------------------------------------------- */
    /*                             EXTERNAL FUNCTIONS                             */
    /* -------------------------------------------------------------------------- */

    function pause() external;

    function unpause() external;

    function totalReceived(Token token) external view returns (uint256);

    function totalReleased(Token token) external view returns (uint256);

    function released(uint256 claimId, Token token) external view returns (uint256);

    function releasable(Claim calldata claim, WithdrawParams calldata params) external view returns (uint256);

    // function batchReleasable(Claim[] calldata claims, WithdrawParams[] calldata params) external view returns (uint256);

    function withdraw(Claim calldata claim, WithdrawParams calldata params) external;

    function batchWithdraw(Claim[] calldata claims, WithdrawParams[] calldata params) external;
}
