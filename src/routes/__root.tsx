import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";

import { Backdrop } from "#/components/layout/Backdrop";
import { Footer } from "#/components/layout/Footer";
import { Nav } from "#/components/layout/Nav";
import { PageWipe } from "#/components/layout/PageWipe";
import { useKeyboardNav } from "#/lib/useKeyboardNav";
import { useTheme } from "#/lib/theme";

import "../styles.css";

export const Route = createRootRoute({
	component: RootComponent,
	notFoundComponent: NotFound,
});

function RootComponent() {
	const { theme, toggleTheme } = useTheme();
	useKeyboardNav(toggleTheme);

	return (
		<div className="shell">
			<Backdrop />
			<PageWipe />
			<Nav theme={theme} onToggleTheme={toggleTheme} />
			<main className="main">
				<Outlet />
			</main>
			<Footer />
			{import.meta.env.DEV && (
				<TanStackDevtools
					config={{ position: "bottom-right" }}
					plugins={[{ name: "TanStack Router", render: <TanStackRouterDevtoolsPanel /> }]}
				/>
			)}
		</div>
	);
}

function NotFound() {
	return (
		<div className="page fade-in">
			<h1 className="page-title">404</h1>
			<p className="page-lead">That page doesn't exist. Try the work, or head back home.</p>
		</div>
	);
}
