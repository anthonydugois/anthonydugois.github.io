import React from "react";
import styled from "styled-components";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import "katex/dist/katex.min.css";

const Container = styled.div`
	font-size: ${props => props.theme.fontSizes.normal};
`;

const Header = styled.header``;

const Title = styled.h1`
	margin: 0;
	padding: 0;
	line-height: 1.2;
	font-weight: ${props => props.theme.fontWeights.bold};
	font-size: ${props => props.theme.fontSizes.xlarge};
	color: ${props => props.theme.colors.black[0]};
`;

const Date = styled.time`
	display: block;
	padding: ${props => props.theme.space.small} 0;
	font-weight: ${props => props.theme.fontWeights.regular};
	font-size: ${props => props.theme.fontSizes.small};
	color: ${props => props.theme.colors.black[1]};
`;

const Description = styled.p`
	margin: 0;
	padding: ${props => props.theme.space.small} 0;
	line-height: 1.6;
	font-weight: ${props => props.theme.fontWeights.regular};
	font-size: ${props => props.theme.fontSizes.normal};
	color: ${props => props.theme.colors.black[0]};
`;

const Content = styled.section`
	margin-top: ${props => props.theme.space.small};

	.katex-display {
		margin: 0;
		padding: ${props => props.theme.space.medium} 0;
		font-size: ${props => props.theme.fontSizes.normal};
	}

	code[class*="language-"],
	pre[class*="language-"] {
		margin: 0;
		padding: 0;
		tab-size: 4;
		font-family: ${props => props.theme.fonts.mono};
		font-weight: ${props => props.theme.fontWeights.regular};
	}

	pre[class*="language-"] {
		overflow: auto;
		margin: ${props => props.theme.space.medium} 0;
		padding: ${props => props.theme.space.large};
		background: #011627;
		line-height: 1.75;
		font-size: ${props => props.theme.fontSizes.small};
		color: ${props => props.theme.colors.white[0]};
	}

	p > code[class*="language-"] {
		font-size: ${props => props.theme.fontSizes.small};
		color: ${props => props.theme.colors.black[0]};
	}

	.token.comment,
	.token.prolog,
	.token.cdata {
		color: rgb(99, 119, 119);
		font-style: italic;
	}

	.token.punctuation {
		color: rgb(199, 146, 234);
	}

	.namespace {
		color: rgb(178, 204, 214);
	}

	.token.deleted {
		color: rgba(239, 83, 80, 0.56);
		font-style: italic;
	}

	.token.symbol,
	.token.property {
		color: rgb(128, 203, 196);
	}

	.token.tag,
	.token.operator,
	.token.keyword {
		color: rgb(127, 219, 202);
	}

	.token.boolean {
		color: rgb(255, 88, 116);
	}

	.token.number {
		color: rgb(247, 140, 108);
	}

	.token.constant,
	.token.function,
	.token.builtin,
	.token.char {
		color: rgb(130, 170, 255);
	}

	.token.selector,
	.token.doctype {
		color: rgb(199, 146, 234);
		font-style: italic;
	}

	.token.attr-name,
	.token.inserted {
		color: rgb(173, 219, 103);
		font-style: italic;
	}

	.token.string,
	.token.url,
	.token.entity,
	.language-css .token.string,
	.style .token.string {
		color: rgb(173, 219, 103);
	}

	.token.class-name,
	.token.atrule,
	.token.attr-value {
		color: rgb(255, 203, 139);
	}

	.token.regex,
	.token.important,
	.token.variable {
		color: rgb(214, 222, 235);
	}

	.token.important,
	.token.bold {
		font-weight: bold;
	}

	.token.italic {
		font-style: italic;
	}
`;

const MdH1 = styled.h1`
	margin: 0;
	padding: ${props => props.theme.space.large} 0
		${props => props.theme.space.medium};
	line-height: 1.2;
	font-weight: ${props => props.theme.fontWeights.bold};
	font-size: ${props => props.theme.fontSizes.xlarge};
	color: ${props => props.theme.colors.black[0]};
`;

const MdH2 = styled.h2`
	margin: 0;
	padding: ${props => props.theme.space.large} 0
		${props => props.theme.space.medium};
	line-height: 1.2;
	font-weight: ${props => props.theme.fontWeights.regular};
	font-size: ${props => props.theme.fontSizes.large};
	color: ${props => props.theme.colors.black[0]};
`;

const MdH3 = styled.h3`
	margin: 0;
	padding: ${props => props.theme.space.large} 0
		${props => props.theme.space.medium};
	line-height: 1.2;
	font-weight: ${props => props.theme.fontWeights.regular};
	font-size: ${props => props.theme.fontSizes.medium};
	color: ${props => props.theme.colors.black[1]};
`;

