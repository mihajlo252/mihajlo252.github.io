import { useEffect, useRef, useState } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Drives the accent wipe that covers the screen between pages. Keyed off the
 * router pathname rather than a timer, so it always matches the real
 * navigation. Skipped for the first paint and under reduced motion.
 */
export function usePageWipe() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [wipeKey, setWipeKey] = useState(0);
	const previous = useRef(pathname);

	useEffect(() => {
		if (previous.current === pathname) return;
		previous.current = pathname;

		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		setWipeKey((n) => n + 1);
	}, [pathname]);

	return wipeKey;
}
