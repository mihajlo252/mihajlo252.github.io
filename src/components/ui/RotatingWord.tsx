import { useEffect, useState } from "react";

interface RotatingWordProps {
	words: string[];
	/** How long a fully typed word stays on screen before it is erased. */
	holdMs?: number;
	/** Delay between characters while typing. */
	typeMs?: number;
	/** Delay between characters while erasing. */
	deleteMs?: number;
}

function prefersReducedMotion(): boolean {
	return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getRandom(n: number): number {
	return Math.floor(Math.random() * n)
}

/**
 * Types the last word of the hero headline out character by character, holds it,
 * erases it, then moves to the next one. The caret only blinks while the word
 * rests, so it reads like a real terminal. Reduced motion swaps words instantly.
 */
export function RotatingWord({ words, holdMs = 4000, typeMs = 120, deleteMs = 35 }: RotatingWordProps) {
	const [reduced] = useState(prefersReducedMotion);
	const [index, setIndex] = useState(0);
	const [count, setCount] = useState(() => words[0]?.length ?? 0);
	const [deleting, setDeleting] = useState(false);

	const word = words[index] ?? "";
	const typed = reduced ? word : word.slice(0, count);
	const resting = reduced || (!deleting && count === word.length);

	useEffect(() => {
		if (words.length < 2) return;

		if (reduced) {
			const timer = setInterval(() => setIndex((i) => (i + 1) % words.length), holdMs + 600);
			return () => clearInterval(timer);
		}

		let timeout: ReturnType<typeof setTimeout>;
		if (!deleting && count === word.length) {
			timeout = setTimeout(() => setDeleting(true), holdMs);
		} else if (deleting && count === 0) {
			timeout = setTimeout(() => {
				setIndex((i) => (i + 1) % words.length);
				setDeleting(false);
			}, getRandom(typeMs) * 3);
		} else {
			timeout = setTimeout(() => setCount((c) => c + (deleting ? -1 : 1)), deleting ? deleteMs : getRandom(typeMs));
		}
		return () => clearTimeout(timeout);
	}, [reduced, count, deleting, word, words.length, holdMs, typeMs, deleteMs]);

	return (
		<>
			<span className="hero-word" aria-hidden="true">
				{typed}
			</span>
			<span className="sr-only">{word}</span>
			<span className={resting ? "caret" : "caret caret-solid"} aria-hidden="true" />
		</>
	);
}
