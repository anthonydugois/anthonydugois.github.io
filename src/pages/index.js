import * as React from "react";
import { graphql } from "gatsby";

import Seo from "../components/Seo";
import Layout from "../components/Layout";
import PostList from "../components/PostList";

export default function IndexPage(props) {
	let posts = props.data.allMdx.edges.map(edge => ({
		id: edge.node.id,
		path: edge.node.frontmatter.path,
		date: edge.node.frontmatter.date,
		title: edge.node.frontmatter.title
	}));

	return (
		<>
			<Seo />
			<Layout>
				<PostList posts={posts} />
			</Layout>
		</>
	);
}

export const pageQuery = graphql`
	query {
		allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
			edges {
				node {
					id
					frontmatter {
						path
						date(formatString: "MMMM DD, YYYY")
						title
					}
				}
			}
		}
	}
`;
