"use client";

import React, { useEffect, useRef } from "react";

interface FloatProps {
  children: React.ReactNode;
  delay?: number;
  yOffset?: number;
  duration?: number;
}

export const Float: React.FC<FloatProps> = ({ 
  children, 
  delay = 0, 
  yOffset = 8,
  duration = 6 
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !elementRef.current) return;

    const animation = elementRef.current.animate(
      [
        { transform: 'translateY(0)' },
        { transform: `translateY(-${yOffset}px)` },
        { transform: 'translateY(0)' },
      ],
      {
        duration: duration * 1000,
        iterations: Infinity,
        easing: 'ease-in-out',
        delay: delay * 1000,
      }
    );

    return () => animation.cancel();
  }, [delay, yOffset, duration]);

  return <div ref={elementRef}>{children}</div>;
};
