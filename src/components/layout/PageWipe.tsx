import { useLocation } from "@tanstack/react-router";
import { useLayoutEffect, useRef, useState } from "react";

interface PageWipeProps {
	wipeKey: number;
}

/** Accent panel that sweeps across the viewport on each route change. */
export function PageWipe({ wipeKey }: PageWipeProps) {
	const [finished, setFinished] = useState(0);
	const location = useLocation();
	const pathRef = useRef<HTMLDivElement>(null)

	const displayPath = `~${location.pathname}`;

	useLayoutEffect(() => {
		if (pathRef.current) {
			pathRef.current.style.setProperty(
				"--char-count", 
				displayPath.length.toString()
			);
		}
	}, [displayPath, wipeKey]);


	if (wipeKey === 0 || wipeKey === finished) return null;

	return (
		<div key={wipeKey} className="wipe" aria-hidden="true" onAnimationEnd={() => setFinished(wipeKey)}>
			<div className="wipe-text" ref={pathRef}>{displayPath}</div>
		</div>
	);
}
