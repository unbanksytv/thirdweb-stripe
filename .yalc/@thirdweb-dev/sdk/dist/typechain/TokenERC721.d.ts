import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace ITokenERC721 {
    type MintRequestStruct = {
        to: string;
        royaltyRecipient: string;
        royaltyBps: BigNumberish;
        primarySaleRecipient: string;
        uri: string;
        price: BigNumberish;
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
        string,
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
        uri: string;
        price: BigNumber;
        currency: string;
        validityStartTimestamp: BigNumber;
        validityEndTimestamp: BigNumber;
        uid: string;
    };
}
export interface TokenERC721Interface extends utils.Interface {
    functions: {
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "burn(uint256)": FunctionFragment;
        "contractType()": FunctionFragment;
        "contractURI()": FunctionFragment;
        "contractVersion()": FunctionFragment;
        "getApproved(uint256)": FunctionFragment;
        "getDefaultRoyaltyInfo()": FunctionFragment;
        "getPlatformFeeInfo()": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "getRoleMember(bytes32,uint256)": FunctionFragment;
        "getRoleMemberCount(bytes32)": FunctionFragment;
        "getRoyaltyInfoForToken(uint256)": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "initialize(address,string,string,string,address[],address,address,uint128,uint128,address)": FunctionFragment;
        "isApprovedForAll(address,address)": FunctionFragment;
        "isTrustedForwarder(address)": FunctionFragment;
        "mintTo(address,string)": FunctionFragment;
        "mintWithSignature((address,address,uint256,address,string,uint256,address,uint128,uint128,bytes32),bytes)": FunctionFragment;
        "multicall(bytes[])": FunctionFragment;
        "name()": FunctionFragment;
        "nextTokenIdToMint()": FunctionFragment;
        "owner()": FunctionFragment;
        "ownerOf(uint256)": FunctionFragment;
        "platformFeeBps()": FunctionFragment;
        "platformFeeRecipient()": FunctionFragment;
        "primarySaleRecipient()": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "royaltyInfo(uint256,uint256)": FunctionFragment;
        "safeTransferFrom(address,address,uint256)": FunctionFragment;
        "safeTransferFrom(address,address,uint256,bytes)": FunctionFragment;
        "setApprovalForAll(address,bool)": FunctionFragment;
        "setContractURI(string)": FunctionFragment;
        "setDefaultRoyaltyInfo(address,uint256)": FunctionFragment;
        "setOwner(address)": FunctionFragment;
        "setPlatformFeeInfo(address,uint256)": FunctionFragment;
        "setPrimarySaleRecipient(address)": FunctionFragment;
        "setRoyaltyInfoForToken(uint256,address,uint256)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "symbol()": FunctionFragment;
        "thirdwebFee()": FunctionFragment;
        "tokenByIndex(uint256)": FunctionFragment;
        "tokenOfOwnerByIndex(address,uint256)": FunctionFragment;
        "tokenURI(uint256)": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "verify((address,address,uint256,address,string,uint256,address,uint128,uint128,bytes32),bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DEFAULT_ADMIN_ROLE" | "approve" | "balanceOf" | "burn" | "contractType" | "contractURI" | "contractVersion" | "getApproved" | "getDefaultRoyaltyInfo" | "getPlatformFeeInfo" | "getRoleAdmin" | "getRoleMember" | "getRoleMemberCount" | "getRoyaltyInfoForToken" | "grantRole" | "hasRole" | "initialize" | "isApprovedForAll" | "isTrustedForwarder" | "mintTo" | "mintWithSignature" | "multicall" | "name" | "nextTokenIdToMint" | "owner" | "ownerOf" | "platformFeeBps" | "platformFeeRecipient" | "primarySaleRecipient" | "renounceRole" | "revokeRole" | "royaltyInfo" | "safeTransferFrom(address,address,uint256)" | "safeTransferFrom(address,address,uint256,bytes)" | "setApprovalForAll" | "setContractURI" | "setDefaultRoyaltyInfo" | "setOwner" | "setPlatformFeeInfo" | "setPrimarySaleRecipient" | "setRoyaltyInfoForToken" | "supportsInterface" | "symbol" | "thirdwebFee" | "tokenByIndex" | "tokenOfOwnerByIndex" | "tokenURI" | "totalSupply" | "transferFrom" | "verify"): FunctionFragment;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "burn", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "contractType", values?: undefined): string;
    encodeFunctionData(functionFragment: "contractURI", values?: undefined): string;
    encodeFunctionData(functionFragment: "contractVersion", values?: undefined): string;
    encodeFunctionData(functionFragment: "getApproved", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getDefaultRoyaltyInfo", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPlatformFeeInfo", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getRoleMember", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRoleMemberCount", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getRoyaltyInfoForToken", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        string,
        string,
        string,
        string,
        string[],
        string,
        string,
        BigNumberish,
        BigNumberish,
        string
    ]): string;
    encodeFunctionData(functionFragment: "isApprovedForAll", values: [string, string]): string;
    encodeFunctionData(functionFragment: "isTrustedForwarder", values: [string]): string;
    encodeFunctionData(functionFragment: "mintTo", values: [string, string]): string;
    encodeFunctionData(functionFragment: "mintWithSignature", values: [ITokenERC721.MintRequestStruct, BytesLike]): string;
    encodeFunctionData(functionFragment: "multicall", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "nextTokenIdToMint", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "ownerOf", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "platformFeeBps", values?: undefined): string;
    encodeFunctionData(functionFragment: "platformFeeRecipient", values?: undefined): string;
    encodeFunctionData(functionFragment: "primarySaleRecipient", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "royaltyInfo", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom(address,address,uint256)", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom(address,address,uint256,bytes)", values: [string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "setApprovalForAll", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "setContractURI", values: [string]): string;
    encodeFunctionData(functionFragment: "setDefaultRoyaltyInfo", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
    encodeFunctionData(functionFragment: "setPlatformFeeInfo", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setPrimarySaleRecipient", values: [string]): string;
    encodeFunctionData(functionFragment: "setRoyaltyInfoForToken", values: [BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "thirdwebFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenByIndex", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "tokenOfOwnerByIndex", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "tokenURI", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "verify", values: [ITokenERC721.MintRequestStruct, BytesLike]): string;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contractType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contractURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contractVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getApproved", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDefaultRoyaltyInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPlatformFeeInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMemberCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoyaltyInfoForToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isApprovedForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isTrustedForwarder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintWithSignature", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nextTokenIdToMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "platformFeeBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "platformFeeRecipient", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "primarySaleRecipient", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "royaltyInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom(address,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom(address,address,uint256,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setContractURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDefaultRoyaltyInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPlatformFeeInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPrimarySaleRecipient", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRoyaltyInfoForToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "thirdwebFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenByIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenOfOwnerByIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verify", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "ApprovalForAll(address,address,bool)": EventFragment;
        "DefaultRoyalty(address,uint256)": EventFragment;
        "OwnerUpdated(address,address)": EventFragment;
        "PlatformFeeInfoUpdated(address,uint256)": EventFragment;
        "PrimarySaleRecipientUpdated(address)": EventFragment;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
        "RoyaltyForToken(uint256,address,uint256)": EventFragment;
        "TokensMinted(address,uint256,string)": EventFragment;
        "TokensMintedWithSignature(address,address,uint256,tuple)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DefaultRoyalty"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnerUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PlatformFeeInfoUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PrimarySaleRecipientUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoyaltyForToken"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokensMinted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokensMintedWithSignature"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}
export interface ApprovalEventObject {
    owner: string;
    approved: string;
    tokenId: BigNumber;
}
export declare type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject>;
export declare type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export interface ApprovalForAllEventObject {
    owner: string;
    operator: string;
    approved: boolean;
}
export declare type ApprovalForAllEvent = TypedEvent<[
    string,
    string,
    boolean
], ApprovalForAllEventObject>;
export declare type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;
export interface DefaultRoyaltyEventObject {
    newRoyaltyRecipient: string;
    newRoyaltyBps: BigNumber;
}
export declare type DefaultRoyaltyEvent = TypedEvent<[
    string,
    BigNumber
], DefaultRoyaltyEventObject>;
export declare type DefaultRoyaltyEventFilter = TypedEventFilter<DefaultRoyaltyEvent>;
export interface OwnerUpdatedEventObject {
    prevOwner: string;
    newOwner: string;
}
export declare type OwnerUpdatedEvent = TypedEvent<[
    string,
    string
], OwnerUpdatedEventObject>;
export declare type OwnerUpdatedEventFilter = TypedEventFilter<OwnerUpdatedEvent>;
export interface PlatformFeeInfoUpdatedEventObject {
    platformFeeRecipient: string;
    platformFeeBps: BigNumber;
}
export declare type PlatformFeeInfoUpdatedEvent = TypedEvent<[
    string,
    BigNumber
], PlatformFeeInfoUpdatedEventObject>;
export declare type PlatformFeeInfoUpdatedEventFilter = TypedEventFilter<PlatformFeeInfoUpdatedEvent>;
export interface PrimarySaleRecipientUpdatedEventObject {
    recipient: string;
}
export declare type PrimarySaleRecipientUpdatedEvent = TypedEvent<[
    string
], PrimarySaleRecipientUpdatedEventObject>;
export declare type PrimarySaleRecipientUpdatedEventFilter = TypedEventFilter<PrimarySaleRecipientUpdatedEvent>;
export interface RoleAdminChangedEventObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
}
export declare type RoleAdminChangedEvent = TypedEvent<[
    string,
    string,
    string
], RoleAdminChangedEventObject>;
export declare type RoleAdminChangedEventFilter = TypedEventFilter<RoleAdminChangedEvent>;
export interface RoleGrantedEventObject {
    role: string;
    account: string;
    sender: string;
}
export declare type RoleGrantedEvent = TypedEvent<[
    string,
    string,
    string
], RoleGrantedEventObject>;
export declare type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;
export interface RoleRevokedEventObject {
    role: string;
    account: string;
    sender: string;
}
export declare type RoleRevokedEvent = TypedEvent<[
    string,
    string,
    string
], RoleRevokedEventObject>;
export declare type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;
export interface RoyaltyForTokenEventObject {
    tokenId: BigNumber;
    royaltyRecipient: string;
    royaltyBps: BigNumber;
}
export declare type RoyaltyForTokenEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber
], RoyaltyForTokenEventObject>;
export declare type RoyaltyForTokenEventFilter = TypedEventFilter<RoyaltyForTokenEvent>;
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
export interface TokensMintedWithSignatureEventObject {
    signer: string;
    mintedTo: string;
    tokenIdMinted: BigNumber;
    mintRequest: ITokenERC721.MintRequestStructOutput;
}
export declare type TokensMintedWithSignatureEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    ITokenERC721.MintRequestStructOutput
], TokensMintedWithSignatureEventObject>;
export declare type TokensMintedWithSignatureEventFilter = TypedEventFilter<TokensMintedWithSignatureEvent>;
export interface TransferEventObject {
    from: string;
    to: string;
    tokenId: BigNumber;
}
export declare type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject>;
export declare type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface TokenERC721 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TokenERC721Interface;
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
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;
        approve(to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        burn(tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        contractType(overrides?: CallOverrides): Promise<[string]>;
        contractURI(overrides?: CallOverrides): Promise<[string]>;
        contractVersion(overrides?: CallOverrides): Promise<[number]>;
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getDefaultRoyaltyInfo(overrides?: CallOverrides): Promise<[string, number]>;
        getPlatformFeeInfo(overrides?: CallOverrides): Promise<[string, number]>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        getRoyaltyInfoForToken(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string, number]>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<[boolean]>;
        initialize(_defaultAdmin: string, _name: string, _symbol: string, _contractURI: string, _trustedForwarders: string[], _saleRecipient: string, _royaltyRecipient: string, _royaltyBps: BigNumberish, _platformFeeBps: BigNumberish, _platformFeeRecipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<[boolean]>;
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<[boolean]>;
        mintTo(_to: string, _uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        mintWithSignature(_req: ITokenERC721.MintRequestStruct, _signature: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        nextTokenIdToMint(overrides?: CallOverrides): Promise<[BigNumber]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        platformFeeBps(overrides?: CallOverrides): Promise<[BigNumber]>;
        platformFeeRecipient(overrides?: CallOverrides): Promise<[string]>;
        primarySaleRecipient(overrides?: CallOverrides): Promise<[string]>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        royaltyInfo(tokenId: BigNumberish, salePrice: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            BigNumber
        ] & {
            receiver: string;
            royaltyAmount: BigNumber;
        }>;
        "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setContractURI(_uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setDefaultRoyaltyInfo(_royaltyRecipient: string, _royaltyBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setOwner(_newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPlatformFeeInfo(_platformFeeRecipient: string, _platformFeeBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPrimarySaleRecipient(_saleRecipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setRoyaltyInfoForToken(_tokenId: BigNumberish, _recipient: string, _bps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        thirdwebFee(overrides?: CallOverrides): Promise<[string]>;
        tokenByIndex(index: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        tokenOfOwnerByIndex(owner: string, index: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        tokenURI(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        verify(_req: ITokenERC721.MintRequestStruct, _signature: BytesLike, overrides?: CallOverrides): Promise<[boolean, string]>;
    };
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    approve(to: string, tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    burn(tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    contractType(overrides?: CallOverrides): Promise<string>;
    contractURI(overrides?: CallOverrides): Promise<string>;
    contractVersion(overrides?: CallOverrides): Promise<number>;
    getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getDefaultRoyaltyInfo(overrides?: CallOverrides): Promise<[string, number]>;
    getPlatformFeeInfo(overrides?: CallOverrides): Promise<[string, number]>;
    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
    getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    getRoyaltyInfoForToken(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string, number]>;
    grantRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
    initialize(_defaultAdmin: string, _name: string, _symbol: string, _contractURI: string, _trustedForwarders: string[], _saleRecipient: string, _royaltyRecipient: string, _royaltyBps: BigNumberish, _platformFeeBps: BigNumberish, _platformFeeRecipient: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<boolean>;
    isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<boolean>;
    mintTo(_to: string, _uri: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    mintWithSignature(_req: ITokenERC721.MintRequestStruct, _signature: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    multicall(data: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    nextTokenIdToMint(overrides?: CallOverrides): Promise<BigNumber>;
    owner(overrides?: CallOverrides): Promise<string>;
    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    platformFeeBps(overrides?: CallOverrides): Promise<BigNumber>;
    platformFeeRecipient(overrides?: CallOverrides): Promise<string>;
    primarySaleRecipient(overrides?: CallOverrides): Promise<string>;
    renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    royaltyInfo(tokenId: BigNumberish, salePrice: BigNumberish, overrides?: CallOverrides): Promise<[
        string,
        BigNumber
    ] & {
        receiver: string;
        royaltyAmount: BigNumber;
    }>;
    "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setContractURI(_uri: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setDefaultRoyaltyInfo(_royaltyRecipient: string, _royaltyBps: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setOwner(_newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPlatformFeeInfo(_platformFeeRecipient: string, _platformFeeBps: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPrimarySaleRecipient(_saleRecipient: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setRoyaltyInfoForToken(_tokenId: BigNumberish, _recipient: string, _bps: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    symbol(overrides?: CallOverrides): Promise<string>;
    thirdwebFee(overrides?: CallOverrides): Promise<string>;
    tokenByIndex(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    tokenOfOwnerByIndex(owner: string, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    tokenURI(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    verify(_req: ITokenERC721.MintRequestStruct, _signature: BytesLike, overrides?: CallOverrides): Promise<[boolean, string]>;
    callStatic: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        approve(to: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        burn(tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        contractType(overrides?: CallOverrides): Promise<string>;
        contractURI(overrides?: CallOverrides): Promise<string>;
        contractVersion(overrides?: CallOverrides): Promise<number>;
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getDefaultRoyaltyInfo(overrides?: CallOverrides): Promise<[string, number]>;
        getPlatformFeeInfo(overrides?: CallOverrides): Promise<[string, number]>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getRoyaltyInfoForToken(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string, number]>;
        grantRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
        initialize(_defaultAdmin: string, _name: string, _symbol: string, _contractURI: string, _trustedForwarders: string[], _saleRecipient: string, _royaltyRecipient: string, _royaltyBps: BigNumberish, _platformFeeBps: BigNumberish, _platformFeeRecipient: string, overrides?: CallOverrides): Promise<void>;
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<boolean>;
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<boolean>;
        mintTo(_to: string, _uri: string, overrides?: CallOverrides): Promise<BigNumber>;
        mintWithSignature(_req: ITokenERC721.MintRequestStruct, _signature: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        multicall(data: BytesLike[], overrides?: CallOverrides): Promise<string[]>;
        name(overrides?: CallOverrides): Promise<string>;
        nextTokenIdToMint(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<string>;
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        platformFeeBps(overrides?: CallOverrides): Promise<BigNumber>;
        platformFeeRecipient(overrides?: CallOverrides): Promise<string>;
        primarySaleRecipient(overrides?: CallOverrides): Promise<string>;
        renounceRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        revokeRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        royaltyInfo(tokenId: BigNumberish, salePrice: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            BigNumber
        ] & {
            receiver: string;
            royaltyAmount: BigNumber;
        }>;
        "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: CallOverrides): Promise<void>;
        setContractURI(_uri: string, overrides?: CallOverrides): Promise<void>;
        setDefaultRoyaltyInfo(_royaltyRecipient: string, _royaltyBps: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setOwner(_newOwner: string, overrides?: CallOverrides): Promise<void>;
        setPlatformFeeInfo(_platformFeeRecipient: string, _platformFeeBps: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setPrimarySaleRecipient(_saleRecipient: string, overrides?: CallOverrides): Promise<void>;
        setRoyaltyInfoForToken(_tokenId: BigNumberish, _recipient: string, _bps: BigNumberish, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        symbol(overrides?: CallOverrides): Promise<string>;
        thirdwebFee(overrides?: CallOverrides): Promise<string>;
        tokenByIndex(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        tokenOfOwnerByIndex(owner: string, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        tokenURI(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        verify(_req: ITokenERC721.MintRequestStruct, _signature: BytesLike, overrides?: CallOverrides): Promise<[boolean, string]>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: string | null, approved?: string | null, tokenId?: BigNumberish | null): ApprovalEventFilter;
        Approval(owner?: string | null, approved?: string | null, tokenId?: BigNumberish | null): ApprovalEventFilter;
        "ApprovalForAll(address,address,bool)"(owner?: string | null, operator?: string | null, approved?: null): ApprovalForAllEventFilter;
        ApprovalForAll(owner?: string | null, operator?: string | null, approved?: null): ApprovalForAllEventFilter;
        "DefaultRoyalty(address,uint256)"(newRoyaltyRecipient?: null, newRoyaltyBps?: null): DefaultRoyaltyEventFilter;
        DefaultRoyalty(newRoyaltyRecipient?: null, newRoyaltyBps?: null): DefaultRoyaltyEventFilter;
        "OwnerUpdated(address,address)"(prevOwner?: null, newOwner?: null): OwnerUpdatedEventFilter;
        OwnerUpdated(prevOwner?: null, newOwner?: null): OwnerUpdatedEventFilter;
        "PlatformFeeInfoUpdated(address,uint256)"(platformFeeRecipient?: null, platformFeeBps?: null): PlatformFeeInfoUpdatedEventFilter;
        PlatformFeeInfoUpdated(platformFeeRecipient?: null, platformFeeBps?: null): PlatformFeeInfoUpdatedEventFilter;
        "PrimarySaleRecipientUpdated(address)"(recipient?: string | null): PrimarySaleRecipientUpdatedEventFilter;
        PrimarySaleRecipientUpdated(recipient?: string | null): PrimarySaleRecipientUpdatedEventFilter;
        "RoleAdminChanged(bytes32,bytes32,bytes32)"(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        RoleAdminChanged(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        "RoleGranted(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        RoleGranted(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        "RoleRevoked(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
        RoleRevoked(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
        "RoyaltyForToken(uint256,address,uint256)"(tokenId?: BigNumberish | null, royaltyRecipient?: null, royaltyBps?: null): RoyaltyForTokenEventFilter;
        RoyaltyForToken(tokenId?: BigNumberish | null, royaltyRecipient?: null, royaltyBps?: null): RoyaltyForTokenEventFilter;
        "TokensMinted(address,uint256,string)"(mintedTo?: string | null, tokenIdMinted?: BigNumberish | null, uri?: null): TokensMintedEventFilter;
        TokensMinted(mintedTo?: string | null, tokenIdMinted?: BigNumberish | null, uri?: null): TokensMintedEventFilter;
        "TokensMintedWithSignature(address,address,uint256,tuple)"(signer?: string | null, mintedTo?: string | null, tokenIdMinted?: BigNumberish | null, mintRequest?: null): TokensMintedWithSignatureEventFilter;
        TokensMintedWithSignature(signer?: string | null, mintedTo?: string | null, tokenIdMinted?: BigNumberish | null, mintRequest?: null): TokensMintedWithSignatureEventFilter;
        "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, tokenId?: BigNumberish | null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, tokenId?: BigNumberish | null): TransferEventFilter;
    };
    estimateGas: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        approve(to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        burn(tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        contractType(overrides?: CallOverrides): Promise<BigNumber>;
        contractURI(overrides?: CallOverrides): Promise<BigNumber>;
        contractVersion(overrides?: CallOverrides): Promise<BigNumber>;
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getDefaultRoyaltyInfo(overrides?: CallOverrides): Promise<BigNumber>;
        getPlatformFeeInfo(overrides?: CallOverrides): Promise<BigNumber>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getRoyaltyInfoForToken(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_defaultAdmin: string, _name: string, _symbol: string, _contractURI: string, _trustedForwarders: string[], _saleRecipient: string, _royaltyRecipient: string, _royaltyBps: BigNumberish, _platformFeeBps: BigNumberish, _platformFeeRecipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<BigNumber>;
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<BigNumber>;
        mintTo(_to: string, _uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        mintWithSignature(_req: ITokenERC721.MintRequestStruct, _signature: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        nextTokenIdToMint(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        platformFeeBps(overrides?: CallOverrides): Promise<BigNumber>;
        platformFeeRecipient(overrides?: CallOverrides): Promise<BigNumber>;
        primarySaleRecipient(overrides?: CallOverrides): Promise<BigNumber>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        royaltyInfo(tokenId: BigNumberish, salePrice: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setContractURI(_uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setDefaultRoyaltyInfo(_royaltyRecipient: string, _royaltyBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setOwner(_newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPlatformFeeInfo(_platformFeeRecipient: string, _platformFeeBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPrimarySaleRecipient(_saleRecipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setRoyaltyInfoForToken(_tokenId: BigNumberish, _recipient: string, _bps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        thirdwebFee(overrides?: CallOverrides): Promise<BigNumber>;
        tokenByIndex(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        tokenOfOwnerByIndex(owner: string, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        tokenURI(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        verify(_req: ITokenERC721.MintRequestStruct, _signature: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burn(tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        contractType(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        contractURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        contractVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDefaultRoyaltyInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPlatformFeeInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoyaltyInfoForToken(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_defaultAdmin: string, _name: string, _symbol: string, _contractURI: string, _trustedForwarders: string[], _saleRecipient: string, _royaltyRecipient: string, _royaltyBps: BigNumberish, _platformFeeBps: BigNumberish, _platformFeeRecipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mintTo(_to: string, _uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        mintWithSignature(_req: ITokenERC721.MintRequestStruct, _signature: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nextTokenIdToMint(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        platformFeeBps(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        platformFeeRecipient(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        primarySaleRecipient(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        royaltyInfo(tokenId: BigNumberish, salePrice: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setContractURI(_uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setDefaultRoyaltyInfo(_royaltyRecipient: string, _royaltyBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setOwner(_newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPlatformFeeInfo(_platformFeeRecipient: string, _platformFeeBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPrimarySaleRecipient(_saleRecipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setRoyaltyInfoForToken(_tokenId: BigNumberish, _recipient: string, _bps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        thirdwebFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenByIndex(index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenOfOwnerByIndex(owner: string, index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenURI(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        verify(_req: ITokenERC721.MintRequestStruct, _signature: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
