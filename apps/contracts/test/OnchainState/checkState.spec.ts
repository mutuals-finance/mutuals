//const setupTest = withSnapshot(['pool', 'onchain-state'], async (hre) => {});

describe('OnchainState.checkState', () => {
  context('When a user checks state with valid parameters', () => {
    before(async () => {});

    it('should not revert', async () => {});
  });
  context('When a user checks state with invalid parameters', () => {
    it('should revert for a zero claim id', async () => {});
    it('should revert for a wrong claim parentId', async () => {});
    it('should revert for a wrong claim recipient', async () => {});
    it('should revert for a wrong claim value', async () => {});
    it('should revert for a wrong claim stateId', async () => {});
    it('should revert for a wrong claim strategyId', async () => {});
  });
});
