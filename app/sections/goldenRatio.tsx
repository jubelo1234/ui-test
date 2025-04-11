"use client";
import ratioImg from "@/assets/images/ratio.png";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function GoldenRatio() {
  const [rotated, setRotated] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotated((prev) => !prev);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Image
      src={ratioImg}
      style={{ transform: rotated ? "rotate(180deg)" : "rotate(0deg)" }}
      alt="golden ratio"
      className="absolute hidden lg:inline-block top-0 right-0 h-full w-fit z-[5] transition-transform duration-[10] ease-in-out"
    />
  );
}
