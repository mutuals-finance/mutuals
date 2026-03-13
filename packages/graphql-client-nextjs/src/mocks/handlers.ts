import { graphql, HttpResponse, passthrough } from "msw";
import { faker } from "@faker-js/faker";
import {
  PoolStatus,
  Role,
  TokenType,
} from "../graphql/data/__generated__/graphql";

const MOCK_START_TIME = Date.now() - 1000000;

function mockQuotes(value?: number) {
  return [
    {
      __typename: "Quote",
      currency: "USD",
      value:
        value ?? faker.number.float({ min: 0, max: 100000, fractionDigits: 2 }),
      lastUpdatedAt: new Date().toISOString(),
    },
  ];
}

function mockBalance() {
  const elapsedSeconds = Math.floor((Date.now() - MOCK_START_TIME) / 1000);

  const baseIncome = 50000;
  const baseWithdrawals = 15000;

  const totalIncomeValue = parseFloat(
    (baseIncome + elapsedSeconds * 1.5).toFixed(2),
  );
  const withdrawalsValue = parseFloat(
    (baseWithdrawals + elapsedSeconds * 0.5).toFixed(2),
  );
  const balanceValue = parseFloat(
    (totalIncomeValue - withdrawalsValue).toFixed(2),
  );

  return {
    __typename: "PoolBalance",
    totalIncome: mockQuotes(totalIncomeValue),
    balance: mockQuotes(balanceValue),
    withdrawals: mockQuotes(withdrawalsValue),
    tokens: mockTokenBalanceConnection(balanceValue),
  };
}

const WELL_KNOWN_TOKENS = [
  {
    symbol: "USDC",
    name: "USD Coin",
    decimals: 6,
    price: 1,
    logo: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png",
  },
  {
    symbol: "WETH",
    name: "Wrapped Ether",
    decimals: 18,
    price: 3000,
    logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
  },
  {
    symbol: "DAI",
    name: "Dai Stablecoin",
    decimals: 18,
    price: 1,
    logo: "https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png",
  },
  {
    symbol: "USDT",
    name: "Tether USD",
    decimals: 6,
    price: 1,
    logo: "https://cryptologos.cc/logos/tether-usdt-logo.png",
  },
  {
    symbol: "LINK",
    name: "Chainlink",
    decimals: 18,
    price: 20,
    logo: "https://cryptologos.cc/logos/chainlink-link-logo.png",
  },
  {
    symbol: "UNI",
    name: "Uniswap",
    decimals: 18,
    price: 10,
    logo: "https://cryptologos.cc/logos/uniswap-uni-logo.png",
  },
  {
    symbol: "WBTC",
    name: "Wrapped Bitcoin",
    decimals: 8,
    price: 65000,
    logo: "https://cryptologos.cc/logos/wrapped-bitcoin-wbtc-logo.png",
  },
];

function mockToken(
  template: (typeof WELL_KNOWN_TOKENS)[0],
  overrides?: Record<string, unknown>,
) {
  return {
    __typename: "Token",
    id: faker.string.uuid(),
    address: faker.finance.ethereumAddress(),
    network: "ETHEREUM",
    tokenType: TokenType.Erc20,
    symbol: template.symbol,
    name: template.name,
    decimals: template.decimals,
    logo: template.logo,
    thumbnail: template.logo,
    validated: 1,
    possibleSpam: false,
    quotes: mockQuotes(template.price),
    createdAt: faker.date.past().toISOString(),
    updatedAt: faker.date.recent().toISOString(),
    ...overrides,
  };
}

function mockTokenBalanceConnection(totalPoolBalanceUsd: number) {
  let allocatedUsd = 0;

  const edges = WELL_KNOWN_TOKENS.map((template, index) => {
    let usdValueForToken = 0;

    if (index === WELL_KNOWN_TOKENS.length - 1) {
      usdValueForToken = parseFloat(
        (totalPoolBalanceUsd - allocatedUsd).toFixed(2),
      );
    } else {
      const fraction = faker.number.float({ min: 0.1, max: 0.2 });
      usdValueForToken = parseFloat(
        (totalPoolBalanceUsd * fraction).toFixed(2),
      );
      allocatedUsd += usdValueForToken;
    }

    const tokenAmount = parseFloat(
      (usdValueForToken / template.price).toFixed(4),
    );

    return {
      __typename: "TokenBalanceEdge",
      node: {
        __typename: "TokenBalance",
        id: faker.string.uuid(),
        network: "ETHEREUM",
        token: mockToken(template),
        amount: faker.string.numeric(18),
        formattedAmount: tokenAmount,
        quotes: mockQuotes(usdValueForToken),
        createdAt: faker.date.past().toISOString(),
        updatedAt: faker.date.recent().toISOString(),
      },
      cursor: faker.string.alphanumeric(16),
    };
  });

  return {
    __typename: "TokenBalanceConnection",
    edges: edges,
    pageInfo: {
      __typename: "PageInfo",
      hasNextPage: false,
      hasPreviousPage: false,
      startCursor: null,
      endCursor: null,
    },
  };
}

