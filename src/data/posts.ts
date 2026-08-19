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

export const posts: Post[] = [];

export function getPost(slug: string): Post | undefined {
	return posts.find((p) => p.slug === slug);
}

/** Wraps around, so the last post points back at the first. */
export function getNextPost(slug: string): Post | undefined {
	if (posts.length === 0) return undefined;
	const i = posts.findIndex((p) => p.slug === slug);
	return posts[(i + 1) % posts.length];
}
