'use client';

import { EtherealShadow } from './ethereal-shadow';

export function EtherealShadowBackground() {
  return (
    <div className="fixed inset-0 z-0" style={{ overflow: 'hidden' }}>
      <EtherealShadow
        color="rgba(196, 30, 58, 0.45)"
        animation={{ scale: 100, speed: 90 }}
        noise={{ opacity: 1, scale: 1.2 }}
        showTitle={false}
      />
    </div>
  );
}
