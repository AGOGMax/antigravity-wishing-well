import { TEST_NETWORK } from "@/constants";
import { baseSepolia, pulsechain, pulsechainV4, sepolia } from "viem/chains";
import { useAccount } from "wagmi";

interface IContract {
  address?: `0x${string}`;
  abi?: any;
}

import abi from "./abi.json";
import { CONTRACTS } from "../config";
import { TESTCHAINS } from "@/components/RainbowKit";

const contracts: Record<
  number,
  { address: `0x${string}` | undefined; abi: any }
> = {
  [sepolia.id]: {
    address: CONTRACTS[sepolia.id].darkClaims,
    abi,
  },
  [pulsechainV4.id]: {
    address: CONTRACTS[pulsechainV4.id].darkClaims,
    abi,
  },
  [pulsechain.id]: {
    address: CONTRACTS[pulsechain.id].darkClaims,
    abi,
  },
  [baseSepolia.id]: {
    address: CONTRACTS[baseSepolia.id].darkClaims,
    abi,
  },
};

const useDarkClaimContract = (): IContract => {
  if (TEST_NETWORK) {
    return contracts[TESTCHAINS[0].id];
  } else {
    return contracts[pulsechain.id];
  }
};

export default useDarkClaimContract;
