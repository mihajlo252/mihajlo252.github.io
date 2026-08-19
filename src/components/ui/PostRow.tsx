import { Link } from "@tanstack/react-router";
import type { Post } from "#/data/posts";

interface PostRowProps {
	post: Post;
	/** Wide rows add the tag column; used on the writing index. */
	wide?: boolean;
}

export function PostRow({ post, wide = false }: PostRowProps) {
	return (
		<Link to="/writing/$slug" params={{ slug: post.slug }} className={wide ? "postrow postrow-wide" : "postrow"}>
			<span className="postrow-date">{post.date}</span>
			<span className="postrow-title">{post.title}</span>
			{wide && <span className="postrow-tag">{post.tag}</span>}
			<span className="postrow-read">{post.read}</span>
		</Link>
	);
}
