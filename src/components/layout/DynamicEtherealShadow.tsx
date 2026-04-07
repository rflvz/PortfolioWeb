'use client';

import { EtherealShadowBackground } from "@/components/ui/EtherealShadowBackground";
import { useEffect, useState } from "react";

export function DynamicEtherealShadow() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return (
      <div
        className="fixed inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse at center, rgba(196,30,58,0.08) 0%, transparent 70%)",
        }}
      />
    );
  }

  return <EtherealShadowBackground />;
}
