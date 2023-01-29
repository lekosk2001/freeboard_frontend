import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React from 'react';

const Menu = () => {
    const NAVIAGATION_MENUS = [
        { name: '자유게시판', page: '/boards' },
        { name: '중고마켓', page: '/boards' },
        { name: '마이페이지', page: '/boards' },
    ];

    const router = useRouter();

    const Navbar = styled.nav`
        background-color: #ffd600;
        height: 64px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 80px;
        box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);
    `;
    const NavButton = styled.button`
        font-weight: 500;
        font-size: 18px;
        color: #ab9000;
    `;

    return (
        <Navbar>
            {NAVIAGATION_MENUS.map((menu, i) => {
                return (
                    <NavButton
                        key={i}
                        onClick={async () => {
                            await router.push(menu.page);
                        }}
                    >
                        {menu.name}
                    </NavButton>
                );
            })}
        </Navbar>
    );
};

export default Menu;
