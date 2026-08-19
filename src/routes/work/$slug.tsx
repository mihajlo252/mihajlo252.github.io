import { Link, createFileRoute, notFound } from "@tanstack/react-router";

import { Placeholder } from "#/components/ui/Placeholder";
import { STATUS_LABEL, getNextProject, getProject } from "#/data/projects";

export const Route = createFileRoute("/work/$slug")({
	loader: ({ params }) => {
		const project = getProject(params.slug);
		if (!project) throw notFound();
		return project;
	},
	component: CaseStudyPage,
	notFoundComponent: () => (
		<div className="page fade-in">
			<h1 className="page-title">Not found</h1>
			<p className="page-lead">There's no project at this address.</p>
			<Link to="/work" className="link-mono">
				← Back to work
			</Link>
		</div>
	),
});

function CaseStudyPage() {
	const project = Route.useLoaderData();
	const next = getNextProject(project.slug);

	const meta = [
		{ k: "Role", v: project.meta.role },
		{ k: "Timeline", v: project.meta.timeline },
		{ k: "Stack", v: project.meta.stack },
		{ k: "Status", v: STATUS_LABEL[project.status] },
	];

	const story = [
		{ k: "Problem", v: project.story.problem },
		{ k: "Approach", v: project.story.approach },
		{ k: "Outcome", v: project.story.outcome },
	];

	return (
		<div className="page fade-in">
			<Link to="/work" className="link-mono">
				← Back to work
			</Link>

			<div className="case-head">
				<h1 className="case-title fade-up">{project.name}</h1>
				<p className="case-lead">{project.blurb}</p>
			</div>

			<div className="meta-grid">
				{meta.map((item) => (
					<div key={item.k} className="meta-card">
						<div className="meta-k">{item.k}</div>
						<div className="meta-v">{item.v}</div>
					</div>
				))}
			</div>

			{project.image ? (
				<div className="case-hero">
					<img src={`/assets/${project.image}`} alt={`${project.name} screenshot`} />
				</div>
			) : (
				<div className="case-hero case-hero-empty">Hero screenshot</div>
			)}

			<div className="story-grid">
				{story.map((item) => (
					<div key={item.k}>
						<div className="story-k">{item.k}</div>
						<p className="story-v">{item.v}</p>
					</div>
				))}
			</div>

			<div className="shot-grid">
				<Placeholder label="Detail shot" className="shot" />
				<Placeholder label="Detail shot" className="shot" />
			</div>

			<div className="case-links">
				{project.liveUrl && (
					<a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
						Visit live <span aria-hidden="true">↗</span>
					</a>
				)}
				{project.repoUrl && (
					<a href={project.repoUrl} target="_blank" rel="noreferrer" className="btn btn-ghost">
						Source <span aria-hidden="true">↗</span>
					</a>
				)}
			</div>

			<Link to="/work/$slug" params={{ slug: next.slug }} className="next-project">
				<span className="next-project-label">Next project</span>
				<span className="next-project-name">{next.name} →</span>
			</Link>
		</div>
	);
}
