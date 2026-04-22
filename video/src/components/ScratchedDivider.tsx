import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {COLORS} from '../theme';

export const ScratchedDivider: React.FC<{startFrame?: number}> = ({startFrame = 0}) => {
	const frame = useCurrentFrame();
	const progress = interpolate(frame, [startFrame, startFrame + 24], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div
			style={{
				width: `${Math.round(progress * 100)}%`,
				height: 1,
				background: `linear-gradient(90deg, transparent 0%, rgba(196, 30, 58, 0.6) 20%, ${COLORS.accentOrange} 50%, rgba(196, 30, 58, 0.6) 80%, transparent 100%)`,
				boxShadow: `0 0 14px rgba(196,30,58,0.35)`,
			}}
		/>
	);
};
