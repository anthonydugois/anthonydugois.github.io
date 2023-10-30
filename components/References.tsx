import * as React from "react";

import Reference from "./Reference";

import references from "../references.json";

export function ReferenceType({ type }: { type: string }) {
	let label = null;

	switch (type) {
		case "thesis":
			label = "Thesis";
			break;
		case "journal":
			label = "Journal";
			break;
		case "conference":
			label = "Conference";
			break;
		case "report":
			label = "Report";
			break;
	}

	if (label) {
		return <div className="font-bold text-right text-sm text-zinc-900">{label}</div>;
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
							<div className="w-20 hidden md:block">
								<ReferenceType type={entry.type} />
							</div>
							<div className="flex-1 md:pl-6 text-justify text-sm leading-relaxed text-zinc-700">
								<Reference
									title={entry.title}
									authors={entry.authors}
									year={entry.year}
									book={entry.book}
									pages={entry.pages}
									file={entry.file}
									status={entry.status}
								/>
							</div>
						</li>
					)
			)}
		</ul>
	);
}
