import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = "", href }) => {
  const baseStyles = "bg-surface rounded-lg border border-border p-6 transition-all duration-normal hover:border-border-hover hover:-translate-y-0.5";
  
  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <div className={`${baseStyles} ${className}`}>
      {children}
    </div>
  );
};
