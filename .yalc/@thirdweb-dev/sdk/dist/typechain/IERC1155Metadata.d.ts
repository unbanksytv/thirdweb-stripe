import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IERC1155MetadataInterface extends utils.Interface {
    functions: {
        "uri(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "uri"): FunctionFragment;
    encodeFunctionData(functionFragment: "uri", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "uri", data: BytesLike): Result;
    events: {};
}
export interface IERC1155Metadata extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IERC1155MetadataInterface;
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
        uri(_id: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
    };
    uri(_id: BigNumberish, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        uri(_id: BigNumberish, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        uri(_id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        uri(_id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
