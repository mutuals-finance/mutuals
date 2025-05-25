import { Pool, PoolFactory, Registry } from '#/types/typechain';
import { expect } from 'chai';
import { withSnapshot } from '#/test/utils';

const setupTest = withSnapshot(['pool'], async (hre) => {
  const [poolOwnerHonest, poolOwnerMalicious] = await Promise.all([
    hre.ethers.getNamedSigner('poolOwnerHonest'),
    hre.ethers.getNamedSigner('poolOwnerMalicious'),
  ]);
  const poolFactory = (await hre.deployments.get(
    'PoolFactory'
  )) as unknown as PoolFactory;
  const pool = (await hre.deployments.get('Pool')) as unknown as Pool;
  const registry = (await hre.deployments.get(
    'Registry'
  )) as unknown as Registry;

  return {
    registry,
    poolFactory,
    pool,
    poolOwnerHonest,
    poolOwnerMalicious,
  };
});

const salt1 = hre.ethers.toBigInt(hre.ethers.randomBytes(16));
const salt2 = hre.ethers.toBigInt(hre.ethers.randomBytes(16));

describe('PoolFactory.createPool', () => {
  context('When called with valid parameters', () => {
    let createdPool: Pool | null;

    before(async () => {
      const { registry, poolFactory, poolOwnerHonest } = await setupTest();
      const params = [
        poolOwnerHonest.address,
        registry.target,
        [],
        [],
        salt2,
      ] as Parameters<PoolFactory['createPool']>;

      await poolFactory
        .connect(poolOwnerHonest)
        .createPool(...params)
        .then((tx) => tx.wait());

      const create2Address = await poolFactory.getAddress(...params);
      createdPool = (await hre.ethers.getContractAt(
        'Pool',
        create2Address
      )) as unknown as Pool;
    });

    it('should deploy a beacon proxy', async () => {
      const { registry, poolFactory, poolOwnerHonest } = await setupTest();
      expect(
        poolFactory
          .connect(poolOwnerHonest)
          .createPool(poolOwnerHonest.address, registry.target, [], [], salt1)
      ).to.not.reverted;
    });

    it('should emit a valid PoolCreated event', async () => {
      const { registry, poolFactory, poolOwnerHonest } = await setupTest();

      await expect(
        poolFactory
          .connect(poolOwnerHonest)
          .createPool(poolOwnerHonest.address, registry.target, [], [], salt2)
      ).to.emit(poolFactory, 'PoolCreated');
    });

    it('should initialize the proxy', async () => {
      const { registry, poolOwnerMalicious } = await setupTest();

      await expect(
        createdPool
          ?.connect(poolOwnerMalicious)
          .__Pool_init(poolOwnerMalicious.address, registry.target, [], [])
      ).to.be.reverted;
    });
  });
});
