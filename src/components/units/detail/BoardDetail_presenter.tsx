import * as C from '@/src/commons/styles/emotion';
import * as S from './BoardDetail_styles';
import { dateFormat } from '@/src/commons/utils/utils';
import { type IBoardDetail_presenter_Props } from './BoardDetail_types';
import {
	UserOutlined,
	LikeOutlined,
	DislikeOutlined,
	LinkOutlined,
	EnvironmentOutlined,
} from '@ant-design/icons';
import { Avatar, Popover } from 'antd';

export default function BoardDetail_presenter(
	props: IBoardDetail_presenter_Props
) {
	const router = props.router;
	const data = props.data;
	const content = <p>{data?.fetchBoard.boardAddress?.address}</p>;
	return (
		<C.Main>
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
							<h2>{data?.fetchBoard.writer}</h2>
							<h4>
								{data != null &&
									dateFormat(data?.fetchBoard.createdAt)}
							</h4>
						</span>
					</S.Profile>
					<S.ContentHeadButtons>
						<LinkOutlined
							onClick={() => {
								console.log(
									'http://localhost:3000/' +
									props.router.asPath
								);
							}}
							style={{ fontSize: '24px', color: '#FFD600' }}
						/>
						{!data?.fetchBoard.boardAddress?.address === undefined || null ? (
							<Popover content={content} placement="topRight">
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
					<C.Title>{data?.fetchBoard.title}</C.Title>

					<S.TextBox>{data?.fetchBoard.contents}</S.TextBox>

					<S.ImageWrapper>
						{props.data?.fetchBoard.images
							?.filter((el: string) => el)
							.map((el: string, index) => (
								<S.Image
									key={el + index}
									src={`https://storage.googleapis.com/${el}`}
								/>
							))}
					</S.ImageWrapper>

					{data?.fetchBoard.youtubeUrl != null && (
						<S.YoutubeBox>

							<iframe
								width="100%"
								height="100%"
								src={
									'https://www.youtube.com/embed/' +
									data?.fetchBoard.youtubeUrl
								}
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							></iframe>
						</S.YoutubeBox>
					)}


					<S.LikeButtons>
						<S.LikeButton>
							<LikeOutlined
								onClick={props.onClickLikeBoard}
								style={{
									fontSize: '20px',
									width: '40px',
									height: '40px',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							/>
							<h3>{data?.fetchBoard.likeCount}</h3>
						</S.LikeButton>
						<S.DislikeButton>
							<DislikeOutlined
								onClick={props.onClickDislikeBoard}
								style={{
									fontSize: '20px',
									width: '40px',
									height: '40px',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							/>
							<h3>{data?.fetchBoard.dislikeCount}</h3>
						</S.DislikeButton>
					</S.LikeButtons>
				</S.ContentBody>
			</S.ContentsWrapper>
			<C.BottomWrapper>

				<C.Button
					onClick={() => {
						router.push(`/boards`);
					}}
				>
					목록으로
				</C.Button>

				<C.Button
					onClick={() => {
						router.push(`/boards/${data?.fetchBoard._id}/edit`);
					}}
				>
					수정하기
				</C.Button>

				<C.Button
					onClick={props.onCLickDeleteBoard}
				>
					삭제하기
				</C.Button>
			</C.BottomWrapper>
		</C.Main>
	);
}
