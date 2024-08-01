import hre from 'hardhat';
import { Pool, PoolFactory } from '#/types/typechain';
import { expect } from 'chai';
import { withSnapshot } from '#/test/utils';

const setupTest = withSnapshot(['pool'], async (hre) => {
  const [poolOwner1, poolOwner2] = await Promise.all([
    hre.ethers.getNamedSigner('poolOwner1'),
    hre.ethers.getNamedSigner('poolOwner2'),
  ]);
  const poolFactory = (await hre.ethers.getContract(
    'PoolFactory'
  )) as PoolFactory;
  const pool = (await hre.ethers.getContract('Pool')) as Pool;

  return {
    poolFactory,
    pool,
    poolOwner1,
    poolOwner2,
  };
});

describe('PoolFactory.createPool', () => {
  context('When called with valid parameters', () => {
    const allocationRoot = hre.ethers.randomBytes(32);
    const allocationRoot2 = hre.ethers.randomBytes(32);
    let createdPoolAddress: string;

    it('should deploy a beacon proxy', async () => {
      const { poolFactory, poolOwner1 } = await setupTest();

      expect(
        poolFactory
          .connect(poolOwner1)
          .createPool(poolOwner1.address, allocationRoot, 34)
      ).to.not.reverted;
    });

    it('should emit a valid CreatePool event', async () => {
      const { poolFactory, poolOwner1 } = await setupTest();

      const filter = poolFactory.filters.CreatePool;
      const events = await poolFactory.queryFilter(filter, -1);
      const event = events[0];

      expect(event.fragment.name).to.equal('CreatePool');
      const args = event.args;
      expect(args.owner).to.equal(poolOwner1.address);
      expect(args.pool).to.be.not.empty;
      expect(args.root).to.equal(allocationRoot);

      createdPoolAddress = args.pool;
    });

    it('should initialize the proxy', async () => {
      const { pool, poolOwner2 } = await setupTest();
      const createdPool = pool.attach(createdPoolAddress) as Pool;
      await expect(
        createdPool
          .connect(poolOwner2)
          .__Pool_init(poolOwner2.address, allocationRoot2)
      ).to.be.revertedWith('');
    });

    it('should set the initial owner', async () => {
      const { poolFactory, poolOwner1 } = await setupTest();
      expect(poolFactory.owner()).to.be.equal(poolOwner1.address);
    });
  });
});
