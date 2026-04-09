import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";

import "../styles.css";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	return (
		<>
			{/* Nav */}
			<nav className="nav">
				<ul className="nav-links">
					<li>
						<Link to="/" activeProps={{ className: "active" }}>
							About
						</Link>
					</li>
					<li>
						<Link to="/projects" activeProps={{ className: "active" }}>
							Projects
						</Link>
					</li>
					<li>
						<Link to="/contact" activeProps={{ className: "active" }}>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
			{/* Footer */}
			<footer className="footer">
				<span className="footer-text">© {new Date().getFullYear()} Your Name</span>
				<div className="socials">
					<a href="https://github.com" target="_blank" rel="noreferrer">
						GitHub
					</a>
					<a href="https://linkedin.com" target="_blank" rel="noreferrer">
						LinkedIn
					</a>
					<a href="https://twitter.com" target="_blank" rel="noreferrer">
						Twitter
					</a>
				</div>
			</footer>
			<TanStackDevtools
				config={{
					position: "bottom-right",
				}}
				plugins={[
					{
						name: "TanStack Router",
						render: <TanStackRouterDevtoolsPanel />,
					},
				]}
			/>
		</>
	);
}
