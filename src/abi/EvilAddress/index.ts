import { TEST_NETWORK } from "@/constants";
import { baseSepolia, pulsechain, pulsechainV4, sepolia } from "viem/chains";

interface IContract {
  address?: `0x${string}`;
  abi?: any;
}

import abi from "./abi.json";
import { CONTRACTS } from "../config";
import { zeroAddress } from "viem";
import { useEffect, useState } from "react";
import { TESTCHAINS } from "@/components/RainbowKit";

const contracts: Record<
  number,
  { address: `0x${string}` | undefined; abi: any }
> = {
  [sepolia.id]: {
    address: CONTRACTS[sepolia.id].evilAddress,
    abi,
  },
  [pulsechainV4.id]: {
    address: CONTRACTS[pulsechainV4.id].evilAddress,
    abi,
  },
  [pulsechain.id]: {
    address: CONTRACTS[pulsechain.id].evilAddress,
    abi,
  },
  [baseSepolia.id]: {
    address: CONTRACTS[baseSepolia.id].evilAddress,
    abi,
  },
};

const useEvilAddressContract = (): IContract => {
  const [contract, setContract] = useState<IContract>({
    abi: {},
    address: zeroAddress,
  });
  useEffect(() => {
    if (TEST_NETWORK) {
      const id = TESTCHAINS[0].id;
      setContract(contracts[id]);
    } else {
      setContract(contracts[pulsechain.id]);
    }
  }, []);

  return contract;
};

export default useEvilAddressContract;
