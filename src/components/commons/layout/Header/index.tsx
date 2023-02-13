import { accessTokenState } from '@/src/commons/store';
import { type IQuery } from '@/src/commons/types/generated/types';
import { gql, useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React from 'react';
import { useRecoilState } from 'recoil';

const Header = () => {
	const router = useRouter();
	const Header = styled.header`
		display: flex;
		justify-content: space-between;
		height: 152px;
		margin: 0px auto;
		max-width: 1280px;
		align-items: center;
		padding: 0px 40px;
	`;

	const Logo = styled.h1`
		font-size: 36px;
		font-weight: 700;
		cursor: pointer;
		letter-spacing: -1.3px;
	`;
	const HeaderButtons = styled.div`
		display: flex;
		gap: 5px;
		align-items: center;
	`;
	const Login = styled.button`
		font-size: 16px;
		font-weight: 700;
		width: 92px;
		height: 44px;
	`;
	const Signup = styled.button`
		font-size: 16px;
		font-weight: 700;
		width: 92px;
		height: 44px;
		border-radius: 10px;
		background-color: #ffd600;
	`;
	const [accessToken] = useRecoilState(accessTokenState)



	const FETCH_USER_LOGGED_IN = gql`
		query fetchUserLoggedIn {
			fetchUserLoggedIn{picture email name}
		}
`;

	const { data } = useQuery<Pick<IQuery, 'fetchUserLoggedIn'>>(FETCH_USER_LOGGED_IN);

	return (
		<Header>
			<Logo onClick={async () => await router.push(`/boards`)}>
				🚢 FREE BOARD
			</Logo>
			<HeaderButtons>
				{<Login onClick={async () => await router.push(`/login`)}>{accessToken ? "로그아웃" : "로그인"}</Login>}
				{!accessToken && <Signup onClick={async () => await router.push(`/signUp`)}>회원가입</Signup>}
				{accessToken && <div>{data?.fetchUserLoggedIn.name}</div>}
				{accessToken && <div>{data?.fetchUserLoggedIn.email}</div>}

				{data?.fetchUserLoggedIn.picture && <img src={data?.fetchUserLoggedIn.picture}></img>}
			</HeaderButtons>
		</Header>
	);
};

export default Header;
