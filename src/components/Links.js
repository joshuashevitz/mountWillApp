import styled from "styled-components";
import Link from "next/link";
import React from 'react';

const StyledAnchor = styled.a`
	text-decoration: underline;
	color: white;
	&:hover {
		color: ${(props) => props.hoverColor};
	}
`;

const Links = ({ href, hoverColor = "hsl(87, 77%, 54%)", children }) => {
	return (
		<Link href={href} passHref>
			<StyledAnchor hoverColor={hoverColor}>{children}</StyledAnchor>
		</Link>
	);
};

export default Links;