import { useEffect, useRef, type JSX } from "react";

interface Stat {
	n: string;
	label: string;
}

const STATS: Stat[] = [
	{ n: "X+", label: "Years Experience" },
	{ n: "XX", label: "Projects Shipped" },
	{ n: "XX", label: "Happy Clients" },
	{ n: "X", label: "Awards Won" },
];

const SKILLS: string[] = ["React", "TypeScript", "JavaScript", "Node.js", "HTML", "CSS", "Figma", "Docker", "REST APIs", "Git", "CI/CD"];

export default function About(): JSX.Element {
	const leftRef = useRef<HTMLDivElement>(null);
	const rightRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const timer = setTimeout(() => {
			leftRef.current?.classList.add("visible");
			rightRef.current?.classList.add("visible");
		}, 100);
		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			<div className="about-root">
				{/* Hero */}
				<section className="about-hero">
					<div className="about-hero-left" ref={leftRef}>
						<p className="about-eyebrow">Available for work</p>
						<h1 className="about-heading">
							Designer &amp;
							<br />
							<em>Developer</em>
							<br />
							based in
							<br />
							Your City.
						</h1>
						<p className="about-bio">
							I build thoughtful digital products that live at the intersection of clean engineering and considered design. With X years
							of experience, I've shipped work for startups, agencies, and everything in between.
						</p>
						<div className="about-cta-row">
							<a href="/projects" className="about-btn-primary">
								View Projects
							</a>
							<a href="/contact" className="about-btn-ghost">
								Get in Touch
							</a>
						</div>
					</div>

					<div className="about-hero-right" ref={rightRef}>
						<div className="about-photo-frame">
							<img src="./linkedin-slikajpeg.jpg " alt="Your Name" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
							{/* <div className="about-photo-placeholder"> */}
							{/* <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                </svg>
                <span>Your Photo Here</span> */}
							{/* </div>  */}
						</div>

						<div className="about-stats">
							{STATS.map((s) => (
								<div className="about-stat" key={s.label}>
									<div className="about-stat-number">{s.n}</div>
									<div className="about-stat-label">{s.label}</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Skills */}
				<section className="about-skills-section">
					<p className="about-skills-label">Technologies &amp; Tools</p>
					<div className="about-skills-list">
						{SKILLS.map((skill) => (
							<span className="about-skill-tag" key={skill}>
								{skill}
							</span>
						))}
					</div>
				</section>

				
			</div>
		</>
	);
}
