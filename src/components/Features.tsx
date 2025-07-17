import BlurArc from "./ui/BlurArc";
import SectionLines from "./ui/SectionLines";
import BentoCard from "./ui/BentoCard";

export default function Features() {
  return (
    <div className="w-full relative flex flex-col items-center">
      <div className="absolute top-[-26rem] justify-center flex w-full h-full">
        <BlurArc />
      </div>
      <div className="flex items-center justify-center gap-8">
        <SectionLines left={false} />
        <div className="flex flex-col items-center">
        <h2 className="text-foreground/75 text-3xl font-semibold">Understanding why</h2>
            <h1 className="text-[3rem] font-semibold">We should be your top Priority</h1>
            <h3 className="text-[1.2rem] font-medium max-w-[43rem] text-foreground/50 text-center leading-[1.3]">
            Built for the modern <span className="text-foreground/70">Indian crypto ecosystem</span> with security and transparency at its core
            </h3>
        </div>
        <SectionLines left={true} />
      </div>
      <div className="flex flex-col gap-3 w-[70rem] h-full mt-12">
        <div className="flex gap-3 h-full">
          <div className="w-[54%] h-full">
            <BentoCard 
            bigText="100%"
            title="Completely Collateralized"
            subtext="Ethereum-based smart contracts handle collateral management, loan execution, and automatic liquidations. All contracts are audited by leading security firms and open-source for transparency."
            />
          </div>
          <div className="flex-1 h-full">
            <BentoCard 
              bigNode={true}
              title="Instant Processing"
              subtext="Smart contracts automate the entire process, from collateral verification to fund disbursement."
              />
          </div>
        </div>
        <div className="flex gap-3 h-full">
        <div className="w-[44%] h-full">
            <BentoCard 
            bigText="P2P"
            title="Peer-to-Peer"
            subtext="Direct connection between borrowers and lenders means better rates and terms for everyone."
            />
          </div>
          <div className="flex-1 h-full">
            <BentoCard 
              bigText="24/7"
              title="24/7 Availability"
              subtext="Access your funds anytime, anywhere. Our platform operates round the clock for your convenience."
              />
          </div>
        </div>
      </div>

    </div>
  );
}