import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IERC721Interface extends utils.Interface {
    functions: {
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "getApproved(uint256)": FunctionFragment;
        "isApprovedForAll(address,address)": FunctionFragment;
        "ownerOf(uint256)": FunctionFragment;
        "safeTransferFrom(address,address,uint256)": FunctionFragment;
        "safeTransferFrom(address,address,uint256,bytes)": FunctionFragment;
        "setApprovalForAll(address,bool)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "approve" | "balanceOf" | "getApproved" | "isApprovedForAll" | "ownerOf" | "safeTransferFrom(address,address,uint256)" | "safeTransferFrom(address,address,uint256,bytes)" | "setApprovalForAll" | "transferFrom"): FunctionFragment;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "getApproved", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "isApprovedForAll", values: [string, string]): string;
    encodeFunctionData(functionFragment: "ownerOf", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom(address,address,uint256)", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom(address,address,uint256,bytes)", values: [string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "setApprovalForAll", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getApproved", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isApprovedForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom(address,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom(address,address,uint256,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "ApprovalForAll(address,address,bool)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}
export interface ApprovalEventObject {
    _owner: string;
    _approved: string;
    _tokenId: BigNumber;
}
export declare type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject>;
export declare type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export interface ApprovalForAllEventObject {
    _owner: string;
    _operator: string;
    _approved: boolean;
}
export declare type ApprovalForAllEvent = TypedEvent<[
    string,
    string,
    boolean
], ApprovalForAllEventObject>;
export declare type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;
export interface TransferEventObject {
    _from: string;
    _to: string;
    _tokenId: BigNumber;
}
export declare type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject>;
export declare type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface IERC721 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IERC721Interface;
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
        approve(_approved: string, _tokenId: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        balanceOf(_owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getApproved(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        isApprovedForAll(_owner: string, _operator: string, overrides?: CallOverrides): Promise<[boolean]>;
        ownerOf(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        "safeTransferFrom(address,address,uint256)"(_from: string, _to: string, _tokenId: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(_from: string, _to: string, _tokenId: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setApprovalForAll(_operator: string, _approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferFrom(_from: string, _to: string, _tokenId: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    approve(_approved: string, _tokenId: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    balanceOf(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    getApproved(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    isApprovedForAll(_owner: string, _operator: string, overrides?: CallOverrides): Promise<boolean>;
    ownerOf(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    "safeTransferFrom(address,address,uint256)"(_from: string, _to: string, _tokenId: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "safeTransferFrom(address,address,uint256,bytes)"(_from: string, _to: string, _tokenId: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setApprovalForAll(_operator: string, _approved: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferFrom(_from: string, _to: string, _tokenId: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        approve(_approved: string, _tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        balanceOf(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        getApproved(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        isApprovedForAll(_owner: string, _operator: string, overrides?: CallOverrides): Promise<boolean>;
        ownerOf(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        "safeTransferFrom(address,address,uint256)"(_from: string, _to: string, _tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "safeTransferFrom(address,address,uint256,bytes)"(_from: string, _to: string, _tokenId: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        setApprovalForAll(_operator: string, _approved: boolean, overrides?: CallOverrides): Promise<void>;
        transferFrom(_from: string, _to: string, _tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Approval(address,address,uint256)"(_owner?: string | null, _approved?: string | null, _tokenId?: BigNumberish | null): ApprovalEventFilter;
        Approval(_owner?: string | null, _approved?: string | null, _tokenId?: BigNumberish | null): ApprovalEventFilter;
        "ApprovalForAll(address,address,bool)"(_owner?: string | null, _operator?: string | null, _approved?: null): ApprovalForAllEventFilter;
        ApprovalForAll(_owner?: string | null, _operator?: string | null, _approved?: null): ApprovalForAllEventFilter;
        "Transfer(address,address,uint256)"(_from?: string | null, _to?: string | null, _tokenId?: BigNumberish | null): TransferEventFilter;
        Transfer(_from?: string | null, _to?: string | null, _tokenId?: BigNumberish | null): TransferEventFilter;
    };
    estimateGas: {
        approve(_approved: string, _tokenId: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        balanceOf(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        getApproved(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        isApprovedForAll(_owner: string, _operator: string, overrides?: CallOverrides): Promise<BigNumber>;
        ownerOf(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256)"(_from: string, _to: string, _tokenId: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256,bytes)"(_from: string, _to: string, _tokenId: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setApprovalForAll(_operator: string, _approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferFrom(_from: string, _to: string, _tokenId: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        approve(_approved: string, _tokenId: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(_owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getApproved(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isApprovedForAll(_owner: string, _operator: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ownerOf(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256)"(_from: string, _to: string, _tokenId: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(_from: string, _to: string, _tokenId: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setApprovalForAll(_operator: string, _approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(_from: string, _to: string, _tokenId: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
