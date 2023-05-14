import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image src="/logo.webp" alt="Vercel Logo" width={42} height={16} />
      <p className=" font-bold text-xl pt-2 ml-2">- DOFARCHI</p>
    </Link>
  );
}
