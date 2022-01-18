import * as React from "react";

interface BadgeProps {
	children: React.ReactChild;
	className?: string;
}

export default function Badge({ children, ...rest }: BadgeProps) {
	return (
		<span
			className={`px-2 py-1 rounded bg-gradient-to-r text-xs font-semibold ${rest.className}`}
		>
			{children}
		</span>
	);
}