const MdH4 = styled.h4`
	margin: 0;
	padding: ${props => props.theme.space.medium} 0
		${props => props.theme.space.small};
	line-height: 1.2;
	font-weight: ${props => props.theme.fontWeights.bold};
	font-size: ${props => props.theme.fontSizes.normal};
	color: ${props => props.theme.colors.black[0]};
`;

const MdH5 = styled.h5`
	margin: 0;
	padding: ${props => props.theme.space.medium} 0
		${props => props.theme.space.small};
	line-height: 1.2;
	font-weight: ${props => props.theme.fontWeights.regular};
	font-size: ${props => props.theme.fontSizes.normal};
	color: ${props => props.theme.colors.black[0]};
`;

const MdH6 = styled.h6`
	margin: 0;
	padding: ${props => props.theme.space.medium} 0
		${props => props.theme.space.small};
	line-height: 1.2;
	font-weight: ${props => props.theme.fontWeights.regular};
	font-size: ${props => props.theme.fontSizes.normal};
	color: ${props => props.theme.colors.black[1]};
`;

const MdParagraph = styled.p`
	margin: 0;
	padding: ${props => props.theme.space.small} 0;
	line-height: 1.6;
	font-weight: ${props => props.theme.fontWeights.regular};
	font-size: ${props => props.theme.fontSizes.normal};
	color: ${props => props.theme.colors.black[0]};
`;

const MdStrong = styled.strong`
	font-weight: ${props => props.theme.fontWeights.bold};
`;

const MdEmph = styled.em`
	font-style: italic;
`;

const MdLink = styled.a`
	text-decoration: underline;
	color: ${props => props.theme.colors.black[0]};
	transition: color 0.1s;

	&:focus,
	&:hover {
		text-decoration: none;
		color: ${props => props.theme.colors.black[1]};
	}
`;

const MdUnordered = styled.ul`
	margin: 0;
	padding: ${props => props.theme.space.small}
		${props => props.theme.space.large};
`;

const MdOrdered = styled.ol`
	margin: 0;
	padding: ${props => props.theme.space.small}
		${props => props.theme.space.large};
`;

const MdItem = styled.li`
	line-height: 1.6;
	font-weight: ${props => props.theme.fontWeights.regular};
	font-size: ${props => props.theme.fontSizes.normal};
	color: ${props => props.theme.colors.black[0]};

	& + & {
		margin-top: ${props => props.theme.space.small};
	}
`;

const MdBlockquote = styled.blockquote`
	margin: 0;
	padding: ${props => props.theme.space.small} 0;

	p {
		margin: 0;
		padding: 0;
		font-size: ${props => props.theme.fontSizes.normal};
		color: ${props => props.theme.colors.black[0]};

		&::before {
			content: "« ";
		}

		&::after {
			content: " »";
		}

		&::before,
		&::after {
			font-size: ${props => props.theme.fontSizes.normal};
		}
	}
`;

const MdHr = styled.hr`
	margin: ${props => props.theme.space.large} 0;
	border: none;
	height: 1px;
	background: ${props => props.theme.colors.black[2]};
`;

const MdTable = styled.table`
	max-width: 100%;
	margin: ${props => props.theme.space.small} auto;
	border-collapse: collapse;
`;

const MdTableRow = styled.tr``;

const MdTableHead = styled.th`
	padding: ${props => props.theme.space.small};
	border-top: 2px solid;
	border-color: ${props => props.theme.colors.black[1]};
	font-weight: ${props => props.theme.fontWeights.bold};
	font-size: ${props => props.theme.fontSizes.normal};
`;

const MdTableCell = styled.td`
	padding: ${props => props.theme.space.small}
		${props => props.theme.space.medium};
	border-top: 1px solid;
	border-bottom: 1px solid;
	border-color: ${props => props.theme.colors.black[1]};
	font-weight: ${props => props.theme.fontWeights.regular};
	font-size: ${props => props.theme.fontSizes.normal};
`;

const MdImage = styled.img`
	display: block;
	max-width: 100%;
	margin: ${props => props.theme.space.small} auto;
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
	blockquote: MdBlockquote,
	table: MdTable,
	tr: MdTableRow,
	th: MdTableHead,
	td: MdTableCell,
	hr: MdHr,
	img: MdImage
};

export default function Post(props) {
	return (
		<Container>
			<Header>
				<Title>{props.title}</Title>
				<Date>{props.date}</Date>
			</Header>
			<Content>
				<Description>{props.description}</Description>
				<MDXProvider components={components}>
					<MDXRenderer>{props.children}</MDXRenderer>
				</MDXProvider>
			</Content>
		</Container>
	);
}
