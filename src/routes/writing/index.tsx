import { createFileRoute } from "@tanstack/react-router";

import { PostRow } from "#/components/ui/PostRow";
import { posts } from "#/data/posts";

export const Route = createFileRoute("/writing/")({ component: WritingPage });

function WritingPage() {
	return (
		<div className="page fade-in">
			<h1 className="page-title fade-up">Writing</h1>
			<p className="page-lead">Notes on frontend work, the projects above, and the parts of the job nobody documents.</p>
			{posts.length === 0 ? (
				<div className="empty-state">Nothing published yet — the first post is in progress.</div>
			) : (
				<>
					{posts.map((post) => (
						<PostRow key={post.title} post={post} wide />
					))}
					<div className="rule" />
				</>
			)}
		</div>
	)
}
