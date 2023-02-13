import { Title } from '@/src/commons/styles/emotion'
import * as S from './SignUp_styles'
import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { type IMutationCreateUserArgs, type IMutation } from '@/src/commons/types/generated/types'
import { CREATE_USER } from './SignUp_query'
import { Modal } from 'antd'
import { useRouter } from 'next/router'

const SignUp_presenter = () => {

    const route = useRouter()

    const [input, setInput] = useState({
        email: '',
        name: '',
        password: '',
        passwordCheck: ''
    })

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput({ ...input, [e.currentTarget.id]: e.currentTarget.value })
    }

    const [createUser] = useMutation<
        Pick<IMutation, 'createUser'>, IMutationCreateUserArgs>(CREATE_USER);

    const onSubmitSignUp = async () => {

        if (!input.email.includes("@") || !input.email.includes(".")) { Modal.error({ content: "이메일이 유효하지 않습니다." }); return }

        if (input.password !== input.passwordCheck) { Modal.error({ content: "비밀번호가 일치하지 않습니다." }); return }

        if (input.email && input.name && input.password && input.passwordCheck) {
            try {
                const result = await createUser({
                    variables: {
                        createUserInput: {
                            email: input.email,
                            name: input.name,
                            password: input.password
                        },
                    }
                });
                console.log(result.data)
                void route.push('/')
            } catch (error) {
                if (error instanceof Error) alert(error.message);
            }
        }
    }

    return (
        <S.SignUpForm>
            <Title style={{ color: '#fff', "textAlign": "center", "marginBottom": "20px" }}>회원가입</Title>
            <S.InputContainer>
                <S.Label htmlFor='email'>이메일</S.Label>
                <S.Input id='email' placeholder='이메일을 입력해주세요.' onChange={onChangeInput} />
            </S.InputContainer>
            <S.InputContainer>
                <S.Label htmlFor='name'>이름</S.Label>
                <S.Input id='name' placeholder='이름을 입력해주세요.' onChange={onChangeInput} />
            </S.InputContainer>
            <S.InputContainer>
                <S.Label htmlFor='password'>비밀번호</S.Label>
                <S.Input id='password' placeholder='비밀번호를 입력해주세요.' onChange={onChangeInput} />
            </S.InputContainer>
            <S.InputContainer>
                <S.Label htmlFor='passwordCheck'>비밀번호 확인</S.Label>
                <S.Input id='passwordCheck' placeholder='비밀번호를 입력해주세요.' onChange={onChangeInput} />
            </S.InputContainer>
            <S.SubmitButton onClick={onSubmitSignUp}>회원가입하기</S.SubmitButton>
        </S.SignUpForm>
    )
}

export default SignUp_presenter