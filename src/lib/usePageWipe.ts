import { useEffect, useRef, useState } from "react";
import { useRouterState } from "@tanstack/react-router";

/** Must match the `.wipe` animation-duration in styles.css. */
const WIPE_DURATION_MS = 780;

/**
 * Drives the accent wipe that covers the screen between pages. Keyed off the
 * router pathname rather than a timer, so it always matches the real
 * navigation. Skipped for the first paint and under reduced motion.
 *
 * `isTransitioning` stays true for the wipe's full duration, so the new
 * page's own fade-in (see `--page-delay` in styles.css) can be held back
 * until the wipe is covering the screen, instead of showing through beneath it.
 */
export function usePageWipe() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [wipeKey, setWipeKey] = useState(0);
	const [isTransitioning, setIsTransitioning] = useState(false);
	const previous = useRef(pathname);

	useEffect(() => {
		if (previous.current === pathname) return;
		previous.current = pathname;

		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		setWipeKey((n) => n + 1);
		setIsTransitioning(true);
		const timer = window.setTimeout(() => setIsTransitioning(false), WIPE_DURATION_MS);
		return () => window.clearTimeout(timer);
	}, [pathname]);

	return { wipeKey, isTransitioning };
}
