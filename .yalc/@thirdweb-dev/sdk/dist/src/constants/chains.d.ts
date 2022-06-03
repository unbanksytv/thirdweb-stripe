/**
 * @public
 */
export declare enum ChainId {
    Mainnet = 1,
    Ropsten = 3,
    Rinkeby = 4,
    Goerli = 5,
    Kovan = 42,
    BSC = 56,
    xDai = 100,
    Polygon = 137,
    Moonriver = 1285,
    Mumbai = 80001,
    Harmony = 1666600000,
    Localhost = 1337,
    Hardhat = 31337,
    Fantom = 250,
    FantomTestnet = 4002,
    Avalanche = 43114,
    AvalancheFujiTestnet = 43113
}
/**
 * @public
 */
export declare type SUPPORTED_CHAIN_ID = ChainId.Mainnet | ChainId.Rinkeby | ChainId.Goerli | ChainId.Mumbai | ChainId.Polygon | ChainId.Fantom | ChainId.FantomTestnet | ChainId.Avalanche | ChainId.AvalancheFujiTestnet;
/**
 * @public
 */
export declare const SUPPORTED_CHAIN_IDS: SUPPORTED_CHAIN_ID[];
