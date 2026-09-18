/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useRef, useEffect, useState, type ReactNode, type JSX } from "react";
import { useSprings, animated, type SpringValue } from "@react-spring/web";
import React from "react";

const AnimatedSpan = animated.span as React.ElementType;

interface BlurTextProps {
  text: string | JSX.Element | JSX.Element[];
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  threshold?: number;
  rootMargin?: string;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  animationFrom?: Record<string, any>;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  animationTo?: Record<string, any>[];
  easing?: (t: number) => number | string;
  onAnimationComplete?: () => void;
  nowrap?: boolean;
}

const BlurText: React.FC<BlurTextProps> = ({
  text = "",
  delay = 100,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
  animationFrom,
  animationTo,
  easing = "easeOutCubic",
  onAnimationComplete,
  nowrap = false,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const animatedCount = useRef(0);

  // Process text based on its type
  let elements: ReactNode[] = [];

  if (typeof text === "string") {
    // Handle string text
    elements = animateBy === "words" ? text.split(" ") : text.split("");
  } else if (Array.isArray(text)) {
    // Handle JSX.Element[] directly
    elements = text;
  } else {
    // Handle single JSX.Element by wrapping in array
    elements = [text];
  }

  // Default animations based on direction
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const defaultFrom: Record<string, any> =
    direction === "top"
      ? {
          filter: "blur(10px)",
          opacity: 0,
          transform: "translate3d(0,-50px,0)",
        }
      : {
          filter: "blur(10px)",
          opacity: 0,
          transform: "translate3d(0,50px,0)",
        };

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const defaultTo: Record<string, any>[] = [
    {
      filter: "blur(5px)",
      opacity: 0.5,
      transform:
        direction === "top" ? "translate3d(0,5px,0)" : "translate3d(0,-5px,0)",
    },
    { filter: "blur(0px)", opacity: 1, transform: "translate3d(0,0,0)" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const springs = useSprings(
    elements.length,
    elements.map((_, i) => ({
      from: animationFrom || defaultFrom,
      to: inView
        ? async (
            // biome-ignore lint/suspicious/noExplicitAny: <explanation>
            next: (arg: Record<string, SpringValue<any>>) => Promise<void>
          ) => {
            for (const step of animationTo || defaultTo) {
              await next(step);
            }
            animatedCount.current += 1;
            if (
              animatedCount.current === elements.length &&
              onAnimationComplete
            ) {
              onAnimationComplete();
            }
          }
        : animationFrom || defaultFrom,
      delay: i * delay,
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      config: { easing: easing as any },
    }))
  );

  // Determine flex wrap class based on the nowrap prop
  const wrapClass = nowrap ? "flex-nowrap" : "flex-wrap";

  return (
    <div
      ref={ref}
      className={`blur-text ${className} inline-flex ${wrapClass} whitespace-pre`}
    >
      {springs.map((props, index) => {
        // For JSX elements, we want to clone them with animation props
        if (React.isValidElement(elements[index])) {
          return (
            <AnimatedSpan
              key={index}
              style={props}
              className="inline-block w-full transition-transform will-change-[transform,filter,opacity]"
            >
              {React.cloneElement(elements[index] as React.ReactElement, {
                key: `animated-element-${index}`,
                // Don't override classes that might be in the original element
              })}
            </AnimatedSpan>
          );
        }

        // For string elements, render as before
        return (
          <AnimatedSpan
            key={index}
            style={props}
            className="inline-block transition-transform will-change-[transform,filter,opacity]"
          >
            {elements[index] === " " ? "\u00A0" : elements[index]}
            {animateBy === "words" &&
              typeof text === "string" &&
              index < elements.length - 1 &&
              "\u00A0"}
          </AnimatedSpan>
        );
      })}
    </div>
  );
};

export default BlurText;
