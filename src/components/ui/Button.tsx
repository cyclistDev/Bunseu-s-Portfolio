import React from "react";

interface BaseButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "lg";
  className?: string;
}

interface ButtonAsButton extends BaseButtonProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> {
  href?: never;
  children: React.ReactNode;
}

interface ButtonAsAnchor extends BaseButtonProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> {
  href: string;
  children: React.ReactNode;
}

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ children, variant = "primary", size = "default", className = "", href, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-normal focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background dark:focus:ring-offset-background";
    
    const sizes = {
      default: "px-6 py-3",
      lg: "px-8 py-4 text-lg",
    };
    
    const variants = {
      primary: "bg-accent text-foreground hover:bg-accent-hover focus:ring-accent",
      secondary: "bg-surface text-foreground hover:bg-surface-alt focus:ring-border border border-border",
      outline: "border border-border text-foreground hover:bg-surface focus:ring-border",
    };

    const buttonStyles = `${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`;

    if (href) {
      return (
        <a href={href} className={buttonStyles} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)} ref={ref as React.Ref<HTMLAnchorElement>}>
          {children}
        </a>
      );
    }

    return (
      <button className={buttonStyles} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)} ref={ref as React.Ref<HTMLButtonElement>}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
