"use client";

import React, { useEffect, useRef, useState, ReactNode } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

import { cn } from "@/lib/utils";

interface VelocityScrollProps {
  boxes: ReactNode[];
  default_velocity?: number;
  className?: string;
}

interface ParallaxProps {
  children: ReactNode[];
  baseVelocity: number;
  className?: string;
}

export const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function VelocityScroll({
  boxes,
  default_velocity = 5,
  className,
}: VelocityScrollProps) {
  function ParallaxText({
    children,
    baseVelocity = 100,
    className,
  }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 400,
    });

    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
      clamp: false,
    });

    const [repetitions, setRepetitions] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null);
    const boxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const calculateRepetitions = () => {
        if (containerRef.current && boxRef.current) {
          const containerWidth = containerRef.current.offsetWidth;
          const boxWidth = boxRef.current.offsetWidth * children.length;
          const newRepetitions = Math.ceil(containerWidth / boxWidth) + 2;
          setRepetitions(newRepetitions);
        }
      };

      calculateRepetitions();

      window.addEventListener("resize", calculateRepetitions);
      return () => window.removeEventListener("resize", calculateRepetitions);
    }, [children]);

    const x = useTransform(baseX, (v) => `${wrap(-100 / repetitions, 0, v)}%`);

    const directionFactor = React.useRef<number>(1);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 700);

      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get();

      baseX.set(baseX.get() + moveBy);
    });

    return (
      <div
        dir="ltr"
        className="w-full overflow-hidden whitespace-nowrap"
        ref={containerRef}
      >
        <motion.div className={cn("inline-block", className)} style={{ x }}>
          {Array.from({ length: repetitions }).map((_, i) => (
            <React.Fragment key={i}>
              {children.map((child, j) => (
                <div key={j} ref={i === 0 && j === 0 ? boxRef : null} className="inline-block">
                  {child}
                </div>
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    );
  }

  return (
    <section className="relative w-full">
      <ParallaxText baseVelocity={default_velocity} className={className}>
        {boxes}
      </ParallaxText>
      <ParallaxText baseVelocity={-default_velocity} className={className}>
        {boxes}
      </ParallaxText>
    </section>
  );
}
