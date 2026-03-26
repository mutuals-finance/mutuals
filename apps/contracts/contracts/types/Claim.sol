// SPDX-License-Identifier: MIT
pragma solidity ^0.8.29;

struct Claim {
  uint256 id;
  uint256 parentId;
  address validationModule;
  bytes validationData;
  address distributionModule;
  bytes distributionData;
}
