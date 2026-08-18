import type { ReactNode } from "react";

interface SectionHeadingProps {
	title: string;
	action?: ReactNode;
}

export function SectionHeading({ title, action }: SectionHeadingProps) {
	return (
		<div className="sec-head">
			<h2 className="eyebrow">{title}</h2>
			{action}
		</div>
	);
}
