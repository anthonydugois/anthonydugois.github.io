import * as React from "react";

export default function Container({ children }: { children: React.ReactChild }) {
	return <div className="max-w-4xl lg:px-20">{children}</div>;
}
