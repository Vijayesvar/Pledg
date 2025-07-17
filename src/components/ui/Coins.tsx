import Image from "next/image";

export default function Coins() {
  return (
    <Image
      src="/coins.png"
      alt="Coins"
      width={1000}
      height={1000}
      className="lg:w-full lg:h-full md:w-[0%] md:h-[0%]"
      priority
    />
  );
}