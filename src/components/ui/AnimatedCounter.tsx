"use client";

import { motion, useInView, useSpring, useReducedMotion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  decimal?: boolean;
  className?: string;
}

export default function AnimatedCounter({
  value,
  suffix = "",
  decimal = false,
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const prefersReduced = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(0);

  const spring = useSpring(0, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.01,
  });

  useEffect(() => {
    if (isInView && !prefersReduced) {
      spring.set(value);
    } else if (isInView && prefersReduced) {
      setDisplayValue(value);
    }
  }, [isInView, value, spring, prefersReduced]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      setDisplayValue(Number(latest.toFixed(decimal ? 1 : 0)));
    });
  }, [spring, decimal]);

  return (
    <span ref={ref} className={className}>
      {decimal ? displayValue.toFixed(1) : Math.round(displayValue)}
      {suffix}
    </span>
  );
}
