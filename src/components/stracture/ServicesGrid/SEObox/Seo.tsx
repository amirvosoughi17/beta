"use client";
import React from "react";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "@/components/ui/glowing-stars";

const Seo = () => {
  return (
    <div className="w-full h-full relative bg-neutral-800/50 drop-shadow-lg  flex items-center justify-center shadow-lg border-[1.2px] border-neutral-700/60  rounded-xl">
        <div className=" absolute">
            <h1 className=" text-[100px] font-extrabold tracking-[20px]">SEO</h1>
        </div>
      <GlowingStarsBackgroundCard className="">
      </GlowingStarsBackgroundCard>
    </div>
  );
};

export default Seo;
