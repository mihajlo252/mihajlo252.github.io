import { Link } from "@tanstack/react-router";
import { STATUS_LABEL, type Project } from "#/data/projects";

interface ProjectCardProps {
	project: Project;
}

/** Card used on the homepage grid. A real link, so it is keyboard reachable. */
export function ProjectCard({ project }: ProjectCardProps) {
	return (
		<Link to="/work/$slug" params={{ slug: project.slug }} className="pcard">
			<div className="pcard-top">
				<span>{project.num}</span>
				<span className="pcard-rank">{STATUS_LABEL[project.status]}</span>
			</div>
			<div className={project.image ? "pcard-thumb" : "pcard-thumb pcard-thumb-empty"}>
				{project.image ? (
					<img src={`/assets/${project.image}`} alt={`${project.name} preview`} loading="lazy" />
				) : (
					<span>Screenshot</span>
				)}
			</div>
			<div className="pcard-name">{project.name}</div>
			<div className="pcard-blurb">{project.blurb}</div>
			<div className="pcard-foot">
				<span>{project.year}</span>
				<span className="pcard-enter">Enter →</span>
			</div>
		</Link>
	);
}
