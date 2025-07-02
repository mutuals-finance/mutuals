// SPDX-License-Identifier: MIT
pragma solidity ^0.8.29;

import { Claim } from "../../pool/types/Claim.sol";
import { WithdrawParams } from "../../pool/types/WithdrawParams.sol";

interface IExtension {
    function extensionId() external view returns (bytes32);
    function extensionName() external view returns (string memory);
    function beforeInitialize(bytes calldata data) external;
    function afterInitialize(bytes calldata data) external;
    function beforeInitializePool(bytes calldata data) external;
    function afterInitializePool(bytes calldata data) external;
    function checkState(Claim calldata claim, WithdrawParams calldata params) external view;
    function checkBatchState(Claim[] calldata claims, WithdrawParams[] calldata params) external view;
    function releasable(Claim calldata claim, WithdrawParams calldata params) external view returns (uint256);
    function beforeWithdraw(Claim calldata claim, WithdrawParams calldata params) external;
    function beforeBatchWithdraw(Claim[] calldata claims, WithdrawParams[] calldata params) external;
    function afterWithdraw(Claim calldata claim, WithdrawParams calldata params) external;
    function afterBatchWithdraw(Claim[] calldata claims, WithdrawParams[] calldata params) external;
}
