
import { Main, Title } from '../../../commons/styles/emotion';
import * as S from './ProductAdd_styles';

import CustomUplaod from '../../commons/upload/CustomUplaod';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useState } from 'react';

interface IFormData {
	name: string
	intro: string
	desc: string
	price: number
	tags: string
}

const schema = yup.object({
	name: yup.string().required("상품명을 입력해주세요."),
	intro: yup.string().required("한줄요약을 입력해주세요."),
	desc: yup.string().required("상품설명을 입력해주세요."),
	price: yup.number().required("상품금액을 입력해주세요."),
}).required();


interface Props {
	isEditing: boolean
}
export default function ProductAdd_presenter(props: Props) {

	const {
		register, handleSubmit, formState, formState: { errors }
	} = useForm<IFormData>({ resolver: yupResolver(schema) });

	const onSubmit = () => { }
	const onUpdate = () => { }

	const isEditing = props.isEditing

	const [imgUrls, setImgUrls] = useState(["", "", ""])

	const onChangeFileUrls = (fileUrl: string, index: number) => {
		const newFileUrls = [...imgUrls];
		newFileUrls[index] = fileUrl;
		setImgUrls(newFileUrls);
	};


	return (
		<Main>
			<S.Form onSubmit={handleSubmit(onSubmit)}>
				<Title>상품 {isEditing ? '수정' : '등록'}</Title>

				<S.InputWrapper>
					<label>상품명</label>
					<input
						type="text"
						placeholder="상품명을 입력해주세요."
						{...register("name", { required: true })}
					/>
					{errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
				</S.InputWrapper>

				<S.InputWrapper>
					<label>한줄요약</label>
					<input
						type="text"
						placeholder="한줄요약을 입력해주세요."
						{...register("intro", { required: true })}
					/>
					{errors.intro && <p style={{ color: "red" }}>{errors.intro.message}</p>}
				</S.InputWrapper>

				<S.InputWrapper>
					<label>상품설명</label>
					<textarea
						placeholder="상품설명을 작성해주세요."
						{...register("desc", { required: true })}
					/>
					{errors.desc && <p style={{ color: "red" }}>{errors.desc.message}</p>}
				</S.InputWrapper>

				<S.InputWrapper>
					<label>판매 가격</label>
					<input
						type='number'
						placeholder="판매 가격을 입력해주세요."
						{...register("price", { required: true })}
					/>
					{errors.price && <p style={{ color: "red" }}>{errors.price.message}</p>}
				</S.InputWrapper>



				<S.InputWrapper>
					<label>태그입력</label>
					<input
						type="text"
						placeholder="#태그"
						{...register("tags")}
					/>
				</S.InputWrapper>

				<S.InputWrapper>
					<label>사진업로드</label>
					<div style={{ display: "flex", gap: "10px" }}>
						{imgUrls.map((imgUrl, index) => {
							return (
								<CustomUplaod
									key={imgUrl + index}
									imgUrl={imgUrl}
									index={index}
									onChangeFileUrls={onChangeFileUrls}
								></CustomUplaod>
							)
						})}
					</div>
				</S.InputWrapper>


				<S.SubmitButton
					onClick={isEditing ? handleSubmit(onUpdate) : handleSubmit(onSubmit)}
					valid={formState.isValid}
					disabled={!formState.isValid}
				>
					{isEditing ? '수정하기' : '등록하기'}
				</S.SubmitButton>
			</S.Form>
		</Main>
	);
}
