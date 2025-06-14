import { PoolFactory } from '#/types/typechain';
import { expect } from 'chai';
import { withSnapshot } from '#/test/utils';
import { generatePoolArgs } from '@/utils/pool';

const setupTest = withSnapshot(['pool', 'registry'], async (hre) => {
  const [poolOwnerHonest, poolOwnerMalicious] = await Promise.all([
    hre.ethers.getNamedSigner('poolOwnerHonest'),
    hre.ethers.getNamedSigner('poolOwnerMalicious'),
  ]);

  const registry = await hre.ethers.getContract('Registry');

  const createPoolArgs0 = generatePoolArgs.create(
    poolOwnerHonest.address,
    registry.target
  );

  const createPoolArgs1 = generatePoolArgs.create(
    poolOwnerHonest.address,
    registry.target
  );

  const initPoolArgsMalicious = generatePoolArgs.init(
    poolOwnerMalicious.address,
    registry.target
  );

  return {
    initPoolArgsMalicious,
    createPoolArgs1,
    createPoolArgs0,
    poolOwnerHonest,
    poolOwnerMalicious,
  };
});

describe('PoolFactory.createPool', () => {
  context('When called with valid parameters', () => {
    it('should deploy a beacon proxy', async () => {
      const { createPoolArgs0, poolOwnerHonest } = await setupTest();

      await expect(
        hre.deployments.execute(
          'PoolFactory',
          {
            from: poolOwnerHonest.address,
          },
          'createPool',
          ...createPoolArgs0
        )
      ).to.not.reverted;
    });

    it('should emit a valid PoolCreated event', async () => {
      const { createPoolArgs1, poolOwnerHonest } = await setupTest();

      const poolFactory = (await hre.ethers.getContract(
        'PoolFactory',
        poolOwnerHonest
      )) as PoolFactory;

      await expect(poolFactory.createPool(...createPoolArgs1)).to.emit(
        poolFactory,
        'PoolCreated'
      );
    });

    it('should initialize the proxy', async () => {
      const { initPoolArgsMalicious, createPoolArgs0, poolOwnerMalicious } =
        await setupTest();

      const create2Address = await hre.deployments.read(
        'PoolFactory',
        'getAddress',
        ...createPoolArgs0
      );

      await expect(
        hre.deployments.execute(
          'Pool',
          {
            to: create2Address,
            from: poolOwnerMalicious.address,
          },
          '__Pool_init',
          ...initPoolArgsMalicious
        )
      ).to.be.reverted;
    });
  });
});