function mockTx() {
  return {
    __typename: "Tx",
    id: faker.string.uuid(),
    gasUsed: faker.string.numeric(6),
    gasPrice: faker.string.numeric(10),
    createdAt: faker.date.recent().toISOString(),
    updatedAt: faker.date.recent().toISOString(),
  };
}

function mockDepositConnection() {
  return {
    __typename: "DepositConnection",
    edges: Array.from({ length: 3 }).map(() => ({
      __typename: "DepositEdge",
      node: {
        __typename: "Deposit",
        id: faker.string.uuid(),
        transaction: mockTx(),
        from: faker.finance.ethereumAddress(),
        to: faker.finance.ethereumAddress(),
        origin: faker.finance.ethereumAddress(),
        amount: faker.string.numeric(18),
        token: mockToken(faker.helpers.arrayElement(WELL_KNOWN_TOKENS)),
        createdAt: faker.date.recent().toISOString(),
        updatedAt: faker.date.recent().toISOString(),
      },
      cursor: faker.string.alphanumeric(16),
    })),
    pageInfo: {
      hasNextPage: false,
      hasPreviousPage: false,
      startCursor: null,
      endCursor: null,
    },
  };
}

function mockWithdrawalConnection() {
  return {
    __typename: "WithdrawalConnection",
    edges: Array.from({ length: 2 }).map(() => ({
      __typename: "WithdrawalEdge",
      node: {
        __typename: "Withdrawal",
        id: faker.string.uuid(),
        transaction: mockTx(),
        from: faker.finance.ethereumAddress(),
        to: faker.finance.ethereumAddress(),
        origin: faker.finance.ethereumAddress(),
        amount: faker.string.numeric(18),
        token: mockToken(faker.helpers.arrayElement(WELL_KNOWN_TOKENS)),
        createdAt: faker.date.recent().toISOString(),
        updatedAt: faker.date.recent().toISOString(),
      },
      cursor: faker.string.alphanumeric(16),
    })),
    pageInfo: {
      hasNextPage: false,
      hasPreviousPage: false,
      startCursor: null,
      endCursor: null,
    },
  };
}

function mockContract(overrides?: Record<string, unknown>) {
  return {
    __typename: "PoolContract",
    id: faker.string.uuid(),
    address: faker.finance.ethereumAddress(),
    network: "ETHEREUM",
    status: PoolStatus.Active,
    createdAt: faker.date.past().toISOString(),
    updatedAt: faker.date.recent().toISOString(),
    deposits: mockDepositConnection(),
    withdrawals: mockWithdrawalConnection(),
    poolFactory: {
      id: faker.string.uuid(),
      address: faker.finance.ethereumAddress(),
      network: "ETHEREUM",
      poolCount: faker.number.int({ min: 1, max: 100 }),
      createdAt: faker.date.past().toISOString(),
      updatedAt: faker.date.recent().toISOString(),
    },
    account: {
      id: faker.string.uuid(),
      address: faker.finance.ethereumAddress(),
      accountType: "EOA",
      createdAt: faker.date.past().toISOString(),
      updatedAt: faker.date.recent().toISOString(),
    },
    owner: {
      id: faker.string.uuid(),
      address: faker.finance.ethereumAddress(),
      accountType: "EOA",
      createdAt: faker.date.past().toISOString(),
      updatedAt: faker.date.recent().toISOString(),
    },
    ...overrides,
  };
}

function mockPool(overrides?: Record<string, unknown>) {
  return {
    __typename: "Pool",
    id: faker.string.uuid(),
    name: "Mutuals Demo Pool",
    description:
      "This pool showcases the features of Mutuals. It is not a real payment pool and should not be used with real funds.",
    image: "https://mutuals.finance/icon0.svg",
    slug: "demo",
    status: PoolStatus.Active,
    donationBps: faker.number.int({ min: 100, max: 1000 }),
    balance: mockBalance(),
    contract: mockContract(),
    claims: [],
    createdAt: faker.date.past().toISOString(),
    updatedAt: faker.date.recent().toISOString(),
    ...overrides,
  };
}

function mockPoolEdge(overrides?: Record<string, unknown>) {
  return {
    node: mockPool(overrides),
    cursor: faker.string.alphanumeric(16),
  };
}

