import React from 'react';
import {IronPlateCard} from '../components/IronPlateCard';
import {COLORS, FONTS, VideoThemeProps} from '../theme';

type Service = {
	title: string;
	description: string;
};

type ServicesSequenceProps = VideoThemeProps & {
	startFrame: number;
	services: Service[];
};

export const ServicesSequence: React.FC<ServicesSequenceProps> = ({
	width,
	height,
	startFrame,
	services,
}) => {
	const singleColumn = height > width;

	return (
		<div
			style={{
				width,
				height,
				padding: singleColumn ? '82px 70px' : '72px 100px',
				display: 'flex',
				flexDirection: 'column',
				gap: 28,
			}}
		>
			<div style={{color: COLORS.foregroundMuted, fontFamily: FONTS.mono, fontSize: 20}}>
				// SERVICES
			</div>
			<div
				style={{
					color: COLORS.foreground,
					fontFamily: FONTS.heading,
					fontSize: singleColumn ? 68 : 72,
					fontWeight: 700,
					lineHeight: 1.02,
				}}
			>
				Que Construyo
			</div>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: singleColumn ? '1fr' : '1fr 1fr',
					gap: 18,
					marginTop: 6,
				}}
			>
				{services.slice(0, 4).map((service, index) => (
					<IronPlateCard
						key={service.title}
						startFrame={startFrame + 10}
						index={index}
						title={service.title}
						description={service.description}
					/>
				))}
			</div>
		</div>
	);
};
