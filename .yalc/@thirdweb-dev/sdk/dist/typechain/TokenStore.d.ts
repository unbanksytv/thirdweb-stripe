import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace ITokenBundle {
    type TokenStruct = {
        assetContract: string;
        tokenType: BigNumberish;
        tokenId: BigNumberish;
        totalAmount: BigNumberish;
    };
    type TokenStructOutput = [string, number, BigNumber, BigNumber] & {
        assetContract: string;
        tokenType: number;
        tokenId: BigNumber;
        totalAmount: BigNumber;
    };
}
export interface TokenStoreInterface extends utils.Interface {
    functions: {
        "getTokenCountOfBundle(uint256)": FunctionFragment;
        "getTokenOfBundle(uint256,uint256)": FunctionFragment;
        "getUriOfBundle(uint256)": FunctionFragment;
        "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
        "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
        "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getTokenCountOfBundle" | "getTokenOfBundle" | "getUriOfBundle" | "onERC1155BatchReceived" | "onERC1155Received" | "onERC721Received" | "supportsInterface"): FunctionFragment;
    encodeFunctionData(functionFragment: "getTokenCountOfBundle", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getTokenOfBundle", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getUriOfBundle", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "onERC1155BatchReceived", values: [string, string, BigNumberish[], BigNumberish[], BytesLike]): string;
    encodeFunctionData(functionFragment: "onERC1155Received", values: [string, string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "onERC721Received", values: [string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "getTokenCountOfBundle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTokenOfBundle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUriOfBundle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155BatchReceived", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC721Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    events: {};
}
export interface TokenStore extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TokenStoreInterface;
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
        getTokenCountOfBundle(_bundleId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getTokenOfBundle(_bundleId: BigNumberish, index: BigNumberish, overrides?: CallOverrides): Promise<[ITokenBundle.TokenStructOutput]>;
        getUriOfBundle(_bundleId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
    };
    getTokenCountOfBundle(_bundleId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getTokenOfBundle(_bundleId: BigNumberish, index: BigNumberish, overrides?: CallOverrides): Promise<ITokenBundle.TokenStructOutput>;
    getUriOfBundle(_bundleId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        getTokenCountOfBundle(_bundleId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getTokenOfBundle(_bundleId: BigNumberish, index: BigNumberish, overrides?: CallOverrides): Promise<ITokenBundle.TokenStructOutput>;
        getUriOfBundle(_bundleId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: CallOverrides): Promise<string>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: CallOverrides): Promise<string>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: CallOverrides): Promise<string>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        getTokenCountOfBundle(_bundleId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getTokenOfBundle(_bundleId: BigNumberish, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getUriOfBundle(_bundleId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getTokenCountOfBundle(_bundleId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTokenOfBundle(_bundleId: BigNumberish, index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUriOfBundle(_bundleId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
