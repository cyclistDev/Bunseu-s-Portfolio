"use client";

import React, { useEffect, useState } from "react";

export const ScrollIndicator: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.6s ease-out',
      }}
    >
      <span className="text-xs font-mono text-foreground-subtle uppercase tracking-widest">
        Scroll
      </span>
      <div
        className="w-px h-8"
        style={{
          background: 'var(--color-border)',
          animation: 'bounce 2s ease-in-out infinite',
        }}
      />
      <style jsx>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(8px);
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};
