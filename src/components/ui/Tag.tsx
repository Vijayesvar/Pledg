export default function Tag({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-gradient-to-b from-[#EEEEEE] via-[#FFFFFF] to-[#EEEEEE] px-3 py-2 rounded-full text-[12px] border border-[#EEEEEE] cursor-pointer hover:border-foreground/7 transition-all duration-300">
           {children}
        </div>
    );
}
