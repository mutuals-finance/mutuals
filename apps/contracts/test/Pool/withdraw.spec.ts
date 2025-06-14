import { withSnapshot } from '#/test/utils';
import { generatePoolArgs } from '@/utils/pool';
import { expect } from 'chai';
import { SignerWithAddress } from '@nomicfoundation/hardhat-ethers/signers';
import { ethers, parseEther, ZeroAddress } from 'ethers';
import Claim from '@/utils/claim';
import { ClaimStruct } from '#/types/typechain/contracts/pool/Pool';
import { Pool__factory } from '#/types/typechain';
import { SimpleMerkleTree } from '@openzeppelin/merkle-tree';

const namedSigners = [
  'poolOwnerHonest',
  'recipient0',
  'recipient1',
  'recipient2',
];

const createPoolWith = async ({
  hre,
  claims,
  from,
  buildArgs,
}: {
  hre: CustomHardHatRuntimeEnvironment;
  claims: ClaimStruct[];
  from: { create: SignerWithAddress; run: SignerWithAddress };
  buildArgs: (tree: SimpleMerkleTree) => { [key: number]: string[][] };
}) => {
  const unassigned0 = await hre.ethers.getNamedSigner('unassigned0');
  const registry = await hre.ethers.getContract('Registry');

  const stateTree = Claim.buildTree(claims);

  const args = buildArgs(stateTree);

  const createPoolArgs = generatePoolArgs.create(
    from.create.address,
    registry.target,
    Object.keys(args).map((v) => hre.ethers.solidityPacked(['uint256'], [v])),
    Object.values(args).map(([types, values]) =>
      hre.ethers.AbiCoder.defaultAbiCoder().encode(types, values)
    )
  );

  await hre.deployments.execute(
    'PoolFactory',
    {
      from: from.create.address,
    },
    'createPool',
    ...createPoolArgs
  );

  const address: string = await hre.deployments.read(
    'PoolFactory',
    'getAddress',
    ...createPoolArgs
  );

  await unassigned0.sendTransaction({
    to: address,
    value: parseEther('1.0'),
  });

  const pool = Pool__factory.connect(address, from.run);

  return { pool, stateTree };
};

const setupTest = withSnapshot(
  ['pool', 'registry', 'extension'],
  async (hre) => {
    const [poolOwnerHonest, recipient0, recipient1, recipient2] =
      (await Promise.all(namedSigners.map(hre.ethers.getNamedSigner))) as [
        SignerWithAddress,
        SignerWithAddress,
        SignerWithAddress,
        SignerWithAddress,
      ];

    const encoder = hre.ethers.AbiCoder.defaultAbiCoder();

    return {
      poolOwnerHonest,
      recipient0,
      recipient1,
      recipient2,
      encoder,
    };
  }
);

describe('Pool.withdraw', () => {
  context('When a user withdraws with valid parameters', () => {
    it('should successfully execute the withdrawal for offchain state and default allocation', async () => {
      const { recipient0, poolOwnerHonest, encoder } = await setupTest();

      const claim = {
        id: 1,
        parentId: 0,
        recipient: recipient0.address,
        value: 50,
        stateId: ethers.solidityPacked(['uint256'], [0x637442]),
        stateData: ethers.ZeroHash,
        strategyId: ethers.solidityPacked(['uint256'], [0x577472]),
        strategyData: ethers.ZeroHash,
      };

      const { pool, stateTree } = await createPoolWith({
        hre,
        claims: [claim],
        from: { create: poolOwnerHonest, run: recipient0 },
        buildArgs: (tree) => ({
          [0x637442]: [['bytes32'], [tree.root]],
          [0x577472]: [[], []],
        }),
      });

      const params = {
        amount: claim.value,
        token: ZeroAddress,
        strategyData: '0x',
        stateData: encoder.encode(['bytes32[]'], [stateTree.getProof(0)]),
      };

      await expect(pool.withdraw(claim, params)).to.emit(pool, 'Withdrawal');
    });
    it('should successfully execute the withdrawal for offchain state and token allocation', async () => {
      const { recipient0, poolOwnerHonest, encoder } = await setupTest();

      const claim = {
        id: 1,
        parentId: 0,
        recipient: recipient0.address,
        value: ethers.parseEther('1'),
        stateId: ethers.solidityPacked(['uint256'], [0x637442]),
        stateData: ethers.ZeroHash,
        strategyId: ethers.solidityPacked(['uint256'], [0x9c2215]),
        strategyData: encoder.encode(
          ['address', 'address', 'uint256', 'uint8'],
          [ethers.ZeroAddress, recipient0.address, 0, 1]
        ),
      };

      const { pool, stateTree } = await createPoolWith({
        hre,
        claims: [claim],
        from: { create: poolOwnerHonest, run: recipient0 },
        buildArgs: (tree) => ({
          [0x637442]: [['bytes32'], [tree.root]],
          [0x9c2215]: [[], []],
        }),
      });

      const params = {
        amount: ethers.parseEther('1'),
        token: ZeroAddress,
        strategyData: '0x',
        stateData: encoder.encode(['bytes32[]'], [stateTree.getProof(0)]),
      };

      await expect(pool.withdraw(claim, params)).to.emit(pool, 'Withdrawal');
    });
  });

  context('When a user withdraws with invalid parameters', () => {
    // it('should revert for a negative amount for a recipient', async () => {
    // const { pool, proofParams, allocations, recipient0 } = await setupTest();
    // const request = {
    //   allocations: [[allocations[recipientPosition]]],
    //   amounts: [-1],
    //   proof: proofParams,
    // } as PoolLib.WithdrawRequestStruct;
    // expect(
    //   pool
    //     .connect(recipient0)
    //     .withdraw(recipient0!.address, ZeroAddress, request)
    // ).to.be.reverted;
    // });
    //  it('should revert for submitting empty claim and params arguments', async () => {
    //    const { recipient0 } = await setupTest();
    //
    //    const claim: ClaimStruct = {
    //      id: '',
    //      parentId: '',
    //      recipient: recipient0.address,
    //      value: '',
    //      stateId: '',
    //      stateData: '',
    //      strategyId: '',
    //      strategyData: '',
    //    };
    //
    //    const params: WithdrawParamsStruct = {
    //      amount: '',
    //      token: ZeroAddress,
    //      strategyData: '',
    //      stateData: '',
    //    };
    //
    //    await expect(
    //      hre.deployments.execute(
    //        'Pool',
    //        {
    //          ...options,
    //          from: recipient0.address,
    //        },
    //        'withdraw',
    //        claim,
    //        params
    //      )
    //    ).to.be.reverted;
    //  });
    //it('should revert for a too high amount for a recipient', async () => {
    // const { pool, proofParams, allocations, recipient0 } = await setupTest();
    // const request = {
    //   allocations: [[allocations[recipientPosition]]],
    //   amounts: [1],
    //   proof: proofParams,
    // } as PoolLib.WithdrawRequestStruct;
    // expect(
    //   pool
    //     .connect(recipient0)
    //     .withdraw(recipient0!.address, ZeroAddress, request)
    // ).to.be.reverted;
    // });
  });
});
