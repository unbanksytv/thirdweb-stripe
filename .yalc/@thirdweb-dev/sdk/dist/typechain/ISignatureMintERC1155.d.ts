import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace ISignatureMintERC1155 {
    type MintRequestStruct = {
        to: string;
        royaltyRecipient: string;
        royaltyBps: BigNumberish;
        primarySaleRecipient: string;
        tokenId: BigNumberish;
        uri: string;
        quantity: BigNumberish;
        pricePerToken: BigNumberish;
        currency: string;
        validityStartTimestamp: BigNumberish;
        validityEndTimestamp: BigNumberish;
        uid: BytesLike;
    };
    type MintRequestStructOutput = [
        string,
        string,
        BigNumber,
        string,
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        string
    ] & {
        to: string;
        royaltyRecipient: string;
        royaltyBps: BigNumber;
        primarySaleRecipient: string;
        tokenId: BigNumber;
        uri: string;
        quantity: BigNumber;
        pricePerToken: BigNumber;
        currency: string;
        validityStartTimestamp: BigNumber;
        validityEndTimestamp: BigNumber;
        uid: string;
    };
}
export interface ISignatureMintERC1155Interface extends utils.Interface {
    functions: {
        "mintWithSignature((address,address,uint256,address,uint256,string,uint256,uint256,address,uint128,uint128,bytes32),bytes)": FunctionFragment;
        "verify((address,address,uint256,address,uint256,string,uint256,uint256,address,uint128,uint128,bytes32),bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "mintWithSignature" | "verify"): FunctionFragment;
    encodeFunctionData(functionFragment: "mintWithSignature", values: [ISignatureMintERC1155.MintRequestStruct, BytesLike]): string;
    encodeFunctionData(functionFragment: "verify", values: [ISignatureMintERC1155.MintRequestStruct, BytesLike]): string;
    decodeFunctionResult(functionFragment: "mintWithSignature", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verify", data: BytesLike): Result;
    events: {
        "TokensMintedWithSignature(address,address,uint256,tuple)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "TokensMintedWithSignature"): EventFragment;
}
export interface TokensMintedWithSignatureEventObject {
    signer: string;
    mintedTo: string;
    tokenIdMinted: BigNumber;
    mintRequest: ISignatureMintERC1155.MintRequestStructOutput;
}
export declare type TokensMintedWithSignatureEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    ISignatureMintERC1155.MintRequestStructOutput
], TokensMintedWithSignatureEventObject>;
export declare type TokensMintedWithSignatureEventFilter = TypedEventFilter<TokensMintedWithSignatureEvent>;
export interface ISignatureMintERC1155 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ISignatureMintERC1155Interface;
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
        mintWithSignature(req: ISignatureMintERC1155.MintRequestStruct, signature: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        verify(req: ISignatureMintERC1155.MintRequestStruct, signature: BytesLike, overrides?: CallOverrides): Promise<[boolean, string] & {
            success: boolean;
            signer: string;
        }>;
    };
    mintWithSignature(req: ISignatureMintERC1155.MintRequestStruct, signature: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    verify(req: ISignatureMintERC1155.MintRequestStruct, signature: BytesLike, overrides?: CallOverrides): Promise<[boolean, string] & {
        success: boolean;
        signer: string;
    }>;
    callStatic: {
        mintWithSignature(req: ISignatureMintERC1155.MintRequestStruct, signature: BytesLike, overrides?: CallOverrides): Promise<void>;
        verify(req: ISignatureMintERC1155.MintRequestStruct, signature: BytesLike, overrides?: CallOverrides): Promise<[boolean, string] & {
            success: boolean;
            signer: string;
        }>;
    };
    filters: {
        "TokensMintedWithSignature(address,address,uint256,tuple)"(signer?: string | null, mintedTo?: string | null, tokenIdMinted?: BigNumberish | null, mintRequest?: null): TokensMintedWithSignatureEventFilter;
        TokensMintedWithSignature(signer?: string | null, mintedTo?: string | null, tokenIdMinted?: BigNumberish | null, mintRequest?: null): TokensMintedWithSignatureEventFilter;
    };
    estimateGas: {
        mintWithSignature(req: ISignatureMintERC1155.MintRequestStruct, signature: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        verify(req: ISignatureMintERC1155.MintRequestStruct, signature: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        mintWithSignature(req: ISignatureMintERC1155.MintRequestStruct, signature: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        verify(req: ISignatureMintERC1155.MintRequestStruct, signature: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
