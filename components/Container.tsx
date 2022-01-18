import * as React from "react";

interface ContainerProps {
	children: React.ReactChild;
}

export default function Container({ children }: ContainerProps) {
	return (
		<div className="max-w-3xl mx-auto px-8">
			{children}
		</div>
	);
}
