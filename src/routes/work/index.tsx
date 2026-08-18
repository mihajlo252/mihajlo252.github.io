import { Link, createFileRoute } from "@tanstack/react-router";

import { projects } from "#/data/projects";

export const Route = createFileRoute("/work/")({ component: WorkPage });

function WorkPage() {
	return (
		<div className="page fade-in">
			<h1 className="page-title fade-up">Work</h1>
			<p className="page-lead">
				Things I built because I wanted to use them — D&amp;D tools, a spending tracker, and a game written without an engine.
			</p>
			{projects.map((project) => (
				<Link key={project.slug} to="/work/$slug" params={{ slug: project.slug }} className="workrow">
					<span className="workrow-num">{project.num}</span>
					<span className="workrow-name">{project.name}</span>
					<span className="workrow-blurb">{project.blurb}</span>
					<span className="workrow-tags">{project.tags}</span>
					<span className="workrow-year">{project.year}</span>
				</Link>
			))}
			<div className="rule" />
		</div>
	);
}
