import styled from 'styled-components';
import Head from 'next/head';
import Navigation from './navbar';
import React from 'react';

const Wrapper = styled.main`
	min-height: 100vh;
	min-width: 100vw;
	display: flex;
	flex-direction: column;
`;

const Main = styled.section`
	background: ${(props) => props.color};
	display: flex;
	flex-direction: column;
	flex: 1; // fills the rest of the page after the Topbar
`;

const MainLayout = ({ children, title = "untitiled", color = "white"}) => {
	
	return (
		<Wrapper>
			<Head>
				<title>{`${title} | Mount Wilson Capital`}</title>
			</Head>
			<Navigation />

			<Main color={color}>
				{children}
			</Main>
		</Wrapper>
	);
};

export default MainLayout;