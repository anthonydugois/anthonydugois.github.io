import * as React from "react";

interface StravaProps {
	label: React.ReactChildren;
}

export default function Strava(props: StravaProps) {
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
					src="https://www.strava.com/athletes/62497800/latest-rides/0c064b6c14cc39810d262d447dabda4b92139a3b" />
			) : (
				<button onClick={onClick} className="px-4 py-2 bg-indigo-500 text-indigo-50 text-sm font-bold rounded-md">
					{props.label}
				</button>
			)}
		</>
	);
}