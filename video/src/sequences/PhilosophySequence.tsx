import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {TagPill} from '../components/TagPill';
import {TypewriterText} from '../components/TypewriterText';
import {COLORS, FONTS, VideoThemeProps} from '../theme';

type PhilosophySequenceProps = VideoThemeProps & {
	startFrame: number;
	tagline: string;
	tags: string[];
};

export const PhilosophySequence: React.FC<PhilosophySequenceProps> = ({
	width,
	height,
	startFrame,
	tagline,
	tags,
}) => {
	const frame = useCurrentFrame();
	const local = Math.max(0, frame - startFrame);
	const tagsOpacity = interpolate(local, [70, 105], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const singleColumn = height > width;

	return (
		<div
			style={{
				width,
				height,
				padding: singleColumn ? '110px 70px' : '90px 110px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				gap: 36,
			}}
		>
			<div
				style={{
					color: COLORS.foregroundMuted,
					fontFamily: FONTS.mono,
					fontSize: singleColumn ? 22 : 20,
					letterSpacing: 1.1,
				}}
			>
				// PHILOSOPHY
			</div>
			<TypewriterText
				text={tagline}
				startFrame={startFrame + 4}
				fontSize={singleColumn ? 38 : 34}
				maxWidth={singleColumn ? width * 0.85 : width * 0.72}
			/>
			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					gap: 14,
					opacity: tagsOpacity,
				}}
			>
				{tags.map((tag, i) => (
					<div
						key={tag}
						style={{
							transform: `translateY(${Math.max(0, 16 - (local - 80 - i * 7))}px)`,
							opacity: local > 80 + i * 7 ? 1 : 0,
						}}
					>
						<TagPill label={tag} />
					</div>
				))}
			</div>
		</div>
	);
};
