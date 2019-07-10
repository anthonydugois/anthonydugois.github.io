const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const tpl = path.resolve("src/templates/post.js");

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(edge => {
      actions.createPage({
        path: edge.node.frontmatter.path,
        component: tpl,
        context: {}
      });
    });
  });
};
