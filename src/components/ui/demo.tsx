"use client";

import { Bot, Sparkles, Zap } from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";

const cards = [
  {
    title: "AI System Design",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Automation Stack",
    icon: Bot,
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "High Velocity Build",
    icon: Zap,
    image:
      "https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&w=1200&q=80",
  },
] as const;

export function Default() {
  return (
    <div className="flex min-h-screen w-screen flex-row items-center justify-center gap-10">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <GlowCard key={card.title} glowColor="red" className="overflow-hidden">
            <div className="absolute inset-0 -z-10">
              <img src={card.image} alt={card.title} className="h-full w-full object-cover opacity-35" />
            </div>
            <div className="flex h-full items-end justify-between">
              <h3 className="font-heading text-xl text-[#e8ddd0]">{card.title}</h3>
              <Icon className="h-5 w-5 text-[#c41e3a]" />
            </div>
          </GlowCard>
        );
      })}
    </div>
  );
}
