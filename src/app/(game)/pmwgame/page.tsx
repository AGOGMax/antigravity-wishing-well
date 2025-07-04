"use client";
import "@rainbow-me/rainbowkit/styles.css";
import dynamic from "next/dynamic";
import { IMAGEKIT_IMAGES } from "@/assets/imageKit";

const PMWGame = dynamic(() => import("./PMWGame"), {
  ssr: false,
});

export default function PinkMistGame() {
  return (
    <div
      style={{
        background: `url(${IMAGEKIT_IMAGES.PINK_MIST_WHALE_COING_BG})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        backgroundAttachment: "fixed",
        backgroundColor: "#D90887",
        backgroundSize: "cover",
      }}
      className="min-h-screen"
    >
      <PMWGame />
    </div>
  );
}
