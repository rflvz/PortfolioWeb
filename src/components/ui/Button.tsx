import { type ComponentProps } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ComponentProps<"a"> {
  variant?: ButtonVariant;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[#e8ddd0] text-[#0a0705] hover:brightness-110 border border-[#e8ddd0]",
  secondary:
    "border border-[rgba(58,42,26,0.4)] text-[#e8ddd0] hover:border-[rgba(196,87,26,0.6)] hover:text-[#d94f3d]",
  ghost:
    "text-[rgba(232,221,208,0.75)] hover:text-[#e8ddd0] underline-offset-4 hover:underline",
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-mono tracking-[0.15em] uppercase transition-all duration-200 cursor-crosshair ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
