"use client";
import { motion } from "framer-motion";
import Button from "./ui/Button";
import Image from "next/image";
import Coins from "./ui/Coins";
import Cash from "./ui/Cash";
import Tag from "./ui/Tag";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerHeight = 100; // Adjust this to your actual header height
      const y = el.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="relative flex flex-col gap-4 pt-38 items-center max-w-screen overflow-hidden"
      initial={{ opacity: 0, y: -60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="cursor-pointer hover:translate-y-[-5px] transition-all duration-300 ease-in-out" onClick={() => scrollToSection("contact")}>
        <Tag>Get early access by joining the Waitlist 🚀</Tag>
      </div>
      <h1 className="max-w-[850px] text-[4.8rem] font-[600] text-center leading-[1.15]">
        Crypto-Backed INR Loans made Simple
      </h1>
      <motion.div
        className="absolute top-[-14rem] left-[-24rem]"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <Coins />
      </motion.div>
      <motion.div
        className="absolute top-[-26rem] right-[-37rem]"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2,  ease: "easeOut" }}
      >
        <Cash />
      </motion.div>
      <h3 className="max-w-[700px] text-foreground/50 text-[1.1rem] font-[500] text-center leading-[1.4]">
        Connect directly with lenders and borrowers on{" "}
        <span className="text-foreground/70">India&apos;s first p2p platform</span>{" "}
        <span className="text-foreground/70">for cryptocurrency-collateralized rupee loans</span>
      </h3>
      <div className="flex gap-6 mt-3">
        <Button variant="fancy" onClick={() => scrollToSection("about")}>Get Started</Button>
        <Button variant="boring" onClick={() => scrollToSection("faq")}>Learn More</Button>
      </div>
      <motion.div
        className="relative w-[1200px] mt-8 items-center flex justify-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <div className="absolute top-[520px] w-[1300px] h-[110px] bg-gradient-to-b from-[#ffffff]/20 to-[#ffffff]/100"></div>
        <div className="w-[1200px] bg-[#f3f4f6] mt-14 h-[560px] rounded-t-[3rem] border-t-[#EEEEEE] border-l-[#EEEEEE] border-r-[#EEEEEE] border-b-transparent border-24">
          <Image
          quality={100}
          priority
          unoptimized={false}
          src="/hero.png" className="rounded-t-[1.5rem] px-1 py-0.5" alt="Hero Image" width={1200} height={430} />
        </div>
      </motion.div>
    </motion.div>
  );
}
