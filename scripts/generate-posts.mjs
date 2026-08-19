// Regenerates src/data/posts.ts from the markdown files in src/content/posts/.
// Run directly with `node scripts/generate-posts.mjs`, or let the Vite plugin
// (scripts/vite-plugin-posts.mjs) call generatePosts() on dev/build.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";
import { marked } from "marked";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
export const POSTS_DIR = path.join(ROOT, "src/content/posts");
const OUTPUT_FILE = path.join(ROOT, "src/data/posts.ts");

const WORDS_PER_MINUTE = 200;

function slugFromFilename(filename) {
	return filename
		.replace(/\.md$/, "")
		.replace(/([a-z0-9])([A-Z])/g, "$1-$2")
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "");
}

function formatDate(date) {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	return `${year} · ${month}`;
}

function readTimeFor(body) {
	const words = body.trim().split(/\s+/).filter(Boolean).length;
	const minutes = Math.max(1, Math.round(words / WORDS_PER_MINUTE));
	return `${minutes} min`;
}

function readPost(filename) {
	const fullPath = path.join(POSTS_DIR, filename);
	const raw = fs.readFileSync(fullPath, "utf-8");
	const { data, content } = matter(raw);

	const date = data.date ?? formatDate(fs.statSync(fullPath).birthtime);

	return {
		slug: slugFromFilename(filename),
		title: data.title ?? slugFromFilename(filename),
		blurb: data.blurb ?? "",
		tag: data.tag ?? "",
		date,
		read: readTimeFor(content),
		html: marked.parse(content, { async: false }),
	};
}

export function generatePosts() {
	fs.mkdirSync(POSTS_DIR, { recursive: true });

	const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md") && f.toLowerCase() !== "readme.md");
	const posts = files.map(readPost).sort((a, b) => (a.date < b.date ? 1 : -1));

	const body = posts
		.map(
			(p) => `\t{
\t\tslug: ${JSON.stringify(p.slug)},
\t\ttitle: ${JSON.stringify(p.title)},
\t\tblurb: ${JSON.stringify(p.blurb)},
\t\ttag: ${JSON.stringify(p.tag)},
\t\tdate: ${JSON.stringify(p.date)},
\t\tread: ${JSON.stringify(p.read)},
\t\thtml: ${JSON.stringify(p.html)},
\t},`,
		)
		.join("\n");

	const output = `/**
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

export const posts: Post[] = [${body ? `\n${body}\n` : ""}];

export function getPost(slug: string): Post | undefined {
	return posts.find((p) => p.slug === slug);
}

/** Wraps around, so the last post points back at the first. */
export function getNextPost(slug: string): Post | undefined {
	if (posts.length === 0) return undefined;
	const i = posts.findIndex((p) => p.slug === slug);
	return posts[(i + 1) % posts.length];
}
`;

	fs.writeFileSync(OUTPUT_FILE, output);
	return posts;
}

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1]);
if (isMain) {
	const posts = generatePosts();
	console.log(`Generated src/data/posts.ts with ${posts.length} post(s).`);
}
