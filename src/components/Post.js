import React from "react";
import styled from "styled-components";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import "katex/dist/katex.min.css";

let Container = styled.div`
	font-size: 1rem;

	@media screen and (min-width: ${p => p.theme.width}) {
		font-size: 1.1rem;
	}
`;

let Head = styled.header``;

let Title = styled.h1`
	margin: 0;
	padding: 0;
	line-height: 1.2;
	font-family: "Exo 2", sans-serif;
	font-weight: 700;
	font-size: 1.9em;
	color: ${p => p.theme.colors.black};
`;

let Date = styled.time`
	display: block;
	padding: 1em 0 2em;
	font-family: "Heebo", sans-serif;
	font-weight: 400;
	font-size: 0.9em;
	color: ${p => p.theme.colors.gray};
`;

let Description = styled.p`
	margin: 0 0 1em;
	padding: 0;
	line-height: 1.5em;
	font-family: "Heebo", sans-serif;
	font-weight: 400;
	font-size: 1em;
	color: ${p => p.theme.colors.black};
`;

let Content = styled.section`
	.katex-display {
		margin: 2em 0;
		padding: 0;
		font-size: 1.1em;
	}

	code[class*="language-"],
	pre[class*="language-"] {
		padding: 0;
		margin: 0;
		tab-size: 4;
		font-family: "Monoid", monospace;
		font-weight: 400;
	}

	pre[class*="language-"] {
		overflow: auto;
		padding: 1em;
		background: ${p => p.theme.colors.black};
		line-height: 1.8;
		font-size: 0.75em;
		color: ${p => p.theme.colors.white};
	}

	p > code[class*="language-"] {
		padding: 0.1em 0.15em;
		font-size: 0.75em;
		color: ${p => p.theme.colors.black};
	}

	.token.comment,
	.token.prolog,
	.token.doctype,
	.token.cdata {
		color: slategray;
	}

	.token.punctuation {
		color: #999;
	}

	.namespace {
		opacity: 0.7;
	}

	.token.property,
	.token.tag,
	.token.boolean,
	.token.number,
	.token.constant,
	.token.symbol,
	.token.deleted {
		color: #905;
	}

	.token.selector,
	.token.attr-name,
	.token.string,
	.token.char,
	.token.builtin,
	.token.inserted {
		color: #690;
	}

	.token.operator,
	.token.entity,
	.token.url,
	.language-css .token.string,
	.style .token.string {
		color: #a67f59;
		background: hsla(0, 0%, 100%, 0.5);
	}

	.token.atrule,
	.token.attr-value,
	.token.keyword {
		font-weight: bold;
		color: ${p => p.theme.colors.white};
	}

	.token.function {
		color: #dd4a68;
	}

	.token.regex,
	.token.important,
	.token.variable {
		color: #e90;
	}

	.token.important,
	.token.bold {
		font-weight: bold;
	}
	.token.italic {
		font-style: italic;
	}

	.token.entity {
		cursor: help;
	}
`;

let MdH1 = styled.h1`
	margin: 0;
	padding: 0;
	line-height: 1.2;
	font-family: "Exo 2", sans-serif;
	font-weight: 700;
	font-size: 1.7em;
	color: ${p => p.theme.colors.black};
`;

let MdH2 = styled.h2`
	margin: 1.5em 0 1em;
	padding: 0;
	line-height: 1.2;
	font-family: "Exo 2", sans-serif;
	font-weight: 700;
	font-size: 1.7em;
	color: ${p => p.theme.colors.black};
`;

let MdH3 = styled.h3`
	margin: 1.5em 0 1em;
	padding: 0;
	line-height: 1.2;
	font-family: "Exo 2", sans-serif;
	font-weight: 400;
	font-size: 1.5em;
	color: ${p => p.theme.colors.black};
`;

let MdH4 = styled.h4`
	margin: 1.5em 0 1em;
	padding: 0;
	line-height: 1.2;
	font-family: "Exo 2", sans-serif;
	font-weight: 700;
	font-size: 1.2em;
	color: ${p => p.theme.colors.black};
`;

let MdH5 = styled.h5`
	margin: 1.5em 0 1em;
	padding: 0;
	line-height: 1.2;
	font-family: "Exo 2", sans-serif;
	font-weight: 700;
	font-size: 1em;
	color: ${p => p.theme.colors.gray};
`;

let MdH6 = styled.h6`
	margin: 1.5em 0 1em;
	padding: 0;
	line-height: 1.2;
	font-family: "Exo 2", sans-serif;
	font-weight: 400;
	font-size: 0.9em;
	color: ${p => p.theme.colors.gray};
`;

let MdParagraph = styled.p`
	margin: 1em 0;
	padding: 0;
	line-height: 1.5em;
	font-family: "Heebo", sans-serif;
	font-weight: 400;
	font-size: 1em;
	color: ${p => p.theme.colors.black};
`;

let MdStrong = styled.strong`
	font-weight: 500;
`;

let MdEmph = styled.em`
	font-style: italic;
`;

let MdLink = styled.a`
	text-decoration: underline;
	color: ${p => p.theme.colors.gray};
	transition: color 0.1s;

	&:focus,
	&:hover {
		color: ${p => p.theme.colors.black};
	}
`;

let MdUnordered = styled.ul`
	margin: 0;
	padding: 0 2.5em;
`;

let MdOrdered = styled.ol`
	margin: 0;
	padding: 0 2.5em;
`;

let MdItem = styled.li`
	line-height: 1.4;
	font-family: "Heebo", sans-serif;
	font-weight: 400;
	font-size: 1em;
	color: ${p => p.theme.colors.black};

	& + & {
		margin: 0.25em 0 0;
	}
`;

let MdBlockquote = styled.blockquote`
	margin: 1em 0;
	padding: 0;

	p {
		margin: 0;
		font-size: 1.1em;
		color: ${p => p.theme.colors.gray};

		&::before {
			content: "« ";
		}

		&::after {
			content: " »";
		}

		&::before,
		&::after {
			font-size: 1.1em;
		}
	}
`;

let components = {
	h1: MdH1,
	h2: MdH2,
	h3: MdH3,
	h4: MdH4,
	h5: MdH5,
	h6: MdH6,
	p: MdParagraph,
	strong: MdStrong,
	em: MdEmph,
	a: MdLink,
	ul: MdUnordered,
	ol: MdOrdered,
	li: MdItem,
	blockquote: MdBlockquote
};

export default function Post(props) {
	return (
		<Container>
			<Head>
				<Title>{props.title}</Title>
				<Date>{props.date}</Date>
			</Head>
			<Content>
				<Description>{props.description}</Description>
				<MDXProvider components={components}>
					<MDXRenderer>{props.children}</MDXRenderer>
				</MDXProvider>
			</Content>
		</Container>
	);
}
