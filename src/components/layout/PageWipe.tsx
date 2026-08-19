import { useState } from "react";

interface PageWipeProps {
	wipeKey: number;
}

/** Accent panel that sweeps across the viewport on each route change. */
export function PageWipe({ wipeKey }: PageWipeProps) {
	const [finished, setFinished] = useState(0);

	if (wipeKey === 0 || wipeKey === finished) return null;

	return <div key={wipeKey} className="wipe" aria-hidden="true" onAnimationEnd={() => setFinished(wipeKey)} />;
}
