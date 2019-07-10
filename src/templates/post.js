import React from "react";
import { graphql } from "gatsby";

import Seo from "../components/Seo";
import Layout from "../components/Layout";
import Post from "../components/Post";

function PostTemplate(props) {
  return (
    <>
      <Seo
        title={props.data.markdownRemark.frontmatter.title}
        description={props.data.markdownRemark.frontmatter.description}
      />
      <Layout>
        <Post
          title={props.data.markdownRemark.frontmatter.title}
          date={props.data.markdownRemark.frontmatter.date}
          description={props.data.markdownRemark.frontmatter.description}
        >
          {props.data.markdownRemark.htmlAst}
        </Post>
      </Layout>
    </>
  );
}

export default PostTemplate;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`;
