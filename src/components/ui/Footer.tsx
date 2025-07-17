import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full pt-4 pb-2 mb-3 px-4 flex flex-col items-center justify-between bg-white">
        <div className=" w-[85%] mb-3 h-[2px] bg-foreground/5"></div>
        <div className="flex justify-between w-full items-center gap-3">
            <div className="flex items-center gap-3">
                <span className="rounded-xl flex items-center justify-center bg-[#A78BFA]">
                    <Image
                    src="/logo.svg" alt="Pledg Logo" width={42} height={42} />
                </span>
                <span className="font-medium text-[1.2rem] text-foreground">Pledg</span>
            </div>
            <div className="text-md text-foreground font-medium">contact@pledg.in</div>
        </div>
    </footer>
  );
}