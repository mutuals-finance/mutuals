/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
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

export interface IContractMetadataInterface extends Interface {
  getFunction(
    nameOrSignature: "contractURI" | "setContractURI"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "ContractURIUpdated"): EventFragment;

  encodeFunctionData(
    functionFragment: "contractURI",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setContractURI",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "contractURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setContractURI",
    data: BytesLike
  ): Result;
}

export namespace ContractURIUpdatedEvent {
  export type InputTuple = [prevURI: string, newURI: string];
  export type OutputTuple = [prevURI: string, newURI: string];
  export interface OutputObject {
    prevURI: string;
    newURI: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IContractMetadata extends BaseContract {
  connect(runner?: ContractRunner | null): IContractMetadata;
  waitForDeployment(): Promise<this>;

  interface: IContractMetadataInterface;

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

  contractURI: TypedContractMethod<[], [string], "view">;

  setContractURI: TypedContractMethod<[_uri: string], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "contractURI"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setContractURI"
  ): TypedContractMethod<[_uri: string], [void], "nonpayable">;

  getEvent(
    key: "ContractURIUpdated"
  ): TypedContractEvent<
    ContractURIUpdatedEvent.InputTuple,
    ContractURIUpdatedEvent.OutputTuple,
    ContractURIUpdatedEvent.OutputObject
  >;

  filters: {
    "ContractURIUpdated(string,string)": TypedContractEvent<
      ContractURIUpdatedEvent.InputTuple,
      ContractURIUpdatedEvent.OutputTuple,
      ContractURIUpdatedEvent.OutputObject
    >;
    ContractURIUpdated: TypedContractEvent<
      ContractURIUpdatedEvent.InputTuple,
      ContractURIUpdatedEvent.OutputTuple,
      ContractURIUpdatedEvent.OutputObject
    >;
  };
}
