"use client";

import React, { useEffect, useRef } from "react";

export const HeroBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Pause animations when hero is off-screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const container = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            container.style.animationPlayState = 'running';
          } else {
            container.style.animationPlayState = 'paused';
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
      observerRef.current = observer;
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden -z-10"
      aria-hidden="true"
    >
      {/* Faint grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
        }}
      />

      {/* Glow blobs */}
      {!prefersReducedMotion && (
        <>
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{
              background: 'var(--color-accent)',
              animation: 'drift 25s ease-in-out infinite',
            }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15"
            style={{
              background: 'var(--color-surface)',
              animation: 'drift 30s ease-in-out infinite reverse',
            }}
          />
        </>
      )}

      {/* Cycling route line SVG */}
      <div className="absolute bottom-0 left-0 right-0 h-32">
        <svg
          className="w-full h-full opacity-20"
          viewBox="0 0 1200 128"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64 Q200,20 400,64 T800,64 T1200,64"
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="2"
            strokeLinecap="round"
            style={{
              strokeDasharray: '1000',
              strokeDashoffset: prefersReducedMotion ? '0' : '1000',
              animation: prefersReducedMotion ? 'none' : 'draw 2.5s ease-out forwards',
            }}
          />
        </svg>
      </div>

      <style jsx>{`
        @keyframes drift {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(30px, -30px) scale(1.1);
          }
        }

        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};
