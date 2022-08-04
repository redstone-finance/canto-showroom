import { ethers } from "ethers";

export type Chains = typeof chains;

export interface ChainDetails {
  chainId: string;
  rpcUrls: string[];
  chainName: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  blockExplorerUrls: string[];
  exampleContractAddress: string;
}

export const chains = {
  [9001]: {
    chainId: ethers.utils.hexValue(9001),
    rpcUrls: ["https://eth.bd.evmos.org:8545"],
    chainName: "Evmos Mainnet",
    nativeCurrency: {
      name: "EVMOS",
      symbol: "EVMOS",
      decimals: 18,
    },
    blockExplorerUrls: ["https://evm.evmos.org"],
    exampleContractAddress: "0xDdc3819d5eb83aF1267115a518A354BAdb0B90dF",
  },
};
