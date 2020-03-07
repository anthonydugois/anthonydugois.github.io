const path = require("path");

exports.createPages = ({ actions, graphql }) => {
	return graphql(`
		{
			allMdx(
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

		let template = path.resolve("src/templates/post.js");

		result.data.allMdx.edges.forEach(edge => {
			actions.createPage({
				path: edge.node.frontmatter.path,
				component: template,
				context: {}
			});
		});
	});
};
