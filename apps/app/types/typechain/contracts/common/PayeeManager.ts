/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface PayeeManagerInterface extends Interface {
  getFunction(
    nameOrSignature: "payee" | "payeeCount" | "shares" | "totalShares"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "Initialized" | "PayeeAdded"): EventFragment;

  encodeFunctionData(functionFragment: "payee", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "payeeCount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "shares", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "totalShares",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "payee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "payeeCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "shares", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalShares",
    data: BytesLike
  ): Result;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PayeeAddedEvent {
  export type InputTuple = [account: AddressLike, shares: BigNumberish];
  export type OutputTuple = [account: string, shares: bigint];
  export interface OutputObject {
    account: string;
    shares: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface PayeeManager extends BaseContract {
  connect(runner?: ContractRunner | null): PayeeManager;
  waitForDeployment(): Promise<this>;

  interface: PayeeManagerInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  payee: TypedContractMethod<[index: BigNumberish], [string], "view">;

  payeeCount: TypedContractMethod<[], [bigint], "view">;

  shares: TypedContractMethod<[account: AddressLike], [bigint], "view">;

  totalShares: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "payee"
  ): TypedContractMethod<[index: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "payeeCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "shares"
  ): TypedContractMethod<[account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "totalShares"
  ): TypedContractMethod<[], [bigint], "view">;

  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "PayeeAdded"
  ): TypedContractEvent<
    PayeeAddedEvent.InputTuple,
    PayeeAddedEvent.OutputTuple,
    PayeeAddedEvent.OutputObject
  >;

  filters: {
    "Initialized(uint64)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "PayeeAdded(address,uint256)": TypedContractEvent<
      PayeeAddedEvent.InputTuple,
      PayeeAddedEvent.OutputTuple,
      PayeeAddedEvent.OutputObject
    >;
    PayeeAdded: TypedContractEvent<
      PayeeAddedEvent.InputTuple,
      PayeeAddedEvent.OutputTuple,
      PayeeAddedEvent.OutputObject
    >;
  };
}
