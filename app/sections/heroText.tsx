"use client";
import { useAnimate, motion } from "motion/react";
import { useEffect } from "react";

export default function HeroText() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const sequence = async () => {
      await animate([
        [".subtitle", { opacity: 0, y: 5 }, { duration: 0 }],
        [".title", { opacity: 0, y: 5 }, { duration: 0 }],
        [".description", { opacity: 0, y: 5 }, { duration: 0 }],
      ]);

      await animate(
        ".subtitle",
        { opacity: 1, y: 0 },
        { duration: 0.9, ease: "easeOut" }
      );
      await animate(
        ".title",
        { opacity: 1, y: 0 },
        { duration: 0.9, ease: "easeOut" }
      );
      await animate(
        ".description",
        { opacity: 1, y: 0 },
        { duration: 0.9, ease: "easeOut" }
      );
    };

    sequence();
  }, [animate]);

  return (
    <div
      ref={scope}
      className="w-full max-w-[1195px] space-y-5 sm:space-y-7 laptop:!space-y-9 text-white"
    >
      <motion.h4
        className="subtitle text-[13px] leading-[19px] md:text-sm uppercase tracking-[0.5em] font-medium"
        initial={{ opacity: 0, y: 5 }}
      >
        Relentless In Our Pursuit of
      </motion.h4>

      <motion.h1
        className="title font-chronicle text-4xl leading-[44px] laptop:!text-[72px] sm:text-5xl lg:text-[55px] sm:leading-snug font-[800] tracking-wider"
        initial={{ opacity: 0, y: 5 }}
      >
        Growth and Excellence<span className="text-cord-red">.</span>
      </motion.h1>

      <motion.div
        className="description flex justify-end"
        initial={{ opacity: 0, y: 5 }}
      >
        <p className="max-w-[410px] text-base leading-7">
          At Cordros Capital, performance is what defines us. We are a brand
          with strong passion for consistent and sustainable growth.
        </p>
      </motion.div>
    </div>
  );
}
