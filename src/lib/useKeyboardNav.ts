import { useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";

const ROUTES: Record<string, string> = {
	"0": "/",
	"1": "/work",
	"2": "/about",
	"3": "/writing",
	"4": "/contact",
};

/** Number keys jump between pages, T flips the theme. Inert while typing. */
export function useKeyboardNav(toggleTheme: () => void) {
	const navigate = useNavigate();

	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.metaKey || e.ctrlKey || e.altKey) return;

			const target = e.target as HTMLElement | null;
			if (target?.isContentEditable) return;
			const tag = target?.tagName;
			if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;

			const to = ROUTES[e.key];
			if (to) {
				e.preventDefault();
				navigate({ to });
				return;
			}

			if (e.key === "t" || e.key === "T") {
				e.preventDefault();
				toggleTheme();
			}
		};

		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [navigate, toggleTheme]);
}
