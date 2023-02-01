const withMDX = require("@next/mdx")({
	extension: /\.mdx$/
});

const now = new Date();

module.exports = withMDX({
	reactStrictMode: true,
	pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
	env: {
		NOW: now.toLocaleString("en-US", {
			month: "long",
			year: "numeric"
		})
	}
});
