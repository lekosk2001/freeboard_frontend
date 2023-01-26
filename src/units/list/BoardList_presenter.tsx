import { dateFormat } from "@/src/commons/utils/utils";
import { Main, Title } from "@/styles/emotion"
import * as S from "./BoardList_styles"
import { IBoardList_presenter_Props } from "./BoardList_types";
import { IBoard } from "@/src/commons/types/generated/types";

export default function BoardList_presenter(props:IBoardList_presenter_Props) {

	const onClickBoardDetail =props.onClickBoardDetail;
	const onClickBoardNew = props.onClickBoardNew;

	return ( 
		<Main>
			<S.BestWrapper>
				<Title>베스트 게시글</Title>
				<S.BestCards>
					<S.Card>카드</S.Card>
					<S.Card>카드</S.Card>
					<S.Card>카드</S.Card>
					<S.Card>카드</S.Card>
				</S.BestCards>
			</S.BestWrapper>

			<S.ListsWrapper>
				<S.ListsHead>
					<S.SearchBarBox>
						<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="black"/>
						</svg>
						<input placeholder="제목을 검색해주세요."></input>
					</S.SearchBarBox>
					<S.DateInputBox>
						<input placeholder="YYYY. MM.DD" type="date"/>
							~
						<input placeholder="YYYY. MM.DD"  type="date"/>
					</S.DateInputBox>

					<S.SearchButton>검색하기
					</S.SearchButton>
				</S.ListsHead>
				<S.Lists>
					<S.Tab>
						<S.Column>번호</S.Column>
						<S.Column>제목</S.Column>
						<S.Column>작성자</S.Column>
						<S.Column>날짜</S.Column>
					</S.Tab>
					{props.data?.fetchBoards.map((list)=>{
						return(
						<S.Row key={list._id} onClick={()=>onClickBoardDetail(list._id)}>
							<S.Column>{String(list._id).slice(-4).toUpperCase()}</S.Column>
							<S.Column>{list.title}</S.Column>
							<S.Column>{list.writer}</S.Column>
							<S.Column>{dateFormat(list.createdAt)}</S.Column>
						</S.Row>
					)})}
				</S.Lists>
				
				<S.Pagenation>
					<S.PageButtons>
						<S.ArrowButton>
							<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z" fill="black"/>
							</svg>
						</S.ArrowButton>
						
						<S.PageButton>1</S.PageButton>
						<S.PageButton active={true}>2</S.PageButton>

						<S.ArrowButton>
							<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M2.00003 0L0.590027 1.41L5.17003 6L0.590027 10.59L2.00003 12L8.00003 6L2.00003 0Z" fill="black"/>
							</svg>
						</S.ArrowButton>
					</S.PageButtons>

					<S.CreateBotton
						onClick={()=>{onClickBoardNew()}}
					>
						<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0 15.2501V19.0001H3.75L14.81 7.94006L11.06 4.19006L0 15.2501ZM17.71 5.04006C18.1 4.65006 18.1 4.02006 17.71 3.63006L15.37 1.29006C14.98 0.900059 14.35 0.900059 13.96 1.29006L12.13 3.12006L15.88 6.87006L17.71 5.04006Z" fill="black"/>
						</svg>
						게시물 등록하기
					</S.CreateBotton>
				</S.Pagenation>
			</S.ListsWrapper>
		</Main>
	)
}
