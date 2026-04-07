interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`iron-plate border-[rgba(196,31,58,0.42)] bg-[linear-gradient(160deg,#2a1618_0%,#1d1113_52%,#140c0f_100%)] transition-all duration-300 hover:border-[rgba(196,31,58,0.62)] group ${className}`}
    >
      {children}
    </div>
  );
}
