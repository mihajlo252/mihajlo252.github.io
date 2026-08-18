/**
 * Site-wide content, sourced from MihajloKostic_CV.pdf.
 *
 * REAL: everything below except where marked. Roles, dates, employers,
 * responsibilities, skills and education all come straight from the CV.
 *
 * PLACEHOLDER: only the self-assessed percentages on the stack bars.
 */

export const site = {
	name: "Mihajlo Kostić",
	brand: "~/mihajlo.kostic",
	role: "Web Developer",
	email: "mihajlo.kostic25200@gmail.com",
	phone: "+381 64 004 8989",
	github: "https://github.com/mihajlo252",
	githubHandle: "@mihajlo252",
	linkedin: "https://www.linkedin.com/in/mihajlo-kostic",
	linkedinHandle: "/in/mihajlo-kostic",
	location: "Serbia · remote-friendly",
	cv: "/assets/cv/MihajloKostic_CV.pdf",
	portrait: "/nobgportrait.png",
};

/** Rotates in the hero headline. */
export const heroWords = ["enjoy.", "trust.", "remember."];

export const heroBadges = [
	{ label: "Open to work", live: true },
	{ label: "Web developer", live: false },
	{ label: "2+ years", live: false },
];

export const heroLead =
	"Frontend developer specializing in React, TypeScript and WordPress, with 2+ years building and maintaining 100+ production websites.";

export const marquee = [
	"React",
	"TypeScript",
	"JavaScript",
	"WordPress",
	"Tailwind CSS",
	"Supabase",
	"Node.js",
	"PHP",
	"SQL",
	"Git",
];

// The groupings and their contents come from the CV. PLACEHOLDER — the
// percentages are self-assessed; adjust them or drop the bars entirely.
export const stack = [
	{ title: "Languages", items: "JavaScript, TypeScript, HTML/CSS", pct: "90%" },
	{ title: "React", items: "React, React Native, PWAs", pct: "88%" },
	{ title: "Styling", items: "CSS, Tailwind, responsive, accessible", pct: "85%" },
	{ title: "WordPress", items: "Elementor, custom widgets, PHP", pct: "82%" },
	{ title: "Data", items: "Supabase, Firebase, MySQL, SQL", pct: "70%" },
	{ title: "Also", items: "Angular, Node.js / Express, Go", pct: "55%" },
];

export const achievements = [
	{ mark: "01", title: "100+ sites shipped", note: "WordPress, in production" },
	{ mark: "02", title: "Custom widgets", note: "Beyond off-the-shelf plugins" },
	{ mark: "03", title: "Two PWAs", note: "Offline-capable, installable" },
	{ mark: "04", title: "Thriv3 program", note: "msg global, 2023" },
];

export const timeline = [
	{
		when: "Apr 2024 — now",
		role: "Web Developer · Santos Digital",
		what: "Built and maintained 100+ WordPress sites — custom development, integrations and ongoing maintenance across a varied client base. Wrote JavaScript widgets and Elementor components that go past what the standard plugins do: interactive pricing tables, before/after image sliders, dynamic loop grids.",
	},
	{
		when: "Oct — Nov 2023",
		role: "Frontend Developer Intern · msg global solutions SEE",
		what: "Thriv3 program — three weeks across functional and technical consulting, frontend and backend development, and agile methodologies (Scrum, Waterfall). Rebuilt a website with a partner and integrated an API for live data.",
	},
	{
		when: "In progress",
		role: "Bachelor of Engineering",
		what: "Faculty of Mechanical Engineering, University of Belgrade.",
	},
];

export const aboutLede =
	"I'm Mihajlo — a web developer who treats the browser as a craft surface, not just a delivery target.";

export const aboutBody = [
	"Day to day I build and maintain WordPress sites at Santos Digital — over a hundred of them so far — which mostly means writing the custom pieces that off-the-shelf plugins don't cover: pricing tables, image sliders, dynamic loop grids. The work has made me quick at turning a client requirement into something reusable.",
	"Outside that, I build in React and TypeScript. Both of my own projects are installable PWAs backed by Supabase, because I like the problems that show up when an app has to keep working away from a good connection. My favourite details are the ones nobody notices — the empty state that explains itself, the form that doesn't lose your input.",
];

/** Serbian (native), English (fluent). */
export const languages = "Serbian — native · English — fluent";
