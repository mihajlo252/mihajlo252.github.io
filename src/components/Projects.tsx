import { useState, useEffect, useRef, type JSX } from "react";

// ── Sample data — replace with your own projects ──────────────────────────────
interface Project {
	id: number;
	title: string;
	description: string;
	tag: string;
	DEV?: boolean;
	stack: string[];
	liveUrl: string | null;
	repoUrl: string | null;
}

const ALL_PROJECTS: Project[] = [
	{
		id: 1,
		title: "The Scrollforge",
		description: "A brief, punchy description of what this project does and the problem it solves. Keep it to 2 sentences.",
		tag: "Progressive Web App",
    DEV: true,
		stack: ["React", "TypeScript", "Supabase"],
		liveUrl: "https://thescrollforge.netlify.app",
		repoUrl: "https://github.com/mihajlo252/the-scrollforge",
	},
	{
		id: 2,
		title: "Generic Platformer",
		description: "A brief, punchy description of what this project does and the problem it solves. Keep it to 2 sentences.",
		tag: "Web Game",
		DEV: false,
		stack: ["HTML", "CSS", "JS", "Canvas"],
		liveUrl: "https://generic-platformer.netlify.app/",
		repoUrl: "https://github.com/mihajlo252/generic-platformer",
	},
];

const FILTERS: string[] = ["All", "Completed", "In Development"];

ALL_PROJECTS.forEach((project) => {
	FILTERS.push(project.tag);
});

interface ProjectCardProps {
	project: Project;
	index: number;
}

function ProjectCard({ project, index }: ProjectCardProps): JSX.Element {
	const cardRef = useRef<HTMLDivElement>(null);

	const goToLink = () => {
		window.open(project.liveUrl! || project.repoUrl!, "_blank");
	};

	useEffect(() => {
		const timer = setTimeout(
			() => {
				cardRef.current?.classList.add("visible");
			},
			100 + index * 80,
		);
		return () => clearTimeout(timer);
	}, [index]);

	return (
		<div
			title={project.liveUrl ? `Go to Live at: ${project.liveUrl}` : project.repoUrl ? `Go to Source at: ${project.repoUrl}` : ""}
			className="proj-card"
			ref={cardRef}
			onClick={() => goToLink()}
		>
			<div className="proj-card-top">
				<div className="proj-card-tags">
					<span className="proj-card-tag">{project.tag}</span>
					<span className={`proj-card-tag ${project.DEV == true ? "dev" : project.DEV == false ? "done" : "unknown-status"}`}>
						{project.DEV == true ? "In Development" : project.DEV == false ? "Completed" : "Unknown Status"}
					</span>
				</div>
				<span className="proj-card-arrow">↗</span>
			</div>

			{/* Replace content with: <img src="..." alt={project.title} /> */}
			<div className="proj-card-thumb">[ preview image ]</div>

			<h3 className="proj-card-title">{project.title}</h3>
			<p className="proj-card-desc">{project.description}</p>

			<div className="proj-card-footer">
				{project.stack.map((s) => (
					<span className="proj-stack-tag" key={s}>
						{s}
					</span>
				))}
			</div>

			<div className="proj-card-links">
				{project.liveUrl && (
					<a href={project.liveUrl} className="proj-link" target="_blank" rel="noreferrer">
						↗ Live
					</a>
				)}
				{project.repoUrl && (
					<a href={project.repoUrl} className="proj-link" target="_blank" rel="noreferrer">
						⌥ Source
					</a>
				)}
			</div>
		</div>
	);
}

export default function Projects(): JSX.Element {
	const [activeFilter, setActiveFilter] = useState<string>("All");
	const headerRef = useRef<HTMLDivElement>(null);

	const filterProjects = () => {
		switch (activeFilter) {
			case "All":
				return ALL_PROJECTS;
			case "Completed":
				return ALL_PROJECTS.filter((p) => !p.DEV);
			case "In Development":
				return ALL_PROJECTS.filter((p) => p.DEV);
			default:
				return ALL_PROJECTS.filter((p) => p.tag === activeFilter);
		}
	};

	const filtered: Project[] = filterProjects();

	useEffect(() => {
		const timer = setTimeout(() => {
			headerRef.current?.classList.add("visible");
		}, 80);
		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			<div className="proj-root">
				{/* Header */}
				<div className="proj-header">
					<div className="proj-header-left" ref={headerRef}>
						<p className="proj-eyebrow">Selected work</p>
						<h1 className="proj-heading">Projects</h1>
					</div>
					<span className="proj-count">0{ALL_PROJECTS.length}</span>
				</div>

				{/* Filters */}
				<div className="proj-filters">
					{FILTERS.map((f) => (
						<button key={f} className={`proj-filter-btn${activeFilter === f ? " active" : ""}`} onClick={() => setActiveFilter(f)}>
							{f}
						</button>
					))}
				</div>

				{/* Grid */}
				<div className="proj-grid">
					{filtered.map((project, i) => (
						<ProjectCard key={project.id} project={project} index={i} />
					))}
				</div>
			</div>
		</>
	);
}
