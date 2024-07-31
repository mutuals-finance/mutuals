# Testing Guidelines #

## Rationale ##

This document aims to address the following questions for tests of `@mutuals/contracts`:

- How should tests be laid out? File-per-contract, etc.
- What testing frameworks do we use?
- How should the tests themselves look?

## Test Suite Structure ##

### All Tests Under `test` ###

All tests -- regardless of their type (e.g., unit, integration, etc.) -- must
reside under the `test` directory.

### One-Directory-One-Contract ###

All unit tests should be arranged such that all tests for a given module are in
the same directory. The most obvious choice for what constitutes a "module" is a
smart contract.

## Test Layout ##

### Use BDD Nomenclature ###

`@mutuals/contracts` uses [Mocha](https://mochajs.org) as its testing framework.
Broadly speaking, Mocha exposes three different primitives for writing tests:

- `describe`
    - Used to *describe* a given component of the system being tested
    - Can be nested
- `context`
    - Used to describe the situation being considered
- `it`
    - Used to make an assertion about the behaviour of the system

Additionally, the ability to nest these primitives must be used eagerly.

### Test Messages Are Specific ###

Human-readable test messages must be clear, accurate, and specific. Some words
essentially should never appear in these messages. For example:

- "properly"
- "correctly"
- "appropriately"

## Miscellaneous ##

### All Tests Are Written In Typescript ###

All tests are written in Typescript.

### All Tests Are Asynchronous ###

All tests must be written using asynchronous, anonymous functions.
