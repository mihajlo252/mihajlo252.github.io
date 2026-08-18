interface PlaceholderProps {
	label: string;
	className?: string;
}

/** Dashed stand-in for artwork that does not exist yet. */
export function Placeholder({ label, className }: PlaceholderProps) {
	return <div className={className ? `placeholder ${className}` : "placeholder"}>{label}</div>;
}
