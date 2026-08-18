interface StackCardProps {
	title: string;
	items: string;
	pct: string;
}

export function StackCard({ title, items, pct }: StackCardProps) {
	return (
		<div className="stack-card">
			<div className="stack-head">
				<span className="stack-name">{title}</span>
				<span className="stack-pct">{pct}</span>
			</div>
			<div className="stack-items">{items}</div>
			<div className="stack-bar">
				<div className="stack-fill" style={{ width: pct }} />
			</div>
		</div>
	);
}
