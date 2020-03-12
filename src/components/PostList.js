import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
`;

const Item = styled.li`
	& + & {
		padding-top: ${props => props.theme.space.large};
	}
`;

const Date = styled.time`
	display: block;
	padding-bottom: ${props => props.theme.space.small};
	font-size: ${props => props.theme.fontSizes.small};
	font-weight: ${props => props.theme.fontWeights.regular};
	color: ${props => props.theme.colors.black[1]};
`;

const Title = styled.h2`
	margin: 0;
	padding: 0;
`;

const TitleLink = styled(Link)`
	line-height: 1.2;
	text-decoration: none;
	font-size: ${props => props.theme.fontSizes.large};
	font-weight: ${props => props.theme.fontWeights.regular};
	color: ${props => props.theme.colors.black[0]};
	transition: background 0.1s, color.1s;

	&:focus,
	&:hover {
		background: ${props => props.theme.colors.black[0]};
		color: ${props => props.theme.colors.white[0]};
	}
`;

export default function PostList(props) {
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
