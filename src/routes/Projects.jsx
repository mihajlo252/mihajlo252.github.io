import React, { useEffect, useState } from "react";
import { Cards } from "../components/Cards";

export const Projects = () => {
	const [fileNameList, setFileNameList] = useState([]);

	const getMarkdownMetadata = async () => {
		const res = await fetch("assets/markdownMetadata.json");
		const { ...resList } = await res.json();
		return Object.values(resList);
	};

	const handleMetadata = async () => {
		const markdownMetadata = await getMarkdownMetadata();
		setFileNameList(markdownMetadata);
	};

	useEffect(() => {
		handleMetadata();
	}, []);

	return (
		<div className="flex flex-col px-44 py-44 max-[1500px]:px-32 max-[800px]:px-16 max-[600px]:px-4">
			<main className="mb-20">
				<h1 className="mb-10 text-5xl font-semibold text-secondary max-[700px]:text-4xl">Projects</h1>
				<p className="max-[700px]:text-[.9rem]">
					These are some of the projects I've been working on for quite some time now. Although few are finished, they
					have served as stepping stones propelling me forward. Through them, I've learned everything from the basics to
					some of the newest and widely used technologies.
				</p>
			</main>
			<Cards posts={fileNameList} />
		</div>
	);
};
