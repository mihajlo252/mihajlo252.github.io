/**
 * Writing.
 *
 * GENERATED — do not edit by hand. Source content lives in
 * src/content/posts/*.md and this file is rebuilt from it by
 * scripts/generate-posts.mjs (wired into Vite via
 * scripts/vite-plugin-posts.mjs). Add, edit, or remove a .md file there and
 * this file updates on the next dev reload or build.
 */

export type Post = {
	slug: string
	blurb: string
	date: string
	title: string
	tag: string
	read: string
	html: string
}

export const posts: Post[] = [
	{
		slug: "second-post",
		title: "Second Post",
		blurb: "A throwaway post used to test the writing pipeline end to end.",
		tag: "Testing",
		date: "2026 · 08",
		read: "1 min",
		html: "<h1>Test</h1>\n",
	},
	{
		slug: "first-post",
		title: "First post",
		blurb: "A throwaway post used to test the writing pipeline end to end.",
		tag: "Testing",
		date: "2026 · 08",
		read: "1 min",
		html: "<h1>Hello from first post</h1>\n<p>tralalalalalalaalal\ntralalalalalalaalal\ntralalalalalalaalal\ntralalalalalalaalal\ntralalalalalalaalal</p>\n<h2>tralalalalalalaalal</h2>\n<p>tralalalalalalaalaltralalalalalalaalal\ntralalalalalalaalal\ntralalalalalalaalal\ntralalalalalalaalal</p>\n",
	},
];

export function getPost(slug: string): Post | undefined {
	return posts.find((p) => p.slug === slug);
}

/** Wraps around, so the last post points back at the first. */
export function getNextPost(slug: string): Post | undefined {
	if (posts.length === 0) return undefined;
	const i = posts.findIndex((p) => p.slug === slug);
	return posts[(i + 1) % posts.length];
}
