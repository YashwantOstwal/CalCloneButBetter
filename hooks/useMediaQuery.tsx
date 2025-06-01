"use client";

import { useEffect, useState } from "react";

export function useMediaQuery<T>(breakpoints: T[]): T | null | "base" {
  const [mediaQuery, setMediaQuery] = useState<T | null | "base">(null);
  const maxWidth = {
    base: 639,
    sm: 767,
    md: 1023,
    lg: 1279,
    xl: 1535,
    "2xl": Infinity,
  };
  const [sortedBreakpoints] = useState(
    breakpoints.sort(
      (a, b) =>
        maxWidth[a as keyof typeof maxWidth] -
        maxWidth[b as keyof typeof maxWidth]
    )
  );
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      let buffer: T = sortedBreakpoints[0];
      for (let i of sortedBreakpoints) {
        if (
          screenWidth >= maxWidth[i as keyof typeof maxWidth] &&
          maxWidth[i as keyof typeof maxWidth] >
            maxWidth[buffer as keyof typeof maxWidth]
        ) {
          buffer = i;
        }
      }
      setMediaQuery(buffer);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return mediaQuery;
}
