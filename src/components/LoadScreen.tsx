"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdOutlineCopyright } from "react-icons/md";
import AnimatedCircularProgressBar from "@/components/magicui/animated-circular-progress-bar";
import logo from "@/assets/sig-logo.svg";
import Spinner from "./Spinner";

const LoadingScreen = ({ setIsLoading }: any) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleIncrement = (prev: number) => {
      if (prev >= 100) {
        setIsLoading(false);
        return 100;
      }
      return prev + 1;
    };
    const interval = setInterval(() => setProgress(handleIncrement), 30);
    return () => clearInterval(interval);
  }, [setIsLoading]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-neutral-900 z-50">
      <div className="flex w-full flex-col items-center justify-center">
       <Spinner />
      </div>
    </div>
  );
};

export default LoadingScreen;
