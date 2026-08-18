import { useCallback, useRef } from "react";

const DEFAULT_STRENGTH = 0.34;

function prefersReducedMotion(): boolean {
	return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Ref callback that nudges an element toward the cursor while it is hovered.
 * Returns to rest on mouseleave. Listeners are removed when the ref detaches,
 * so this is safe across route changes.
 */
export function useMagnet(strength: number = DEFAULT_STRENGTH) {
	const cleanupRef = useRef<(() => void) | null>(null);

	return useCallback(
		(el: HTMLElement | null) => {
			cleanupRef.current?.();
			cleanupRef.current = null;

			if (!el || prefersReducedMotion()) return;

			const onMove = (e: MouseEvent) => {
				const r = el.getBoundingClientRect();
				const x = (e.clientX - r.left - r.width / 2) * strength;
				const y = (e.clientY - r.top - r.height / 2) * strength;
				el.style.transition = "transform .1s linear";
				el.style.transform = `translate(${x}px, ${y}px)`;
			};

			const onLeave = () => {
				el.style.transition = "transform .6s cubic-bezier(.16,1,.3,1)";
				el.style.transform = "translate(0,0)";
			};

			el.addEventListener("mousemove", onMove);
			el.addEventListener("mouseleave", onLeave);

			cleanupRef.current = () => {
				el.removeEventListener("mousemove", onMove);
				el.removeEventListener("mouseleave", onLeave);
				el.style.transform = "";
				el.style.transition = "";
			};
		},
		[strength],
	);
}
