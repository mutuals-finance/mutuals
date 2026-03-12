# GraphQL Queries and Mutations

This document provides an overview of all available GraphQL queries and mutations.

## Table of Contents

- [Fragments](#fragments)
- [Queries](#queries)
  - [User Queries](#user-queries)
  - [Pool Queries](#pool-queries)
  - [Search Queries](#search-queries)
  - [Node Query](#node-query)
- [Mutations](#mutations)
  - [User Mutations](#user-mutations)
  - [Pool Mutations](#pool-mutations)
  - [Claim Mutations](#claim-mutations)
  - [Role Mutations](#role-mutations)

## Fragments

### Token & Balance Fragments
- **TokenFragment** - Complete token information (address, symbol, name, decimals, etc.)
- **TokenBalanceFragment** - Token balance with token details
- **PoolDayBalanceFragment** - Daily pool balance with token info
- **PoolHourBalanceFragment** - Hourly pool balance with token info

### Transaction Fragments
- **DepositFragment** - Deposit transaction details
- **WithdrawalFragment** - Withdrawal transaction details
- **TxFragment** - Base transaction (gas, timestamps)

### Pool Fragments
- **PoolContract** - Pool contract details
- **PoolWithOwnerAndContract** - Complete pool with owner and contract

### Other Fragments
- **ClaimFragment** - Claim details
- **ModuleFragment** - Module information
- **EVMAccountFragment** - EVM account data

## Queries

### User Queries

#### `GET_USER_BY_ID`
Fetch a user by their ID.

```typescript
import { GET_USER_BY_ID } from '@mutuals/graphql-client-nextjs';

const { data } = useQuery(GET_USER_BY_ID, {
  variables: { id: 'user-id' }
});
```

#### `GET_USER_BY_USERNAME`
Fetch a user by their username.

```typescript
const { data } = useQuery(GET_USER_BY_USERNAME, {
  variables: { username: 'johndoe' }
});
```

#### `GET_USER_BY_WALLET_ADDRESS`
Fetch a user by their wallet address.

```typescript
const { data } = useQuery(GET_USER_BY_WALLET_ADDRESS, {
  variables: { address: '0x...' }
});
```

#### `VIEWER`
Get the currently authenticated user.

```typescript
const { data } = useQuery(VIEWER);
```

### Pool Queries

#### `POOL`
Basic pool query by ID, slug, or contract ID.

```typescript
const { data } = useQuery(POOL, {
  variables: { slug: 'my-pool' }
});
```

#### `GET_POOL_WITH_CONTRACT_DETAILS`
Get complete pool information including contract, factory, and claims.

```typescript
const { data } = useQuery(GET_POOL_WITH_CONTRACT_DETAILS, {
  variables: { id: 'pool-id' }
});
```

#### `GET_POOL_DAY_BALANCES`
Get daily balance history for a pool.

```typescript
const { data } = useQuery(GET_POOL_DAY_BALANCES, {
  variables: { slug: 'my-pool' }
});
```

#### `GET_POOL_HOUR_BALANCES`
Get hourly balance history for a pool.

```typescript
const { data } = useQuery(GET_POOL_HOUR_BALANCES, {
  variables: { slug: 'my-pool' }
});
```

#### `GET_POOL_DEPOSITS`
Get all deposits for a pool.

```typescript
const { data } = useQuery(GET_POOL_DEPOSITS, {
  variables: { slug: 'my-pool' }
});
```

#### `GET_POOL_WITHDRAWALS`
Get all withdrawals for a pool.

```typescript
const { data } = useQuery(GET_POOL_WITHDRAWALS, {
  variables: { slug: 'my-pool' }
});
```

#### `GET_POOL_TRANSACTIONS`
Get all transactions (deposits + withdrawals) for a pool.

```typescript
const { data } = useQuery(GET_POOL_TRANSACTIONS, {
  variables: { slug: 'my-pool' }
});
```

### Search Queries

#### `SEARCH_USERS`
Search for users.

```typescript
const { data } = useQuery(SEARCH_USERS, {
  variables: {
    query: 'john',
    limit: 10,
    usernameWeight: 2.0
  }
});
```

#### `SEARCH_POOLS`
Search for pools.

```typescript
const { data } = useQuery(SEARCH_POOLS, {
  variables: {
    query: 'community',
    limit: 20,
    nameWeight: 2.0,
    descriptionWeight: 1.0
  }
});
```

### Node Query

#### `GET_NODE`
Universal query to fetch any node by ID (works for all types implementing the Node interface).

```typescript
const { data } = useQuery(GET_NODE, {
  variables: { id: 'any-node-id' }
});
```

## Mutations

### User Mutations

#### `USER_REGISTER`
Register a new user.

```typescript
const [userRegister] = useMutation(USER_REGISTER);

await userRegister();
```

#### `USER_UPDATE`
Update user information.

```typescript
const [userUpdate] = useMutation(USER_UPDATE);

await userUpdate({
  variables: {
    input: {
      username: 'newusername'
    }
  }
});
```

#### `USER_REQUEST_DELETION`
Request user account deletion.

```typescript
const [userRequestDeletion] = useMutation(USER_REQUEST_DELETION);

await userRequestDeletion({
  variables: {
    redirectUrl: 'https://example.com/goodbye'
  }
});
```

#### `USER_DELETE`
Delete user account (requires token from request deletion).

```typescript
const [userDelete] = useMutation(USER_DELETE);

await userDelete({
  variables: {
    token: 'deletion-token'
  }
});
```

### Pool Mutations

#### `POOL_CREATE`
Create a new pool.

```typescript
const [poolCreate] = useMutation(POOL_CREATE);

await poolCreate({
  variables: {
    input: {
      name: 'My Pool',
      description: 'Pool description',
      slug: 'my-pool',
      donationBps: 100
    }
  }
});
```

#### `POOL_UPDATE`
Update an existing pool.

```typescript
const [poolUpdate] = useMutation(POOL_UPDATE);

await poolUpdate({
  variables: {
    id: 'pool-id',
    input: {
      name: 'Updated Name',
      description: 'Updated description'
    }
  }
});
```

#### `POOL_DELETE`
Delete a pool.

```typescript
const [poolDelete] = useMutation(POOL_DELETE);

await poolDelete({
  variables: {
    id: 'pool-id'
  }
});
```

### Claim Mutations

#### `POOL_CLAIM_CREATE`
Create a single claim for a pool.

```typescript
const [claimCreate] = useMutation(POOL_CLAIM_CREATE);

await claimCreate({
  variables: {
    poolId: 'pool-id',
    input: {
      label: 'My Claim',
      validationId: 'validation-module-id',
      distributionId: 'distribution-module-id',
      validationData: { /* ... */ },
      distributionData: { /* ... */ }
    }
  }
});
```

#### `POOL_CLAIM_UPDATE`
Update a claim.

```typescript
const [claimUpdate] = useMutation(POOL_CLAIM_UPDATE);

await claimUpdate({
  variables: {
    poolId: 'pool-id',
    input: {
      claimId: 'claim-id',
      label: 'Updated Label'
    }
  }
});
```

#### `POOL_CLAIM_DELETE`
Delete a claim.

```typescript
const [claimDelete] = useMutation(POOL_CLAIM_DELETE);

await claimDelete({
  variables: {
    poolId: 'pool-id',
    claimId: 'claim-id'
  }
});
```

#### `POOL_CLAIM_BULK_CREATE`
Create multiple claims at once.

```typescript
const [claimBulkCreate] = useMutation(POOL_CLAIM_BULK_CREATE);

await claimBulkCreate({
  variables: {
    poolId: 'pool-id',
    claims: [
      { label: 'Claim 1', validationId: '...', distributionId: '...' },
      { label: 'Claim 2', validationId: '...', distributionId: '...' }
    ],
    errorPolicy: 'REJECT_FAILED_ROWS' // or 'REJECT_EVERYTHING' or 'IGNORE_FAILED'
  }
});
```

#### `POOL_CLAIM_BULK_UPDATE`
Update multiple claims at once.

```typescript
const [claimBulkUpdate] = useMutation(POOL_CLAIM_BULK_UPDATE);

await claimBulkUpdate({
  variables: {
    poolId: 'pool-id',
    claims: [
      { claimId: 'claim-1', label: 'Updated 1' },
      { claimId: 'claim-2', label: 'Updated 2' }
    ]
  }
});
```

#### `POOL_CLAIM_BULK_DELETE`
Delete multiple claims at once.

```typescript
const [claimBulkDelete] = useMutation(POOL_CLAIM_BULK_DELETE);

await claimBulkDelete({
  variables: {
    poolId: 'pool-id',
    claimIds: ['claim-1', 'claim-2', 'claim-3']
  }
});
```

### Role Mutations

#### `ROLE_UPDATE`
Update user roles (admin only).

```typescript
const [roleUpdate] = useMutation(ROLE_UPDATE);

await roleUpdate({
  variables: {
    role: 'BETA_TESTER',
    input: {
      addRoles: ['EARLY_ACCESS'],
      removeRoles: ['ADMIN']
    }
  }
});
```

## Error Handling

All queries and mutations follow a consistent error handling pattern. Results are returned as unions that include specific error types:

```typescript
const { data } = useQuery(GET_USER_BY_ID, {
  variables: { id: 'user-id' }
});

if (data?.userById.__typename === 'ErrUserNotFound') {
  console.error('User not found:', data.userById.message);
} else if (data?.userById.__typename === 'User') {
  console.log('User:', data.userById);
}
```

Common error types:
- `ErrNotAuthorized` - User is not authorized for this operation
- `ErrInvalidInput` - Input validation failed (includes `parameters` and `reasons`)
- `ErrUserNotFound` - User does not exist
- `ErrPoolNotFound` - Pool does not exist
- `ErrUserAlreadyExists` - User already registered
- `ErrUsernameNotAvailable` - Username is taken
- `ErrAuthenticationFailed` - Authentication failed
- `ErrDoesNotOwnRequiredToken` - User doesn't own required token for access

## Best Practices

1. **Use fragments** - Import and reuse fragments to keep queries consistent
2. **Handle all error cases** - Check `__typename` to handle different result types
3. **Optimize queries** - Only request the fields you need
4. **Use variables** - Always use variables instead of string interpolation
5. **Cache management** - Configure Apollo cache policies for optimal performance

