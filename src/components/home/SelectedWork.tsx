import { Link } from "@tanstack/react-router";
import { projects } from "#/data/projects";
import { ProjectCard } from "#/components/ui/ProjectCard";
import { SectionHeading } from "#/components/ui/SectionHeading";

export function SelectedWork() {
	return (
		<section className="section">
			<SectionHeading
				title={`Selected work — ${String(projects.length).padStart(2, "0")}`}
				action={
					<Link to="/work" className="link-mono">
						All projects →
					</Link>
				}
			/>
			<div className="card-grid">
				{projects.map((project) => (
					<ProjectCard key={project.slug} project={project} />
				))}
			</div>
		</section>
	);
}
