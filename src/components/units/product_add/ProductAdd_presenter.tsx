
import { Main, Title } from '../../../commons/styles/emotion';
import * as S from './ProductAdd_styles';

import CustomUplaod from '../../commons/upload/CustomUplaod';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { type Dispatch, type SetStateAction, useEffect, useState } from 'react';
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from './ProductAdd_queries';
import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { Select } from 'antd';
import type { SelectProps } from 'antd';
import { type IQuery, type IQueryFetchUseditemArgs } from '@/src/commons/types/generated/types';
import { FETCH_USED_ITEM } from '../product_detail/ProductDetail_queries';
import KakaoMap from '../../commons/KakaoMap/KakaoMap';

import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';


interface Props {
	isEditing: boolean
	files: File[]
	setfles: Dispatch<SetStateAction<File[]>>
}

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
		lat: GLfloat
		lng: GLfloat
	}
	images: string[]
}

const schema = yup.object({
	name: yup.string().required("상품명을 입력해주세요."),
	remarks: yup.string().required("한줄요약을 입력해주세요."),
	contents: yup.string().required("상품설명을 입력해주세요."),
	price: yup.number().required("상품금액을 입력해주세요."),
}).required();


export default function ProductAdd_presenter(props: Props) {
	const router = useRouter();
	const useditemId = String(router.query.useditemId)

	const { data } = useQuery<Pick<IQuery, 'fetchUseditem'>, IQueryFetchUseditemArgs>(FETCH_USED_ITEM, {
		variables: {
			useditemId,
		},
	});

	const ReactQuill = dynamic(async () => await import('react-quill'), {
		ssr: false,
		loading: () => <p>Loading ...</p>,
	})

	const [imgUrls, setImgUrls] = useState(["", "", ""])
	const [tags, setTags] = useState();

	const tagsHandleChange = (value: any) => {
		setTags(value);
	};

	const options: SelectProps['options'] = [];

	useEffect(() => {
		if (data?.fetchUseditem.images) {
			setImgUrls([data?.fetchUseditem.images[0], data?.fetchUseditem.images[1], data?.fetchUseditem.images[2]])
		}

		data?.fetchUseditem.tags?.map((tag) =>
			options.push({ value: tag, label: tag })
		)

	}, [])

	const {
		control, watch, trigger, register, handleSubmit, setValue, formState, formState: { errors }
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
						tags,
						useditemAddress: {
							zipcode: data.useditemAddress?.zipcode,
							address: data.useditemAddress?.address,
							addressDetail: data.useditemAddress?.addressDetail,
							lat: Number(data.useditemAddress?.lat),
							lng: Number(data.useditemAddress?.lng),
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


	const [updateUseditem] = useMutation(UPDATE_USED_ITEM);
	const onUpdate = async (data: IUseditem) => {

		try {
			await updateUseditem({
				variables: {
					useditemId,
					updateUseditemInput: {
						name: data.name,
						remarks: data.remarks,
						contents: data.contents,
						price: data.price,
						tags,
						useditemAddress: {
							zipcode: data.useditemAddress?.zipcode,
							address: data.useditemAddress?.address,
							addressDetail: data.useditemAddress?.addressDetail,
							lat: Number(data.useditemAddress?.lat),
							lng: Number(data.useditemAddress?.lng),
						},
						images: imgUrls
					},
				},
			});
			void router.push(`/market/${useditemId}`);
		} catch (error) {
			if (error instanceof Error) alert(error.message);
		}
	}

	const isEditing = props.isEditing;

	const onChangeFileUrls = (fileUrl: string, index: number) => {
		const newFileUrls = [...imgUrls];
		newFileUrls[index] = fileUrl;
		setImgUrls(newFileUrls);
	};

	const onChangeContents = (value: string) => {
		setValue("contents", value === "<p><br></p>" ? "" : value)
		void trigger("contents")
	}

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
					<ReactQuill
						style={{ "height": "480px", "marginBottom": "40px" }}
						defaultValue={data?.fetchUseditem.contents}
						placeholder="상품설명을 작성해주세요."
						onChange={onChangeContents}
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
								onChange={tagsHandleChange}
								placeholder="태그"
							/>}
					/>
				</S.InputWrapper>

				<div style={{ "display": "flex", gap: "30px" }}>
					<S.InputWrapper>
						<label>거래위치</label>
						<KakaoMap
							Lat={watch("useditemAddress.lat")}
							Lng={watch("useditemAddress.lng")}
						/>
					</S.InputWrapper>
					<div style={{ display: "flex", "flexDirection": "column" }}>
						<S.InputWrapper>
							<label>GPS</label>
							<input type='number' placeholder='위도' {...register("useditemAddress.lat")} defaultValue={watch("useditemAddress.lat") ?? 37} />
							<input type='number' placeholder='경도'{...register("useditemAddress.lng")} defaultValue={watch("useditemAddress.lng") ?? 128} />
						</S.InputWrapper>
						<S.InputWrapper>
							<label>주소</label>
							<input type='text' placeholder='주소'  {...register("useditemAddress.address")} />
							<input type='text' placeholder='상세주소' {...register("useditemAddress.addressDetail")} />
						</S.InputWrapper>
					</div>
				</div>
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
									files={props.files}
									setfles={props.setfles}
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
