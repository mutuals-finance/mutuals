import { withSnapshot } from '#/test/utils';
import { generatePoolArgs } from '@/utils/pool';
import { TxOptions } from 'hardhat-deploy/dist/types';
import { expect } from 'chai';
import {
  ClaimStruct,
  WithdrawParamsStruct,
} from '#/types/typechain/contracts/pool/Pool';
import { SignerWithAddress } from '@nomicfoundation/hardhat-ethers/signers';
import { ZeroAddress } from 'ethers';
import Claim from '@/utils/claim';

// const salt = toBigInt(hre.ethers.randomBytes(16));
// const allocationRoot = hre.ethers.randomBytes(32);
const namedSigners = [
  'poolOwnerHonest',
  'recipient0',
  'recipient1',
  'recipient2',
];

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

    const registry = await hre.ethers.getContract('Registry');

    const claims = Claim.from({
      [recipient0.address]: 50,
      [recipient1.address]: 50,
    });

    const stateTree = Claim.buildTree(claims);

    const offchainStateId = hre.ethers.solidityPacked(['uint256'], [0x637442]);
    const offchainStateArgs = hre.ethers.AbiCoder.defaultAbiCoder().encode(
      ['bytes32'],
      [stateTree.root]
    );

    const extensionArgs = {
      [offchainStateId]: offchainStateArgs,
    };

    const createPoolArgs = generatePoolArgs.create(
      poolOwnerHonest.address,
      registry.target,
      Object.keys(extensionArgs),
      Object.values(extensionArgs)
    );

    return {
      poolOwnerHonest,
      recipient0,
      recipient1,
      recipient2,
      createPoolArgs,
      claims,
      stateTree,
    };
  }
);

describe('Pool.withdraw', () => {
  const options: TxOptions = { to: '', from: '' };

  before(async () => {
    const { poolOwnerHonest, createPoolArgs } = await setupTest();
    await hre.deployments.execute(
      'PoolFactory',
      {
        from: poolOwnerHonest.address,
      },
      'createPool',
      ...createPoolArgs
    );

    options.to = await hre.deployments.read(
      'PoolFactory',
      'getAddress',
      ...createPoolArgs
    );
  });

  context('When a user withdraws with valid parameters', () => {
    it('should successfully execute the withdrawal', async () => {
      const { recipient0, claims, stateTree } = await setupTest();

      // recipient0's claim
      const claim0 = claims[0]!;
      const encoder = hre.ethers.AbiCoder.defaultAbiCoder();

      const params: WithdrawParamsStruct = {
        amount: claim0.value,
        token: ZeroAddress,
        strategyData: '0x',
        stateData: encoder.encode(['bytes32[]'], [stateTree.getProof(0)]),
      };

      expect(
        hre.deployments.execute(
          'Pool',
          {
            ...options,
            from: recipient0.address,
          },
          'withdraw',
          { ...claim0, id: 2 },
          params
        )
      ).to.not.reverted;
    });
  });
  context('When a user withdraws with invalid parameters', () => {
    it('should revert for a negative amount for a recipient', async () => {
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
    });
    it('should revert for submitting empty claim and params arguments', async () => {
      const { recipient0 } = await setupTest();

      const claim: ClaimStruct = {
        id: '',
        parentId: '',
        recipient: recipient0.address,
        value: '',
        stateId: '',
        stateData: '',
        strategyId: '',
        strategyData: '',
      };

      const params: WithdrawParamsStruct = {
        amount: '',
        token: ZeroAddress,
        strategyData: '',
        stateData: '',
      };

      expect(
        hre.deployments.execute(
          'Pool',
          {
            ...options,
            from: recipient0.address,
          },
          'withdraw',
          claim,
          params
        )
      ).to.be.reverted;
    });
    it('should revert for a too high amount for a recipient', async () => {
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
    });
  });
});
