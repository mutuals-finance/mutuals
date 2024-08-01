import hre from 'hardhat';
import { Pool, PoolFactory } from '#/types/typechain';
import { expect } from 'chai';

const setup = hre.deployments.createFixture(async () => {
  await hre.deployments.fixture('PoolFactory');
  const [poolOwner1, poolOwner2] = await Promise.all([
    hre.ethers.getNamedSigner('poolOwner1'),
    hre.ethers.getNamedSigner('poolOwner2'),
  ]);

  return {
    PoolFactory: (await hre.ethers.getContract('PoolFactory')) as PoolFactory,
    Pool: (await hre.ethers.getContract('Pool')) as Pool,
    poolOwner1,
    poolOwner2,
  };
});

describe('PoolFactory.createPool', () => {
  context('When called with valid parameters', () => {
    it('should deploy a beacon proxy', async () => {
      const { PoolFactory, poolOwner1 } = await setup();
      const createPoolResponse = PoolFactory.connect(poolOwner1).createPool(
        poolOwner1.address,
        hre.ethers.randomBytes(32),
        34
      );
      await expect(createPoolResponse).to.not.reverted;
    });

    it('should initialize the proxy', async () => {
      const { Pool, poolOwner2 } = await setup();
      const pool = Pool.attach('') as Pool;
      const poolInitResult = pool
        .connect(poolOwner2)
        .__Pool_init(poolOwner2.address, hre.ethers.randomBytes(32));
      await expect(poolInitResult).to.be.revertedWith('');
    });

    it('should set the initial owner', async () => {
      const { PoolFactory, poolOwner1 } = await setup();
      expect(PoolFactory.owner).to.eq(poolOwner1.address);
    });
  });
});
