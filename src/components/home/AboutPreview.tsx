import { Link } from "@tanstack/react-router";
import { aboutBody, aboutLede, stack } from "#/data/site";
import { StackCard } from "#/components/ui/StackCard";

export function AboutPreview() {
	return (
		<section className="section split">
			<div>
				<h2 className="eyebrow">About</h2>
				<p className="lede" style={{ paddingTop: "1.375rem" }}>
					{aboutLede}
				</p>
				<p className="body-text">{aboutBody[0]}</p>
				<Link to="/about" className="link-mono">
					More about me →
				</Link>
			</div>
			<div>
				<h2 className="eyebrow" style={{ paddingBottom: "1.375rem" }}>
					Stack — loadout
				</h2>
				<div className="stack-grid">
					{stack.map((item) => (
						<StackCard key={item.title} {...item} />
					))}
				</div>
			</div>
		</section>
	);
}
