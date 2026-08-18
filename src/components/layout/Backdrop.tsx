/** The two fixed glow layers that sit behind every page. */
export function Backdrop() {
	return (
		<>
			<div className="backdrop" aria-hidden="true" />
			<div className="backdrop-drift" aria-hidden="true" />
		</>
	);
}
