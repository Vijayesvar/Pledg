import Image from "next/image";

export default function Card({ image, text, subtext }: { image: string, text: string, subtext: React.ReactNode }) {
  return (
    <div className="w-[25rem] h-full rounded-xl border-[#6F78D4]/10 border-2 p-4 bg-gradient-to-b from-[#FFFFFF] to-[#D0D4FA]/30 shadow-md">
      <div className="relative w-full aspect-[5/3] mb-4 overflow-hidden">
        <Image
          src={image}
          alt={text}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-xl"
          priority
          unoptimized
        />
      </div>
      <h3 className="text-foreground text-2xl font-semibold mb-4">{text}</h3>
      {subtext}
    </div>
  );
}