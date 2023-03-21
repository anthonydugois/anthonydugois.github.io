import * as React from "react";

import ContactContent from "../content/contact.mdx";
import LinksContent from "../content/links.mdx";

export function HeaderTitle({ children }: { children: React.ReactChildren }) {
	return <h1 className="font-semibold text-2xl">{children}</h1>;
}

export function HeaderSubtitle({ children }: { children: React.ReactChildren }) {
	return <div className="mt-1 text-base">{children}</div>;
}

export function Hint({ children }: { children: React.ReactChildren }) {
	return (
		<div className="px-4 py-2 rounded-md bg-gradient-to-r from-blue-100 to-zinc-50 text-blue-900 text-sm font-medium">
			{children}
		</div>
	);
}

export function Header({
	title,
	subtitle,
	hint,
}: {
	title: React.ReactChildren;
	subtitle: React.ReactChildren;
	hint: React.ReactChildren;
}) {
	return (
		<>
			<HeaderTitle>{title}</HeaderTitle>
			<HeaderSubtitle>{subtitle}</HeaderSubtitle>
			<div className="mt-4 pt-4 text-sm border-t border-zinc-200">
				<LinksContent
					components={{
						a: ({ children, href }) => (
							<a href={href} className="text-blue-500 hover:text-blue-600">
								{children}
							</a>
						),
					}}
				/>
			</div>
			<div className="mt-2 text-sm italic">
				<ContactContent
					components={{
						a: ({ children, href }) => (
							<a href={href} className="text-blue-500 hover:text-blue-600">
								{children}
							</a>
						),
					}}
				/>
			</div>
			<div className="mt-4">
				<Hint>{hint}</Hint>
			</div>
		</>
	);
}
