"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const liquidButtonVariants = cva(
  "inline-flex items-center justify-center cursor-crosshair gap-2 whitespace-nowrap text-xs font-mono tracking-[0.15em] uppercase transition-[color,transform] rounded-md disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-[#c41e3a]/50 hover:scale-105 duration-300",
  {
    variants: {
      variant: {
        default: "text-[#e8ddd0]",
        accent: "text-[#c41e3a]",
        outline: "text-[rgba(232,221,208,0.75)]",
      },
      size: {
        default: "h-10 px-6 py-3",
        sm: "h-8 px-4 py-2 text-[10px]",
        lg: "h-12 px-8 py-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type LiquidButtonBaseProps = VariantProps<typeof liquidButtonVariants> & {
  className?: string;
  children?: React.ReactNode;
};

type LiquidButtonAsAnchor = LiquidButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LiquidButtonBaseProps> & {
    href: string;
  };

type LiquidButtonAsButton = LiquidButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof LiquidButtonBaseProps> & {
    href?: never;
  };

export type LiquidButtonProps = LiquidButtonAsAnchor | LiquidButtonAsButton;

export function LiquidButton({
  className,
  variant,
  size,
  children,
  href,
  ...props
}: LiquidButtonProps) {
  const classes = cn(
    "relative",
    liquidButtonVariants({ variant, size, className })
  );

  const internals = (
    <>
      {/* Glass inset shadow overlay */}
      <div
        className="absolute top-0 left-0 z-0 h-full w-full rounded-md transition-all
          shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(196,30,58,0.12)]"
      />
      {/* Backdrop distortion layer */}
      <div
        className="absolute top-0 left-0 isolate -z-10 h-full w-full overflow-hidden rounded-md"
        style={{ backdropFilter: 'url("#liquid-glass-filter")' }}
      />
      <div className="pointer-events-none z-10">{children}</div>
      <GlassFilter />
    </>
  );

  if (href !== undefined) {
    return (
      <a
        href={href}
        className={classes}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {internals}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {internals}
    </button>
  );
}

function GlassFilter() {
  return (
    <svg className="hidden" aria-hidden="true">
      <defs>
        <filter
          id="liquid-glass-filter"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.05 0.05"
            numOctaves="1"
            seed="1"
            result="turbulence"
          />
          <feGaussianBlur
            in="turbulence"
            stdDeviation="2"
            result="blurredNoise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurredNoise"
            scale="70"
            xChannelSelector="R"
            yChannelSelector="B"
            result="displaced"
          />
          <feGaussianBlur
            in="displaced"
            stdDeviation="4"
            result="finalBlur"
          />
          <feComposite in="finalBlur" in2="finalBlur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}
