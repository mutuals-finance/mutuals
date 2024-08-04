import hre from 'hardhat';
import { Pool, PoolFactory } from '#/types/typechain';
import { expect } from 'chai';
import { withSnapshot } from '#/test/utils';
import Allocation from '@/utils/allocation';
import { MultiProof } from '@openzeppelin/merkle-tree/dist/core';
import { BytesLike, toBigInt, ZeroAddress } from 'ethers';
import { HexString } from 'ethers/lib.esm/utils/data';
import { MerkleTree } from '#/types/typechain/contracts/Pool';

const salt = toBigInt(hre.ethers.randomBytes(16));
const allocationRoot = hre.ethers.randomBytes(32);
const recipientNamedSigners = ['recipient0', 'recipient1', 'recipient2'];

const setupTest = withSnapshot(['pool'], async (hre) => {
  const [recipient0, recipient1, recipient2] = await Promise.all(
    recipientNamedSigners.map(hre.ethers.getNamedSigner)
  );

  const poolFactory = (await hre.ethers.getContract(
    'PoolFactory'
  )) as PoolFactory;
  const args = [recipient0.address, allocationRoot, salt] as [
    string,
    Uint8Array,
    bigint,
  ];

  const createPoolResponse = await poolFactory
    .connect(recipient0)
    .createPool(...args);
  await createPoolResponse.wait();

  const poolAddress = await poolFactory.getAddress(...args);

  const pool = (await hre.ethers.getContractAt(
    'Pool',
    poolAddress
  )) as unknown as Pool;

  const allocations = Allocation.from({
    [recipient0.address]: 50,
    [recipient1.address]: 50,
  });
  const tree = Allocation.buildTree(allocations);
  const { proof, proofFlags } = tree.getMultiProof([recipientPosition]);
  const proofParams = {
    value: proof,
    flags: proofFlags,
  } as MerkleTree.MultiProofStruct;

  return {
    poolFactory,
    pool,
    proofParams,
    allocations,
    recipient0,
    recipient1,
    recipient2,
  };
});

const recipientPosition = 0;
const wrongRecipientPosition = 1;

describe('Pool.withdraw', () => {
  context('When a user withdraws with valid parameters', () => {
    before(async () => {
      // const { allocations, proofParams } = await setupTest();
    });

    it('should successfully execute the withdrawal up to the allotted amount for a recipient', async () => {
      const { pool, proofParams, allocations, recipient0 } = await setupTest();
      const request = {
        allocations: [[allocations[recipientPosition]]],
        amounts: [0],
      } as Allocation.BatchRequestStruct;
      expect(
        pool
          .connect(recipient0)
          .withdraw(recipient0.address, ZeroAddress, request, proofParams)
      ).to.not.reverted;
    });
  });
  context('When a user withdraws with invalid parameters', () => {
    it('should revert for a negative amount for a recipient', async () => {
      const { pool, proofParams, allocations, recipient0 } = await setupTest();
      const request = {
        allocations: [[allocations[recipientPosition]]],
        amounts: [-1],
      } as Allocation.BatchRequestStruct;
      expect(
        pool
          .connect(recipient0)
          .withdraw(recipient0.address, ZeroAddress, request, proofParams)
      ).to.be.reverted;
    });
    it('should revert for submitting a wrong proof', async () => {
      const { pool, proofParams, allocations, recipient0 } = await setupTest();
      const request = {
        allocations: [[allocations[wrongRecipientPosition]]],
        amounts: [0],
      } as Allocation.BatchRequestStruct;
      expect(
        pool
          .connect(recipient0)
          .withdraw(recipient0.address, ZeroAddress, request, proofParams)
      ).to.be.reverted;
    });
    it('should revert for a too high amount for a recipient', async () => {
      const { pool, proofParams, allocations, recipient0 } = await setupTest();
      const request = {
        allocations: [[allocations[recipientPosition]]],
        amounts: [1],
      } as Allocation.BatchRequestStruct;
      expect(
        pool
          .connect(recipient0)
          .withdraw(recipient0.address, ZeroAddress, request, proofParams)
      ).to.be.reverted;
    });
  });
});
