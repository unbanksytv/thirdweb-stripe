import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IMintableERC721Interface extends utils.Interface {
    functions: {
        "mintTo(address,string)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "mintTo"): FunctionFragment;
    encodeFunctionData(functionFragment: "mintTo", values: [string, string]): string;
    decodeFunctionResult(functionFragment: "mintTo", data: BytesLike): Result;
    events: {
        "TokensMinted(address,uint256,string)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "TokensMinted"): EventFragment;
}
export interface TokensMintedEventObject {
    mintedTo: string;
    tokenIdMinted: BigNumber;
    uri: string;
}
export declare type TokensMintedEvent = TypedEvent<[
    string,
    BigNumber,
    string
], TokensMintedEventObject>;
export declare type TokensMintedEventFilter = TypedEventFilter<TokensMintedEvent>;
export interface IMintableERC721 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IMintableERC721Interface;
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
        mintTo(to: string, uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    mintTo(to: string, uri: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        mintTo(to: string, uri: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "TokensMinted(address,uint256,string)"(mintedTo?: string | null, tokenIdMinted?: BigNumberish | null, uri?: null): TokensMintedEventFilter;
        TokensMinted(mintedTo?: string | null, tokenIdMinted?: BigNumberish | null, uri?: null): TokensMintedEventFilter;
    };
    estimateGas: {
        mintTo(to: string, uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        mintTo(to: string, uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
