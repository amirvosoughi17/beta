"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ButtonAnimation: React.FC = () => {
  const words = ["وب سایت", "اپلیکیشن", "گرافیک"];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWord((prevWord) => (prevWord + 1) % words.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const variants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
  };

  return (
    <div className="container max-w-[250px] ">
      <a href="#" className="button py-2  ">
        <div className="button__content ">
          <span className="button__text  ">wixel</span>

          <div className="button__shape-1"></div>
          <div className="button__shape-2"></div>
          <div className="button__shape-3"></div>
          <div className="button__shape-4"></div>
        </div>
      </a>
    </div>
  );
};

export default ButtonAnimation;
