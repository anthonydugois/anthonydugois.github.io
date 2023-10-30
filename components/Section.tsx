import * as React from "react";

export function Section({
	children,
	className,
}: {
	children: React.ReactChildren;
	className?: string;
}) {
	return <section className={`${className ?? ""}`}>{children}</section>;
}

export function SectionTitle2({
	children,
	className,
}: {
	children: React.ReactChildren;
	className?: string;
}) {
	return <h2 className={`text-2xl font-bold ${className ?? ""}`}>{children}</h2>;
}

export function SectionTitle3({
	children,
	className,
}: {
	children: React.ReactChildren;
	className?: string;
}) {
	return <h3 className={`text-xl font-medium ${className ?? ""}`}>{children}</h3>;
}

export function SectionContent({
	children,
	className,
}: {
	children: React.ReactChildren;
	className?: string;
}) {
	return (
		<div className={`text-justify text-xl leading-relaxed font-normal text-zinc-800 ${className ?? ""}`}>
			<div className="section-content">{children}</div>
		</div>
	);
}
