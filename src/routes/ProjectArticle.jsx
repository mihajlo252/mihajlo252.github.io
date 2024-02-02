import MarkDown from "markdown-to-jsx";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

export const ProjectArticle = () => {
	const location = useLocation();
	const { post } = location.state;

	const [markdown, setMarkdown] = useState("");
	const fetchMarkdown = async () => {
		try {
			const response = await fetch(`assets/markdown/${post.file}`);
			setMarkdown(await response.text());
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchMarkdown();
		console.log(markdown);
	}, []);

	return (
		<div className="hero min-h-screen px-44 py-44 max-[1500px]:px-32 max-[800px]:px-16 max-[600px]:px-4">
			<div className="hero-content max-w-full flex-col p-0 lg:flex-row">
				<MarkDown
					options={{
						overrides: {
							h1: {
								component: (props) => (
									<h1 className="mb-10 text-5xl font-bold text-secondary max-[700px]:text-4xl">
										{props.children}
									</h1>
								),
							},
							p: {
								component: (props) => (
									<p className="py-6 max-[700px]:text-[.9rem]">{props.children}</p>
								),
							}
						},
					}}
				>
					{markdown}
				</MarkDown>
			</div>
		</div>
	);
};
