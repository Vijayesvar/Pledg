import Image from "next/image";

export default function Coins() {
  return (
    <Image
      src="/coins.png"
      alt="Coins"
      width={1100}
      height={1100}
      className="lg:w-full lg:h-full md:w-[0%] md:h-[0%]"
      priority
    />
  );
}