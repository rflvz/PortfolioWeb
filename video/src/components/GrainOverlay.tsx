import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

export const GrainOverlay: React.FC<{strength?: number}> = ({strength = 0.16}) => {
	const frame = useCurrentFrame();
	const pulse = interpolate(Math.sin(frame / 5), [-1, 1], [0.75, 1]);

	return (
		<div
			style={{
				position: 'absolute',
				inset: 0,
				mixBlendMode: 'soft-light',
				opacity: strength * pulse,
				pointerEvents: 'none',
				backgroundImage:
					"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='0.45'/%3E%3C/svg%3E\")",
			}}
		/>
	);
};
