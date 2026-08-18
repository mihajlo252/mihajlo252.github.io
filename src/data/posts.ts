/**
 * Writing.
 *
 * PLACEHOLDER — all of it. There are no real posts yet; these are the demo
 * entries from the design, kept so the page has something to render. Empty the
 * array and /writing falls back to an honest empty state instead.
 */

export interface Post {
	date: string;
	title: string;
	tag: string;
	read: string;
}

export const posts: Post[] = [
	{ date: "2026 · 04", title: "Animating without dropping frames", tag: "Performance", read: "8 min" },
	{ date: "2026 · 02", title: "Design tokens that survive a redesign", tag: "Systems", read: "11 min" },
	{ date: "2025 · 11", title: "Why your loading state is the product", tag: "Craft", read: "6 min" },
	{ date: "2025 · 08", title: "Reading a flame graph without panicking", tag: "Performance", read: "9 min" },
	{ date: "2025 · 05", title: "Building a game loop by hand", tag: "Notes", read: "5 min" },
	{ date: "2025 · 01", title: "The case against the generic modal", tag: "Craft", read: "7 min" },
];
