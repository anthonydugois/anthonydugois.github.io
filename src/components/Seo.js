import React from "react";
import Helmet from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

export default function Seo(props) {
	let data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					description
					author
				}
			}
		}
	`);

	let description = props.description
		? props.description
		: data.site.siteMetadata.description;

	return (
		<Helmet
			titleTemplate={`%s | ${data.site.siteMetadata.title}`}
			defaultTitle={data.site.siteMetadata.title}
		>
			<html lang={props.lang} />

			<title>{props.title}</title>

			<meta name="description" content={description} />

			<meta name="og:title" content={props.title} />
			<meta name="og:description" content={description} />
			<meta name="og:type" content="website" />

			<meta name="twitter:card" content="summary" />
			<meta
				name="twitter:creator"
				content={data.site.siteMetadata.author}
			/>
			<meta name="twitter:title" content={props.title} />
			<meta name="twitter:description" content={description} />

			{props.children}
		</Helmet>
	);
}

Seo.defaultProps = {
	lang: "en",
	meta: [],
	title: "",
	description: ""
};
