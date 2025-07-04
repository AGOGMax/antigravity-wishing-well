"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PiSkullFill } from "react-icons/pi";
import { IMAGEKIT_IMAGES } from "@/assets/imageKit";

interface CellProps {
  cellNumber: number;
  isUserCell: boolean;
  isBurst: boolean;
  activeTicketCount: number;
}

export default function Cell({
  cellNumber,
  isUserCell,
  isBurst,
  activeTicketCount,
}: CellProps) {
  const [showSkull, setShowSkull] = useState(false);

  return (
    <div
      className={`w-[32px] h-[32px] !text-[8px] border-[1px] p-2 bg-transparent flex items-center justify-center border-${isUserCell ? "agyellow" : "aggray"}`}
    >
      {isBurst && activeTicketCount > 1 ? (
        <>
          <motion.img
            src={IMAGEKIT_IMAGES.PINK_MIST_CLOUD}
            alt="Pink Mist"
            className={`${!isBurst ? "invisible " : "visible"}`}
            initial={{ opacity: 1, scale: 1, width: "30px" }}
            animate={
              isBurst
                ? { opacity: 0, scale: 10, width: "300px", display: "none" }
                : {}
            }
            transition={{ duration: 5, ease: "easeOut" }}
            style={{ pointerEvents: "none" }}
            onAnimationComplete={() => setShowSkull(true)}
          />
          {showSkull && <PiSkullFill className="!text-[36px] text-aggray" />}
        </>
      ) : (
        cellNumber
      )}
    </div>
  );
}
