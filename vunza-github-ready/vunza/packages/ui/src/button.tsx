import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition";
  const variants = {
    primary: "bg-black text-white hover:opacity-90",
    secondary: "border border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-50",
    ghost: "text-neutral-700 hover:bg-neutral-100",
  };

  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />;
}
