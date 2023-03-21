import * as React from "react";

export default function Container({ children }: { children: React.ReactChild }) {
	return <div className="max-w-3xl lg:px-10">{children}</div>;
}
