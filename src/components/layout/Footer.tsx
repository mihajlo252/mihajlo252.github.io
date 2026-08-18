import { site } from "#/data/site";

export function Footer() {
	return (
		<footer className="footer">
			<span>© {new Date().getFullYear()} {site.name}</span>
			<span className="footer-hint">
				Press <kbd className="kbd">1</kbd>–<kbd className="kbd">4</kbd> to navigate · <kbd className="kbd">T</kbd> theme
			</span>
			<div className="footer-links">
				<a href={site.github} target="_blank" rel="noreferrer">
					GitHub
				</a>
				<a href={site.linkedin} target="_blank" rel="noreferrer">
					LinkedIn
				</a>
				<a href={`mailto:${site.email}`}>Email</a>
			</div>
		</footer>
	);
}
