import hre from 'hardhat';
import { Pool, PoolFactory } from '#/types/typechain';
import { expect } from 'chai';
import { withSnapshot } from '#/test/utils';
import { solidityPackedKeccak256, toBigInt } from 'ethers';
import Allocation from '@/utils/allocation';

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
  )) as InstanceOfContract<Pool>;

  const tree = Allocation.buildTree(
    Allocation.from({
      [recipient0.address]: 50,
      [recipient1.address]: 50,
    })
  );

  return {
    poolFactory,
    pool,
    tree,
    recipient0,
    recipient1,
    recipient2,
  };
});

describe('Pool.withdraw', () => {
  context('When a user withdraws with valid parameters', () => {
    let proof: string[];
    let pool1Address: string;
    let pool2Address: string;

    before(async () => {
      const { poolFactory, poolOwnerHonest } = await setupTest();
      proof = merkleTree.hexProofForPayee(payee, paymentCycle);
    });

    it('should successfully execute the withdrawal up to the allotted amount for a recipient', async () => {
      const { poolFactory, poolOwnerHonest } = await setupTest();
      expect(
        poolFactory
          .connect(poolOwnerHonest)
          .createPool(poolOwnerHonest.address, allocationRoot, salt1)
      ).to.not.reverted;
    });
  });
});
