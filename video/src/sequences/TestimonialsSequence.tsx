import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {clampText, COLORS, FONTS, VideoThemeProps} from '../theme';

type Testimonial = {
	name: string;
	description: string;
};

type TestimonialsSequenceProps = VideoThemeProps & {
	startFrame: number;
	testimonials: Testimonial[];
};

export const TestimonialsSequence: React.FC<TestimonialsSequenceProps> = ({
	width,
	height,
	startFrame,
	testimonials,
}) => {
	const frame = useCurrentFrame();
	const local = Math.max(0, frame - startFrame);
	const firstOpacity = interpolate(local, [0, 18, 85, 106], [0, 1, 1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const secondOpacity = interpolate(local, [78, 112, 180], [0, 1, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const singleColumn = height > width;

	const first = testimonials[0];
	const second = testimonials[1] ?? testimonials[0];

	return (
		<div style={{width, height, padding: singleColumn ? '96px 70px' : '86px 110px'}}>
			<div style={{color: COLORS.foregroundMuted, fontFamily: FONTS.mono, fontSize: 20}}>
				// VOICES
			</div>
			<div
				style={{
					color: COLORS.foreground,
					fontFamily: FONTS.heading,
					fontSize: singleColumn ? 62 : 70,
					fontWeight: 700,
					marginTop: 8,
				}}
			>
				Lo Que Dicen
			</div>

			<div style={{position: 'relative', marginTop: 26, minHeight: singleColumn ? 430 : 290}}>
				{[first, second].map((item, idx) => (
					<div
						key={`${item.name}-${idx}`}
						style={{
							position: 'absolute',
							inset: 0,
							opacity: idx === 0 ? firstOpacity : secondOpacity,
							transition: 'opacity 120ms linear',
						}}
					>
						<div
							style={{
								color: 'rgba(232,221,208,0.88)',
								fontFamily: FONTS.mono,
								fontSize: singleColumn ? 34 : 30,
								lineHeight: 1.55,
								maxWidth: singleColumn ? '100%' : '86%',
							}}
						>
							"{clampText(item.description, 220)}"
						</div>
						<div
							style={{
								marginTop: 20,
								color: COLORS.accentOrange,
								fontFamily: FONTS.mono,
								fontSize: 22,
								letterSpacing: 1.1,
							}}
						>
							- {item.name}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
