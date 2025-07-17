import BlurArc from "./ui/BlurArc";
import SectionLines from "./ui/SectionLines";
import Card from "./ui/Card";

export default function Security() {
  return (
    <div className="w-full relative flex flex-col items-center">
      <div className="absolute top-[-26rem] justify-center flex w-full h-full">
        <BlurArc />
      </div>
      <div className="flex items-center justify-center gap-8 mt-8">
        <SectionLines left={false} />
        <div className="flex flex-col items-center">
            <h2 className="text-foreground/75 text-3xl font-semibold text-center">Our Security First</h2>
            <h1 className="text-[3rem] font-semibold text-center">Technical Implementation</h1>
            <h3 className="text-[1.2rem] font-medium max-w-[43rem] text-foreground/50 text-center leading-[1.3]">
            Explore our security first technical implementation that puts <span className="text-foreground/70">forgeability</span> and <span className="text-foreground/70">reliability</span> before everything else
            </h3>
        </div>
        <SectionLines left={true} />
      </div>
      <div className="flex flex-row items-center justify-center gap-10 mt-20">
        <Card image="/contract.png" text="Smart Contracts"
        subtext={
          <p className="text-foreground/50 text-md font-semibold">
            Ethereum-based smart contracts handle <span className="text-foreground/75">collateral management, loan execution, and automatic liquidations. </span> 
             All contracts are audited by leading security firms and open-source for transparency.
          </p>
        } />
        <Card image="/oracle.png" text="Price Oracle"
        subtext={
          <p className="text-foreground/50 text-md font-semibold">
            Ethereum-based smart contracts handle <span className="text-foreground/75">collateral management, loan execution, and automatic liquidations. </span> 
             All contracts are audited by leading security firms and open-source for transparency.
          </p>
        } />
            <Card image="/security.png" text="Security Infrastructure"
        subtext={
          <p className="text-foreground/50 text-md font-semibold">
            Ethereum-based smart contracts handle <span className="text-foreground/75">collateral management, loan execution, and automatic liquidations. </span> 
             All contracts are audited by leading security firms and open-source for transparency.
          </p>
        } />
      </div>
    </div>
  );
}