"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import WixelLogo from '@/assets/grid-logo.svg'
import Image from "next/image";
import { RiShoppingBagLine } from "react-icons/ri";
import { FaChalkboardTeacher } from "react-icons/fa";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { TbUserHexagon } from "react-icons/tb";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-14 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamMultipleOutputDemo({
  className,
}: {
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl",
        className,
      )}
      ref={containerRef}
    >
      <div className="flex size-full max-w-md flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref}>
            <Icons.user />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="size-16 p-1">
            <Icons.Wixel />
          </Circle>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div1Ref}>
            <Icons.Shopping />
          </Circle>
          <Circle ref={div2Ref}>
            <Icons.Learning />
          </Circle>
          <Circle ref={div3Ref}>
            <Icons.Company />
          </Circle>
          <Circle ref={div4Ref}>
            <Icons.Personal />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
        duration={3}
      />
    </div>
  );
}

const Icons = {
  Wixel: () => (
    <Image 
      src={WixelLogo}
      alt="wixel"
      className="w-[100px]"
      width={200}
    />
  ),
  Shopping: () => (
    <RiShoppingBagLine  className="text-neutral-600" size={33}/>
  ),
  Learning: () => (
    <FaChalkboardTeacher  className="text-indigo-600" size={33}/>
  ),
  Company: () => (
    <TbBuildingSkyscraper  className="text-purple-600" size={30}/>
  ),
  Personal: () => (
    <TbUserHexagon  className="text-rose-600" size={30}/>
  ),
  user: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
};
