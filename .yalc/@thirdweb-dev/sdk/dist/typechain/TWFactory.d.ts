import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface TWFactoryInterface extends utils.Interface {
    functions: {
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "FACTORY_ROLE()": FunctionFragment;
        "addImplementation(address)": FunctionFragment;
        "approval(address)": FunctionFragment;
        "approveImplementation(address,bool)": FunctionFragment;
        "currentVersion(bytes32)": FunctionFragment;
        "deployProxy(bytes32,bytes)": FunctionFragment;
        "deployProxyByImplementation(address,bytes,bytes32)": FunctionFragment;
        "deployProxyDeterministic(bytes32,bytes,bytes32)": FunctionFragment;
        "deployer(address)": FunctionFragment;
        "getImplementation(bytes32,uint256)": FunctionFragment;
        "getLatestImplementation(bytes32)": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "getRoleMember(bytes32,uint256)": FunctionFragment;
        "getRoleMemberCount(bytes32)": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "implementation(bytes32,uint256)": FunctionFragment;
        "isTrustedForwarder(address)": FunctionFragment;
        "multicall(bytes[])": FunctionFragment;
        "registry()": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DEFAULT_ADMIN_ROLE" | "FACTORY_ROLE" | "addImplementation" | "approval" | "approveImplementation" | "currentVersion" | "deployProxy" | "deployProxyByImplementation" | "deployProxyDeterministic" | "deployer" | "getImplementation" | "getLatestImplementation" | "getRoleAdmin" | "getRoleMember" | "getRoleMemberCount" | "grantRole" | "hasRole" | "implementation" | "isTrustedForwarder" | "multicall" | "registry" | "renounceRole" | "revokeRole" | "supportsInterface"): FunctionFragment;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "FACTORY_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "addImplementation", values: [string]): string;
    encodeFunctionData(functionFragment: "approval", values: [string]): string;
    encodeFunctionData(functionFragment: "approveImplementation", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "currentVersion", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "deployProxy", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "deployProxyByImplementation", values: [string, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "deployProxyDeterministic", values: [BytesLike, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "deployer", values: [string]): string;
    encodeFunctionData(functionFragment: "getImplementation", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getLatestImplementation", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getRoleMember", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRoleMemberCount", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "implementation", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "isTrustedForwarder", values: [string]): string;
    encodeFunctionData(functionFragment: "multicall", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "registry", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "FACTORY_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addImplementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approval", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approveImplementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deployProxy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deployProxyByImplementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deployProxyDeterministic", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deployer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getImplementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLatestImplementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMemberCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "implementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isTrustedForwarder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    events: {
        "ImplementationAdded(address,bytes32,uint256)": EventFragment;
        "ImplementationApproved(address,bool)": EventFragment;
        "ProxyDeployed(address,address,address)": EventFragment;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ImplementationAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ImplementationApproved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProxyDeployed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
}
export interface ImplementationAddedEventObject {
    implementation: string;
    contractType: string;
    version: BigNumber;
}
export declare type ImplementationAddedEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ImplementationAddedEventObject>;
export declare type ImplementationAddedEventFilter = TypedEventFilter<ImplementationAddedEvent>;
export interface ImplementationApprovedEventObject {
    implementation: string;
    isApproved: boolean;
}
export declare type ImplementationApprovedEvent = TypedEvent<[
    string,
    boolean
], ImplementationApprovedEventObject>;
export declare type ImplementationApprovedEventFilter = TypedEventFilter<ImplementationApprovedEvent>;
export interface ProxyDeployedEventObject {
    implementation: string;
    proxy: string;
    deployer: string;
}
export declare type ProxyDeployedEvent = TypedEvent<[
    string,
    string,
    string
], ProxyDeployedEventObject>;
export declare type ProxyDeployedEventFilter = TypedEventFilter<ProxyDeployedEvent>;
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
export interface TWFactory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TWFactoryInterface;
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
        FACTORY_ROLE(overrides?: CallOverrides): Promise<[string]>;
        addImplementation(_implementation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        approval(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
        approveImplementation(_implementation: string, _toApprove: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        currentVersion(arg0: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        deployProxy(_type: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        deployProxyByImplementation(_implementation: string, _data: BytesLike, _salt: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        deployProxyDeterministic(_type: BytesLike, _data: BytesLike, _salt: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        deployer(arg0: string, overrides?: CallOverrides): Promise<[string]>;
        getImplementation(_type: BytesLike, _version: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getLatestImplementation(_type: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<[boolean]>;
        implementation(arg0: BytesLike, arg1: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<[boolean]>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        registry(overrides?: CallOverrides): Promise<[string]>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
    };
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    FACTORY_ROLE(overrides?: CallOverrides): Promise<string>;
    addImplementation(_implementation: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    approval(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    approveImplementation(_implementation: string, _toApprove: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    currentVersion(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    deployProxy(_type: BytesLike, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    deployProxyByImplementation(_implementation: string, _data: BytesLike, _salt: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    deployProxyDeterministic(_type: BytesLike, _data: BytesLike, _salt: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    deployer(arg0: string, overrides?: CallOverrides): Promise<string>;
    getImplementation(_type: BytesLike, _version: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getLatestImplementation(_type: BytesLike, overrides?: CallOverrides): Promise<string>;
    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
    getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    grantRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
    implementation(arg0: BytesLike, arg1: BigNumberish, overrides?: CallOverrides): Promise<string>;
    isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<boolean>;
    multicall(data: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    registry(overrides?: CallOverrides): Promise<string>;
    renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        FACTORY_ROLE(overrides?: CallOverrides): Promise<string>;
        addImplementation(_implementation: string, overrides?: CallOverrides): Promise<void>;
        approval(arg0: string, overrides?: CallOverrides): Promise<boolean>;
        approveImplementation(_implementation: string, _toApprove: boolean, overrides?: CallOverrides): Promise<void>;
        currentVersion(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        deployProxy(_type: BytesLike, _data: BytesLike, overrides?: CallOverrides): Promise<string>;
        deployProxyByImplementation(_implementation: string, _data: BytesLike, _salt: BytesLike, overrides?: CallOverrides): Promise<string>;
        deployProxyDeterministic(_type: BytesLike, _data: BytesLike, _salt: BytesLike, overrides?: CallOverrides): Promise<string>;
        deployer(arg0: string, overrides?: CallOverrides): Promise<string>;
        getImplementation(_type: BytesLike, _version: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getLatestImplementation(_type: BytesLike, overrides?: CallOverrides): Promise<string>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
        implementation(arg0: BytesLike, arg1: BigNumberish, overrides?: CallOverrides): Promise<string>;
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<boolean>;
        multicall(data: BytesLike[], overrides?: CallOverrides): Promise<string[]>;
        registry(overrides?: CallOverrides): Promise<string>;
        renounceRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        revokeRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "ImplementationAdded(address,bytes32,uint256)"(implementation?: null, contractType?: BytesLike | null, version?: null): ImplementationAddedEventFilter;
        ImplementationAdded(implementation?: null, contractType?: BytesLike | null, version?: null): ImplementationAddedEventFilter;
        "ImplementationApproved(address,bool)"(implementation?: null, isApproved?: null): ImplementationApprovedEventFilter;
        ImplementationApproved(implementation?: null, isApproved?: null): ImplementationApprovedEventFilter;
        "ProxyDeployed(address,address,address)"(implementation?: string | null, proxy?: null, deployer?: string | null): ProxyDeployedEventFilter;
        ProxyDeployed(implementation?: string | null, proxy?: null, deployer?: string | null): ProxyDeployedEventFilter;
        "RoleAdminChanged(bytes32,bytes32,bytes32)"(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        RoleAdminChanged(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        "RoleGranted(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        RoleGranted(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        "RoleRevoked(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
        RoleRevoked(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
    };
    estimateGas: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        FACTORY_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        addImplementation(_implementation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        approval(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        approveImplementation(_implementation: string, _toApprove: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        currentVersion(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        deployProxy(_type: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        deployProxyByImplementation(_implementation: string, _data: BytesLike, _salt: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        deployProxyDeterministic(_type: BytesLike, _data: BytesLike, _salt: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        deployer(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        getImplementation(_type: BytesLike, _version: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getLatestImplementation(_type: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        implementation(arg0: BytesLike, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<BigNumber>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        registry(overrides?: CallOverrides): Promise<BigNumber>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        FACTORY_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addImplementation(_implementation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        approval(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approveImplementation(_implementation: string, _toApprove: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        currentVersion(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deployProxy(_type: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        deployProxyByImplementation(_implementation: string, _data: BytesLike, _salt: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        deployProxyDeterministic(_type: BytesLike, _data: BytesLike, _salt: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        deployer(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getImplementation(_type: BytesLike, _version: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLatestImplementation(_type: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        implementation(arg0: BytesLike, arg1: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        registry(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
