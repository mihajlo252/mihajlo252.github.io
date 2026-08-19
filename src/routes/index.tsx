import { createFileRoute } from "@tanstack/react-router";

import { AboutPreview } from "#/components/home/AboutPreview";
import { ContactCta } from "#/components/home/ContactCta";
import { Hero } from "#/components/home/Hero";
import { SelectedWork } from "#/components/home/SelectedWork";
import { WritingPreview } from "#/components/home/WritingPreview";

export const Route = createFileRoute("/")({ component: HomePage });

function HomePage() {
	return (
		<div className="fade-in">
			<Hero />
			<SelectedWork />
			<AboutPreview />
			<WritingPreview />
			<ContactCta />
		</div>
	);
}
