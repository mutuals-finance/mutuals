// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

using ClaimLibrary for Claim global;

/// @notice Parameter struct for `Claim`
struct Claim {
    // claim id
    uint256 id;
    // parent claim id
    uint256 parentId;
    // claim recipient
    address recipient;
    // allocated value
    uint256 value;
    // state id
    bytes32 stateId;
    // state extension specific data
    bytes stateData;
    // strategy id
    bytes32 strategyId;
    // strategy extension specific data
    bytes strategyData;
}

library ClaimLibrary {
    function hash(Claim calldata self) internal pure returns (bytes32) {
        return
            keccak256(
                abi.encode(
                    self.id,
                    self.parentId,
                    self.recipient,
                    self.value,
                    self.stateId,
                    self.stateData,
                    self.strategyId,
                    self.strategyData
                )
            );
    }

    function isPercentage(Claim calldata self) internal pure returns (bool) {
        return self.strategyId == bytes32(0);
    }

    function equals(Claim calldata self, Claim storage claim) internal view returns (bool) {
        if (self.id != claim.id) return false;
        if (self.parentId != claim.parentId) return false;
        if (self.recipient != claim.recipient) return false;
        if (self.value != claim.value) return false;
        if (self.stateId != claim.stateId) return false;
        //if (self.stateData != claim.stateData) return false;
        if (self.strategyId != claim.strategyId) return false;
        //if (self.strategyData != claim.strategyData) return false;
        return true;
    }
}
