"use client";

import { motion, useScroll, useTransform, type Variants, type Transition } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";

const EASE_OUT = [0.16, 1, 0.3, 1] as [number, number, number, number];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: EASE_OUT } as Transition,
  },
};

const dividerVariants: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.7, ease: EASE_OUT, delay: 0.5 } as Transition,
  },
};

const tagVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const, delay: 0.9 + i * 0.06 },
  }),
};

const ctaVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_OUT, delay: 1.25 } as Transition,
  },
};

const scrollHintVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" as const, delay: 1.6 },
  },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const tags = [
    "AUTONOMOUS_AGENTS",
    "LLM_ORCHESTRATION",
    "MCP",
    "10X_DEVELOPMENT",
  ];

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
    >
      {/* Parallax background gradient */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          y,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(196,31,58,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Stencil label */}
          <motion.p
            variants={itemVariants}
            className="mb-8 text-[10px] font-mono tracking-[0.3em] text-[#c41e3a] uppercase"
          >
            [ AI_FIRST_DEVELOPER ]
          </motion.p>

          {/* Main headline */}
          <motion.h1
            variants={itemVariants}
            className="font-heading text-6xl font-bold tracking-[-0.02em] text-[#e8ddd0] chiseled sm:text-8xl lg:text-[7rem] leading-none"
          >
            RAFA
            <br />
            <span className="text-[rgba(232,221,208,0.7)]">ALVAREZ</span>
          </motion.h1>

          {/* Divider */}
          <motion.div
            variants={dividerVariants}
            className="scratched-divider my-10 max-w-sm mx-auto origin-center"
          />

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="mx-auto max-w-lg text-sm font-mono text-[rgba(232,221,208,0.75)] leading-loose tracking-wide"
          >
            I code with AI. Systems think.<br />
            Design, build, and ship where{" "}
            <span className="text-[#d94f3d]">intelligence is the foundation</span>,
            not a feature.
          </motion.p>

          {/* Tech tags */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            {tags.map((tag, i) => (
              <motion.span
                key={tag}
                custom={i}
                variants={tagVariants}
                className="text-[9px] font-mono tracking-[0.15em] text-[rgba(232,221,208,0.55)] uppercase"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={ctaVariants}
            className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Button href="#projects" variant="primary">
              SEE_MY_WORK
            </Button>
            <Button href="#contact" variant="secondary">
              SIGNAL_FOR_ACCESS
            </Button>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            variants={scrollHintVariants}
            className="mt-20 flex flex-col items-center gap-2"
          >
            <span className="text-[9px] font-mono tracking-[0.25em] text-[rgba(232,221,208,0.5)] uppercase">
              scroll
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="h-12 w-px bg-gradient-to-b from-[rgba(196,31,58,0.6)] to-transparent"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Parallax fade overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ opacity }}
      />
    </section>
  );
}
