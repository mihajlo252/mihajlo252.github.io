import { useCallback, useEffect, useState } from "react";

export type Theme = "dark" | "light";

export const THEME_KEY = "mk-portfolio-theme";

function readStoredTheme(): Theme {
	if (typeof document === "undefined") return "dark";
	const attr = document.documentElement.getAttribute("data-theme");
	if (attr === "dark" || attr === "light") return attr;
	try {
		const saved = localStorage.getItem(THEME_KEY);
		if (saved === "dark" || saved === "light") return saved;
	} catch {
		/* private mode / storage disabled — fall through to the default */
	}
	return "dark";
}

/**
 * Owns the light/dark choice. The initial value is whatever the inline script
 * in index.html already stamped on <html>, so the hook never re-flashes.
 */
export function useTheme() {
	const [theme, setTheme] = useState<Theme>(readStoredTheme);

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
		try {
			localStorage.setItem(THEME_KEY, theme);
		} catch {
			/* nothing to persist to — the in-memory choice still applies */
		}
	}, [theme]);

	const toggleTheme = useCallback(() => {
		setTheme((current) => (current === "dark" ? "light" : "dark"));
	}, []);

	return { theme, toggleTheme };
}
