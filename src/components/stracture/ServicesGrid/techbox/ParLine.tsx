"use client";
import React, { useEffect } from "react";
import IconC from "./IconC";
import useMeasure from "react-use-measure";
import { animate, useMotionValue, motion } from "framer-motion";

const ParLine = () => {
  const icons1 = [
    "/js.svg",
    "/next.svg",
    "/mongo.svg",
    "/ts.svg",
    "react.svg",
    "/node.svg",
    "/js.svg",
    "/ts.svg",
  ];
  const icons2 = [
    "/mongo.svg",
    "react.svg",
    "/next.svg",
    "/js.svg",
    "/node.svg",
    "/ts.svg",
    "/mongo.svg",
    "react.svg",
  ];
  const icons3 = [
    "/node.svg",
    "/next.svg",
    "/mongo.svg",
    "react.svg",
    "/ts.svg",
    "/js.svg",
    "/mongo.svg",
    "/next.svg",
  ];
  const [ref1, { height: height1 }] = useMeasure();
  const [ref2, { height: height2 }] = useMeasure();
  const yTranslation1 = useMotionValue(height1);
  const yTranslation2 = useMotionValue(0);
  useEffect(() => {
    const scrollDuration = 15;

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
    <div className="relative h-full z-10 w-full px-10 flex items-center justify-center overflow-hidden py-10 mb-[140px]  ">
      <motion.div
        style={{ y: yTranslation1 }}
        className="absolute top-0 flex w-[50px] ml-[180px] flex-col gap-[30px] md:top-[110px]"
        ref={ref1}
      >
        {[...icons1, ...icons1].map((item, index) => (
          <IconC image={item} key={index} />
        ))}
      </motion.div>
      <motion.div
        style={{ y: yTranslation2 }}
        className="absolute bottom-0 w-[50px] lg:mr-[70] items-center justify-center  flex flex-col gap-[30px] md:bottom-[110px]"
        ref={ref2}
      >
        {[...icons2, ...icons2].map((item, index) => (
          <IconC image={item} key={index} />
        ))}
      </motion.div>
      <motion.div
        style={{ y: yTranslation1 }}
        className="absolute top-0 w-[50px] mr-[200px] lg:mr-[190px] items-center justify-center  flex flex-col gap-[30px] md:top-[110px]"
        ref={ref1}
      >
        {[...icons3, ...icons3].map((item, index) => (
          <IconC image={item} key={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default ParLine;
