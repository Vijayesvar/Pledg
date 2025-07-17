import { ReactNode } from "react";
import IconTag from "./IconTag";

interface StepCardProps {
  icon: ReactNode;
  title: string;
  points: string[];
}

export default function StepCard({ icon, title, points }: StepCardProps) {
  return (
    <div className="w-[33rem] bg-gradient-to-b from-[#FFFFFF] to-[#D0D4FA]/30 rounded-[1.5rem] border-2 border-[#6F78D4]/10 p-4">
      <div className="w-full flex gap-4 items-center">
        <IconTag icon={icon} />
        <div className="text-foreground text-[1.3rem] font-semibold">{title}</div>
      </div>
      {points.map((point, index) => (
        <div key={index} className="w-full flex gap-1 pl-1 items-center mt-3">
          <div className="w-[2.4rem] h-[2.8rem] flex-shrink-0 flex items-center justify-center">
            <div className="w-3 h-3 flex-shrink-0 rounded-full bg-gradient-to-b from-[#B1B8FF] to-[#7C87FF] border-2 border-[#6F78D4]"></div>
          </div>
          <div className="text-foreground/65 text-[1.05rem] font-medium">{point}</div>
        </div>
      ))}
    </div>
  );
} 