import React from 'react';
import {useCurrentFrame} from 'remotion';
import {COLORS, FONTS} from '../theme';

type TypewriterTextProps = {
	text: string;
	startFrame: number;
	charSpeed?: number;
	fontSize?: number;
	maxWidth?: number | string;
};

export const TypewriterText: React.FC<TypewriterTextProps> = ({
	text,
	startFrame,
	charSpeed = 1.25,
	fontSize = 34,
	maxWidth = 1100,
}) => {
	const frame = useCurrentFrame();
	const localFrame = Math.max(0, frame - startFrame);
	const chars = Math.min(text.length, Math.floor(localFrame / charSpeed));
	const current = text.slice(0, chars);
	const showCaret = Math.floor(localFrame / 8) % 2 === 0;

	return (
		<div
			style={{
				maxWidth,
				color: COLORS.foreground,
				fontFamily: FONTS.mono,
				fontSize,
				lineHeight: 1.45,
				letterSpacing: 0.4,
				whiteSpace: 'pre-wrap',
			}}
		>
			{current}
			<span style={{opacity: showCaret ? 1 : 0, color: COLORS.accentOrange}}>|</span>
		</div>
	);
};
