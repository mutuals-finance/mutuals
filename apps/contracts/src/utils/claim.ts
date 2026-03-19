import { SimpleMerkleTree } from "@openzeppelin/merkle-tree";
import { ethers, getAddress, keccak256 } from "ethers";
import type { ClaimStruct } from "#/types/typechain/contracts/pool/Pool";

type ClaimConfig = Record<string, number>;

const Claim = {
  from(config: ClaimConfig) {
    return Object.entries(config).reduce(
      (acc: ClaimStruct[], [recipient, value], _i) => {
        const base = {
          id: acc.length,
          parentId: 0,
          recipient: getAddress(recipient),
          value,
          stateId: ethers.solidityPacked(["uint256"], [0x63_74_42]),
          stateData: ethers.ZeroHash,
          strategyId: ethers.solidityPacked(["uint256"], [0x57_74_72]),
          strategyData: ethers.ZeroHash,
        };

        acc.push(
          {
            ...base,
            strategyId: ethers.solidityPacked(["uint256"], [0x57_74_72]),
            strategyData: ethers.ZeroHash,
          },
          {
            ...base,
            strategyId: ethers.solidityPacked(["uint256"], [0x57_74_72]),
            strategyData: ethers.ZeroHash,
          }
        );
        return acc;
      },
      [] as ClaimStruct[]
    );
  },
  buildTree(claims: ClaimStruct[]) {
    const abiCoder = ethers.AbiCoder.defaultAbiCoder();

    return SimpleMerkleTree.of(
      claims.map((c) =>
        keccak256(
          abiCoder.encode(
            [
              "uint256",
              "uint256",
              "address",
              "uint256",
              "bytes32",
              "bytes",
              "bytes32",
              "bytes",
            ],
            Object.values(c)
          )
        )
      )
    );
  },
};

export default Claim;
