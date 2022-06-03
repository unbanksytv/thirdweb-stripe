import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ITWFeeInterface extends utils.Interface {
    functions: {
        "getFeeInfo(address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getFeeInfo"): FunctionFragment;
    encodeFunctionData(functionFragment: "getFeeInfo", values: [string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "getFeeInfo", data: BytesLike): Result;
    events: {};
}
export interface ITWFee extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ITWFeeInterface;
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
        getFeeInfo(_proxy: string, _type: BigNumberish, overrides?: CallOverrides): Promise<[string, BigNumber] & {
            recipient: string;
            bps: BigNumber;
        }>;
    };
    getFeeInfo(_proxy: string, _type: BigNumberish, overrides?: CallOverrides): Promise<[string, BigNumber] & {
        recipient: string;
        bps: BigNumber;
    }>;
    callStatic: {
        getFeeInfo(_proxy: string, _type: BigNumberish, overrides?: CallOverrides): Promise<[string, BigNumber] & {
            recipient: string;
            bps: BigNumber;
        }>;
    };
    filters: {};
    estimateGas: {
        getFeeInfo(_proxy: string, _type: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getFeeInfo(_proxy: string, _type: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
