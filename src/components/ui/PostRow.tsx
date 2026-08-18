import type { Post } from "#/data/posts";

interface PostRowProps {
	post: Post;
	/** Wide rows add the tag column; used on the writing index. */
	wide?: boolean;
}

/**
 * Posts have no destinations yet, so this stays a non-interactive row rather
 * than a link to nowhere. Give it an href once the writing actually exists.
 */
export function PostRow({ post, wide = false }: PostRowProps) {
	return (
		<div className={wide ? "postrow postrow-wide" : "postrow"}>
			<span className="postrow-date">{post.date}</span>
			<span className="postrow-title">{post.title}</span>
			{wide && <span className="postrow-tag">{post.tag}</span>}
			<span className="postrow-read">{post.read}</span>
		</div>
	);
}
