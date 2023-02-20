
import { Main, Title } from '../../../commons/styles/emotion';
import * as S from './ProductAdd_styles';

import CustomUplaod from '../../commons/upload/CustomUplaod';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useEffect, useState } from 'react';
import { CREATE_USED_ITEM } from './ProductAdd_queries';
import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { Select } from 'antd';
import type { SelectProps } from 'antd';
import { type IQuery, type IQueryFetchUseditemArgs } from '@/src/commons/types/generated/types';
import { FETCH_USED_ITEM } from '../product_detail/ProductDetail_queries';
import { withAuth } from '../../commons/hocs/withAuth';

interface Props { isEditing: boolean }

interface IUseditem {
	name: string
	remarks: string
	contents: string
	price: number
	tags: string[]
	useditemAddress?: {
		zipcode?: string
		address?: string
		addressDetail?: string
		lat?: GLfloat
		lng?: GLfloat
	}
	images: string[]
}

const schema = yup.object({
	name: yup.string().required("상품명을 입력해주세요."),
	remarks: yup.string().required("한줄요약을 입력해주세요."),
	contents: yup.string().required("상품설명을 입력해주세요."),
	price: yup.number().required("상품금액을 입력해주세요."),
	// tags: yup.array().required("태그를 입력해주세요."),
	// images: yup.array().required("이미지를 삽입해주세요."),
}).required();


export default function ProductAdd_presenter(props: Props) {
	withAuth()
	const router = useRouter();
	const useditemId = String(router.query.useditemId)

	const { data } = useQuery<Pick<IQuery, 'fetchUseditem'>, IQueryFetchUseditemArgs>(FETCH_USED_ITEM, {
		variables: {
			useditemId,
		},
	});

	const [imgUrls, setImgUrls] = useState(["", "", ""])

	useEffect(() => {
		if (data?.fetchUseditem.images) {
			setImgUrls([data?.fetchUseditem.images[0], data?.fetchUseditem.images[1], data?.fetchUseditem.images[2]])
		}
		if (data?.fetchUseditem.tags) {
			data?.fetchUseditem.tags.map((tag) =>
				options?.push({
					value: tag,
					label: tag
				})
			)
		}
	}, [])

	const tags = []

	const {
		control, register, handleSubmit, formState, formState: { errors }
	} = useForm<IUseditem>({ resolver: yupResolver(schema) });

	const [createUseditem] = useMutation(CREATE_USED_ITEM);

	const onSubmit = async (data: IUseditem) => {
		try {
			const result = await createUseditem({
				variables: {
					createUseditemInput: {
						name: data.name,
						remarks: data.remarks,
						contents: data.contents,
						price: data.price,
						tags: options?.map(tag => tags.push(tag.value)),
						useditemAddress: {
							zipcode: data.useditemAddress?.zipcode,
							address: data.useditemAddress?.address,
							addressDetail: data.useditemAddress?.addressDetail,
							lat: data.useditemAddress?.lat,
							lng: data.useditemAddress?.lng,
						},
						images: imgUrls
					},
				},
			});
			void router.push(`/market/${result.data.createUseditem._id}`);
		} catch (error) {
			if (error instanceof Error) alert(error.message);
		}

	}

	const onUpdate = () => { }

	const options: SelectProps['options'] = [];

	const isEditing = props.isEditing;


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
						defaultValue={data?.fetchUseditem.name}
						{...register("name", { required: true })}
					/>
					{errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
				</S.InputWrapper>

				<S.InputWrapper>
					<label>한줄요약</label>
					<input
						type="text"
						placeholder="한줄요약을 입력해주세요."
						defaultValue={data?.fetchUseditem.remarks}
						{...register("remarks", { required: true })}
					/>
					{errors.remarks && <p style={{ color: "red" }}>{errors.remarks.message}</p>}
				</S.InputWrapper>

				<S.InputWrapper>
					<label>상품설명</label>
					<textarea
						defaultValue={data?.fetchUseditem.contents}
						placeholder="상품설명을 작성해주세요."
						{...register("contents", { required: true })}
					/>
					{errors.contents && <p style={{ color: "red" }}>{errors.contents.message}</p>}
				</S.InputWrapper>

				<S.InputWrapper>
					<label>판매 가격</label>
					<input
						type='number'
						defaultValue={typeof data?.fetchUseditem.price === typeof 0 ? Number(data?.fetchUseditem.price) : 0}
						placeholder="판매 가격을 입력해주세요."
						{...register("price", { required: true })}
					/>
					{errors.price && <p style={{ color: "red" }}>{errors.price.message}</p>}
				</S.InputWrapper>

				<S.InputWrapper>
					<label>태그입력</label>

					<Controller
						name="tags"
						control={control}
						rules={{ required: true }}
						render={({ field }) =>
							<Select
								{...field}
								mode="tags"
								style={{ width: '100%' }}
								options={options}
								placeholder="태그"
							/>}
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
