import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ThirdwebContractInterface extends utils.Interface {
    functions: {
        "owner()": FunctionFragment;
        "setOwner(address)": FunctionFragment;
        "tw_initializeOwner(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "owner" | "setOwner" | "tw_initializeOwner"): FunctionFragment;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
    encodeFunctionData(functionFragment: "tw_initializeOwner", values: [string]): string;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tw_initializeOwner", data: BytesLike): Result;
    events: {
        "OwnerUpdated(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OwnerUpdated"): EventFragment;
}
export interface OwnerUpdatedEventObject {
    prevOwner: string;
    newOwner: string;
}
export declare type OwnerUpdatedEvent = TypedEvent<[
    string,
    string
], OwnerUpdatedEventObject>;
export declare type OwnerUpdatedEventFilter = TypedEventFilter<OwnerUpdatedEvent>;
export interface ThirdwebContract extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ThirdwebContractInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        owner(overrides?: CallOverrides): Promise<[string]>;
        setOwner(_newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        tw_initializeOwner(deployer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    owner(overrides?: CallOverrides): Promise<string>;
    setOwner(_newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    tw_initializeOwner(deployer: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        owner(overrides?: CallOverrides): Promise<string>;
        setOwner(_newOwner: string, overrides?: CallOverrides): Promise<void>;
        tw_initializeOwner(deployer: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "OwnerUpdated(address,address)"(prevOwner?: null, newOwner?: null): OwnerUpdatedEventFilter;
        OwnerUpdated(prevOwner?: null, newOwner?: null): OwnerUpdatedEventFilter;
    };
    estimateGas: {
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        setOwner(_newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        tw_initializeOwner(deployer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setOwner(_newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        tw_initializeOwner(deployer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
