import { Link } from "@tanstack/react-router";
import { useMagnet } from "#/lib/useMagnet";

export function ContactCta() {
	const magnet = useMagnet();

	return (
		<section className="section">
			<div className="cta-panel">
				<div>
					<div className="cta-title">Got something to build?</div>
					<div className="cta-sub">Open to frontend roles and select freelance work.</div>
				</div>
				<Link to="/contact" className="btn btn-primary" ref={magnet}>
					Start a conversation <span aria-hidden="true">→</span>
				</Link>
			</div>
		</section>
	);
}
