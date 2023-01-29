import React from 'react';
import styled from '@emotion/styled';
import Header from './Header';
import Banner from './Banner';
import Menu from './Menu';

interface Props {
	children: JSX.Element;
}

const Layout = (props: Props) => {
	const Main = styled.main`
		color: rgb(var(--foreground-rgb));
		max-width: 1280px;
		margin: 0px auto 100px auto;
		padding: 80px 40px;
	`;
	return (
		<>
			<Header />
			<Banner />
			<Menu />
			<Main>{props.children}</Main>
		</>
	);
};

export default Layout;
