import React from 'react';
import {AbsoluteFill, Sequence, interpolate, useCurrentFrame} from 'remotion';
import content from '../../src/content/data.json';
import {GrainOverlay} from './components/GrainOverlay';
import {IntroSequence} from './sequences/IntroSequence';
import {PhilosophySequence} from './sequences/PhilosophySequence';
import {ServicesSequence} from './sequences/ServicesSequence';
import {ProjectsSequence} from './sequences/ProjectsSequence';
import {TestimonialsSequence} from './sequences/TestimonialsSequence';
import {TechStackSequence} from './sequences/TechStackSequence';
import {OutroSequence} from './sequences/OutroSequence';
import {COLORS} from './theme';

export type PromoVideoProps = {
	width: number;
	height: number;
};

const TIMELINE = {
	intro: {from: 0, duration: 120},
	philosophy: {from: 120, duration: 150},
	services: {from: 270, duration: 270},
	projects: {from: 540, duration: 450},
	testimonials: {from: 990, duration: 180},
	tech: {from: 1170, duration: 120},
	outro: {from: 1290, duration: 210},
};

const TECH_TEXT =
	'NEXT.JS · TYPESCRIPT · REACT · TAILWIND · SUPABASE · RUST · PYTHON';

export const PromoVideo: React.FC<PromoVideoProps> = ({width, height}) => {
	const frame = useCurrentFrame();
	const vignette = interpolate(Math.sin(frame / 25), [-1, 1], [0.45, 0.62]);

	return (
		<AbsoluteFill
			style={{
				background: COLORS.background,
				color: COLORS.foreground,
				overflow: 'hidden',
			}}
		>
			<AbsoluteFill
				style={{
					background:
						'radial-gradient(circle at 50% 50%, rgba(20,12,15,0) 25%, rgba(0,0,0,0.65) 100%)',
					opacity: vignette,
				}}
			/>

			<Sequence from={TIMELINE.intro.from} durationInFrames={TIMELINE.intro.duration}>
				<IntroSequence
					width={width}
					height={height}
					startFrame={TIMELINE.intro.from}
					label={content.hero.label}
					nameLine1={content.hero.name.line1}
					nameLine2={content.hero.name.line2}
				/>
			</Sequence>

			<Sequence
				from={TIMELINE.philosophy.from}
				durationInFrames={TIMELINE.philosophy.duration}
			>
				<PhilosophySequence
					width={width}
					height={height}
					startFrame={TIMELINE.philosophy.from}
					tagline={content.hero.tagline}
					tags={content.hero.tags}
				/>
			</Sequence>

			<Sequence from={TIMELINE.services.from} durationInFrames={TIMELINE.services.duration}>
				<ServicesSequence
					width={width}
					height={height}
					startFrame={TIMELINE.services.from}
					services={content.services}
				/>
			</Sequence>

			<Sequence from={TIMELINE.projects.from} durationInFrames={TIMELINE.projects.duration}>
				<ProjectsSequence
					width={width}
					height={height}
					startFrame={TIMELINE.projects.from}
					projects={content.projects}
				/>
			</Sequence>

			<Sequence
				from={TIMELINE.testimonials.from}
				durationInFrames={TIMELINE.testimonials.duration}
			>
				<TestimonialsSequence
					width={width}
					height={height}
					startFrame={TIMELINE.testimonials.from}
					testimonials={content.testimonials}
				/>
			</Sequence>

			<Sequence from={TIMELINE.tech.from} durationInFrames={TIMELINE.tech.duration}>
				<TechStackSequence
					width={width}
					height={height}
					startFrame={TIMELINE.tech.from}
					techText={TECH_TEXT}
				/>
			</Sequence>

			<Sequence from={TIMELINE.outro.from} durationInFrames={TIMELINE.outro.duration}>
				<OutroSequence
					width={width}
					height={height}
					startFrame={TIMELINE.outro.from}
					title="ABIERTO A CONEXIONES"
					subtitle="Envia la senal"
					site="rafalvz.dev"
					github={content.meta.author.socials.github}
					linkedin={content.meta.author.socials.linkedin}
					email={content.meta.author.email}
				/>
			</Sequence>

			<GrainOverlay />
		</AbsoluteFill>
	);
};
