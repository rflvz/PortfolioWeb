import React from "react";
import {
  Composition,
  Sequence,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
  AbsoluteFill,
} from "remotion";
import { CinematicSlide } from "./CinematicSlide";

const FPS = 30;
const WIDTH = 1280;
const HEIGHT = 720;

const SLIDES = [
  {
    id: "hero",
    title: "RAFA ALVAREZ",
    subtitle: "AI Architecture Developer — Building systems where intelligence is the foundation, not a feature.",
    duration: 5,
    sectionLabel: "[ AI_FIRST_DEVELOPER ]",
    sectionNumber: "01",
  },
  {
    id: "about",
    title: "Building the Future of AI Systems",
    subtitle: "I code with AI. Systems think. From design to deployment — autonomous agents, LLM orchestration, and 10x development.",
    duration: 4,
    sectionLabel: "// STORY",
    sectionNumber: "02",
  },
  {
    id: "projects",
    title: "Selected Work",
    subtitle: "ChessTogether • CodeOrchestrator • Teamergy • StyleCluster — Real projects built at the intersection of AI and engineering.",
    duration: 4,
    sectionLabel: "// CODE",
    sectionNumber: "03",
  },
  {
    id: "contact",
    title: "Open for Connection",
    subtitle: "Interested in collaboration or have a project in mind? Send the signal. Response within 48h.",
    duration: 4,
    sectionLabel: "// SIGNAL",
    sectionNumber: "04",
  },
];

export const WalkthroughComposition: React.FC = () => {
  const { fps } = useVideoConfig();
  const currentFrame = useCurrentFrame();

  // Calculate total duration
  const totalDuration = SLIDES.reduce((acc, slide) => acc + slide.duration, 0);

  // Transition fade effect
  const getSlideVisibility = (slideIndex: number, slideDuration: number) => {
    let frameOffset = 0;
    for (let i = 0; i < slideIndex; i++) {
      frameOffset += SLIDES[i].duration * FPS;
    }

    const startFadeIn = frameOffset;
    const startFadeOut = frameOffset + (slideDuration - 1) * FPS;
    const fadeFrames = 10;

    if (currentFrame < startFadeIn) {
      return 0;
    }
    if (currentFrame < startFadeIn + fadeFrames) {
      return (currentFrame - startFadeIn) / fadeFrames;
    }
    if (currentFrame > startFadeOut - fadeFrames) {
      return Math.max(0, (startFadeOut - currentFrame) / fadeFrames);
    }
    return 1;
  };

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#140c0f",
        width: WIDTH,
        height: HEIGHT,
      }}
    >
      {/* Intro frame */}
      {currentFrame < 15 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#140c0f",
            opacity: interpolate(currentFrame, [0, 15], [1, 0], { extrapolateRight: "clamp" }),
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 72,
              fontWeight: 700,
              color: "#e8ddd0",
              letterSpacing: "-0.02em",
              textShadow: "-2px -2px 0 rgba(0, 0, 0, 0.8), 2px 2px 0 rgba(232, 221, 208, 0.15)",
            }}
          >
            RAFA ALVAREZ
          </div>
          <div
            style={{
              fontFamily: "IBM Plex Mono, monospace",
              fontSize: 14,
              letterSpacing: "0.3em",
              color: "#c41e3a",
              marginTop: 20,
              textTransform: "uppercase" as const,
            }}
          >
            AI Architecture Developer
          </div>
        </div>
      )}

      {/* Slide sequences */}
      <Sequence from={10} durationInFrames={SLIDES[0].duration * FPS}>
        <div style={{ opacity: getSlideVisibility(0, SLIDES[0].duration) }}>
          <CinematicSlide
            title={SLIDES[0].title}
            subtitle={SLIDES[0].subtitle}
            duration={SLIDES[0].duration}
            sectionLabel={SLIDES[0].sectionLabel}
            sectionNumber={SLIDES[0].sectionNumber}
          />
        </div>
      </Sequence>

      <Sequence from={10 + SLIDES[0].duration * FPS} durationInFrames={SLIDES[1].duration * FPS}>
        <div style={{ opacity: getSlideVisibility(1, SLIDES[1].duration) }}>
          <CinematicSlide
            title={SLIDES[1].title}
            subtitle={SLIDES[1].subtitle}
            duration={SLIDES[1].duration}
            sectionLabel={SLIDES[1].sectionLabel}
            sectionNumber={SLIDES[1].sectionNumber}
          />
        </div>
      </Sequence>

      <Sequence from={10 + (SLIDES[0].duration + SLIDES[1].duration) * FPS} durationInFrames={SLIDES[2].duration * FPS}>
        <div style={{ opacity: getSlideVisibility(2, SLIDES[2].duration) }}>
          <CinematicSlide
            title={SLIDES[2].title}
            subtitle={SLIDES[2].subtitle}
            duration={SLIDES[2].duration}
            sectionLabel={SLIDES[2].sectionLabel}
            sectionNumber={SLIDES[2].sectionNumber}
          />
        </div>
      </Sequence>

      <Sequence
        from={10 + (SLIDES[0].duration + SLIDES[1].duration + SLIDES[2].duration) * FPS}
        durationInFrames={SLIDES[3].duration * FPS}
      >
        <div style={{ opacity: getSlideVisibility(3, SLIDES[3].duration) }}>
          <CinematicSlide
            title={SLIDES[3].title}
            subtitle={SLIDES[3].subtitle}
            duration={SLIDES[3].duration}
            sectionLabel={SLIDES[3].sectionLabel}
            sectionNumber={SLIDES[3].sectionNumber}
          />
        </div>
      </Sequence>
    </AbsoluteFill>
  );
};

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="WalkthroughComposition"
        component={WalkthroughComposition}
        durationInFrames={FPS * (10 + SLIDES.reduce((acc, s) => acc + s.duration, 0))}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
    </>
  );
};

export default RemotionRoot;