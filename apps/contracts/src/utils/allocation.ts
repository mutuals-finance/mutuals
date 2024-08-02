import { Allocation } from '#/types/typechain/contracts/Pool';
import { SimpleMerkleTree } from '@openzeppelin/merkle-tree';
import { solidityPackedKeccak256 } from 'ethers';

const Allocation = {
  from(config: Record<string, number>) {
    return Object.entries(config).map(([recipient, amountOrShare], i) => {
      return {
        id: i,
        version: 1,
        allocationType: 1,
        target: 1,
        recipient,
        amountOrShare,
        position: i,
        timespan: 0,
      };
    }) as Allocation.DataStruct[];
  },
  buildTree(allocations: Allocation.DataStruct[]) {
    return SimpleMerkleTree.of(
      allocations.map((a) =>
        solidityPackedKeccak256(
          [
            'uint256',
            'uint256',
            'uint256',
            'uint256',
            'uint256',
            'uint256',
            'uint256',
            'uint256',
          ],
          Object.values(a)
        )
      )
    );
  },
};

export default Allocation;
