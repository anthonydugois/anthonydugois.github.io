import * as React from "react";

export function Status({ status }: { status: string | null }) {
	let label = null;
	let colors = "bg-amber-50 text-amber-900";

	switch (status) {
		case "new":
			label = "New";
			colors = "bg-emerald-50 text-emerald-900";
			break;
		case "review":
			label = "Under review";
			colors = "bg-amber-50 text-amber-900";
			break;
	}

	if (label) {
		return (
			<span className={`mr-2 font-medium text-xs uppercase ${colors}`}>
				{label}
			</span>
		);
	}

	return null;
}

export function Book({ book, pages }: { book: string; pages: string | null }) {
	return (
		<>
			In {book}
			{pages != null && <> (pp. {pages})</>}
		</>
	);
}

export function PDFLink({ pdf }: { pdf: string }) {
	return (
		<a href={`/papers/${pdf}`} className="text-blue-600 hover:text-blue-700">
			PDF
		</a>
	);
}

export function DOILink({ doi }: { doi: string }) {
	return (
		<a href={doi} className="text-blue-600 hover:text-blue-700">
			DOI
		</a>
	);
}

export default function Reference({
	title,
	authors,
	year,
	book,
	pages,
	pdf,
	doi,
	status,
}: {
	title: string;
	authors: string;
	year: number;
	book: string | null;
	pages: string | null;
	pdf: string | null;
	doi: string | null;
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
			{(status === "published" || status === "new" || status === "review") &&
				doi != null &&
				doi.length > 0 && (
					<>
						{" "}
						<DOILink doi={doi} />.
					</>
				)}
			{(status === "published" || status === "new" || status === "review") &&
				pdf != null &&
				pdf.length > 0 && (
					<>
						{" "}
						<PDFLink pdf={pdf} />.
					</>
				)}
		</>
	);
}
