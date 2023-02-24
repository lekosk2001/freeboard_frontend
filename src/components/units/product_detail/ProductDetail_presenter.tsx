import * as S from './ProductDetail_styles';
import * as C from '@/src/commons/styles/emotion';
import { dateFormat } from '@/src/commons/utils/utils';
import {
	UserOutlined,
	LinkOutlined,
	EnvironmentOutlined,
	HeartFilled,
} from '@ant-design/icons';
import { Avatar, Popover } from 'antd';
import { useMutation, useQuery } from '@apollo/client';
import { type IMutation, type IMutationDeleteUseditemArgs, type IQuery, type IQueryFetchUseditemArgs } from '@/src/commons/types/generated/types';
import { useRouter } from 'next/router';
import { DELETE_USED_ITEM, FETCH_USED_ITEM } from './ProductDetail_queries';
import KakaoMap from '../../commons/KakaoMap/KakaoMap';
import Dompurify from "dompurify"
import Payment from '@/src/commons/payment/Payment';


export default function ProductDetail_container() {

	const router = useRouter();
	const useditemId = String(router.query.useditemId)

	if (!useditemId) { return <></> }

	const { data } = useQuery<Pick<IQuery, 'fetchUseditem'>, IQueryFetchUseditemArgs>(FETCH_USED_ITEM, {
		variables: {
			useditemId,
		},
	});

	const [deleteUseditem] = useMutation<
		Pick<IMutation, 'deleteUseditem'>,
		IMutationDeleteUseditemArgs>(DELETE_USED_ITEM);

	const onClickDeleteUseditem = async () => {
		try {
			if (confirm('정말 삭제하시겠습니까?')) {
				await deleteUseditem({ variables: { useditemId } });
				void router.push(`/market`);
			} else {
				return;
			}
		} catch (error) {
			if (error instanceof Error) alert(error.message);
		}
	};

	return (
		<>


			<S.ContentsWrapper>
				<S.ContentHead>
					<S.Profile>
						<Avatar
							size={48}
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
							icon={<UserOutlined />}
						/>
						<span>
							<h3>{"판매자"}</h3>
							<h4>
								{data && dateFormat(data?.fetchUseditem.createdAt)}
							</h4>
						</span>
					</S.Profile>
					<S.ContentHeadButtons>
						<LinkOutlined
							onClick={() => {
								console.log(
									'http://localhost:3000/' +
									router.asPath
								);
							}}
							style={{ fontSize: '24px', color: '#FFD600' }}
						/>
						{data?.fetchUseditem.useditemAddress?.address ? (
							<Popover content={<p>{data?.fetchUseditem.useditemAddress?.address}</p>} placement="topRight">
								<EnvironmentOutlined
									style={{
										fontSize: '24px',
										color: '#FFD600',
									}}
								/>
							</Popover>
						) : <></>}
					</S.ContentHeadButtons>
				</S.ContentHead>

				<S.ContentBody>
					<S.ItemInfos>
						<S.ItemInfoDetail>
							<div>
								<S.Remarks>{data?.fetchUseditem.remarks}</S.Remarks>
								<S.Name>{data?.fetchUseditem.name}</S.Name>
							</div>
							<S.PickedCountBox>
								<HeartFilled style={{ color: "#ffd600", fontSize: "24px" }} />
								<S.PickedCount>{data?.fetchUseditem.pickedCount}</S.PickedCount>
							</S.PickedCountBox>
						</S.ItemInfoDetail>
						<S.Price>{data?.fetchUseditem.price?.toLocaleString('ko-KR')}원</S.Price>
					</S.ItemInfos>
					<S.ImageWrapper>
						{data?.fetchUseditem.images
							?.filter((el: string) => el)
							.map((el: string, index) => (
								<S.Image
									key={el + index}
									src={`https://storage.googleapis.com/${el}`}
								/>
							))}
					</S.ImageWrapper>

					{typeof window !== "undefined" && data?.fetchUseditem.contents && <S.TextBox dangerouslySetInnerHTML={{
						__html: Dompurify.sanitize(data?.fetchUseditem.contents)
					}}></S.TextBox>}

					<S.Tags>{data?.fetchUseditem.tags?.map((tag, i) =>
						<S.Tag key={tag + i}># {tag}</S.Tag>
					)}</S.Tags>

					<S.Map>
						{data?.fetchUseditem.useditemAddress?.lat
							&& data?.fetchUseditem.useditemAddress?.lng
							? <KakaoMap
								Lat={data?.fetchUseditem.useditemAddress?.lat}
								Lng={data?.fetchUseditem.useditemAddress?.lng}
							/> : "지도가 없습니다."}
					</S.Map>

				</S.ContentBody>
			</S.ContentsWrapper>

			<C.BottomWrapper>
				<C.Button
					onClick={() => { void router.push(`/market`); }}
				>
					목록으로
				</C.Button>

				<C.Button
					onClick={() => { }}
				>
					구매하기
				</C.Button>
				<C.Button
					onClick={() => { void router.push(`/market/${data?.fetchUseditem._id}/edit`); }}
				>
					수정하기
				</C.Button>

				<C.Button
					onClick={onClickDeleteUseditem}
				>
					삭제하기
				</C.Button>

				<Payment></Payment>
			</C.BottomWrapper>
		</>
	);
}
