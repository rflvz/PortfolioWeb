import { type ComponentProps } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps extends ComponentProps<"a"> {
  variant?: ButtonVariant;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-background hover:bg-primary-light shadow-lg shadow-primary/20",
  secondary:
    "bg-secondary text-background hover:brightness-110 shadow-lg shadow-secondary/20",
  outline:
    "border border-border text-foreground hover:border-primary hover:text-primary",
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium transition-all duration-200 cursor-pointer ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
