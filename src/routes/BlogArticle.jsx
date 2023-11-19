import MarkDown from "markdown-to-jsx";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

export const BlogArticle = () => {
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
		<div className="hero min-h-screen py-44 px-44 max-[1500px]:px-32 max-[800px]:px-16 max-[600px]:px-4">
			<div className="hero-content flex-col lg:flex-row p-0 max-w-full">
				<MarkDown
					options={{
						overrides: {
							h1: {
								component: (props) => (
									<h1 className="text-5xl text-primary mb-10 font-bold max-[700px]:text-4xl">
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
