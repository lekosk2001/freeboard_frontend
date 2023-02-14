import styled from "@emotion/styled";

export const Header = styled.header`
display: flex;
justify-content: space-between;
height: 152px;
margin: 0px auto;
max-width: 1280px;
align-items: center;
padding: 0px 40px;
`;

export const Logo = styled.h1`
font-size: 36px;
font-weight: 700;
cursor: pointer;
letter-spacing: -1.3px;
`;

export const HeaderButtons = styled.div`
display: flex;
gap: 5px;
align-items: center;
`;

export const Login = styled.button`
font-size: 16px;
font-weight: 700;
width: 92px;
height: 44px;
`;

export const Signup = styled.button`
font-size: 16px;
font-weight: 700;
width: 92px;
height: 44px;
border-radius: 10px;
background-color: #ffd600;
`;