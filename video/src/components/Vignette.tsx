import React from 'react';

export const Vignette: React.FC = () => (
  <div
    style={{
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      zIndex: 999,
      background:
        'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)',
    }}
  />
);
