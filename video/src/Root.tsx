import React from 'react';
import {Composition} from 'remotion';
import {PromoVideo} from './PromoVideo';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="PromoLandscape"
				component={PromoVideo}
				durationInFrames={1500}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					width: 1920,
					height: 1080,
				}}
			/>
			<Composition
				id="PromoVertical"
				component={PromoVideo}
				durationInFrames={1500}
				fps={30}
				width={1080}
				height={1920}
				defaultProps={{
					width: 1080,
					height: 1920,
				}}
			/>
		</>
	);
};
