import { generatePosts, POSTS_DIR } from "./generate-posts.mjs";

/**
 * Regenerates src/data/posts.ts from src/content/posts/*.md — once before
 * build, and on every add/change/unlink of a post file during dev.
 */
export function postsPlugin() {
	return {
		name: "posts",
		buildStart() {
			generatePosts();
		},
		configureServer(server) {
			generatePosts();
			const isPostFile = (file) => file.startsWith(POSTS_DIR) && file.endsWith(".md");
			server.watcher.add(POSTS_DIR);
			server.watcher.on("all", (_event, file) => {
				if (isPostFile(file)) generatePosts();
			});
		},
	};
}
