"use client";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href={"/"} className="flex items-center justify-center gap-1">
        <Image src={"/logo.svg"} width={20} height={20} alt="logo" />
        <h1 className="text-xl font-semibold">TestArc</h1>
      </Link>
    </div>
  );
};

export default Logo;
