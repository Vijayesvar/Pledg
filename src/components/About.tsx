import BlurArc from "./ui/BlurArc";
import SectionLines from "./ui/SectionLines";
import { User, DollarSign, CreditCard } from "lucide-react";
import StepCard from "./ui/StepCard";
import ScrollProgressLine from "./ui/ScrollProgressLine";

export default function About() {
  const borrowerSteps = [
    {
      icon: <User />,
      title: "Register and Verify",
      points: [
        "Sign up and complete KYC details which includes verifying PAN, Aadhaar card.",
        "Link your bank account for loan amount transfer from lender for your loan.",
        "Now you are a registered Pledg Borrower."
      ]
    },
    {
      icon: <DollarSign />,
      title: "Apply for Loan",
      points: [
        "Choose supported crypto and lock into a secure, smart contract wallet.",
        "Set desired INR amount, define interest rate and duration for your repayment.",
        "Submit loan request to the marketplace."
      ]
    },
    {
      icon: <CreditCard />,
      title: "Get Funded",
      points: [
        "Lender sees your loan request in the marketplace, accepts your terms and funds the loan.",
        "INR is disbursed to your bank account instantly and your repayment duration starts.",
        "Repay anytime within the recurring repayment duration and unlock your crypto once completed."
      ]
    }
  ];

  const lenderSteps = [
    {
      icon: <User />,
      title: "Register and Verify",
      points: [
        "Sign up and complete KYC details which includes verifying PAN, Aadhaar card.",
        "Link your bank account for loan amount transfer from lender for your loan.",
        "Now you are a registered Pledg Lender."
      ]
    },
    {
      icon: <DollarSign />,
      title: "Review Loan Requests",
      points: [
        "Choose supported crypto and lock into a secure, smart contract wallet.",
        "Set desired INR amount, define interest rate and duration for your repayment.",
        "Submit loan request to the marketplace."
      ]
    },
    {
      icon: <CreditCard />,
      title: "Lend & Earn",
      points: [
        "Lender sees your loan request in the marketplace, accepts your terms and funds the loan.",
        "INR is disbursed to your bank account instantly and your repayment duration starts.",
        "Repay anytime within the recurring repayment duration and unlock your crypto once completed."
      ]
    }
  ];
  const progressPositions = [8, 23, 38, 57, 71, 85];

  return (
    <div className="w-full min-h-screen relative flex flex-col items-center">
      <div className="absolute top-[-26rem] justify-center flex w-full h-full">
        <BlurArc />
      </div>
      <div className="flex items-center justify-center gap-8 mt-8">
        <SectionLines left={false} />
        <div className="flex flex-col items-center">
          <h1 className="text-[3rem] font-semibold text-center">How Pledg Works</h1>
          <h3 className="text-[1.2rem] font-medium max-w-[31rem] text-foreground/50 text-center leading-[1.3]">
            A comprehensive <span className="text-foreground/70">guide</span> to crypto-backed INR lending on our peer-to-peer platform
          </h3>
        </div>
        <SectionLines left={true} />
      </div>
      <div className="w-full h-full">
        <ScrollProgressLine positions={progressPositions} />
      </div>
      <div className="w-[75rem] mt-24 relative flex justify-between items-start">
        <div className="flex flex-col w-full justify-between pl-26 relative items-start max-w-[30rem] sticky top-[8rem]">
          <div className="text-foreground/80 text-xl font-semibold">Step-by-Step process for</div>
          <div className="text-foreground text-[5.5rem] m-0 p-0 font-semibold leading-none">Borrowers</div>
          <div className="text-foreground/50 font-medium text-[1.1rem]">to get <span className="text-foreground/70">INR</span> Loan using Crypto collateral with the help of our secure implementation</div>
        </div>
        <div className="flex flex-col items-center gap-6 relative">
          {borrowerSteps.map((step, index) => (
            <div key={index}>
              <StepCard 
                icon={step.icon}
                title={step.title}
                points={step.points}
              />
              {index < borrowerSteps.length - 1 && (
                <div className="w-[80%] h-[1px] bg-foreground/10 mt-6"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="w-[75rem] mt-48 relative flex justify-between items-start pr-20">
        <div className="flex flex-col items-center gap-6">
          {lenderSteps.map((step, index) => (
            <div key={index}>
              <StepCard 
                icon={step.icon}
                title={step.title}
                points={step.points}
              />
              {index < lenderSteps.length - 1 && (
                <div className="w-[80%] h-[1px] bg-foreground/10 mt-6"></div>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col w-full justify-between relative items-start max-w-[28rem] items-start sticky top-[8rem]">
          <div className="text-foreground/80 text-xl font-semibold">Step-by-Step process for</div>
          <div className="text-foreground text-[5.5rem] m-0 p-0 font-semibold leading-none">Lenders</div>
          <div className="text-foreground/50 font-medium text-[1.1rem]">to earn <span className="text-foreground/70">passive income</span> by <span className="text-foreground/70">funding</span> low risk crypto-backed loans.</div>
        </div>
      </div>
    </div>
  );
}
