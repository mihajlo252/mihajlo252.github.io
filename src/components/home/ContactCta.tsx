import { Link } from "@tanstack/react-router";

export function ContactCta() {

	return (
		<section className="section">
			<div className="cta-panel">
				<div>
					<div className="cta-title">Got something to build?</div>
					<div className="cta-sub">Open to frontend roles and select freelance work.</div>
				</div>
				<Link to="/contact" className="btn btn-primary">
					Start a conversation <span aria-hidden="true">→</span>
				</Link>
			</div>
		</section>
	);
}
