import { Link, createFileRoute, notFound } from "@tanstack/react-router";

import { getNextPost, getPost } from "#/data/posts";

export const Route = createFileRoute("/writing/$slug")({
	loader: ({ params }) => {
		const post = getPost(params.slug);
		if (!post) throw notFound();
		return post;
	},
	component: PostPage,
	notFoundComponent: () => (
		<div className="page fade-in">
			<h1 className="page-title">Not found</h1>
			<p className="page-lead">There's no post at this address.</p>
			<Link to="/writing" className="link-mono">
				← Back to writing
			</Link>
		</div>
	),
});

function PostPage() {
	const post = Route.useLoaderData();
	const next = getNextPost(post.slug);

	const meta = [
		{ k: "Date", v: post.date },
		{ k: "Tag", v: post.tag || "—" },
		{ k: "Read", v: post.read },
	];

	return (
		<div className="page fade-in">
			<Link to="/writing" className="link-mono">
				← Back to writing
			</Link>

			<div className="case-head">
				<h1 className="case-title fade-up">{post.title}</h1>
				{post.blurb && <p className="case-lead">{post.blurb}</p>}
			</div>

			<div className="meta-grid meta-grid-3">
				{meta.map((item) => (
					<div key={item.k} className="meta-card">
						<div className="meta-k">{item.k}</div>
						<div className="meta-v">{item.v}</div>
					</div>
				))}
			</div>

			{/** biome-ignore lint: post body is generated from trusted local markdown files */}
			<div className="post-body" dangerouslySetInnerHTML={{ __html: post.html }} />

			{next && next.slug !== post.slug && (
				<Link to="/writing/$slug" params={{ slug: next.slug }} className="next-project">
					<span className="next-project-label">Next post</span>
					<span className="next-project-name">{next.title} →</span>
				</Link>
			)}
		</div>
	);
}
