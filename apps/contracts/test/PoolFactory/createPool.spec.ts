import hre from 'hardhat';
import { Pool, PoolFactory } from '#/types/typechain';
import { expect } from 'chai';
import { withSnapshot } from '#/test/utils';
import { toBigInt } from 'ethers';

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

    before(async () => {
      const { poolFactory, poolOwnerHonest } = await setupTest();
      await poolFactory
        .connect(poolOwnerHonest)
        .createPool(poolOwnerHonest.address, allocationRoot, salt2)
        .then((tx) => tx.wait());

      const create2Address = await poolFactory.getAddress(
        poolOwnerHonest.address,
        allocationRoot,
        salt2
      );
      createdPool = await hre.ethers.getContractAt('Pool', create2Address);
    });

    it('should deploy a beacon proxy', async () => {
      const { poolFactory, poolOwnerHonest } = await setupTest();
      expect(
        poolFactory
          .connect(poolOwnerHonest)
          .createPool(poolOwnerHonest.address, allocationRoot, salt1)
      ).to.not.reverted;
    });

    it('should emit a valid PoolCreated event', async () => {
      const { poolFactory, poolOwnerHonest } = await setupTest();

      await expect(
        poolFactory
          .connect(poolOwnerHonest)
          .createPool(poolOwnerHonest.address, allocationRoot, salt2)
      ).to.emit(poolFactory, 'PoolCreated');
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
