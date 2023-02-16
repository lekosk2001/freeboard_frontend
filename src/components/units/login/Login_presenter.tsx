import { Title } from '@/src/commons/styles/emotion'
import * as S from './Login_styles'
import { useMutation } from '@apollo/client'
import { type IMutation, type IMutationLoginUserArgs } from '@/src/commons/types/generated/types'
import { LOGIN_USER } from './Login_query'
import { Modal } from 'antd'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { accessTokenState } from '@/src/commons/store'
import * as yup from "yup";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

interface IFormData {
    email: string
    password: string
}

const schema = yup.object({
    email: yup.string().email("이메일 형식이 아닙니다.").required("이메일을 입력해주세요."),
    password: yup.string().required("비밀번호를 입력해주세요."),
}).required();

const Login_presenter = () => {

    const { register, handleSubmit, formState, formState: { errors } } = useForm<IFormData>({ resolver: yupResolver(schema), mode: "onChange" });
    const [, setAccessToken] = useRecoilState(accessTokenState)
    const router = useRouter()

    const [loginUser] = useMutation<Pick<IMutation, 'loginUser'>, IMutationLoginUserArgs>(LOGIN_USER);

    const onSubmitSignUp = async (data: IFormData) => {
        // e.preventDefault()

        if (!data.email.includes("@") || !data.email.includes(".")) { Modal.error({ content: "이메일이 유효하지 않습니다." }); return }

        if (data.email && data.password) {
            try {
                const result = await loginUser({
                    variables: {
                        email: data.email,
                        password: data.password
                    }
                });

                if (!result.data) { Modal.error({ content: "로그인에 실패하였습니다." }); return }

                const accessToken = result.data?.loginUser.accessToken
                if (setAccessToken) {
                    setAccessToken(accessToken ?? "")

                    // 3. 로그인 성공페이지로 이동하기
                    void router.push('/boards')
                    localStorage.setItem("accessToken", accessToken) // 임시로 사용 나중에 지울예정
                }

            } catch (error) {
                if (error instanceof Error) {
                    alert(error.message);
                    // void router.reload
                }
            }
        }
    }

    return (
        <S.LoginForm onSubmit={handleSubmit(onSubmitSignUp)}>
            <Title style={{ color: '#fff', "textAlign": "center", "marginBottom": "20px" }}>로그인</Title>
            <S.InputContainer>
                <S.Label htmlFor='email'>이메일</S.Label>
                <S.Input id='email' placeholder='이메일을 입력해주세요.' {...register("email", { required: true })} />
                {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
            </S.InputContainer>
            <S.InputContainer>
                <S.Label htmlFor='password'>비밀번호</S.Label>
                <S.Input id='password' placeholder='비밀번호를 입력해주세요.' autoComplete="on" type='password' {...register("password", { required: true })} />
                {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
            </S.InputContainer>
            <S.SubmitButton style={{ "backgroundColor": formState.isValid ? "yellow" : "" }} onClick={handleSubmit(onSubmitSignUp)}>로그인</S.SubmitButton>
        </S.LoginForm>
    )
}

export default Login_presenter