import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {GlitchText} from '../components/GlitchText';
import {ScratchedDivider} from '../components/ScratchedDivider';
import {COLORS, FONTS, getTitleSize, VideoThemeProps} from '../theme';

type IntroSequenceProps = VideoThemeProps & {
	label: string;
	nameLine1: string;
	nameLine2: string;
	startFrame: number;
};

export const IntroSequence: React.FC<IntroSequenceProps> = ({
	width,
	height,
	label,
	nameLine1,
	nameLine2,
	startFrame,
}) => {
	const frame = useCurrentFrame();
	const local = Math.max(0, frame - startFrame);
	const titleSize = getTitleSize({width, height, multiplier: 1});
	const subtitleOpacity = interpolate(local, [20, 44], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

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
				background: `radial-gradient(circle at 50% 42%, rgba(28,21,16,0.6), ${COLORS.background} 64%)`,
			}}
		>
			<GlitchText text={nameLine1} fontSize={titleSize} startFrame={startFrame + 4} />
			<GlitchText text={nameLine2} fontSize={titleSize} startFrame={startFrame + 12} />
			<div
				style={{
					color: COLORS.accentOrange,
					fontFamily: FONTS.mono,
					fontSize: Math.round(titleSize * 0.24),
					letterSpacing: 2,
					opacity: subtitleOpacity,
				}}
			>
				[ {label} ]
			</div>
			<div style={{width: Math.round(width * 0.45), marginTop: 8}}>
				<ScratchedDivider startFrame={startFrame + 26} />
			</div>
		</div>
	);
};
