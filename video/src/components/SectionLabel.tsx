import React from 'react';
import {useCurrentFrame, spring, useVideoConfig} from 'remotion';
import {COLORS, FONTS} from '../theme';

interface Props {
  label: string;
  title: string;
  delay?: number;
  titleSize?: number;
}

export const SectionLabel: React.FC<Props> = ({
  label,
  title,
  delay = 0,
  titleSize = 52,
}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const labelProgress = spring({
    frame: frame - delay,
    fps,
    config: {damping: 25, stiffness: 100},
  });
  const titleProgress = spring({
    frame: frame - delay - 6,
    fps,
    config: {damping: 25, stiffness: 80},
  });

  return (
    <div style={{marginBottom: 40}}>
      <div
        style={{
          fontFamily: FONTS.mono,
          fontSize: 14,
          fontWeight: 400,
          color: COLORS.accentOrange,
          letterSpacing: '0.15em',
          marginBottom: 14,
          opacity: labelProgress,
          transform: `translateX(${(1 - labelProgress) * -20}px)`,
        }}
      >
        // {label}
      </div>
      <div
        style={{
          fontFamily: FONTS.heading,
          fontSize: titleSize,
          fontWeight: 700,
          color: COLORS.foreground,
          textShadow: '1px 2px 0px rgba(0,0,0,0.6)',
          opacity: titleProgress,
          transform: `translateY(${(1 - titleProgress) * 15}px)`,
        }}
      >
        {title}
      </div>
    </div>
  );
};
