import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {COLORS, FONTS} from '../theme';

type IronPlateCardProps = {
	title: string;
	description: string;
	startFrame: number;
	index?: number;
};

export const IronPlateCard: React.FC<IronPlateCardProps> = ({
	title,
	description,
	startFrame,
	index = 0,
}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const localFrame = Math.max(0, frame - startFrame - index * 8);
	const enter = spring({
		frame: localFrame,
		fps,
		config: {damping: 14, stiffness: 120, mass: 0.9},
		durationInFrames: 34,
	});

	return (
		<div
			style={{
				opacity: enter,
				transform: `translateY(${(1 - enter) * 26}px) scale(${0.95 + enter * 0.05})`,
				border: `1px solid rgba(232,221,208,0.08)`,
				background:
					'linear-gradient(135deg, rgba(232,221,208,0.03), rgba(232,221,208,0.08) 58%, rgba(28,21,16,0.92))',
				boxShadow:
					'inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.22), 0 16px 30px rgba(0,0,0,0.22)',
				padding: 28,
			}}
		>
			<div
				style={{
					fontFamily: FONTS.heading,
					fontWeight: 700,
					fontSize: 36,
					color: COLORS.foreground,
					marginBottom: 12,
				}}
			>
				{title}
			</div>
			<div
				style={{
					fontFamily: FONTS.mono,
					fontWeight: 400,
					fontSize: 22,
					lineHeight: 1.5,
					color: 'rgba(232,221,208,0.82)',
				}}
			>
				{description}
			</div>
		</div>
	);
};
