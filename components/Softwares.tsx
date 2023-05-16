import * as React from "react";

export function Software({ label, description }: { label: React.ReactElement, description: React.ReactElement }) {
	return (
		<li className="tile border border-zinc-100-50 p-6">
			<div className="font-medium">
				{label}
			</div>
			<div className="mt-1 text-sm text-justify">
				{description}
			</div>
		</li>
	);
}

export function Softwares({ children }: { children: React.ReactChildren }) {
	return (
		<ul className="grid grid-cols-2 gap-4">
			{children}
		</ul>
	);
}
