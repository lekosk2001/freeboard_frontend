import { Title } from '@/src/commons/styles/emotion'
import * as S from './Login_styles'
import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { type IMutation, type IMutationLoginUserArgs } from '@/src/commons/types/generated/types'
import { LOGIN_USER } from './Login_query'
import { Modal } from 'antd'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { accessTokenState } from '@/src/commons/store'

const Login_presenter = () => {

    const route = useRouter()
    const [, setAccessToken] = useRecoilState(accessTokenState)

    const [input, setInput] = useState({
        email: '',
        password: '',
    })

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput({ ...input, [e.currentTarget.id]: e.currentTarget.value })
    }

    const [loginUser] = useMutation<Pick<IMutation, 'loginUser'>, IMutationLoginUserArgs>(LOGIN_USER);

    const onSubmitSignUp = async () => {

        if (!input.email.includes("@") || !input.email.includes(".")) { Modal.error({ content: "이메일이 유효하지 않습니다." }); return }

        if (input.email && input.password) {
            try {
                const result = await loginUser({
                    variables: {
                        email: input.email,
                        password: input.password
                    }
                });

                if (!result.data) { Modal.error({ content: "로그인에 실패하였습니다." }); return }
                setAccessToken(result.data?.loginUser.accessToken)
                localStorage.setItem("accessToken", result.data?.loginUser.accessToken)
                void route.push('/')
            } catch (error) {
                if (error instanceof Error) alert(error.message);
            }
        }
    }

    return (
        <S.LoginForm>
            <Title style={{ color: '#fff', "textAlign": "center", "marginBottom": "20px" }}>로그인</Title>
            <S.InputContainer>
                <S.Label htmlFor='email'>이메일</S.Label>
                <S.Input id='email' placeholder='이메일을 입력해주세요.' onChange={onChangeInput} />
            </S.InputContainer>
            <S.InputContainer>
                <S.Label htmlFor='password'>비밀번호</S.Label>
                <S.Input id='password' placeholder='비밀번호를 입력해주세요.' onChange={onChangeInput} />
            </S.InputContainer>
            <S.SubmitButton onClick={onSubmitSignUp}>로그인</S.SubmitButton>
        </S.LoginForm>
    )
}

export default Login_presenter