import { accessTokenState } from '@/src/commons/store';
import { type IQuery } from '@/src/commons/types/generated/types';
import { gql, useQuery } from '@apollo/client';
import * as S from './Header_style'
import { useRouter } from 'next/router';
import React from 'react';
import { useRecoilState } from 'recoil';


const Header = () => {

	const [accessToken] = useRecoilState(accessTokenState)
	const router = useRouter();

	const FETCH_USER_LOGGED_IN = gql`
		query fetchUserLoggedIn {
			fetchUserLoggedIn{picture email name}
		}
`;

	const { data } = useQuery<Pick<IQuery, 'fetchUserLoggedIn'>>(FETCH_USER_LOGGED_IN);

	const onClickLogout = () => {
		localStorage.removeItem("accessToken")
		router.reload()
	}

	return (
		<S.Header>
			<S.Logo onClick={async () => await router.push(`/boards`)}>
				🚢 FREE BOARD
			</S.Logo>
			<S.HeaderButtons>
				{<S.Login onClick={async () => { accessToken ? onClickLogout() : await router.push(`/login`); }}>{accessToken ? "로그아웃" : "로그인"}</S.Login>}
				{!accessToken && <S.Signup onClick={async () => await router.push(`/signUp`)}>회원가입</S.Signup>}
				{accessToken && <div>{data?.fetchUserLoggedIn.name}</div>}
				{accessToken && <div>{data?.fetchUserLoggedIn.email}</div>}

				{data?.fetchUserLoggedIn.picture && <img src={data?.fetchUserLoggedIn.picture}></img>}
			</S.HeaderButtons>
		</S.Header>
	);
};

export default Header;
