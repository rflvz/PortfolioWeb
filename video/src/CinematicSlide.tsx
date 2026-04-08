import React from "react";
import {
  AbsoluteFill,
  spring,
  useVideoConfig,
  interpolate,
  useCurrentFrame,
} from "remotion";

interface CinematicSlideProps {
  imageSrc?: string;
  title: string;
  subtitle?: string;
  duration: number;
  accentColor?: string;
  backgroundColor?: string;
  sectionNumber?: string;
  sectionLabel?: string;
}

// Dark cinematic colors matching "The Analog Artifact" design system
const COLORS = {
  background: "#140c0f",
  accent: "#c41e3a",
  accentOrange: "#d94f3d",
  foreground: "#e8ddd0",
  foregroundMuted: "rgba(232, 221, 208, 0.55)",
};

export const CinematicSlide: React.FC<CinematicSlideProps> = ({
  title,
  subtitle,
  duration,
  accentColor = COLORS.accent,
  sectionNumber,
  sectionLabel,
}) => {
  const { fps } = useVideoConfig();
  const currentFrame = useCurrentFrame();

  // Spring animation for zoom-in at start
  const scale = spring({
    frame: currentFrame,
    fps,
    config: {
      damping: 20,
      stiffness: 50,
    },
  });

  // Fade in for title
  const titleOpacity = interpolate(Math.max(0, currentFrame - 5), [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Subtitle fade
  const subtitleOpacity = interpolate(Math.max(0, currentFrame - 20), [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Accent line animation
  const lineScale = interpolate(Math.max(0, currentFrame - 10), [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.background,
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Cinzel, serif",
      }}
    >
      {/* Background gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(ellipse at center, rgba(20, 12, 15, 0.3) 0%, rgba(20, 12, 15, 0.95) 70%),
            linear-gradient(160deg, #1a0f12 0%, #140c0f 50%, #0d0809 100%)
          `,
        }}
      />

      {/* Grain overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.06,
          background: `
            url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")
          `,
          pointerEvents: "none",
        }}
      />

      {/* Content container */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          maxWidth: 900,
          padding: 40,
          transform: `scale(${1 + scale * 0.08})`,
        }}
      >
        {/* Section label */}
        {sectionLabel && (
          <div
            style={{
              fontFamily: "IBM Plex Mono, monospace",
              fontSize: 11,
              letterSpacing: "0.3em",
              color: accentColor,
              marginBottom: 20,
              textTransform: "uppercase" as const,
              opacity: titleOpacity,
            }}
          >
            {sectionLabel}
          </div>
        )}

        {/* Section number */}
        {sectionNumber && (
          <div
            style={{
              fontFamily: "IBM Plex Mono, monospace",
              fontSize: 10,
              letterSpacing: "0.2em",
              color: COLORS.foregroundMuted,
              marginBottom: 12,
              opacity: titleOpacity,
            }}
          >
            {sectionNumber}
          </div>
        )}

        {/* Accent line */}
        <div
          style={{
            width: 120,
            height: 1,
            background: `linear-gradient(90deg, transparent 0%, ${accentColor} 50%, transparent 100%)`,
            margin: "0 auto 30px",
            transform: `scaleX(${lineScale})`,
            transformOrigin: "center",
          }}
        />

        {/* Title */}
        <h1
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 56,
            fontWeight: 700,
            color: COLORS.foreground,
            letterSpacing: "-0.02em",
            marginBottom: 24,
            textShadow: "-2px -2px 0 rgba(0, 0, 0, 0.8), 2px 2px 0 rgba(232, 221, 208, 0.15)",
            opacity: titleOpacity,
            lineHeight: 1.1,
          }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p
            style={{
              fontFamily: "IBM Plex Mono, monospace",
              fontSize: 16,
              color: COLORS.foregroundMuted,
              lineHeight: 1.6,
              maxWidth: 600,
              margin: "0 auto",
              opacity: subtitleOpacity,
            }}
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* Vignette effect */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(ellipse at center, transparent 30%, rgba(20, 12, 15, 0.8) 100%)
          `,
          pointerEvents: "none",
        }}
      />

      {/* Corner accent */}
      <div
        style={{
          position: "absolute",
          top: 40,
          left: 40,
          width: 40,
          height: 40,
          borderTop: `1px solid ${accentColor}`,
          borderLeft: `1px solid ${accentColor}`,
          opacity: 0.5,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 40,
          right: 40,
          width: 40,
          height: 40,
          borderBottom: `1px solid ${accentColor}`,
          borderRight: `1px solid ${accentColor}`,
          opacity: 0.5,
        }}
      />
    </AbsoluteFill>
  );
};

export default CinematicSlide;