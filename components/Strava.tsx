import * as React from "react";

export default function Strava({ label }: { label: React.ReactChildren }) {
	let [status, setStatus] = React.useState("hidden");

	function onClick(evt: React.MouseEvent) {
		evt.preventDefault();
		setStatus("visible");
	}

	return (
		<>
			{status === "visible" ? (
				<iframe
					height="454"
					width="300"
					src="https://www.strava.com/athletes/62497800/latest-rides/0c064b6c14cc39810d262d447dabda4b92139a3b"
				/>
			) : (
				<button
					onClick={onClick}
					className="px-4 py-2 bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 text-zinc-50 text-sm font-medium rounded-md"
				>
					{label}
				</button>
			)}
		</>
	);
}
