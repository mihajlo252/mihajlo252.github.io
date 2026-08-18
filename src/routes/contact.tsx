import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { site } from "#/data/site";

export const Route = createFileRoute("/contact")({ component: ContactPage });

const LINKS = [
	{ k: "Email", v: site.email, href: `mailto:${site.email}` },
	{ k: "Phone", v: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
	{ k: "GitHub", v: site.githubHandle, href: site.github },
	{ k: "LinkedIn", v: site.linkedinHandle, href: site.linkedin },
	{ k: "Location", v: site.location, href: null },
];

function ContactPage() {
	const [sent, setSent] = useState(false);

	/**
	 * There is no backend here, so rather than fake a submission the form hands
	 * the message to the visitor's mail client with everything filled in.
	 */
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const name = String(data.get("name") ?? "");
		const email = String(data.get("email") ?? "");
		const message = String(data.get("message") ?? "");

		const subject = encodeURIComponent(name ? `Portfolio enquiry from ${name}` : "Portfolio enquiry");
		const body = encodeURIComponent(`${message}\n\n—\n${name}\n${email}`);
		window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
		setSent(true);
	};

	return (
		<div className="page fade-in">
			<div className="contact-grid">
				<div>
					<h1 className="page-title fade-up">Say hi</h1>
					<p className="page-lead">Roles, freelance, or just a good argument about CSS — I answer everything within a day or two.</p>
					{LINKS.map((link) =>
						link.href ? (
							<a
								key={link.k}
								href={link.href}
								className="link-row"
								target={link.href.startsWith("mailto:") ? undefined : "_blank"}
								rel="noreferrer"
							>
								<span>{link.k}</span>
								<span className="link-row-value">{link.v}</span>
							</a>
						) : (
							<div key={link.k} className="link-row">
								<span>{link.k}</span>
								<span className="link-row-value">{link.v}</span>
							</div>
						),
					)}
				</div>

				<form className="form-panel" onSubmit={handleSubmit}>
					<div className="form-grid">
						<label className="field">
							<span className="field-label">Name</span>
							<input name="name" className="input" placeholder="Ada Lovelace" autoComplete="name" required />
						</label>
						<label className="field">
							<span className="field-label">Email</span>
							<input name="email" type="email" className="input" placeholder="you@company.com" autoComplete="email" required />
						</label>
						<label className="field">
							<span className="field-label">What's on your mind?</span>
							<textarea name="message" rows={6} className="textarea" placeholder="A short brief, a role, a question…" required />
						</label>
						<button type="submit" className="submit">
							{sent ? "Opened in your mail app" : "Send it →"}
						</button>
						<p className="form-note">This opens your email client with the message ready to send.</p>
					</div>
				</form>
			</div>
		</div>
	);
}
