import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {COLORS, FONTS, VideoThemeProps} from '../theme';

type TechStackSequenceProps = VideoThemeProps & {
	startFrame: number;
	techText: string;
};

export const TechStackSequence: React.FC<TechStackSequenceProps> = ({
	width,
	height,
	startFrame,
	techText,
}) => {
	const frame = useCurrentFrame();
	const local = Math.max(0, frame - startFrame);
	const x = interpolate(local, [0, 120], [0, -width], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const singleColumn = height > width;

	return (
		<div
			style={{
				width,
				height,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				padding: singleColumn ? '0 0 0 0' : undefined,
			}}
		>
			<div
				style={{
					width: '100%',
					borderTop: '1px solid rgba(58,42,26,0.5)',
					borderBottom: '1px solid rgba(58,42,26,0.5)',
					background: 'rgba(20,12,15,0.85)',
					overflow: 'hidden',
					padding: singleColumn ? '24px 0' : '18px 0',
				}}
			>
				<div
					style={{
						display: 'flex',
						width: width * 2,
						transform: `translateX(${x}px)`,
						whiteSpace: 'nowrap',
					}}
				>
					{[techText, techText].map((text, idx) => (
						<div
							key={`${text}-${idx}`}
							style={{
								minWidth: width,
								textAlign: 'center',
								color: COLORS.accentOrange,
								fontFamily: FONTS.mono,
								fontSize: singleColumn ? 30 : 26,
								fontWeight: 500,
								letterSpacing: 1.4,
							}}
						>
							{text}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
