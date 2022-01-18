const withMDX = require("@next/mdx")({
	extension: /\.mdx$/,
});

module.exports = withMDX({
	reactStrictMode: true,
	pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
});
