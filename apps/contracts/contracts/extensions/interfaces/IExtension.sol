// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { Claim } from "../../core/types/Claim.sol";
import { WithdrawParams } from "../../core/types/WithdrawParams.sol";

interface IExtension {
    function extensionId() external view override returns (uint256);
    function extensionName() external view override returns (string);
    function beforeInitialize(address sender) external;
    function afterInitialize(address sender) external;
    function checkState(Claim calldata claim, WithdrawParams calldata params) external;
    function checkBatchState(Claim[] calldata claims, WithdrawParams[] calldata params) external;
    function releasable(Claim calldata claim, WithdrawParams calldata params) external returns (uint256);
    function beforeWithdraw(Claim calldata claim, WithdrawParams calldata params) external;
    function beforeBatchWithdraw(Claim[] calldata claims, WithdrawParams[] calldata params) external;
    function afterWithdraw(Claim calldata claim, WithdrawParams calldata params) external;
    function afterBatchWithdraw(Claim[] calldata claims, WithdrawParams[] calldata params) external;
    function beforeDonate(Claim calldata claim, WithdrawParams calldata params) external;
    function afterDonate(Claim calldata claim, WithdrawParams calldata params) external;
}
