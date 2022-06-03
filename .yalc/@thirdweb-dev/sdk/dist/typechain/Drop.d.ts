import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace IClaimCondition {
    type ClaimConditionStruct = {
        startTimestamp: BigNumberish;
        maxClaimableSupply: BigNumberish;
        supplyClaimed: BigNumberish;
        quantityLimitPerTransaction: BigNumberish;
        waitTimeInSecondsBetweenClaims: BigNumberish;
        merkleRoot: BytesLike;
        pricePerToken: BigNumberish;
        currency: string;
    };
    type ClaimConditionStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        string
    ] & {
        startTimestamp: BigNumber;
        maxClaimableSupply: BigNumber;
        supplyClaimed: BigNumber;
        quantityLimitPerTransaction: BigNumber;
        waitTimeInSecondsBetweenClaims: BigNumber;
        merkleRoot: string;
        pricePerToken: BigNumber;
        currency: string;
    };
}
export declare namespace IDrop {
    type AllowlistProofStruct = {
        proof: BytesLike[];
        maxQuantityInAllowlist: BigNumberish;
    };
    type AllowlistProofStructOutput = [string[], BigNumber] & {
        proof: string[];
        maxQuantityInAllowlist: BigNumber;
    };
}
export interface DropInterface extends utils.Interface {
    functions: {
        "claim(address,uint256,address,uint256,(bytes32[],uint256),bytes)": FunctionFragment;
        "claimCondition()": FunctionFragment;
        "getActiveClaimConditionId()": FunctionFragment;
        "getClaimConditionById(uint256)": FunctionFragment;
        "getClaimTimestamp(uint256,address)": FunctionFragment;
        "setClaimConditions((uint256,uint256,uint256,uint256,uint256,bytes32,uint256,address)[],bool,bytes)": FunctionFragment;
        "verifyClaim(uint256,address,uint256,address,uint256,bool)": FunctionFragment;
        "verifyClaimMerkleProof(uint256,address,uint256,(bytes32[],uint256))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "claim" | "claimCondition" | "getActiveClaimConditionId" | "getClaimConditionById" | "getClaimTimestamp" | "setClaimConditions" | "verifyClaim" | "verifyClaimMerkleProof"): FunctionFragment;
    encodeFunctionData(functionFragment: "claim", values: [
        string,
        BigNumberish,
        string,
        BigNumberish,
        IDrop.AllowlistProofStruct,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "claimCondition", values?: undefined): string;
    encodeFunctionData(functionFragment: "getActiveClaimConditionId", values?: undefined): string;
    encodeFunctionData(functionFragment: "getClaimConditionById", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getClaimTimestamp", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "setClaimConditions", values: [IClaimCondition.ClaimConditionStruct[], boolean, BytesLike]): string;
    encodeFunctionData(functionFragment: "verifyClaim", values: [BigNumberish, string, BigNumberish, string, BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "verifyClaimMerkleProof", values: [BigNumberish, string, BigNumberish, IDrop.AllowlistProofStruct]): string;
    decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimCondition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getActiveClaimConditionId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getClaimConditionById", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getClaimTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setClaimConditions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifyClaim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifyClaimMerkleProof", data: BytesLike): Result;
    events: {
        "ClaimConditionsUpdated(tuple[])": EventFragment;
        "TokensClaimed(uint256,address,address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ClaimConditionsUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokensClaimed"): EventFragment;
}
export interface ClaimConditionsUpdatedEventObject {
    claimConditions: IClaimCondition.ClaimConditionStructOutput[];
}
export declare type ClaimConditionsUpdatedEvent = TypedEvent<[
    IClaimCondition.ClaimConditionStructOutput[]
], ClaimConditionsUpdatedEventObject>;
export declare type ClaimConditionsUpdatedEventFilter = TypedEventFilter<ClaimConditionsUpdatedEvent>;
export interface TokensClaimedEventObject {
    claimConditionIndex: BigNumber;
    claimer: string;
    receiver: string;
    startTokenId: BigNumber;
    quantityClaimed: BigNumber;
}
export declare type TokensClaimedEvent = TypedEvent<[
    BigNumber,
    string,
    string,
    BigNumber,
    BigNumber
], TokensClaimedEventObject>;
export declare type TokensClaimedEventFilter = TypedEventFilter<TokensClaimedEvent>;
export interface Drop extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DropInterface;
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
        claim(_receiver: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDrop.AllowlistProofStruct, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimCondition(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            currentStartId: BigNumber;
            count: BigNumber;
        }>;
        getActiveClaimConditionId(overrides?: CallOverrides): Promise<[BigNumber]>;
        getClaimConditionById(_conditionId: BigNumberish, overrides?: CallOverrides): Promise<[
            IClaimCondition.ClaimConditionStructOutput
        ] & {
            condition: IClaimCondition.ClaimConditionStructOutput;
        }>;
        getClaimTimestamp(_conditionId: BigNumberish, _claimer: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            lastClaimTimestamp: BigNumber;
            nextValidClaimTimestamp: BigNumber;
        }>;
        setClaimConditions(_conditions: IClaimCondition.ClaimConditionStruct[], _resetClaimEligibility: boolean, arg2: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        verifyClaim(_conditionId: BigNumberish, _claimer: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, verifyMaxQuantityPerTransaction: boolean, overrides?: CallOverrides): Promise<[void]>;
        verifyClaimMerkleProof(_conditionId: BigNumberish, _claimer: string, _quantity: BigNumberish, _allowlistProof: IDrop.AllowlistProofStruct, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber
        ] & {
            validMerkleProof: boolean;
            merkleProofIndex: BigNumber;
        }>;
    };
    claim(_receiver: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDrop.AllowlistProofStruct, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimCondition(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        currentStartId: BigNumber;
        count: BigNumber;
    }>;
    getActiveClaimConditionId(overrides?: CallOverrides): Promise<BigNumber>;
    getClaimConditionById(_conditionId: BigNumberish, overrides?: CallOverrides): Promise<IClaimCondition.ClaimConditionStructOutput>;
    getClaimTimestamp(_conditionId: BigNumberish, _claimer: string, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        lastClaimTimestamp: BigNumber;
        nextValidClaimTimestamp: BigNumber;
    }>;
    setClaimConditions(_conditions: IClaimCondition.ClaimConditionStruct[], _resetClaimEligibility: boolean, arg2: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    verifyClaim(_conditionId: BigNumberish, _claimer: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, verifyMaxQuantityPerTransaction: boolean, overrides?: CallOverrides): Promise<void>;
    verifyClaimMerkleProof(_conditionId: BigNumberish, _claimer: string, _quantity: BigNumberish, _allowlistProof: IDrop.AllowlistProofStruct, overrides?: CallOverrides): Promise<[
        boolean,
        BigNumber
    ] & {
        validMerkleProof: boolean;
        merkleProofIndex: BigNumber;
    }>;
    callStatic: {
        claim(_receiver: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDrop.AllowlistProofStruct, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        claimCondition(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            currentStartId: BigNumber;
            count: BigNumber;
        }>;
        getActiveClaimConditionId(overrides?: CallOverrides): Promise<BigNumber>;
        getClaimConditionById(_conditionId: BigNumberish, overrides?: CallOverrides): Promise<IClaimCondition.ClaimConditionStructOutput>;
        getClaimTimestamp(_conditionId: BigNumberish, _claimer: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            lastClaimTimestamp: BigNumber;
            nextValidClaimTimestamp: BigNumber;
        }>;
        setClaimConditions(_conditions: IClaimCondition.ClaimConditionStruct[], _resetClaimEligibility: boolean, arg2: BytesLike, overrides?: CallOverrides): Promise<void>;
        verifyClaim(_conditionId: BigNumberish, _claimer: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, verifyMaxQuantityPerTransaction: boolean, overrides?: CallOverrides): Promise<void>;
        verifyClaimMerkleProof(_conditionId: BigNumberish, _claimer: string, _quantity: BigNumberish, _allowlistProof: IDrop.AllowlistProofStruct, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber
        ] & {
            validMerkleProof: boolean;
            merkleProofIndex: BigNumber;
        }>;
    };
    filters: {
        "ClaimConditionsUpdated(tuple[])"(claimConditions?: null): ClaimConditionsUpdatedEventFilter;
        ClaimConditionsUpdated(claimConditions?: null): ClaimConditionsUpdatedEventFilter;
        "TokensClaimed(uint256,address,address,uint256,uint256)"(claimConditionIndex?: BigNumberish | null, claimer?: string | null, receiver?: string | null, startTokenId?: null, quantityClaimed?: null): TokensClaimedEventFilter;
        TokensClaimed(claimConditionIndex?: BigNumberish | null, claimer?: string | null, receiver?: string | null, startTokenId?: null, quantityClaimed?: null): TokensClaimedEventFilter;
    };
    estimateGas: {
        claim(_receiver: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDrop.AllowlistProofStruct, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimCondition(overrides?: CallOverrides): Promise<BigNumber>;
        getActiveClaimConditionId(overrides?: CallOverrides): Promise<BigNumber>;
        getClaimConditionById(_conditionId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getClaimTimestamp(_conditionId: BigNumberish, _claimer: string, overrides?: CallOverrides): Promise<BigNumber>;
        setClaimConditions(_conditions: IClaimCondition.ClaimConditionStruct[], _resetClaimEligibility: boolean, arg2: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        verifyClaim(_conditionId: BigNumberish, _claimer: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, verifyMaxQuantityPerTransaction: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        verifyClaimMerkleProof(_conditionId: BigNumberish, _claimer: string, _quantity: BigNumberish, _allowlistProof: IDrop.AllowlistProofStruct, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        claim(_receiver: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDrop.AllowlistProofStruct, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimCondition(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getActiveClaimConditionId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getClaimConditionById(_conditionId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getClaimTimestamp(_conditionId: BigNumberish, _claimer: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setClaimConditions(_conditions: IClaimCondition.ClaimConditionStruct[], _resetClaimEligibility: boolean, arg2: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        verifyClaim(_conditionId: BigNumberish, _claimer: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, verifyMaxQuantityPerTransaction: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        verifyClaimMerkleProof(_conditionId: BigNumberish, _claimer: string, _quantity: BigNumberish, _allowlistProof: IDrop.AllowlistProofStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
