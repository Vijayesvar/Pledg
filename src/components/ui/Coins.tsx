import Image from "next/image";

export default function Coins() {
  return (
    <Image
      src="/coins.png"
      alt="Coins"
      width={900}
      height={900}
      className="lg:w-full lg:h-full md:w-[0%] md:h-[0%]"
      priority
    />
  );
}