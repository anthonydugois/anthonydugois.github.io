import * as React from "react";

interface Props {
	title: string;
	authors: string;
	year: number;
	book: string | null;
	pages: string | null;
	file: string | null;
}

export default function BibItem({ title, authors, year, book, pages, file }: Props) {
	return (
		<>
			{authors} ({year}). {title}.
			{book != null && (
				<>
					{" "}
					In {book} (pp. {pages}).
				</>
			)}
			{file != null && (
				<>
					{" "}
					<a href={`/papers/${file}`} className="text-indigo-600 hover:text-indigo-800 focus:text-indigo-800">PDF</a>.
				</>
			)}
		</>
	);
}
