import { createFileRoute, redirect } from "@tanstack/react-router";

/** The old URL for this page. Kept so existing links keep working. */
export const Route = createFileRoute("/projects")({
	beforeLoad: () => {
		throw redirect({ to: "/work", replace: true });
	},
});
