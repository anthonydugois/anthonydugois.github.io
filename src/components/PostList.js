import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

let List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

let Item = styled.li`
  & + & {
    padding-top: ${p => p.theme.spacing.medium};

    @media screen and (min-width: ${p => p.theme.width}) {
      padding-top: ${p => p.theme.spacing.large};
    }
  }
`;

let Date = styled.time`
  font-family: "Heebo", sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  color: ${p => p.theme.colors.gray};

  @media screen and (min-width: ${p => p.theme.width}) {
    font-size: 0.9rem;
  }
`;

let Title = styled.h2`
  margin: 0;
  padding: 0.25rem 0 0;
  line-height: 1.4;
  font-family: "Exo 2", sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  color: ${p => p.theme.colors.black};

  @media screen and (min-width: ${p => p.theme.width}) {
    padding: 0.5rem 0 0;
    line-height: 1.45;
    font-size: 1.45rem;
  }
`;

let TitleLink = styled(Link)`
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  transition: background 0.1s, color.1s;

  &:focus,
  &:hover {
    background: ${p => p.theme.colors.black};
    color: ${p => p.theme.colors.white};
  }
`;

function PostList(props) {
  return (
    <List>
      {props.posts.map(post => (
        <Item key={post.id}>
          <Date>{post.date}</Date>
          <Title>
            <TitleLink to={post.path}>{post.title} 🠒</TitleLink>
          </Title>
        </Item>
      ))}
    </List>
  );
}

export default PostList;
