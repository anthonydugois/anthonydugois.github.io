import * as React from "react";
import { graphql } from "gatsby";

import Seo from "../components/Seo";
import Layout from "../components/Layout";
import Post from "../components/Post";

export default function PostTemplate(props) {
	return (
		<>
			<Seo
				lang={props.data.mdx.frontmatter.lang}
				title={props.data.mdx.frontmatter.title}
				description={props.data.mdx.frontmatter.description}
			/>
			<Layout>
				<Post
					title={props.data.mdx.frontmatter.title}
					date={props.data.mdx.frontmatter.date}
					description={props.data.mdx.frontmatter.description}
				>
					{props.data.mdx.body}
				</Post>
			</Layout>
		</>
	);
}

export const pageQuery = graphql`
	query($path: String!) {
		mdx(frontmatter: { path: { eq: $path } }) {
			body
			frontmatter {
				path
				date(formatString: "MMMM DD, YYYY")
				lang
				title
				description
			}
		}
	}
`;
