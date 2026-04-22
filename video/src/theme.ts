import {interpolate} from 'remotion';
import {loadFont as loadCinzel} from '@remotion/google-fonts/Cinzel';
import {loadFont as loadIbmPlexMono} from '@remotion/google-fonts/IBMPlexMono';

export const COLORS = {
	background: '#140c0f',
	surface: '#141008',
	surfaceVariant: '#1c1510',
	foreground: '#e8ddd0',
	foregroundMuted: 'rgba(232,221,208,0.55)',
	accent: '#c41e3a',
	accentOrange: '#d94f3d',
	border: '#3a2a1a',
};

export const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const cinzel = loadCinzel('normal', {
	weights: ['400', '600', '700', '900'],
	subsets: ['latin'],
});

const mono = loadIbmPlexMono('normal', {
	weights: ['300', '400', '500', '600'],
	subsets: ['latin'],
});

export const FONTS = {
	heading: cinzel.fontFamily,
	mono: mono.fontFamily,
};

export type VideoThemeProps = {
	width: number;
	height: number;
};

export const getTitleSize = ({
	width,
	height,
	multiplier = 1,
}: VideoThemeProps & {multiplier?: number}): number => {
	const base = height > width ? width * 0.1 : width * 0.065;
	return Math.round(base * multiplier);
};

export const clampText = (value: string, maxLength: number): string =>
	value.length <= maxLength ? value : `${value.slice(0, maxLength - 1)}...`;

export const fadeInOut = ({
	frame,
	start,
	end,
	fadeIn = 18,
	fadeOut = 18,
}: {
	frame: number;
	start: number;
	end: number;
	fadeIn?: number;
	fadeOut?: number;
}): number => {
	if (frame < start) return 0;
	if (frame > end) return 0;
	if (frame < start + fadeIn) {
		return interpolate(frame, [start, start + fadeIn], [0, 1], {
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		});
	}
	if (frame > end - fadeOut) {
		return interpolate(frame, [end - fadeOut, end], [1, 0], {
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		});
	}
	return 1;
};
