import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "ai";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = "default", className = "" }) => {
  const baseStyles = "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium font-mono";
  
  const variants = {
    default: "bg-surface text-foreground-muted border border-border",
    ai: "bg-accent/20 text-accent border border-accent/30",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};
