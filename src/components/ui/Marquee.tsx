interface MarqueeProps {
	items: string[];
}

/** Two identical tracks scrolling as one, so the loop never shows a seam. */
export function Marquee({ items }: MarqueeProps) {
	const group = (
		<div className="marquee-group">
			{items.map((item) => (
				<span key={item}>{item}</span>
			))}
		</div>
	);

	return (
		<section className="marquee" aria-label="Technologies I work with">
			<div className="marquee-track">
				{group}
				{group}
			</div>
		</section>
	);
}
