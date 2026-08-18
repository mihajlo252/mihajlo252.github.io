import { Link } from "@tanstack/react-router";
import { posts } from "#/data/posts";
import { PostRow } from "#/components/ui/PostRow";
import { SectionHeading } from "#/components/ui/SectionHeading";

export function WritingPreview() {
	if (posts.length === 0) return null;

	return (
		<section className="section">
			<SectionHeading
				title="Writing"
				action={
					<Link to="/writing" className="link-mono">
						All posts →
					</Link>
				}
			/>
			{posts.slice(0, 3).map((post) => (
				<PostRow key={post.title} post={post} />
			))}
		</section>
	);
}
