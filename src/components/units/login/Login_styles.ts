import styled from "@emotion/styled";


export const LoginForm = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: auto;
    max-width: 420px;
    padding: 20px 20px;
    background-color: #000;
    gap:20px;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap:12px;
`

export const Label = styled.label`
color: #fff;
font-weight: 400;

`
export const Input = styled.input`
    color: #fff;
    border: 1px solid #fff;
    border-radius: 16px;
    height: 64px;
    background-color: rgba(255, 255, 255, 0.05);
    font-size: 16px;
    font-weight: 400;
    padding: 0px 16px;
`

export const SubmitButton = styled.button`
    margin-top: 40px;
    border-radius: 16px;
    height: 64px;
    background-color:#4F4F4F;
    font-size: 16px;
    font-weight: 700;
    color: #BDBDBD;
`

export const BackButton = styled.button`
    align-self: flex-end;
    border-radius: 16px;
    width: 40px;
    height: 40px;
    background-color:#4F4F4F;
    font-size: 14px;
    font-weight: 700;
    color: #BDBDBD;
`