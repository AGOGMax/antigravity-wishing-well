"use client";
import H1 from "@/components/HTML/H1";
import P from "@/components/HTML/P";
import { RegisterButton } from "@/components/Home/components/header/RegisterButton";
import Button from "@/components/Button";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useContract from "@/abi/wishwell";
import { PublicClient, parseAbiItem } from "viem";
import axios from "axios";
import {
  POLL_TIME,
  PROXY_API_ENDPOINT,
  TEST_NETWORK,
  TIMER,
} from "@/constants";
import { checkCorrectNetwork, getApiNetwork } from "@/utils";
import { base } from "viem/chains";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import {
  useAccount,
  usePublicClient,
  useReadContract,
  useTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { IMAGEKIT_ICONS, IMAGEKIT_IMAGES } from "@/assets/imageKit";
import Leaderboard from "./Leaderboard";
import { motion } from "framer-motion";

// Use a function to get the latest block number
async function getLatestBlockNumber(publicClient: PublicClient) {
  const block = await publicClient.getBlockNumber();
  return block;
}

export default function CollectiveHero() {
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  // const [payableAmount, setPayableAmount] = useState(0);
  const [tokenId, setTokenId] = useState<BigInt>(BigInt(0));
  const [poll, setPoll] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const AntiGravity = useContract();
  const publicClient = usePublicClient();
  const { openConnectModal } = useConnectModal();

  const [isOpen, setIsOpen] = useState(false);
  // const [currentChain, setCurrentChain] = useState("");

  const account = useAccount();

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    if (openConnectModal) {
      openConnectModal();
    }
  };

  return (
    <div className="relative flex flex-col justify-start items-center w-full h-fit lg:h-screen bg-gradient-to-b from-[#000000A8] to-[#00000000] gap-[24px] p-[16px] pt-[100px] lg:pt-[200px]">
      <div className="flex flex-col justify-center items-center gap-[16px]">
        <H1
          className="text-agwhite text-[56px] leading-[53.76px] md:text-[64px] md:leading-[64px]"
          center
        >
          Every Flood Starts
          <br /> with a Drop.
        </H1>
        <P center>
          There are roughly 7 billion people on earth. It only takes 2 billion
          drops of water to start a flood.
        </P>
        {!account.isConnected && (
          <Button
            onClick={handleLogin}
            iconAlt="wallet"
            iconPosition="start"
            iconSrc={IMAGEKIT_ICONS.WALLET_WHITE}
            innerText="Connect Wallet"
          />
        )}
      </div>
      <motion.div
        animate={{ y: 0 }}
        initial={{ y: "100vh" }}
        transition={{ duration: 1, type: "spring", bounce: 0.25, delay: 1.5 }}
        className="hidden lg:block w-full h-fit max-w-[1200px]"
      >
        <Leaderboard accountIsConnected />
      </motion.div>
      <Image
        src={IMAGEKIT_IMAGES.COLLECTIVE_HERO_BG}
        alt="Collective Hero Background"
        height={1080}
        width={1920}
        className="absolute inset-0 -z-[1] w-[1920px] h-full lg:h-screen object-[70%_10%] object-none lg:object-cover"
      />
    </div>
  );
}
