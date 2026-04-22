import React from 'react';
import {COLORS, FONTS} from '../theme';

export const StatusBadge: React.FC<{status: string}> = ({status}) => {
	const live = status.toUpperCase() === 'LIVE';

	return (
		<div
			style={{
				display: 'inline-flex',
				alignItems: 'center',
				gap: 8,
				padding: '6px 12px',
				border: `1px solid ${live ? 'rgba(50, 200, 120, 0.5)' : 'rgba(220,170,80,0.45)'}`,
				background: live ? 'rgba(50, 200, 120, 0.1)' : 'rgba(220,170,80,0.1)',
				color: live ? '#76ffc0' : '#ffd68d',
				fontFamily: FONTS.mono,
				fontWeight: 600,
				fontSize: 18,
				letterSpacing: 1.2,
			}}
		>
			<span
				style={{
					width: 8,
					height: 8,
					borderRadius: 999,
					background: live ? '#43ff9b' : COLORS.accentOrange,
					boxShadow: `0 0 10px ${live ? '#43ff9b' : COLORS.accentOrange}`,
				}}
			/>
			{live ? 'LIVE' : 'IN_DEV'}
		</div>
	);
};
