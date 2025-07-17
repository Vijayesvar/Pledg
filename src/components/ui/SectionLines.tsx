export default function SectionLines({ left }: { left: boolean }) {
  return (
    <div className={`flex flex-col gap-[0.8rem] justify-center `}>
      <div className={`h-[2px] w-[160px] ${!left ? "bg-gradient-to-r from-[#eeeeee]/30 to-[#eeeeee]/100" : "bg-gradient-to-r from-[#eeeeee]/100 to-[#eeeeee]/30"} opacity-100`} />
      <div className={`h-[2px] w-[160px] ${!left ? "-translate-x-8" : "translate-x-8"} ${!left ? "bg-gradient-to-r from-[#eeeeee]/30 to-[#eeeeee]/100" : "bg-gradient-to-r from-[#eeeeee]/100 to-[#eeeeee]/30"} opacity-100`} />
      <div className={`h-[2px] w-[160px] ${!left ? "-translate-x-16" : "translate-x-16"} ${!left ? "bg-gradient-to-r from-[#eeeeee]/30 to-[#eeeeee]/100" : "bg-gradient-to-r from-[#eeeeee]/100 to-[#eeeeee]/30"} opacity-100`} />
      <div className={`h-[2px] w-[160px] ${!left ? "-translate-x-8" : "translate-x-8"} ${!left ? "bg-gradient-to-r from-[#eeeeee]/30 to-[#eeeeee]/100" : "bg-gradient-to-r from-[#eeeeee]/100 to-[#eeeeee]/30"} opacity-100`} />
      <div className={`h-[2px] w-[160px] ${!left ? "bg-gradient-to-r from-[#eeeeee]/30 to-[#eeeeee]/100" : "bg-gradient-to-r from-[#eeeeee]/100 to-[#eeeeee]/30"} opacity-100`} />
    </div>
  );
} 