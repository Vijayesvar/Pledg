export default function IconTag({ icon }: { icon: React.ReactNode }) {
    return (
        <div className="w-[2.8rem] h-[2.8rem] bg-gradient-to-b text-white/75 from-[#6F78D4] to-[#4D549D] rounded-[0.9rem] border-2 border-[#8A92E3] flex items-center justify-center">
            {icon}
        </div>
    )
}