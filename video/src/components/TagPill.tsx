import React from 'react';
import {COLORS, FONTS} from '../theme';

export const TagPill: React.FC<{label: string}> = ({label}) => {
	return (
		<span
			style={{
				padding: '7px 12px',
				border: `1px solid rgba(58,42,26,0.95)`,
				background: 'rgba(20,12,15,0.55)',
				color: COLORS.foreground,
				fontFamily: FONTS.mono,
				fontSize: 16,
				fontWeight: 500,
				letterSpacing: 0.8,
				textTransform: 'uppercase',
			}}
		>
			{label}
		</span>
	);
};