function mockUser(id?: string) {
  return {
    __typename: "User",
    id: id || faker.string.uuid(),
    roles: [Role.EarlyAccess],
    pools: {
      edges: [mockPoolEdge()],
      pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
        startCursor: null,
        endCursor: null,
      },
    },
  };
}

function resolvePool(variables: {
  id?: string;
  slug?: string;
  contractId?: string;
}) {
  const { id, slug } = variables;
  if (slug !== "demo" && slug !== undefined) return null;
  return mockPool({ id: id || faker.string.uuid() });
}

export const handlers = [
  graphql.query("GetPool", ({ variables }) => {
    const pool = resolvePool(variables);
    if (!pool) return passthrough();
    return HttpResponse.json({ data: { pool } });
  }),

  graphql.query("GetPoolWithBalance", ({ variables }) => {
    const pool = resolvePool(variables);
    if (!pool) return passthrough();
    return HttpResponse.json({ data: { pool } });
  }),

  graphql.query("GetPoolWithTokens", ({ variables }) => {
    const pool = resolvePool(variables);
    if (!pool) return passthrough();
    return HttpResponse.json({ data: { pool } });
  }),

  graphql.query("GetPoolWithContract", ({ variables }) => {
    const pool = resolvePool(variables);
    if (!pool) return passthrough();
    return HttpResponse.json({ data: { pool } });
  }),

  graphql.query("GetPoolWithClaims", ({ variables }) => {
    const pool = resolvePool(variables);
    if (!pool) return passthrough();
    return HttpResponse.json({ data: { pool } });
  }),

  graphql.query("GetPoolWithBalanceAndContract", ({ variables }) => {
    const pool = resolvePool(variables);
    if (!pool) return passthrough();
    return HttpResponse.json({ data: { pool } });
  }),

  graphql.query("GetPoolWithBalanceContractClaims", ({ variables }) => {
    const pool = resolvePool(variables);
    if (!pool) return passthrough();
    return HttpResponse.json({ data: { pool } });
  }),

  graphql.query("PoolDeposits", ({ variables }) => {
    const pool = resolvePool(variables);
    if (!pool) return passthrough();
    return HttpResponse.json({ data: { pool } });
  }),

  graphql.query("PoolWithdrawals", ({ variables }) => {
    const pool = resolvePool(variables);
    if (!pool) return passthrough();
    return HttpResponse.json({ data: { pool } });
  }),

  graphql.query("PoolTransactions", ({ variables }) => {
    const pool = resolvePool(variables);
    if (!pool) return passthrough();
    return HttpResponse.json({ data: { pool } });
  }),

  graphql.query("PoolDayBalances", ({ variables }) => {
    const pool = resolvePool(variables);
    if (!pool) return passthrough();
    return HttpResponse.json({ data: { pool } });
  }),

  graphql.query("PoolHourBalances", ({ variables }) => {
    const pool = resolvePool(variables);
    if (!pool) return passthrough();
    return HttpResponse.json({ data: { pool } });
  }),

  graphql.query("User", ({ variables }) => {
    const { id, address } = variables;
    if (!id && !address) return passthrough();
    faker.seed(0);
    return HttpResponse.json({ data: { user: mockUser(id) } });
  }),

  graphql.query("Viewer", () => {
    faker.seed(0);
    return HttpResponse.json({ data: { viewer: mockUser() } });
  }),

  graphql.query("ViewerPoolList", () => {
    faker.seed(0);
    return HttpResponse.json({
      data: {
        viewer: {
          __typename: "User",
          id: faker.string.uuid(),
          pools: {
            edges: [],
            pageInfo: {
              hasNextPage: false,
              hasPreviousPage: false,
              startCursor: null,
              endCursor: null,
            },
          },
        },
      },
    });
  }),

  graphql.query("SearchPools", ({ variables }) => {
    const { query } = variables;
    if (!query) return passthrough();
    faker.seed(0);
    return HttpResponse.json({
      data: {
        searchPools: {
          __typename: "SearchPoolsPayload",
          results: [
            mockPool(),
            mockPool({ slug: "demo-2", name: "Demo Pool 2" }),
          ],
        },
      },
    });
  }),

  graphql.query("SearchUsers", ({ variables }) => {
    const { query } = variables;
    if (!query) return passthrough();
    faker.seed(0);
    return HttpResponse.json({
      data: {
        searchUsers: {
          __typename: "SearchUsersPayload",
          results: [
            {
              __typename: "User",
              id: faker.string.uuid(),
              roles: [Role.EarlyAccess],
            },
            { __typename: "User", id: faker.string.uuid(), roles: [] },
          ],
        },
      },
    });
  }),
];
