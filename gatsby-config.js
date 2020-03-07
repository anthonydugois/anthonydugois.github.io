module.exports = {
	siteMetadata: {
		title: "Anthony Dugois (@a_dugois)",
		description:
			"Software Engineering & Computer Science student at the University of Besançon, France.",
		author: "@a_dugois"
	},
	plugins: [
		{
			resolve: "gatsby-plugin-react-helmet",
			options: {}
		},
		{
			resolve: "gatsby-plugin-styled-components",
			options: {}
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "content",
				path: `${__dirname}/content`
			}
		},
		{
			resolve: "gatsby-transformer-remark",
			options: {
				plugins: [
					{
						resolve: "gatsby-remark-katex",
						options: {}
					},
					{
						resolve: "gatsby-remark-prismjs",
						options: {
							inlineCodeMarker: "@"
						}
					}
				]
			}
		}
	]
};
