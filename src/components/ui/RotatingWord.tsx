import { useEffect, useState } from "react";

interface RotatingWordProps {
	words: string[];
	intervalMs?: number;
}

/** Cycles the last word of the hero headline, followed by a blinking caret. */
export function RotatingWord({ words, intervalMs = 2600 }: RotatingWordProps) {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		if (words.length < 2) return;
		const timer = setInterval(() => setIndex((i) => (i + 1) % words.length), intervalMs);
		return () => clearInterval(timer);
	}, [words.length, intervalMs]);

	return (
		<>
			<span className="hero-word">{words[index]}</span>
			<span className="caret" aria-hidden="true" />
		</>
	);
}
