"use client"
import { useState } from "react";
import { User, Plus, Minus } from "lucide-react";
import SectionLines from "./ui/SectionLines";
import IconTag from "./ui/IconTag";

const faqs = [
  {
    question: "What cryptocurrencies can I use as collateral?",
    answer: "We currently support Bitcoin (BTC), Ethereum (ETH), and USDT. More digital assets will be added soon. The complete list will be available at launch.",
  },
  {
    question: "How much can I borrow against my crypto?",
    answer: "You can typically borrow up to 70% of your crypto's value, depending on the asset type and current market conditions. Our loan-to-value ratios are competitive and transparent.",
  },
  {
    question: "What happens if my crypto value drops?",
    answer: "We have a margin call system in place. If your collateral value drops significantly, you'll receive notifications to either add more collateral or partially repay the loan to maintain a healthy ratio.",
  },
  {
    question: "How fast can I get the loan?",
    answer: "Once your collateral is deposited and verified, loans are typically processed within 15-30 minutes. Our automated system ensures quick approval for eligible applicants.",
  },
  {
    question: "Are there any hidden fees?",
    answer: "No hidden fees. We charge a transparent interest rate and a small origination fee. All costs are clearly displayed before you confirm your loan agreement.",
  },
  {
    question: "What cryptocurrencies can I use as collateral?",
    answer: "We currently support Bitcoin (BTC), Ethereum (ETH), and USDT. More digital assets will be added soon. The complete list will be available at launch.",
  },
  {
    question: "How much can I borrow against my crypto?",
    answer: "You can typically borrow up to 70% of your crypto's value, depending on the asset type and current market conditions. Our loan-to-value ratios are competitive and transparent.",
  },
  {
    question: "What happens if my crypto value drops?",
    answer: "We have a margin call system in place. If your collateral value drops significantly, you'll receive notifications to either add more collateral or partially repay the loan to maintain a healthy ratio.",
  },
  {
    question: "How fast can I get the loan?",
    answer: "Once your collateral is deposited and verified, loans are typically processed within 15-30 minutes. Our automated system ensures quick approval for eligible applicants.",
  },
  {
    question: "Are there any hidden fees?",
    answer: "No hidden fees. We charge a transparent interest rate and a small origination fee. All costs are clearly displayed before you confirm your loan agreement.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="max-w-4xl mx-auto p-8 ">
      {/* <div className="absolute top-[-26rem] justify-center max-w-4xl flex w-full h-full pointer-events-none">
        <BlurArc />
      </div> */}
      <div className="flex items-center justify-center gap-8 mb-16">
        <SectionLines left={false} />
        <div className="flex flex-col items-center">
          <h1 className="text-[3rem] font-semibold text-center">FAQ</h1>
          <h3 className="text-[1.2rem] font-medium max-w-[31rem] text-foreground/50 text-center leading-[1.3]">
            Your frequently asked questions answered
          </h3>
        </div>
        <SectionLines left={true} />
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-xl border-2 border-[#6F78D4]/15 bg-gradient-to-b from-[#FFFFFF] to-[#D0D4FA]/30 shadow-sm overflow-hidden transition-all duration-200"
          >
            <div
              className="flex items-center w-full px-6 py-5 gap-4 cursor-pointer select-none transition-colors duration-200 "
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              aria-expanded={openIndex === index}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setOpenIndex(openIndex === index ? -1 : index);
                }
              }}
            >
              <IconTag icon={<User />} />
              <span className="flex-1 text-left text-lg font-semibold text-foreground">
                {faq.question}
              </span>
              <span className="ml-4 pr-4">
                <div className="relative w-6 h-6">
                  <Plus 
                    className={`absolute inset-0 w-6 h-6 text-[#6F78D4] transition-all duration-200 ease-out ${
                      openIndex === index ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                    }`}
                  />
                  <Minus 
                    className={`absolute inset-0 w-6 h-6 text-[#6F78D4] transition-all duration-200 ease-out ${
                      openIndex === index ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                    }`}
                  />
                </div>
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-200 ease-out ${
                openIndex === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-20 pb-5 text-[1rem] text-foreground/70 font-medium select-text">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}