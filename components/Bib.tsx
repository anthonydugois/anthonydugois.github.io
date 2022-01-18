import * as React from "react";
import BibItem from "./BibItem";
import Badge from "./Badge";
import bib from "../bib.json";

interface BadgeTypeProps {
	type: string;
}

function BadgeType({ type }: BadgeTypeProps) {
	switch (type) {
		case "thesis":
			return (
				<Badge className="from-slate-700 to-slate-900 text-slate-50">
					PhD Thesis
				</Badge>
			);

		case "journal":
			return (
				<Badge className="from-pink-300 to-violet-400 text-black">
					Journal
				</Badge>
			);

		case "conference":
			return (
				<Badge className="from-emerald-300 to-sky-400 text-black">
					Conference
				</Badge>
			);

		case "report":
			return (
				<Badge className="from-amber-300 to-orange-500 text-black">
					Report
				</Badge>
			);

		default:
			return null;
	}
}

export default function Bib() {
	return (
		<ul>
			{bib.bib.map((entry, index) => (
				<li
					key={index}
					className="flex items-start py-3 border-b border-slate-200"
				>
					<div className="flex-1 pr-4 text-sm text-justify">
						{entry.new && (
							<span className="mr-2 font-semibold text-rose-500">
								NEW
							</span>
						)}
						<BibItem
							title={entry.title}
							authors={entry.authors}
							year={entry.year}
							book={entry.book}
							pages={entry.pages}
							file={entry.file}
						/>
					</div>
					<div className="w-24">
						<BadgeType type={entry.type} />
					</div>
				</li>
			))}
		</ul>
	);
}
