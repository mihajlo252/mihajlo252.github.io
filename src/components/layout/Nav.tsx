import { Link } from "@tanstack/react-router";
import { site } from "#/data/site";
import { useMagnet } from "#/lib/useMagnet";
import type { Theme } from "#/lib/theme";

const LINKS = [
	{ to: "/work", label: "work", key: "1" },
	{ to: "/about", label: "about", key: "2" },
	{ to: "/writing", label: "writing", key: "3" },
	{ to: "/contact", label: "contact", key: "4" },
] as const;

interface NavProps {
	theme: Theme;
	onToggleTheme: () => void;
}

export function Nav({ theme, onToggleTheme }: NavProps) {
	const magnet = useMagnet();

	return (
		<nav className="nav">
			<Link to="/" className="nav-brand" ref={magnet}>
				{site.brand}
			</Link>
			<ul className="nav-links">
				{LINKS.map((link) => (
					<li key={link.to}>
						<Link to={link.to} className="nav-link" activeProps={{ className: "nav-link active" }}>
							{link.label}
							<kbd className="kbd">{link.key}</kbd>
						</Link>
					</li>
				))}
				<li>
					<button
						type="button"
						className="theme-btn"
						onClick={onToggleTheme}
						aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
					>
						{theme}
					</button>
				</li>
			</ul>
		</nav>
	);
}
