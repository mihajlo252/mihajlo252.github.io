import { createFileRoute } from "@tanstack/react-router";

import { StackCard } from "#/components/ui/StackCard";
import { aboutBody, aboutLede, achievements, languages, site, stack, timeline } from "#/data/site";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
	return (
		<div className="page fade-in">
			<div className="about-grid">
				<div>
					<h1 className="page-title fade-up" style={{ paddingBottom: "1.75rem" }}>
						About
					</h1>
					<p className="about-lede">{aboutLede}</p>
					{aboutBody.map((paragraph) => (
						<p key={paragraph.slice(0, 24)} className="about-body">
							{paragraph}
						</p>
					))}
					<div className="btn-row" style={{ paddingTop: "0.75rem" }}>
						<a href={site.cv} target="_blank" rel="noreferrer" className="btn btn-primary">
							Download résumé <span aria-hidden="true">↓</span>
						</a>
					</div>

					<div style={{ paddingTop: "3rem" }}>
						<h2 className="eyebrow" style={{ paddingBottom: "0.875rem" }}>
							Achievements
						</h2>
						<div className="chips">
							{achievements.map((item) => (
								<div key={item.title} className="chip">
									<span className="chip-mark">{item.mark}</span>
									<span>
										<span className="chip-title">{item.title}</span>
										<span className="chip-note">{item.note}</span>
									</span>
								</div>
							))}
						</div>
					</div>

					<div style={{ paddingTop: "3.5rem" }}>
						<h2 className="eyebrow" style={{ paddingBottom: "0.5rem" }}>
							Timeline
						</h2>
						{timeline.map((entry) => (
							<div key={entry.role} className="tl-row">
								<span className="tl-when">{entry.when}</span>
								<div>
									<div className="tl-role">{entry.role}</div>
									<div className="tl-what">{entry.what}</div>
								</div>
							</div>
						))}

						<div style={{ paddingTop: "2.5rem" }}>
							<h2 className="eyebrow" style={{ paddingBottom: "0.75rem" }}>
								Languages
							</h2>
							<p className="about-body" style={{ margin: 0 }}>
								{languages}
							</p>
						</div>
					</div>
				</div>

				<div>
					<div className="portrait">
						<div className="portrait-flip">
							<img className="portrait-face" src={site.portrait} alt={site.name} />
							<img className="portrait-face portrait-face-back" src={site.fun} alt={`${site.name}, off duty`} />
						</div>
					</div>
					<div className="about-side-stack">
						{stack.map((item) => (
							<StackCard key={item.title} {...item} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
