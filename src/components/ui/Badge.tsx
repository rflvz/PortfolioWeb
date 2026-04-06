interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "dim";
}

const variants = {
  default: "bg-[#1c1510] text-[rgba(232,221,208,0.7)] border-[#3a2a1a]",
  accent: "bg-[rgba(139,26,26,0.15)] text-[#c4571a] border-[rgba(139,26,26,0.3)]",
  dim: "bg-transparent text-[rgba(232,221,208,0.4)] border-[rgba(58,42,26,0.3)]",
};

export function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center border px-2.5 py-1 text-xs font-mono tracking-[0.05em] uppercase ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
