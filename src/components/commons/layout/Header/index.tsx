import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React from 'react';

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

  return (
    <Header>
      <Logo onClick={async () => await router.push(`/boards`)}>
        🚢 FREE BOARD
      </Logo>
      <HeaderButtons>
        <Login>로그인</Login>
        <Signup>회원가입</Signup>
      </HeaderButtons>
    </Header>
  );
};

export default Header;
