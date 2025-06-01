import { ClaimStruct } from '#/types/typechain/contracts/pool/Pool';
import { SimpleMerkleTree } from '@openzeppelin/merkle-tree';
import { ethers, solidityPackedKeccak256 } from 'ethers';

type ClaimConfig = Record<string, number>;

const Claim = {
  from(config: ClaimConfig) {
    return Object.entries(config).map(([recipient, value], i) => {
      return {
        id: i,
        parentId: 1,
        recipient,
        value,
        stateId: ethers.solidityPacked(['uint256'], [0x637442]),
        stateData: '0x',
        strategyId: ethers.solidityPacked(['uint256'], [0x577472]),
        strategyData: '0x',
      };
    }) as ClaimStruct[];
  },
  buildTree(claims: ClaimStruct[]) {
    return SimpleMerkleTree.of(
      claims.map((c) =>
        solidityPackedKeccak256(
          [
            'uint256',
            'uint256',
            'address',
            'uint256',
            'bytes32',
            'bytes',
            'bytes32',
            'bytes',
          ],
          Object.values(c)
        )
      )
    );
  },
};

export default Claim;
