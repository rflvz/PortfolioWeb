import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {COLORS, FONTS, VideoThemeProps} from '../theme';

type OutroSequenceProps = VideoThemeProps & {
	startFrame: number;
	title: string;
	subtitle: string;
	site: string;
	github: string;
	linkedin: string;
	email: string;
};

export const OutroSequence: React.FC<OutroSequenceProps> = ({
	width,
	height,
	startFrame,
	title,
	subtitle,
	site,
	github,
	linkedin,
	email,
}) => {
	const frame = useCurrentFrame();
	const local = Math.max(0, frame - startFrame);
	const opacity = interpolate(local, [0, 24, 190, 210], [0, 1, 1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const glow = interpolate(Math.sin(local / 8), [-1, 1], [0.25, 0.9]);
	const singleColumn = height > width;

	return (
		<div
			style={{
				width,
				height,
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				gap: 20,
				opacity,
			}}
		>
			<div
				style={{
					fontFamily: FONTS.heading,
					fontSize: singleColumn ? 78 : 96,
					fontWeight: 700,
					color: COLORS.foreground,
					textAlign: 'center',
					lineHeight: 1.08,
				}}
			>
				{title}
			</div>
			<div
				style={{
					fontFamily: FONTS.mono,
					fontSize: singleColumn ? 30 : 26,
					color: COLORS.foregroundMuted,
				}}
			>
				{subtitle}
			</div>
			<div
				style={{
					fontFamily: FONTS.heading,
					fontSize: singleColumn ? 76 : 86,
					color: COLORS.accentOrange,
					textShadow: `0 0 ${Math.round(24 * glow)}px rgba(217,79,61,0.8)`,
					fontWeight: 900,
					letterSpacing: 1.6,
				}}
			>
				{site}
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: singleColumn ? 'column' : 'row',
					gap: singleColumn ? 8 : 24,
					color: COLORS.foreground,
					fontFamily: FONTS.mono,
					fontSize: 20,
					letterSpacing: 0.6,
				}}
			>
				<span>GitHub: {github.replace('https://github.com/', '@')}</span>
				<span>LinkedIn: {linkedin.replace('https://www.linkedin.com/in/', '')}</span>
				<span>Email: {email}</span>
			</div>
		</div>
	);
};
