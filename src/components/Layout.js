import * as React from "react";
import { Link } from "gatsby";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

let theme = {
	space: ["0px", "8px", "16px", "32px", "64px", "72px"],
	size: ["720px"],
	colors: {
		black: ["#02000F", "#807E8C", "#CFCDD8"],
		white: ["#FAF9FF"]
	},
	fonts: {
		sans: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
			Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif`,
		mono: `"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier,
			monospace`
	},
	fontSizes: ["0.875rem", "1rem", "1.25rem", "1.5rem", "1.75rem"],
	fontWeights: [300, 400, 500]
};

theme.space["none"] = theme.space[0];
theme.space["small"] = theme.space[1];
theme.space["medium"] = theme.space[2];
theme.space["large"] = theme.space[3];
theme.space["xlarge"] = theme.space[4];
theme.space["huge"] = theme.space[5];

theme.size["full"] = theme.size[0];

theme.fontSizes["small"] = theme.fontSizes[0];
theme.fontSizes["normal"] = theme.fontSizes[1];
theme.fontSizes["medium"] = theme.fontSizes[2];
theme.fontSizes["large"] = theme.fontSizes[3];
theme.fontSizes["xlarge"] = theme.fontSizes[4];

theme.fontWeights["light"] = theme.fontWeights[0];
theme.fontWeights["regular"] = theme.fontWeights[1];
theme.fontWeights["bold"] = theme.fontWeights[2];

const GlobalStyle = createGlobalStyle`
	*,
	*::after,
	*::before {
		box-sizing: inherit;
	}

	html {
		box-sizing: border-box;
		font-size: 16px;
	}

	body {
		margin: 0;
		padding: 0;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-family: ${props => props.theme.fonts.sans};
		font-size: ${props => props.theme.fontSizes.normal};
		background: ${props => props.theme.colors.white[0]};
		color: ${props => props.theme.colors.black[0]};
	}
`;

const Container = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: ${props => props.theme.space.xlarge}
		${props => props.theme.space.huge};
	border-top: 4px solid ${props => props.theme.colors.black[0]};
`;

const Header = styled.header`
	width: ${props => props.theme.size.full};
	margin-bottom: ${props => props.theme.space.large};
`;

const Title = styled(Link)`
	text-decoration: none;
	font-size: ${props => props.theme.fontSizes.xlarge};
	font-weight: ${props => props.theme.fontWeights.bold};
	color: ${props => props.theme.colors.black[0]};
`;

const Lead = styled.p`
	margin: 0;
	padding: ${props => props.theme.space.medium} 0;
	font-size: ${props => props.theme.fontSizes.normal};
	font-weight: ${props => props.theme.fontWeights.regular};
	color: ${props => props.theme.colors.black[0]};
`;

const Nav = styled.nav`
	display: flex;
	align-items: center;
	padding: ${props => props.theme.space.small} 0;
	border-bottom: 1px solid ${props => props.theme.colors.black[2]};
`;

const NavLink = styled.a`
	display: block;
	width: 80px;
	background: ${props => props.theme.colors.black[0]};
	text-transform: lowercase;
	text-decoration: none;
	font-size: ${props => props.theme.fontSizes.small};
	font-weight: ${props => props.theme.fontWeights.regular};
	color: ${props => props.theme.colors.white[0]};
	transition: background 0.1s, font-weight 0.1s, color 0.1s;

	& + & {
		margin-left: ${props => props.theme.space.medium};
	}

	&:focus,
	&:hover {
		background: ${props => props.theme.colors.black[2]};
		font-weight: ${props => props.theme.fontWeights.bold};
		color: ${props => props.theme.colors.black[0]};
	}
`;

const Body = styled.section`
	width: ${props => props.theme.size.full};
	flex: 1;
`;

export default function Layout(props) {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyle />

				<Container>
					<Header>
						<Title to="/">Anthony Dugois</Title>
						<Lead>
							Software Engineering & Computer Science student at
							the University of Besançon, France.
						</Lead>
						<Nav>
							<NavLink href="https://twitter.com/a_dugois">
								Twitter
							</NavLink>
							<NavLink href="https://github.com/anthonydugois">
								GitHub
							</NavLink>
							<NavLink href="mailto:hello@anthonydugois.com">
								Email
							</NavLink>
						</Nav>
					</Header>
					<Body>{props.children}</Body>
				</Container>
			</>
		</ThemeProvider>
	);
}
