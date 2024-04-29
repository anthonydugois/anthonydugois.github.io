import * as React from "react";

export function Talk({
	what,
	where,
	when,
	title,
	link,
}: {
	what: string;
	where: string;
	when: string;
	title: string;
	link: string;
}) {
	return (
		<li className="my-2">
			<strong>{what}</strong>, {where} ({when}): “{title}” (
			<a href={`/slides/${link}`} className="text-blue-600 hover:text-blue-700">slides</a>)
		</li>
	);
}

export function Talks({ children }: { children: React.ReactChildren }) {
	return <ul className="mt-6 list-disc list-inside text-lg text-justify">{children}</ul>;
}
