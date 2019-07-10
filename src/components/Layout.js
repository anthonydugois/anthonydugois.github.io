import React from "react";
import { Link } from "gatsby";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

import MonoidRegular from "../fonts/Monoid-Regular.ttf";
import MonoidBold from "../fonts/Monoid-Bold.ttf";

let theme = {
  width: "42rem",
  colors: {
    black: "#02000F",
    white: "#FAF9FF",
    gray: "#6C707F"
  },
  spacing: {
    medium: "1.5rem",
    large: "2.5rem"
  }
};

let GlobalStyle = createGlobalStyle`
  @import url(https://fonts.googleapis.com/css?family=Exo+2:400,700|Heebo:400,500&display=swap);

  @font-face {
    font-family: "Monoid";
    font-weight: 400;
    src: url(${MonoidRegular});
  }

  @font-face {
    font-family: "Monoid";
    font-weight: 500;
    src: url(${MonoidBold});
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    margin: 0;
    padding: 0;
    line-height: 1;
    font-size: 1rem;
    background: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.black};
  }
`;

let Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "head   "
    "content";
  grid-gap: ${p => p.theme.spacing.medium};
  justify-content: center;
  padding: ${p => p.theme.spacing.medium};
  border-top: 0.1rem solid ${p => p.theme.colors.black};

  @media screen and (min-width: ${p => p.theme.width}) {
    padding: ${p => p.theme.spacing.large};
    grid-template-columns: ${p => p.theme.width};
    grid-gap: ${p => p.theme.spacing.large};
  }
`;

let Head = styled.header`
  grid-area: head;
`;

let HeadTitle = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  font-family: "Exo 2", sans-serif;
  font-size: 1.75rem;
  font-weight: 700;
  color: ${p => p.theme.colors.black};

  @media screen and (min-width: ${p => p.theme.width}) {
    font-size: 2.2rem;
  }
`;

let HeadLead = styled.p`
  margin: 0;
  padding: 0.5rem 0 1rem;
  line-height: 1.45;
  font-family: "Heebo", sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  color: ${p => p.theme.colors.black};

  @media screen and (min-width: ${p => p.theme.width}) {
    padding: 0.75rem 0 1.25rem;
    line-height: 1.5;
    font-size: 1rem;
  }
`;

let HeadNav = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, min-content);
  grid-template-areas: "link link link";
  grid-gap: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${p => p.theme.colors.black};

  @media screen and (min-width: ${p => p.theme.width}) {
    grid-gap: 1.25rem;
  }
`;

let HeadLink = styled.a`
  background: ${p => p.theme.colors.black};
  text-transform: lowercase;
  text-decoration: none;
  font-family: "Heebo", sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  color: ${p => p.theme.colors.white};
  letter-spacing: 0.05rem;
  transition: background 0.1s, color 0.1s;

  @media screen and (min-width: ${p => p.theme.width}) {
    font-size: 0.9rem;
  }

  &:focus,
  &:hover {
    background: transparent;
    color: ${p => p.theme.colors.black};
  }
`;

let Content = styled.section`
  grid-area: content;
`;

function Layout(props) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />

        <Container>
          <Head>
            <HeadTitle to="/">Anthony Dugois</HeadTitle>
            <HeadLead>
              Software Engineering & Computer Science student at the University
              of Besançon, France. Now in an internship at UCLouvain, Belgium.
            </HeadLead>
            <HeadNav>
              <HeadLink href="https://twitter.com/a_dugois">Twitter</HeadLink>
              <HeadLink href="https://github.com/anthonydugois">
                GitHub
              </HeadLink>
              <HeadLink href="mailto:hello@anthonydugois.com">Email</HeadLink>
            </HeadNav>
          </Head>

          <Content>{props.children}</Content>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default Layout;
