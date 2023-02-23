import { accessTokenState } from '@/src/commons/store';
import { type IMutation, type IQuery } from '@/src/commons/types/generated/types';
import { gql, useMutation, useQuery } from '@apollo/client';
import * as S from './Header_style'
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';

const FETCH_USER_LOGGED_IN = gql`
	query fetchUserLoggedIn {
		fetchUserLoggedIn{picture email name}
	}
`;

const MUTATION_USER_LOG_OUT = gql`
	mutation logoutUser {logoutUser	}
`;


const Header = () => {
	const [accessToken, setAccessToken] = useRecoilState(accessTokenState)
	const [isMounted, setIsMounted] = useState(false)
	const router = useRouter();

	const { data } = useQuery<Pick<IQuery, 'fetchUserLoggedIn'>>(FETCH_USER_LOGGED_IN);

	const [logoutUser] = useMutation<Pick<IMutation, 'logoutUser'>>(MUTATION_USER_LOG_OUT)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	const onClickLogout = async () => {
		try {
			await logoutUser()
			router.reload()
			setAccessToken("")
			localStorage.removeItem("accessToken")
		} catch (error) {
			if (error instanceof Error) alert(error.message);
		}

	}

	return (
		<S.Header>
			<S.Logo onClick={async () => await router.push(`/boards`)}>
				🚢 FREE BOARD
			</S.Logo>
			{isMounted && <S.HeaderButtons>
				{!accessToken && <S.Login onClick={() => { void router.push(`/login`) }}>로그인</S.Login>}
				{!accessToken && <S.Signup onClick={async () => await router.push(`/signUp`)}>회원가입</S.Signup>}
				{accessToken && <S.Login onClick={onClickLogout}>로그아웃</S.Login>}
				{accessToken && data?.fetchUserLoggedIn && <div>{data?.fetchUserLoggedIn.name}</div>}
				{accessToken && data?.fetchUserLoggedIn && <div>{data?.fetchUserLoggedIn.email}</div>}
				{accessToken && data?.fetchUserLoggedIn.picture && <img src={data?.fetchUserLoggedIn.picture}></img>}
			</S.HeaderButtons>}
		</S.Header>
	);
};

export default Header;
