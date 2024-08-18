// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import { Currency } from "./libraries/Currency.sol";
import { PoolLib } from "./libraries/PoolLib.sol";
import { Allocation } from "./libraries/Allocation.sol";
import { MerkleTree } from "./libraries/MerkleTree.sol";
import { OwnableUpgradeable } from "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import { PausableUpgradeable } from "@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol";

contract Pool is OwnableUpgradeable, PausableUpgradeable {
    using Currency for address;
    using PoolLib for PoolLib.Data;

    /* -------------------------------------------------------------------------- */
    /*                                   EVENTS                                   */
    /* -------------------------------------------------------------------------- */

    event AllocationUpdated(bytes32 indexed oldAllocationRoot, bytes32 indexed newAllocationRoot);
    event Withdraw(address indexed recipient, address indexed token, uint256 amount);

    /* -------------------------------------------------------------------------- */
    /*                            STORAGE                                         */
    /* -------------------------------------------------------------------------- */

    /**
     * @dev Allocation data
     */
    PoolLib.Data internal pool;

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
        __Pool_init_unchained(_allocationRoot);
    }

    /**
     * @dev Initializes only the contract specific storage.
     */
    function __Pool_init_unchained(bytes32 _allocationRoot) internal onlyInitializing {
        pool.initialize(_allocationRoot);
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

    /**
     * @notice Withdraws token from the pool for recipient.
     * @param recipient The address whose tokens are withdrawn.
     * @param token The address of the token to be withdrawn.
     * @param request The withdraw request to perform proof verification.
     */
    function withdraw(
        address recipient,
        address token,
        PoolLib.WithdrawRequest calldata request
    ) external whenNotPaused returns (bool) {
        uint256 totalAmount = pool.verifyWithdraw(recipient, token, request);
        _withdraw(recipient, token, totalAmount);
        return true;
    }

    /**
     * @notice Updates the pool allocation.
     * @dev Only the owner can call this function.
     * @param _newAllocationRoot The new allocation merkle tree root.
     */
    function setAllocation(bytes32 _newAllocationRoot) external onlyOwner {
        bytes32 oldAllocationRoot = pool.getAllocationRoot();
        pool.setAllocationRoot(_newAllocationRoot);
        emit AllocationUpdated(oldAllocationRoot, _newAllocationRoot);
    }

    /* -------------------------------------------------------------------------- */
    /*                              INTERNAL/PRIVATE                              */
    /* -------------------------------------------------------------------------- */

    function _withdraw(address owner, address token, uint256 amount) internal {
        token.transfer(owner, amount);
        emit Withdraw(owner, token, amount);
    }
}
