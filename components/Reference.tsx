import * as React from "react";

export function Status({ status }: { status: string | null }) {
	let label = null;

	switch (status) {
		case "new":
			label = "New";
			break;
		case "review":
			label = "Under review";
			break;
	}

	if (label) {
		return (
			<span className="mr-4 bg-amber-50 font-medium text-amber-900 text-xs uppercase">
				{label}
			</span>
		);
	}

	return null;
}

export function Book({ book, pages }: { book: string | null; pages: string | null }) {
	return (
		<>
			In {book}
			{pages != null && <> (pp. {pages})</>}
		</>
	);
}

export function File({ file }: { file: string | null }) {
	return (
		<a href={`/papers/${file}`} className="text-blue-500 hover:text-blue-600">
			PDF file
		</a>
	);
}

export default function Reference({
	title,
	authors,
	year,
	book,
	pages,
	file,
	status,
}: {
	title: string;
	authors: string;
	year: number;
	book: string | null;
	pages: string | null;
	file: string | null;
	status: string | null;
}) {
	return (
		<>
			{status != null && <Status status={status} />}
			{authors} ({year}). {title}.
			{book != null && (
				<>
					{" "}
					<Book book={book} pages={status != "published" ? null : pages} />.
				</>
			)}
			{status === "published" && file != null && (
				<>
					{" "}
					<File file={file} />.
				</>
			)}
		</>
	);
}
