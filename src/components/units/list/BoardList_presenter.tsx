import { dateFormat } from '@/src/commons/utils/utils';
import { Main } from '@/src/commons/styles/emotion';
import * as S from './BoardList_styles';
import { type IBoardList_presenter_Props } from './BoardList_types';
import { FormOutlined, SearchOutlined } from '@ant-design/icons';
import Pagenation from '../../commons/pagenation/Pagenation_container';
import { v4 as uuidv4 } from 'uuid';
import { FETCH_BOARD } from '../detail/BoardDetail_queries';
import { useApolloClient } from '@apollo/client';
import { FETCH_BOARD_COMMENT } from '../BoardCommentList/BoardCommentList_queries';

export default function BoardList_presenter(props: IBoardList_presenter_Props) {
	const onClickBoardDetail = props.onClickBoardDetail;
	const onClickBoardNew = props.onClickBoardNew;

	const client = useApolloClient();
	const prefetchBoard = (boardId: string) => async () => {
		await client.query({
			query: FETCH_BOARD,
			variables: { boardId },
		});

		await client.query({
			query: FETCH_BOARD_COMMENT,
			variables: { boardId },
		});


	};

	return (
		<Main>
			{/* <S.BestWrapper>
				<Title>베스트 게시글</Title>
				<S.BestCards>
					<S.Card>카드</S.Card>
					<S.Card>카드</S.Card>
					<S.Card>카드</S.Card>
					<S.Card>카드</S.Card>
				</S.BestCards>
			</S.BestWrapper> */}

			<S.ListsWrapper>
				<S.ListsHead>
					<S.SearchBarBox>
						<SearchOutlined style={{ fontSize: "18px" }} />
						<input
							placeholder="제목을 검색해주세요."
							onChange={props.onChangeSearch}
						/>
					</S.SearchBarBox>
					<S.DateInputBox>
						<input placeholder="YYYY. MM.DD" type="date" />
						~
						<input placeholder="YYYY. MM.DD" type="date" />
					</S.DateInputBox>

					<S.SearchButton>검색하기</S.SearchButton>
				</S.ListsHead>
				<S.Lists>
					<S.Tab>
						<S.Column>번호</S.Column>
						<S.Column>제목</S.Column>
						<S.Column>작성자</S.Column>
						<S.Column>날짜</S.Column>
					</S.Tab>
					{props.data?.fetchBoards.map((list) => {
						return (
							<S.Row
								key={list._id}
								onMouseOver={prefetchBoard(list._id)}
								onClick={() => {
									onClickBoardDetail(list._id);
								}}
							>
								<S.Column>
									{String(list._id).slice(-4).toUpperCase()}
								</S.Column>
								<S.Column>
									{list.title
										.replaceAll(props.search, `%^&${props.search}%^&`)
										.split(`%^&`)
										.map((text) => {
											return <span
												key={uuidv4()}
												style={{
													backgroundColor: props.search === text ? "#ffe59f" : "inherit"
												}}
											>
												{text}
											</span>
										}
										)}
								</S.Column>
								<S.Column>{list.writer}</S.Column>
								<S.Column>
									{dateFormat(list.createdAt)}
								</S.Column>
							</S.Row>
						);
					})}
				</S.Lists>

				<S.Pagenation>
					<Pagenation count={props.count} refetch={props.refetch} />
					<S.CreateBotton
						onClick={() => {
							onClickBoardNew();
						}}
					>
						<FormOutlined />
						게시물 등록하기
					</S.CreateBotton>
				</S.Pagenation>
			</S.ListsWrapper>
		</Main>
	);
}
