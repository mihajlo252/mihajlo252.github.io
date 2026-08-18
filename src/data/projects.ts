/**
 * Projects — the two from the CV, and only those.
 *
 * REAL: names, blurbs, stacks, status, live and repo URLs. Taken from
 * MihajloKostic_CV.pdf.
 *
 * PLACEHOLDER: screenshots (none exist yet — set `image` to a path under
 * /assets/images/ and the dashed box is replaced automatically) and the parts
 * of `story` still phrased as a question. Search for "PLACEHOLDER".
 */

export type ProjectStatus = "dev" | "done";

export interface Project {
	slug: string;
	num: string;
	name: string;
	blurb: string;
	tags: string;
	year: string;
	status: ProjectStatus;
	/** null renders a dashed placeholder instead of a screenshot. */
	image: string | null;
	liveUrl: string | null;
	repoUrl: string | null;
	meta: {
		role: string;
		timeline: string;
		stack: string;
	};
	story: {
		problem: string;
		approach: string;
		outcome: string;
	};
}

export const STATUS_LABEL: Record<ProjectStatus, string> = {
	dev: "In development",
	done: "Completed",
};

export const projects: Project[] = [
	{
		slug: "the-scrollforge",
		num: "01",
		name: "The Scrollforge",
		blurb: "Interactive tabletop-RPG character sheet, built as a web app and installable PWA for tracking characters during play.",
		tags: "React · TypeScript · Supabase",
		year: "2025",
		status: "dev",
		image: null,
		liveUrl: "https://thescrollforge.netlify.app",
		repoUrl: "https://github.com/mihajlo252/the-scrollforge",
		meta: {
			role: "Solo build",
			timeline: "2025 — ongoing",
			stack: "React, TypeScript, Supabase",
		},
		story: {
			problem:
				"Paper character sheets fall apart mid-campaign: totals drift, modifiers get recalculated by hand, and nobody remembers which version is current.",
			approach:
				"A single sheet that derives everything it can — modifiers, saves, skill totals — from the underlying stats, backed by Supabase so a character follows you between devices. Packaged as an installable PWA so it works at the table.",
			outcome: "PLACEHOLDER — what works today, what is still in progress, and what you would change.",
		},
	},
	{
		slug: "the-gathering-table",
		num: "02",
		name: "The Gathering Table",
		blurb: "Group event-planning app with Google OAuth login, opt-in Google Calendar sync, and web push notifications.",
		tags: "React · Supabase · PWA",
		year: "2025",
		status: "done",
		image: null,
		liveUrl: "https://thegatheringtable.netlify.app",
		repoUrl: "https://github.com/mihajlo252/the-gathering-table",
		meta: {
			role: "Solo build",
			timeline: "2025",
			stack: "React, Supabase, PWA",
		},
		story: {
			problem:
				"Getting a group to agree on a date is the hardest part of any gathering — the plan lives in a group chat and nothing ends up in anyone's calendar.",
			approach:
				"Google OAuth for sign-in, opt-in Google Calendar sync so an agreed date lands where people actually look, and web push notifications through VAPID keys and Supabase Edge Functions to nudge attendees without email.",
			outcome: "PLACEHOLDER — how it is used in practice, and what the push/calendar integration taught you.",
		},
	},
];

export function getProject(slug: string): Project | undefined {
	return projects.find((p) => p.slug === slug);
}

/** Wraps around, so the last project points back at the first. */
export function getNextProject(slug: string): Project {
	const i = projects.findIndex((p) => p.slug === slug);
	return projects[(i + 1) % projects.length];
}
