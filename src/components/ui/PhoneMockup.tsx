"use client";

import React from "react";
import Image from "next/image";

interface PhoneMockupProps {
  image: string;
  alt: string;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ image, alt }) => {
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  return (
    <div
      className="relative w-64 h-[500px] mx-auto"
      style={{
        transform: prefersReducedMotion ? 'none' : 'rotate(-4deg)',
        transition: prefersReducedMotion ? 'none' : 'transform 0.6s ease-out',
      }}
    >
      {/* Phone frame */}
      <div
        className="absolute inset-0 rounded-[2.5rem] border-2 overflow-hidden"
        style={{
          borderColor: 'var(--color-accent)',
          backgroundColor: 'var(--color-surface)',
        }}
      >
        {/* Screen */}
        <div className="absolute inset-2 rounded-[2rem] overflow-hidden bg-black">
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        {/* Notch */}
        <div
          className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 rounded-full"
          style={{
            backgroundColor: 'var(--color-surface)',
          }}
        />
      </div>

      {/* Soft shadow */}
      <div
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-8 rounded-full blur-xl opacity-30"
        style={{
          backgroundColor: 'var(--color-accent)',
        }}
      />
    </div>
  );
};
