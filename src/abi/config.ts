import {
  base,
  baseSepolia,
  pulsechain,
  pulsechainV4,
  sepolia,
} from "viem/chains";

type Address = `0x${string}`;

export const CONTRACTS: Record<
  number,
  {
    wishWell: Address;
    miningRig: Address;
    darkX: Address;
    darkClaims?: Address;
    dark?: Address;
    launchControlCenter?: Address;
    fuelCell?: Address;
    journeyPhaseManager?: Address;
    darkFaucet?: Address;
    treasury?: Address;
    jackpot?: Address;
    evilAddress?: Address;
  }
> = {
  [sepolia.id]: {
    miningRig: "0x020d3Ca9605bb17CC17Ea0DB2bFfed3fA0869fCF",
    darkX: "0xb1BF01E195D511509B12D980769351eF5255eE0f",
    darkClaims: "0x6b3099EfFF4dAE69e48240d88C141a7cfa793ae6",
    dark: "0x20E070c2e6eB00bC0ACFD801778a1BE24D5423c1",
    wishWell: "0x43F4cdC343f39EDD323C66492E9fdf3D72Df0eC0",
    fuelCell: "0x77fB461abB743497dc23EB1e2a4fdEfAc35aFfea",
    launchControlCenter: "0x09d12a40EbeA8F7860a32973D514E6b55d279a2c",
    journeyPhaseManager: "0xA2893EBA6461c7e9142Bd5781E53782927894d61",
    evilAddress: "0x86E29Dbd64F36a66d0Ddb96E2FF2A9d571fb41dB",
    treasury: "0xB52C954442f021D85Bd36103e742A07825a1af72",
    jackpot: "0x3446Fd1cAd7ABA32b998B757767Be19569f866d6",
    darkFaucet: "0x1792dedc1A50849041C063BFB686b8350DF9CD73",
  },
  [pulsechainV4.id]: {
    miningRig: "0x020d3Ca9605bb17CC17Ea0DB2bFfed3fA0869fCF",
    darkX: "0xb1BF01E195D511509B12D980769351eF5255eE0f",
    darkClaims: "0x6b3099EfFF4dAE69e48240d88C141a7cfa793ae6",
    wishWell: "0x43F4cdC343f39EDD323C66492E9fdf3D72Df0eC0",
    dark: "0x7E2c3b73b11B1A98b89311F89d90d3E44F2F1d9A",
    fuelCell: "0xA24729d991f8c1495D43327F671d528590B95Fef",
    journeyPhaseManager: "0xa3B69dD8ec32eE1DEC5A3fD7c99563C276Fc935C",
    launchControlCenter: "0x4fafDb3DbEC7eDaF39042a25C79Db09E0d30aB07",
    treasury: "0x21B6D8047Af30518776805929C51e4aABA719CD6",
    jackpot: "0x4B77E262194a8121115ED2e5C4715577bCC04eE7",
    evilAddress: "0xb2Edf843f706ed30a850fF7b808D5b8857918fC3",
    darkFaucet: "0xD1c219164Cb517ef3E5E5A73A3FBEf188130348F",
  },
  [baseSepolia.id]: {
    miningRig: "0x8Dea737AE483153c69934ff8a5c7E3D448c2DB4C",
    darkX: "0xdE87E198D2A5d6894a03AfCb34876601A6dd226f",
    dark: "0x659A8AddE309cEd070f8a55795c1D626f8c9ccb8",
    wishWell: "0xC8A96A9163C2D11e2002C589a5DC7Ee4267499e2",
    fuelCell: "0xe102F79f41C4d6AaD87D43F5adD7D5f26Ca4B156",
    launchControlCenter: "0x61f3B9719b0182f8f4068735D0D2e19388feA9d0",
    journeyPhaseManager: "0xB57FBFdc949e30d0628635a85207b9dD225d5482",
    evilAddress: "0xEAB9A6eac2DcEAf73B2A78d20E32aC85aa1789F2",
    treasury: "0x6417097DA6D25d716946F793349eF4b456afed51",
    jackpot: "0x4c9596e62E8C03D995a56Fa2b7bd07BBf3D2f1fE",
    darkFaucet: "0x2260e58C707E57d21b43B3b74ffD47054A34ACf7",
  },
  [pulsechain.id]: {
    miningRig: "0x1Eca1A64E18E72c46971a80D91F015a569FE9FBd",
    darkX: "0xCC18F40724971Be55AB5508607d8024Ee9Bf8796",
    wishWell: "0x332211A407489F497cD58bac7Db3F10Da5da47Ff",
  },
  [base.id]: {
    miningRig: "0x698Ae58B7AB13ad232A84d684e8111D2c6A6d904",
    darkX: "0xb070db7dCad8F5081c3e9033633782258fCa811c",
    wishWell: "0x332211A407489F497cD58bac7Db3F10Da5da47Ff",
  },
};
