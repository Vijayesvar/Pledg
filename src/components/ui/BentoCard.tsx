import React from "react";
import { Zap } from "lucide-react";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface BentoCardProps {
  bigText?: string;
  bigNode?: boolean;
  title: string;
  subtext: React.ReactNode;
  className?: string;
}

export default function BentoCard({ bigNode, bigText, title, subtext, className }: BentoCardProps) {
  return (
    <div
      className={`relative w-full ${className} h-[18rem] rounded-2xl border-2 px-6 py-3 bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF] to-[#D0D4FA]/30`}
      style={{
        borderColor: "rgba(111, 120, 212, 0.15)",
        background: "linear-gradient(180deg, #FFFFFF 33%, rgba(208, 212, 250, 0.6) 100%)",
        boxShadow: "0 0 0 6px #ffffff inset"
      }}
    >
      {/* Big node (icon or text) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0">
        {bigNode ? (
          <div className="flex items-center justify-center gap-2">
            <Zap size={80} fill="#F3F4FF" className="text-[#F3F4FF] -mr-2 mt-6 " />
            <Zap size={150} fill="#F3F4FF" className="text-[#F3F4FF] -mt-8 " />
            <Zap size={80} fill="#F3F4FF" className="text-[#F3F4FF] -ml-2 mt-6" />
          </div>
        ): bigText ? (
            <span
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-3/5 select-none pointer-events-none ${inter.className}`}
        style={{
          fontSize: "10rem",
          fontWeight: 700,
          color: "#F3F4FF",
          WebkitTextStroke: "4px #F0F2FF",
        }}
      >
        {bigText}
      </span>   
        ): null}
      </div>
      <div className="relative z-10 flex flex-col gap-2 pt-32 pb-2 h-full justify-end">
        <h2 className="text-[1.5rem] font-semibold text-foreground mb-2">{title}</h2>
        <div className="text-[1rem] font-semibold text-foreground/70 leading-snug">{subtext}</div>
      </div>
    </div>
  );
}