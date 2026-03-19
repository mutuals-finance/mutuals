import type { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";
import { StandardMerkleTree } from "@openzeppelin/merkle-tree";
import { expect } from "chai";
import { ethers, parseEther, ZeroAddress } from "ethers";
import { withSnapshot } from "#/test/utils";
import { Pool__factory } from "#/types/typechain";
import type { ClaimStruct } from "#/types/typechain/contracts/pool/Pool";
import { generatePoolArgs } from "@/utils/pool";

const namedSigners = [
  "poolOwnerHonest",
  "recipient0",
  "recipient1",
  "recipient2",
];

const createPoolWith = async ({
  hre,
  validationModuleId,
  distributionModuleId,
  validationModuleSetupArgs,
  distributionModuleSetupArgs,
  from,
}: {
  hre: CustomHardHatRuntimeEnvironment;
  validationModuleId: string;
  distributionModuleId: string;
  validationModuleSetupArgs: [string[], any[]];
  distributionModuleSetupArgs: [string[], any[]];
  from: { create: SignerWithAddress; run: SignerWithAddress };
}) => {
  const unassigned0 = await hre.ethers.getNamedSigner("unassigned0");
  const registry = await hre.ethers.getContract("ModuleRegistry");

  // Get module addresses
  const validationModule = await hre.ethers.getContract(validationModuleId);
  const distributionModule = await hre.ethers.getContract(distributionModuleId);

  const encoder = hre.ethers.AbiCoder.defaultAbiCoder();

  const poolArgs = generatePoolArgs.init(
    registry.target as string,
    from.create.address,
    [validationModule.target as string, distributionModule.target as string],
    [
      encoder.encode(...validationModuleSetupArgs),
      encoder.encode(...distributionModuleSetupArgs),
    ],
    [] // trustedAttesters - empty for tests
  );

  // Add salt for createPool
  const salt = hre.ethers.toBigInt(hre.ethers.randomBytes(16));
  const createPoolArgs = [...poolArgs, salt];

  await hre.deployments.execute(
    "PoolFactory",
    {
      from: from.create.address,
    },
    "createPool",
    ...createPoolArgs
  );

  const address: string = await hre.deployments.read(
    "PoolFactory",
    "predictPoolAddress",
    from.create.address,
    salt
  );

  await unassigned0.sendTransaction({
    to: address,
    value: parseEther("1.0"),
  });

  const pool = Pool__factory.connect(address, from.run);

  return { pool, validationModule, distributionModule };
};

const setupTest = withSnapshot(
  ["pool", "registry", "extension"],
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

describe("Pool.release", () => {
  describe("releaseSingle - single claim releases", () => {
    it("should successfully execute a single release with MerkleTree validation and Direct distribution", async () => {
      const { recipient0, poolOwnerHonest, encoder } = await setupTest();

      // Build merkle tree for validation
      const leaves = [
        [
          1, // id
          0, // parentId
          recipient0.address,
          ZeroAddress,
          "0x",
        ],
      ];
      const tree = StandardMerkleTree.of(leaves, [
        "uint256",
        "uint256",
        "address",
        "address",
        "bytes",
      ]);

      const { pool, validationModule, distributionModule } =
        await createPoolWith({
          hre,
          validationModuleId: "MerkleTreeValidationModule",
          distributionModuleId: "DirectDistributionModule",
          validationModuleSetupArgs: [["bytes32"], [tree.root]],
          distributionModuleSetupArgs: [[], []],
          from: { create: poolOwnerHonest, run: recipient0 },
        });

      const claim: ClaimStruct = {
        id: BigInt(1),
        parentId: BigInt(0),
        validationModule: validationModule.target as string,
        validationData: encoder.encode(
          ["uint256", "uint256", "address", "address", "bytes"],
          [1, 0, recipient0.address, ZeroAddress, "0x"]
        ),
        distributorModule: distributionModule.target as string,
        distributorData: encoder.encode(
          ["address", "address", "uint256"],
          [recipient0.address, ZeroAddress, parseEther("0.5")]
        ),
      };

      const proof = tree.getProof(0);
      const validationArgs = encoder.encode(["bytes32[]"], [proof]);
      const distributionArgs = "0x";

      await expect(
        pool.releaseSingle(claim, validationArgs, distributionArgs)
      ).to.emit(pool, "ReleaseSingle");
    });
  });

  describe("release - batched aggregated releases", () => {
    it("should successfully aggregate multiple claims to same recipient", async () => {
      const { recipient0, poolOwnerHonest, encoder } = await setupTest();

      // Build merkle tree for validation
      const leaves = [
        [1, 0, recipient0.address, ZeroAddress, "0x"],
        [2, 0, recipient0.address, ZeroAddress, "0x"],
      ];
      const tree = StandardMerkleTree.of(leaves, [
        "uint256",
        "uint256",
        "address",
        "address",
        "bytes",
      ]);

      const { pool, validationModule, distributionModule } =
        await createPoolWith({
          hre,
          validationModuleId: "MerkleTreeValidationModule",
          distributionModuleId: "DirectDistributionModule",
          validationModuleSetupArgs: [["bytes32"], [tree.root]],
          distributionModuleSetupArgs: [[], []],
          from: { create: poolOwnerHonest, run: recipient0 },
        });

      const claims: ClaimStruct[] = [
        {
          id: BigInt(1),
          parentId: BigInt(0),
          validationModule: validationModule.target as string,
          validationData: encoder.encode(
            ["uint256", "uint256", "address", "address", "bytes"],
            [1, 0, recipient0.address, ZeroAddress, "0x"]
          ),
          distributorModule: distributionModule.target as string,
          distributorData: encoder.encode(
            ["address", "address", "uint256"],
            [recipient0.address, ZeroAddress, parseEther("0.3")]
          ),
        },
        {
          id: BigInt(2),
          parentId: BigInt(0),
          validationModule: validationModule.target as string,
          validationData: encoder.encode(
            ["uint256", "uint256", "address", "address", "bytes"],
            [2, 0, recipient0.address, ZeroAddress, "0x"]
          ),
          distributorModule: distributionModule.target as string,
          distributorData: encoder.encode(
            ["address", "address", "uint256"],
            [recipient0.address, ZeroAddress, parseEther("0.2")]
          ),
        },
      ];

      const validationArgsArray = [
        encoder.encode(["bytes32[]"], [tree.getProof(0)]),
        encoder.encode(["bytes32[]"], [tree.getProof(1)]),
      ];
      const distributionArgsArray = ["0x", "0x"];

      await expect(
        pool.release(claims, validationArgsArray, distributionArgsArray)
      ).to.emit(pool, "Release");
    });
  });

  describe("releaseSeparate - batched separate releases", () => {
    it("should successfully execute separate releases for different recipients", async () => {
      const { recipient0, recipient1, poolOwnerHonest, encoder } =
        await setupTest();

      // Build merkle tree for validation
      const leaves = [
        [1, 0, recipient0.address, ZeroAddress, "0x"],
        [2, 0, recipient1.address, ZeroAddress, "0x"],
      ];
      const tree = StandardMerkleTree.of(leaves, [
        "uint256",
        "uint256",
        "address",
        "address",
        "bytes",
      ]);

      const { pool, validationModule, distributionModule } =
        await createPoolWith({
          hre,
          validationModuleId: "MerkleTreeValidationModule",
          distributionModuleId: "DirectDistributionModule",
          validationModuleSetupArgs: [["bytes32"], [tree.root]],
          distributionModuleSetupArgs: [[], []],
          from: { create: poolOwnerHonest, run: recipient0 },
        });

      const claims: ClaimStruct[] = [
        {
          id: BigInt(1),
          parentId: BigInt(0),
          validationModule: validationModule.target as string,
          validationData: encoder.encode(
            ["uint256", "uint256", "address", "address", "bytes"],
            [1, 0, recipient0.address, ZeroAddress, "0x"]
          ),
          distributorModule: distributionModule.target as string,
          distributorData: encoder.encode(
            ["address", "address", "uint256"],
            [recipient0.address, ZeroAddress, parseEther("0.3")]
          ),
        },
        {
          id: BigInt(2),
          parentId: BigInt(0),
          validationModule: validationModule.target as string,
          validationData: encoder.encode(
            ["uint256", "uint256", "address", "address", "bytes"],
            [2, 0, recipient1.address, ZeroAddress, "0x"]
          ),
          distributorModule: distributionModule.target as string,
          distributorData: encoder.encode(
            ["address", "address", "uint256"],
            [recipient1.address, ZeroAddress, parseEther("0.4")]
          ),
        },
      ];

      const validationArgsArray = [
        encoder.encode(["bytes32[]"], [tree.getProof(0)]),
        encoder.encode(["bytes32[]"], [tree.getProof(1)]),
      ];
      const distributionArgsArray = ["0x", "0x"];

      await expect(
        pool.releaseSeparate(claims, validationArgsArray, distributionArgsArray)
      ).to.emit(pool, "Release");
    });
  });

  describe("Error cases", () => {
    it("should revert when arrays have mismatched lengths", async () => {
      const { recipient0, poolOwnerHonest } = await setupTest();

      const _encoder = hre.ethers.AbiCoder.defaultAbiCoder();
      const { pool, validationModule, distributionModule } =
        await createPoolWith({
          hre,
          validationModuleId: "MerkleTreeValidationModule",
          distributionModuleId: "DirectDistributionModule",
          validationModuleSetupArgs: [["bytes32"], [ethers.ZeroHash]],
          distributionModuleSetupArgs: [[], []],
          from: { create: poolOwnerHonest, run: recipient0 },
        });

      const claims: ClaimStruct[] = [
        {
          id: BigInt(1),
          parentId: BigInt(0),
          validationModule: validationModule.target as string,
          validationData: "0x",
          distributorModule: distributionModule.target as string,
          distributorData: "0x",
        },
      ];

      await expect(
        pool.release(claims, ["0x"], []) // Mismatched arrays
      ).to.be.revertedWithCustomError(pool, "ArrayLengthMismatch");
    });

    it("should revert when claims array is empty", async () => {
      const { recipient0, poolOwnerHonest } = await setupTest();

      const { pool } = await createPoolWith({
        hre,
        validationModuleId: "MerkleTreeValidationModule",
        distributionModuleId: "DirectDistributionModule",
        validationModuleSetupArgs: [["bytes32"], [ethers.ZeroHash]],
        distributionModuleSetupArgs: [[], []],
        from: { create: poolOwnerHonest, run: recipient0 },
      });

      await expect(pool.release([], [], [])).to.be.revertedWithCustomError(
        pool,
        "EmptyClaims"
      );
    });
  });
});
