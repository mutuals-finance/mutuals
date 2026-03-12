import { graphql, HttpResponse, passthrough } from "msw";
import { faker } from "@faker-js/faker";
import { PoolStatus, Role } from "../graphql/data/__generated__/graphql";

function mockQuotes(value?: number) {
  return [
    {
      __typename: "Quote",
      currency: "USD",
      value: value ?? faker.number.float({ min: 0, max: 100000, fractionDigits: 2 }),
      lastUpdatedAt: faker.date.recent().toISOString(),
    },
  ];
}

function mockBalance() {
  const balanceValue = faker.number.float({ min: 0, max: 50000, fractionDigits: 2 });
  const withdrawalsValue = faker.number.float({ min: 0, max: 50000, fractionDigits: 2 });
  const totalIncomeValue = parseFloat((balanceValue + withdrawalsValue).toFixed(2));

  return {
    __typename: "PoolBalance",
    totalIncome: mockQuotes(totalIncomeValue),
    balance: mockQuotes(balanceValue),
    withdrawals: mockQuotes(withdrawalsValue),
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
    description: faker.lorem.paragraph(),
    image: faker.image.url(),
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

/** Shared pool resolver – passes through if slug is unknown. */
function resolvePool(variables: {
  id?: string;
  slug?: string;
  contractId?: string;
}) {
  const { id, slug } = variables;
  if (slug !== "demo" && slug !== undefined) return null;
  faker.seed(0);
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

  // ---------------------------------------------------------------------------
  // User queries
  // ---------------------------------------------------------------------------

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
            edges: [mockPoolEdge(), mockPoolEdge(), mockPoolEdge()],
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

  // ---------------------------------------------------------------------------
  // Search queries
  // ---------------------------------------------------------------------------

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
