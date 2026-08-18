import { useState } from "react";

import { usePageWipe } from "#/lib/usePageWipe";

/** Accent panel that sweeps across the viewport on each route change. */
export function PageWipe() {
	const wipeKey = usePageWipe();
	const [finished, setFinished] = useState(0);

	if (wipeKey === 0 || wipeKey === finished) return null;

	return <div key={wipeKey} className="wipe" aria-hidden="true" onAnimationEnd={() => setFinished(wipeKey)} />;
}
