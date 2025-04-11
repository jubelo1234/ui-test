import { Input } from "@/components/ui/input";
import React from "react";
import { useId } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
// import graphic from "@/assets/images/subbg.png";
// import Image from "next/image";

export default function SubscribeSection() {
  const id = useId();
  return (
    <div className="w-full bg-text-dark py-9 tablet:py-[70px] lg:py-[90px]">
      <div className="relative w-[92vw] md:w-[93vw]  max-w-web-max mx-auto">
        {/* <Image
          src={graphic}
          alt="graphic"
          className="h-[585px] z-0  w-fit absolute top-1/2 left-0 -translate-y-1/2"
        /> */}
        <div className="w-full max-w-[601px] mx-auto text-white">
          <h2 className="font-chronicle font-bold text-2xl md:text-[32px] leading-tight tracking-wide">
            Subscribe to Cordros Insights
          </h2>
          <p className="text-base mt-2 font-[400]">
            Our weekly newsletter with insights and intelligence from across the
            globe.
          </p>
          <div className="mt-8 sm:mt-10 laptop:!mt-14 flex flex-col sm:flex-row sm:items-center gap-y-3 gap-x-4">
            <Input
              placeholder="Enter your email address"
              type="email"
              className="ring-0 rounded-[8px] placeholder:text-white sm:flex-grow outline-0 focus-visible:ring-0 border border-[#4B585F] focus-visible:border-text h-[50px]"
            />
            <button className="w-full five:max-w-[133px] h-[46px] bg-cord-red rounded-[50px] text-center cursor-pointer">
              Sign me up
            </button>
          </div>
          <div className="flex items-center gap-2 [--primary:#DB364A] [--ring:#DB364A] mt-6">
            <Checkbox
              id={id}
              className="bg-white data-[state=checked]:bg-[var(--primary)]"
            />
            <Label htmlFor={id} className="text-white text-xs font-normal">
              I agree to receive marketing emails from Cordros and accept the
              terms of the privacy policy.
            </Label>
          </div>
        </div>
      </div>
    </div>
  );
}
