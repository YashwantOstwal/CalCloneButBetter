"use client";

import { useEffect, useState } from "react";

export default function useToggleState(
  range: {
    from: number;
    to: number;
  },
  duration: number
) {
  const [state, setState] = useState(range.from);

  useEffect(() => {
    const controlInterval: NodeJS.Timeout = setInterval(() => {
      setState((prev) => range.from + ((prev + 1) % range.to));
    }, duration);
    return () => clearInterval(controlInterval);
  });
  return { state };
}
