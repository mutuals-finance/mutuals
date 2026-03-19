import type {
  ConfigurableTaskDefinition as OriginalConfigurableTaskDefinition,
  HardhatRuntimeEnvironment,
  Network,
  RunSuperFunction,
  TaskArguments,
} from "hardhat/types/runtime";
import type {
  BaseContract,
  Contract,
  ContractFactory,
  ethers as defaultEthers,
  Signer,
} from "ethers";
import type { DeployProxyOptions } from "@openzeppelin/hardhat-upgrades/src/utils";
import type { HardhatUpgrades } from "@openzeppelin/hardhat-upgrades";
import type {
  ContractAddressOrInstance,
  DeployBeaconOptions,
  UpgradeProxyOptions,
} from "@openzeppelin/hardhat-upgrades/dist/utils";
import type {
  DeploymentsExtension as OriginalDeploymentsExtension,
  DeployFunction as HardhatDeployFunction,
} from "hardhat-deploy/dist/types";
import type { HardhatUserConfig } from "hardhat/types/config";
import type { Deployment } from "hardhat-deploy/types";

import type { TASKS } from "@/tasks";
import type { networks } from "@/config/networks";
import type { NamedAccounts } from "@/config/accounts";
import type {
  Pool,
  PoolFactory,
  UpgradeableBeacon,
  ModuleRegistry,
  DirectDistributionModule,
  VestingDistributionModule,
  TokenLimitDistributionModule,
  PriorityDistributionModule,
  OnchainMappingValidationModule,
  MerkleTreeValidationModule,
} from "#/types/typechain";
import type {
  FactoryOptions,
  HardhatEthersHelpers,
} from "@nomicfoundation/hardhat-ethers/types";
import type { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";
import {
  DefenderDeployOptions,
  DeployFactoryOpts,
  StandaloneOptions,
} from "@openzeppelin/hardhat-upgrades/src/utils/options";

declare module "hardhat/config" {
  type EnvironmentExtender = (
    environment: CustomHardHatRuntimeEnvironment
  ) => void;

  function extendEnvironment(extender: EnvironmentExtender): void;
  export type ActionType<ArgsT extends TaskArguments, TActionReturnType> = (
    taskArgs: ArgsT,
    environment: CustomHardHatRuntimeEnvironment,
    runSuper: RunSuperFunction<ArgsT>
  ) => Promise<TActionReturnType>;

  export function task<ArgsT extends TaskArguments, TActionReturnType = never>(
    name: keyof typeof TASKS,
    description?: string,
    action?: ActionType<ArgsT, TActionReturnType>
  ): ConfigurableTaskDefinition;

  export function subtask<
    ArgsT extends TaskArguments,
    TActionReturnType = never,
  >(
    name: string, // todo
    description?: string,
    action?: ActionType<ArgsT, TActionReturnType>
  ): ConfigurableTaskDefinition;

  type ConfigurableTaskDefinition = OriginalConfigurableTaskDefinition & {
    setAction<ArgsT extends TaskArguments, TActionReturnType = never>(
      action: ActionType<ArgsT, TActionReturnType>
    ): ConfigurableTaskDefinition;
  };
}

declare module "hardhat/types/runtime" {
  interface DeploymentsExtension
    extends Omit<OriginalDeploymentsExtension, "createFixture"> {
    all<TContracts extends Contracts = Contracts>(): Promise<{
      [Property in keyof TContracts]: Deployment;
    }>;
    createFixture<T, O>(
      function_: FixtureFunction<T, O>,
      id?: string
    ): (options?: O) => Promise<T>;
  }
  type FixtureFunction<T, O> = (
    environment: CustomHardHatRuntimeEnvironment,
    options?: O
  ) => Promise<T>;
  export interface HardhatRuntimeEnvironment {
    deployments: DeploymentsExtension;
    namedAccounts: NamedAccounts;
  }
}

interface GenericDeployFunction {
  <
    TC extends BaseContract = Contract,
    TContract extends ContractFactory = ContractFactory,
  >(
    ImplFactory: TContract,
    args?: unknown[],
    options?: DeployProxyOptions
  ): Promise<InstanceOfContract<TC>>;
  <
    TC extends BaseContract = Contract,
    TContract extends ContractFactory = ContractFactory,
  >(
    ImplFactory: TContract,
    options?: DeployProxyOptions
  ): Promise<InstanceOfContract<TC>>;
}

type GenericUpgradeFunction = <
  TC extends BaseContract = Contract,
  TFactory extends ContractFactory = ContractFactory,
>(
  proxy: ContractAddressOrInstance,
  ImplFactory: TFactory,
  options?: UpgradeProxyOptions
) => Promise<InstanceOfContract<TC>>;

type BaseDeployFunction = <
  TC extends BaseContract = Contract,
  TContract extends ContractFactory = ContractFactory,
>(
  ImplFactory: TContract,
  args: unknown[],
  options: DeployProxyOptions,
  signer: Signer
) => Promise<InstanceOfContract<TC>>;

interface DeployFunctionArgs {
  args?: unknown[];
  contractName: keyof Contracts;
  options?: StandaloneOptions & DeployFactoryOpts & DefenderDeployOptions;
}

type DeployOrUpgradeProxyFunctionArgs = Omit<DeployFunctionArgs, "options"> & {
  options?: DeployProxyOptions;
};

type DeployOrUpgradeProxyFunction = <TContract extends BaseContract>(
  args: DeployOrUpgradeProxyFunctionArgs
) => Promise<InstanceOfContract<TContract>>;

interface DeployOrUpgradeBeaconFunctionArgs {
  args?: unknown[];
  contractName: keyof Contracts;
  options?: DeployBeaconOptions;
}

type DeployOrUpgradeBeaconFunction = <TContract extends BaseContract>(
  args: DeployOrUpgradeBeaconFunctionArgs
) => Promise<InstanceOfContract<TContract>>;

type DeployNonUpgradeableFunction = <TContract extends BaseContract>({
  contractName,
  args,
  options,
}: {
  contractName: keyof Contracts;
  args?: unknown[];
  options?: FactoryOptions;
}) => Promise<InstanceOfContract<TContract>>;

interface CustomHardhatUpgrades extends HardhatUpgrades {
  deployBeacon: GenericDeployFunction; // overridden because of a mismatch in ethers types
  deployProxy: GenericDeployFunction; // overridden because of a mismatch in ethers types
  upgradeBeacon: GenericUpgradeFunction; // overridden because of a mismatch in ethers types
  upgradeProxy: GenericUpgradeFunction; // overridden because of a mismatch in ethers types
}

declare global {
  type TupleToObject<
    T extends readonly never[],
    M extends Record<Exclude<keyof T, keyof never[]>, PropertyKey>,
  > = { [K in Exclude<keyof T, keyof never[]> as M[K]]: T[K] };

  type ParametersToObject<
    TFunction extends (...args: never[]) => never,
    TKeys extends Record<
      Exclude<keyof Parameters<TFunction>, keyof never[]>,
      PropertyKey
    >,
  > = TupleToObject<Parameters<TFunction>, TKeys>;

  type ClassType<T> = new (...args: never[]) => T;

  type Constructor = new (...args: never[]) => object;

  type ClassInstance<T> = InstanceType<ClassType<T>>;

  type RequiredKeys<T, K extends keyof T> = Required<Pick<T, K>> & Omit<T, K>;
  type InstanceOfContract<TContract extends BaseContract> = ReturnType<
    TContract["attach"]
  >;
  type TypeChainBaseContract = Contract & { contractName: string };
  type NamedSigners = {
    [Property in keyof NamedAccounts]: SignerWithAddress;
  };
  type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
  };
  let hre: CustomHardHatRuntimeEnvironment; // todo remove from global types to prevent usage

  export interface Contracts {
    DirectDistributionModule?: InstanceOfContract<DirectDistributionModule>;
    MerkleTreeValidationModule?: InstanceOfContract<MerkleTreeValidationModule>;
    ModuleRegistry?: InstanceOfContract<ModuleRegistry>;
    OnchainMappingValidationModule?: InstanceOfContract<OnchainMappingValidationModule>;
    Pool?: InstanceOfContract<Pool>;
    PoolFactory?: InstanceOfContract<PoolFactory>;
    PriorityDistributionModule?: InstanceOfContract<PriorityDistributionModule>;
    TokenLimitDistributionModule?: InstanceOfContract<TokenLimitDistributionModule>;
    UpgradeableBeacon?: InstanceOfContract<UpgradeableBeacon>;
    VestingDistributionModule?: InstanceOfContract<VestingDistributionModule>;
  }

  type CustomHardHatRuntimeEnvironment = Omit<
    HardhatRuntimeEnvironment,
    "run" | "upgrades" | "ethers"
  > & {
    config: HardhatUserConfig;
    run: (
      name: keyof typeof TASKS,
      taskArguments?: Parameters<(typeof TASKS)[typeof name]["run"]>[0]
    ) => Promise<ReturnType<(typeof TASKS)[typeof name]["run"]>>;
    upgrades: CustomHardhatUpgrades;
    defender: CustomHardhatUpgrades;
    network: Omit<Network, "name"> & { name: keyof typeof networks };
    ethers: defaultEthers & HardhatEthersHelpers;
    getSigners: () => Promise<SignerWithAddress[]>;
    deployOrUpgradeProxy: DeployOrUpgradeProxyFunction;
    deployOrUpgradeBeacon: DeployOrUpgradeBeaconFunction;
    deployNonUpgradeable: DeployNonUpgradeableFunction;
    isNetworkStaging: () => boolean;
    isNetworkLocal: () => boolean;
    isNetworkProduction: () => boolean;
    log: Console["log"];
    trace: Console["log"];
  };

  interface CustomHardhatDeployFunction extends HardhatDeployFunction {
    (hre: CustomHardHatRuntimeEnvironment): Promise<unknown>;
  }
}
