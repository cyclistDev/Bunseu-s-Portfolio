"use client";

import React, { useEffect, useRef } from "react";

export const RouteLine: React.FC = () => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !pathRef.current) return;

    pathRef.current.style.animation = 'draw 2.5s ease-out forwards';
  }, []);

  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  return (
    <div className="w-full h-16" aria-hidden="true">
      <svg
        className="w-full h-full opacity-15"
        viewBox="0 0 1200 64"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          d="M0,32 Q200,8 400,32 T800,32 T1200,32"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{
            strokeDasharray: '1000',
            strokeDashoffset: prefersReducedMotion ? '0' : '1000',
          }}
        />
      </svg>
      <style jsx>{`
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};
