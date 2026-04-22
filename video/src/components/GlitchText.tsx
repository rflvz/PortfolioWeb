import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {COLORS, FONTS} from '../theme';

type GlitchTextProps = {
	text: string;
	fontSize: number;
	startFrame?: number;
};

export const GlitchText: React.FC<GlitchTextProps> = ({
	text,
	fontSize,
	startFrame = 0,
}) => {
	const frame = useCurrentFrame();
	const localFrame = Math.max(0, frame - startFrame);
	const stable = localFrame > 18;
	const offset = stable
		? 0
		: Math.round(interpolate(Math.sin(localFrame * 3), [-1, 1], [-6, 6]));
	const opacity = interpolate(localFrame, [0, 10, 20], [0, 1, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const baseStyle: React.CSSProperties = {
		position: 'absolute',
		fontFamily: FONTS.heading,
		fontWeight: 900,
		fontSize,
		letterSpacing: 2,
		color: COLORS.foreground,
		textTransform: 'uppercase',
	};

	return (
		<div style={{position: 'relative', opacity}}>
			<span
				style={{
					...baseStyle,
					textShadow: '0 2px 0 rgba(0,0,0,0.4), 0 8px 18px rgba(0,0,0,0.45)',
				}}
			>
				{text}
			</span>
			{!stable ? (
				<>
					<span
						style={{
							...baseStyle,
							color: '#ff4764',
							clipPath: 'inset(0 0 52% 0)',
							transform: `translate(${offset}px, 0)`,
							opacity: 0.8,
						}}
					>
						{text}
					</span>
					<span
						style={{
							...baseStyle,
							color: '#4bd2ff',
							clipPath: 'inset(48% 0 0 0)',
							transform: `translate(${-offset}px, 0)`,
							opacity: 0.8,
						}}
					>
						{text}
					</span>
				</>
			) : null}
		</div>
	);
};
