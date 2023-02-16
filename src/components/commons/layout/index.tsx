import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Header from './Header';
// import Banner from './Banner';
import Menu from './Menu';
import { useRouter } from 'next/router';

interface Props {
	children: JSX.Element;
}

const HIDDEN_HEADERS = [
	"/signUp",
	"/login",
]

// const HIDDEN_BANNERS = [
// 	"/signUp",
// 	"/login",
// ]

const HIDDEN_MENUS = [
	"/signUp",
	"/login",
]

const Layout = (props: Props) => {


	const Main = styled.main`
		color: rgb(var(--foreground-rgb));
		max-width: 1280px;
		margin: 0px auto 100px auto;
		padding: 80px 40px;
	`;

	const router = useRouter()
	const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath)
	// const isHiddenBanner = HIDDEN_BANNERS.includes(router.asPath)
	const isHiddenMenu = HIDDEN_MENUS.includes(router.asPath)

	const [mounted, setMounted] = useState(false)
	useEffect(() => {
		setMounted(true)

	}, [])

	return (
		<>
			{!isHiddenHeader && mounted && <Header />}
			{/* {!isHiddenBanner && mounted && <Banner />} */}
			{!isHiddenMenu && mounted && <Menu />}
			<Main>{props.children}</Main>
		</>
	);
};

export default Layout;
