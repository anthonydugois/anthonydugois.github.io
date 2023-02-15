import * as React from "react";

interface BibItemStatusProps {
	status: string | null;
}

function BibItemStatus({ status }: BibItemStatusProps) {
	switch (status) {
		case "new":
			return (
				<span className="mr-2 font-semibold text-rose-500 uppercase">
					New
				</span>
			);

		case "review":
			return (
				<span className="mr-2 font-semibold text-rose-500 uppercase">
					Under review
				</span>
			);

		default:
			return null;
	}
}

interface BibItemBookProps {
	book: string | null;
	pages: string | null;
}

function BibItemBook({ book, pages }: BibItemBookProps) {
	return (
		<>
			In {book}{pages != null && (<>{" "}(pp. {pages})</>)}
		</>
	);
}

interface BibItemFileProps {
	file: string | null;
}

function BibItemFile({ file }: BibItemFileProps) {
	return (
		<a href={`/papers/${file}`} className="text-indigo-600 hover:text-indigo-800 focus:text-indigo-800">PDF</a>
	);
}

interface BibItemProps {
	title: string;
	authors: string;
	year: number;
	book: string | null;
	pages: string | null;
	file: string | null;
	status: string | null;
}

export default function BibItem({ title, authors, year, book, pages, file, status }: BibItemProps) {
	return (
		<>
			{status != null && <BibItemStatus status={status} />}
			{authors} ({year}). {title}.
			{book != null && (<>{" "}<BibItemBook book={book} pages={status != "published" ? null : pages} />.</>)}
			{status === "published" && file != null && (<>{" "}<BibItemFile file={file} />.</>)}
		</>
	);
}
