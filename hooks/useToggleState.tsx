"use client";

import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function useToggleState<T extends HTMLElement>(
  range: {
    from: number;
    to: number;
  },
  duration: number
) {
  const ref = useRef<T>(null);
  const controlInterval = useRef<NodeJS.Timeout>(undefined);
  const [state, setState] = useState(range.from);

  useEffect(() => {
    controlInterval.current = setInterval(() => {
      setState((prev) => range.from + ((prev + 1) % range.to));
    }, duration);
    return () => clearInterval(controlInterval.current);
  }, []);
  return { state };
}
