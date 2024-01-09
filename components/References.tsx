import * as React from "react";

import Reference from "./Reference";

import references from "../references.json";

export function ReferenceType({ type }: { type: string }) {
	let label = null;
	let style = null;

	switch (type) {
		case "thesis":
			label = "Thesis";
			style = "bg-yellow-600";
			break;
		case "journal":
			label = "Journal";
			style = "bg-rose-600";
			break;
		case "conference":
			label = "Conference";
			style = "bg-sky-600";
			break;
		case "report":
			label = "Report";
			style = "bg-slate-600";
			break;
	}

	if (label) {
		return (
			<div className="font-bold text-sm text-zinc-900 flex items-center">
				<div className="flex-1 text-right">
					{label}
				</div>
				<div className={`ml-2 w-2 h-2 rounded-full ${style}`}></div>
			</div>
		);
	}

	return null;
}

export default function References() {
	return (
		<ul>
			{references.entries.map(
				(entry, index) =>
					!entry.private && (
						<li key={index} className="ref flex items-center my-2 py-4 px-6 rounded-lg">
							<div className="w-24 hidden md:block">
								<ReferenceType type={entry.type} />
							</div>
							<div className="flex-1 md:pl-6 text-justify text-sm leading-relaxed text-zinc-700">
								<Reference
									title={entry.title}
									authors={entry.authors}
									year={entry.year}
									book={entry.book}
									pages={entry.pages}
									pdf={entry.pdf}
									doi={entry.doi}
									status={entry.status}
								/>
							</div>
						</li>
					)
			)}
		</ul>
	);
}
