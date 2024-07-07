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
      <div className="flex flex-col items-center justify-center">
        <div className="relative h-[140px]  flex items-center justify-center w-[140px]">
          <Progress
            value={progress}
            className="w-[140px] h-[140px] bg-neutral-800 rotate-45"
          />
          <div className="absolute top-[5px] left-[5px] bottom-[5px] right-[5px] z-0 bg-neutral-950 rounded-full"></div>
          <span className="absolute text-[20px] text-white font-medium">
            {progress}%
          </span>
        </div>
      </div>
      <div className=" fixed bottom-6 left-6">
        <div className="flex items-center gap-1 text-neutral-400 text-sm font-light">
          <span>2025</span>
          <MdOutlineCopyright />
        </div>
      </div>
      <div className=" fixed bottom-6 right-6">
        <div className="flex items-center gap-1 text-neutral-400 text-sm font-light">
         <span>Designed by Wixel</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
