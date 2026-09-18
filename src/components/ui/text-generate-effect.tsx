"use client";
import { useEffect, type JSX } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: JSX.Element[] | string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, []);

  const renderWords = () => {
    if (Array.isArray(words)) {
      // If words is an array of JSX elements
      return (
        <motion.div ref={scope}>
          {words.map((element, idx) => (
            <motion.span
              key={idx}
              className="font-cobaltRidge w-full text-wrap text-4xl md:text-6xl lg:text-7xl text-primary-foreground text-center md:text-left  md:w-[95%] leading-8"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {element}{" "}
            </motion.span>
          ))}
        </motion.div>
      );
    } else {
      // If words is a string
      const wordsArray = words.split(" ");
      return (
        <motion.div ref={scope}>
          {wordsArray.map((word, idx) => (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          ))}
        </motion.div>
      );
    }
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
