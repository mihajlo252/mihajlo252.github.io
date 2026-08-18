import { createFileRoute } from "@tanstack/react-router";

import { AboutPreview } from "#/components/home/AboutPreview";
import { ContactCta } from "#/components/home/ContactCta";
import { Hero } from "#/components/home/Hero";
import { SelectedWork } from "#/components/home/SelectedWork";
import { WritingPreview } from "#/components/home/WritingPreview";
import { Marquee } from "#/components/ui/Marquee";
import { marquee } from "#/data/site";

export const Route = createFileRoute("/")({ component: HomePage });

function HomePage() {
	return (
		<div className="fade-in">
			<Hero />
			<Marquee items={marquee} />
			<SelectedWork />
			<AboutPreview />
			<WritingPreview />
			<ContactCta />
		</div>
	);
}
