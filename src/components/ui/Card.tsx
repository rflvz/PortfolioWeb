interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`iron-plate transition-all duration-300 hover:border-[rgba(196,87,26,0.4)] group ${className}`}
    >
      {children}
    </div>
  );
}
