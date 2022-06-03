import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace MinimalForwarder {
    type ForwardRequestStruct = {
        from: string;
        to: string;
        value: BigNumberish;
        gas: BigNumberish;
        nonce: BigNumberish;
        data: BytesLike;
    };
    type ForwardRequestStructOutput = [
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        string
    ] & {
        from: string;
        to: string;
        value: BigNumber;
        gas: BigNumber;
        nonce: BigNumber;
        data: string;
    };
}
export interface ForwarderInterface extends utils.Interface {
    functions: {
        "execute((address,address,uint256,uint256,uint256,bytes),bytes)": FunctionFragment;
        "getNonce(address)": FunctionFragment;
        "verify((address,address,uint256,uint256,uint256,bytes),bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "execute" | "getNonce" | "verify"): FunctionFragment;
    encodeFunctionData(functionFragment: "execute", values: [MinimalForwarder.ForwardRequestStruct, BytesLike]): string;
    encodeFunctionData(functionFragment: "getNonce", values: [string]): string;
    encodeFunctionData(functionFragment: "verify", values: [MinimalForwarder.ForwardRequestStruct, BytesLike]): string;
    decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verify", data: BytesLike): Result;
    events: {};
}
export interface Forwarder extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ForwarderInterface;
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
        execute(req: MinimalForwarder.ForwardRequestStruct, signature: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getNonce(from: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        verify(req: MinimalForwarder.ForwardRequestStruct, signature: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
    };
    execute(req: MinimalForwarder.ForwardRequestStruct, signature: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getNonce(from: string, overrides?: CallOverrides): Promise<BigNumber>;
    verify(req: MinimalForwarder.ForwardRequestStruct, signature: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        execute(req: MinimalForwarder.ForwardRequestStruct, signature: BytesLike, overrides?: CallOverrides): Promise<[boolean, string]>;
        getNonce(from: string, overrides?: CallOverrides): Promise<BigNumber>;
        verify(req: MinimalForwarder.ForwardRequestStruct, signature: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        execute(req: MinimalForwarder.ForwardRequestStruct, signature: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getNonce(from: string, overrides?: CallOverrides): Promise<BigNumber>;
        verify(req: MinimalForwarder.ForwardRequestStruct, signature: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        execute(req: MinimalForwarder.ForwardRequestStruct, signature: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getNonce(from: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        verify(req: MinimalForwarder.ForwardRequestStruct, signature: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
