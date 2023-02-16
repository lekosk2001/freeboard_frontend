import { Title } from '@/src/commons/styles/emotion'
import * as S from './SignUp_styles'
import { useMutation } from '@apollo/client'
import { type IMutationCreateUserArgs, type IMutation } from '@/src/commons/types/generated/types'
import { CREATE_USER } from './SignUp_query'
import { Modal } from 'antd'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { ArrowLeftOutlined } from '@ant-design/icons'

interface IFormData {
    email: string
    name: string
    password: string
    passwordCheck: string
}

const schema = yup.object({
    email: yup.string().email("이메일 형식이 아닙니다.").required("이메일을 입력해주세요."),
    name: yup.string().required("이름을 입력해주세요."),
    password: yup.string().required("비밀번호를 입력해주세요."),
    passwordCheck: yup.string().required("비밀번호를 한번 더 입력해주세요."),
}).required();

const SignUp_presenter = () => {

    const router = useRouter()
    const [createUser] = useMutation<Pick<IMutation, 'createUser'>, IMutationCreateUserArgs>(CREATE_USER);

    const onSubmit = async (data: IFormData) => {

        if (!data.email.includes("@") || !data.email.includes(".")) { Modal.error({ content: "이메일이 유효하지 않습니다." }); return }
        if (data.password !== data.passwordCheck) { Modal.error({ content: "비밀번호가 일치하지 않습니다." }); return }

        if (data.email && data.name && data.password && data.passwordCheck) {
            try {
                const result = await createUser({
                    variables: {
                        createUserInput: {
                            email: data.email,
                            name: data.name,
                            password: data.password
                        },
                    }
                });
                console.log(result.data)
                void router.push('/')
            } catch (error) {
                if (error instanceof Error) alert(error.message);
            }
        }
    }

    const { register, handleSubmit, formState, formState: { errors } } = useForm<IFormData>({ resolver: yupResolver(schema), mode: "onChange" });

    return (
        <S.SignUpForm onSubmit={handleSubmit(onSubmit)}>
            <S.BackButton type="button" onClick={() => { router.back() }}><ArrowLeftOutlined /></S.BackButton>
            <Title style={{ color: '#fff', "textAlign": "center", "marginBottom": "20px" }}>회원가입</Title>
            <S.InputContainer>
                <S.Label htmlFor='email'>이메일</S.Label>
                <S.Input id='email' placeholder='이메일을 입력해주세요.' {...register("email", { required: true })} />
                {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
            </S.InputContainer>
            <S.InputContainer>
                <S.Label htmlFor='name'>이름</S.Label>
                <S.Input id='name' placeholder='이름을 입력해주세요.'  {...register("name", { required: true })} />
                {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
            </S.InputContainer>
            <S.InputContainer>
                <S.Label htmlFor='password'>비밀번호</S.Label>
                <S.Input id='password' type='password' placeholder='비밀번호를 입력해주세요.'  {...register("password", { required: true })} autoComplete="on" />
                {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
            </S.InputContainer>
            <S.InputContainer>
                <S.Label htmlFor='passwordCheck'>비밀번호 확인</S.Label>
                <S.Input id='passwordCheck' type='password' placeholder='비밀번호를 입력해주세요.' {...register("passwordCheck", { required: true })} autoComplete="on" />
                {errors.passwordCheck && <p style={{ color: "red" }}>{errors.passwordCheck.message}</p>}
            </S.InputContainer>
            <S.SubmitButton onClick={handleSubmit(onSubmit)} style={{ backgroundColor: formState.isValid ? "yellow" : "" }}>회원가입하기</S.SubmitButton>
        </S.SignUpForm>
    )
}

export default SignUp_presenter