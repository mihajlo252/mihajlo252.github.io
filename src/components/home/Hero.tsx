import { Link } from "@tanstack/react-router";
import { heroBadges, heroLead, heroWords, site } from "#/data/site";
import { RotatingWord } from "#/components/ui/RotatingWord";
import { useMagnet } from "#/lib/useMagnet";

export function Hero() {
	const magnetPrimary = useMagnet();
	const magnetGhost = useMagnet();

	return (
		<section className="hero">
			<div>
				<div className="hero-badges">
					{heroBadges.map((badge) => (
						<span key={badge.label} className={badge.live ? "badge badge-live" : "badge"}>
							{badge.live && <span className="dot" aria-hidden="true" />}
							{badge.label}
						</span>
					))}
				</div>
				<h1 className="hero-title">
					I build the
					<br />
					interfaces you
					<br />
					actually <RotatingWord words={heroWords} />
				</h1>
			</div>
			<div className="hero-aside">
				<p className="hero-lead">{heroLead}</p>
				<div className="btn-row">
					<Link to="/work" className="btn btn-primary" ref={magnetPrimary}>
						See the work <span aria-hidden="true">→</span>
					</Link>
					<a href={site.cv} target="_blank" rel="noreferrer" className="btn btn-ghost" ref={magnetGhost}>
						Résumé <span aria-hidden="true">↓</span>
					</a>
				</div>
			</div>
		</section>
	);
}
