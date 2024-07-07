"use client";

import React, { useEffect } from "react";
import Img from "./Img";
import useMeasure from "react-use-measure";
import { animate, useMotionValue, motion } from "framer-motion";

const Parallax: React.FC = () => {
  const Images1 = ["/c1.svg", "/c4.svg", "/c2.svg", "/c3.svg"];
  const Images2 = ["/c2.svg", "/c3.svg", "/c1.svg", "/c4.svg"];

  const [ref1, { height: height1 }] = useMeasure();
  const [ref2, { height: height2 }] = useMeasure();
  const yTranslation1 = useMotionValue(height1);
  const yTranslation2 = useMotionValue(0);

  useEffect(() => {
    const scrollDuration = 45;

    const animateScroll = (
      motionValue: any,
      startFrom: number,
      direction: "up" | "down",
      height: number
    ) => {
      const animationDirection =
        direction === "up" ? -height - startFrom : startFrom + height;

      animate(motionValue, animationDirection, {
        ease: "linear",
        duration: scrollDuration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    };

    animateScroll(yTranslation1, 0, "up", height1);
    animateScroll(yTranslation2, 0, "down", height2);

    return () => {
      yTranslation1.stop();
      yTranslation2.stop();
    };
  }, [yTranslation1, yTranslation2, height1, height2]);

  return (
    <div className="relative h-[450px] lg:h-[700px] z-10 w-full px-[60px] flex items-center justify-center overflow-hidden py-10 mb-[140px] ">
      <div className="w-full h-[100px] bg-gradient-to-b from-neutral-900  to-transparent absolute top-0 z-40"></div>
      <div className="w-full h-[100px] bg-gradient-to-b to-neutral-900  from-transparent absolute bottom-0 z-40"></div>
      <motion.div
        style={{ y: yTranslation1 }}
        className="absolute top-0 flex w-[320px] lg:w-[500px] lg:ml-[130px] flex-col gap-[30px] md:top-[110px]"
        ref={ref1}
      >
        {[...Images1, ...Images1].map((item, index) => (
          <Img image={item} key={index} />
        ))}
      </motion.div>
      <motion.div
        style={{ y: yTranslation2 }}
        className="absolute bottom-0 w-[320px] lg:w-[500px] lg:mr-[540px] items-center justify-center hidden md:flex flex-col gap-[30px] md:bottom-[110px]"
        ref={ref2}
      >
        {[...Images2, ...Images2].map((item, index) => (
          <Img image={item} key={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default Parallax;
