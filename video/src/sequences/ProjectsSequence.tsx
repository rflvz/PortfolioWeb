import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {StatusBadge} from '../components/StatusBadge';
import {TagPill} from '../components/TagPill';
import {COLORS, FONTS, VideoThemeProps} from '../theme';

type Project = {
	displayId: string;
	title: string;
	summary: string;
	tags: string[];
	status: string;
};

type ProjectsSequenceProps = VideoThemeProps & {
	startFrame: number;
	projects: Project[];
};

const PROJECT_DURATION = 105;

export const ProjectsSequence: React.FC<ProjectsSequenceProps> = ({
	width,
	height,
	startFrame,
	projects,
}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const local = Math.max(0, frame - startFrame);
	const singleColumn = height > width;

	const projectIndex = Math.min(projects.length - 1, Math.floor(local / PROJECT_DURATION));
	const inside = local - projectIndex * PROJECT_DURATION;
	const project = projects[projectIndex];
	const enter = spring({
		frame: inside,
		fps,
		config: {damping: 14, stiffness: 120},
		durationInFrames: 26,
	});
	const slideX = interpolate(inside, [0, 14], [singleColumn ? 20 : 40, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div style={{width, height, padding: singleColumn ? '85px 70px' : '76px 100px'}}>
			<div style={{color: COLORS.foregroundMuted, fontFamily: FONTS.mono, fontSize: 20}}>
				// CODE
			</div>
			<div
				style={{
					color: COLORS.foreground,
					fontFamily: FONTS.heading,
					fontSize: singleColumn ? 66 : 74,
					fontWeight: 700,
					marginTop: 8,
				}}
			>
				Trabajo Seleccionado
			</div>
			<div
				style={{
					position: 'relative',
					marginTop: 28,
					padding: singleColumn ? 26 : 34,
					border: `1px solid rgba(58,42,26,0.9)`,
					background:
						'linear-gradient(140deg, rgba(20,12,15,0.8), rgba(28,21,16,0.94) 60%, rgba(20,12,15,0.85))',
					overflow: 'hidden',
				}}
			>
				<div
					style={{
						position: 'absolute',
						right: singleColumn ? 12 : 22,
						top: singleColumn ? -14 : -22,
						color: 'rgba(232,221,208,0.08)',
						fontFamily: FONTS.heading,
						fontSize: singleColumn ? 120 : 180,
						fontWeight: 900,
						lineHeight: 1,
					}}
				>
					{project.displayId}
				</div>
				<div style={{opacity: enter, transform: `translateX(${slideX}px)`}}>
					<StatusBadge status={project.status} />
					<div
						style={{
							marginTop: 16,
							color: COLORS.foreground,
							fontFamily: FONTS.heading,
							fontSize: singleColumn ? 62 : 72,
							fontWeight: 700,
							lineHeight: 1.04,
						}}
					>
						{project.title}
					</div>
					<div
						style={{
							marginTop: 12,
							maxWidth: singleColumn ? '100%' : '78%',
							color: 'rgba(232,221,208,0.82)',
							fontFamily: FONTS.mono,
							fontSize: singleColumn ? 30 : 26,
							lineHeight: 1.5,
						}}
					>
						{project.summary}
					</div>
					<div style={{display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 18}}>
						{project.tags.map((tag) => (
							<TagPill key={tag} label={tag} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
