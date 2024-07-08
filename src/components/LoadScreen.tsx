"use client";
import React, { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import logo from "@/assets/sig-logo.svg";
import Image from "next/image";
import { MdOutlineCopyright } from "react-icons/md";

const LoadingScreen = ({ setIsLoading }: any) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setIsLoading(false);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [setIsLoading]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-neutral-900 z-50">
      <div className="flex w-full flex-col items-center justify-center">
        <div className="w-full min-h-[600px] flex items-center justify-center dark:bg-neutral-900/40 bg-white   dark:bg-grid-small-white/[0.15] bg-grid-small-black/[0.2] relative ">
          <div className="absolute  pointer-events-none inset-0 flex items-center justify-center dark:bg-neutral-900 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
          <div className="relative h-[180px]  flex items-center justify-center w-[180px]">
            <Progress
              value={progress}
              className="w-[180px] h-[180px] bg-neutral-800/60 backdrop-blur-lg border-[1.5px] shadow-lg border-neutral-600 rotate-[-35deg]"
            />
            <div className="absolute top-[8.5px] left-[8.5px] bottom-[8.5px] right-[8.5px] z-0 bg-neutral-900 border-[0.7px] border-neutral-700 rounded-full"></div>
            <span className="absolute text-[28px] text-white font-medium">
              {progress}%
            </span>
          </div>
        </div>
        <div className=" fixed bottom-8 left-8">
          <div className="flex items-center gap-1 text-neutral-400 text-sm font-light">
            <span>2025</span>
            <MdOutlineCopyright />
          </div>
        </div>
        <div className=" fixed bottom-6 right-6">
          <div className="flex items-center gap-1 text-neutral-400 text-sm font-light"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
