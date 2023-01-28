import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React from 'react';

const Menu = () => {
  const router = useRouter();
  const Navbar = styled.nav`
    background-color: #ffd600;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);
  `;
  const NavButton = styled.button`
    font-weight: 500;
    font-size: 18px;
    color: #ab9000;
  `;

  return (
    <Navbar>
      <NavButton
        onClick={async () => {
          await router.push(`/boards`);
        }}
      >
        자유게시판
      </NavButton>
      |<NavButton>중고마켓</NavButton>|<NavButton>마이페이지</NavButton>
    </Navbar>
  );
};

export default Menu;
