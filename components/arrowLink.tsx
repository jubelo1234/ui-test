import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ArrowLink({ title }: { title: string }) {
  return (
    <Link href="/" className="group flex justify-start items-center gap-2">
      <p className="text-[15px] text-[#2A0000] font-[500]">{title}</p>
      <div className="size-10 flex justify-center items-center rounded-full bg-transparent transition-colors duration-200 ease-in-out text-cord-red group-hover:text-white group-hover:bg-cord-red">
        <ArrowRight strokeWidth={1.5} className="size-[23px]" />
      </div>
    </Link>
  );
}
