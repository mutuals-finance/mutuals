import hre from 'hardhat';
import { Pool, PoolFactory } from '#/types/typechain';
import { expect } from 'chai';
import { withSnapshot } from '#/test/utils';
import { ContractTransactionReceipt, toBigInt } from 'ethers';

const setupTest = withSnapshot(['pool'], async (hre) => {
  const [poolOwnerHonest, poolOwnerMalicious] = await Promise.all([
    hre.ethers.getNamedSigner('poolOwnerHonest'),
    hre.ethers.getNamedSigner('poolOwnerMalicious'),
  ]);
  const poolFactory = (await hre.ethers.getContract(
    'PoolFactory'
  )) as PoolFactory;
  const pool = (await hre.ethers.getContract('Pool')) as Pool;

  return {
    poolFactory,
    pool,
    poolOwnerHonest,
    poolOwnerMalicious,
  };
});

const salt1 = toBigInt(hre.ethers.randomBytes(16));
const salt2 = toBigInt(hre.ethers.randomBytes(16));
const allocationRoot = hre.ethers.randomBytes(32);

describe('PoolFactory.createPool', () => {
  context('When called with valid parameters', () => {
    let createdPool: Pool | null;
    let pool1Address: string;
    let pool2Address: string;

    before(async () => {
      const { poolFactory, poolOwnerHonest } = await setupTest();
      [pool1Address, pool2Address] = await Promise.all([
        poolFactory.getAddress(poolOwnerHonest.address, allocationRoot, salt1),
        poolFactory.getAddress(poolOwnerHonest.address, allocationRoot, salt2),
      ]);
      await poolFactory
        .connect(poolOwnerHonest)
        .createPool(poolOwnerHonest.address, allocationRoot, salt2)
        .then((tx) => tx.wait());
      createdPool = await hre.ethers.getContractAt('Pool', pool2Address);
    });

    it('should deploy a beacon proxy', async () => {
      const { poolFactory, poolOwnerHonest } = await setupTest();
      expect(
        poolFactory
          .connect(poolOwnerHonest)
          .createPool(poolOwnerHonest.address, allocationRoot, salt1)
      ).to.not.reverted;
    });

    it('should emit a valid CreatePool event', async () => {
      const { poolFactory, poolOwnerHonest } = await setupTest();

      await expect(
        poolFactory
          .connect(poolOwnerHonest)
          .createPool(poolOwnerHonest.address, allocationRoot, salt1)
      ).to.emit(poolFactory, 'CreatePool');
    });

    it('should initialize the proxy', async () => {
      const { poolOwnerMalicious } = await setupTest();

      await expect(
        createdPool
          ?.connect(poolOwnerMalicious)
          .__Pool_init(poolOwnerMalicious.address, allocationRoot)
      ).to.be.reverted;
    });
  });
});
