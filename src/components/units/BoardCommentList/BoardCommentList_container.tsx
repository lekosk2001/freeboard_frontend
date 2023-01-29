import BoardCommentList_presenter from './BoardCommentList_presenter';
import { useQuery, useMutation } from '@apollo/client';
import {
  DELETE_BOARDS_COMMNET,
  FETCH_BOARD_COMMENT,
} from '@/src/components/units/BoardCommentList/BoardCommentList_queries';
import { type BoardCommentList_container_Props } from './BoardCommentList_types';
import {
  type IMutation,
  type IMutationDeleteBoardCommentArgs,
  type IQuery,
  type IQueryFetchBoardCommentsArgs,
} from '@/src/commons/types/generated/types';

export default function BoardCommentList_container(
  props: BoardCommentList_container_Props
) {
  const { data: CommentsData, fetchMore } = useQuery<
    Pick<IQuery, 'fetchBoardComments'>,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENT, {
    variables: {
      boardId: props.boardId,
      page: 1,
    },
  });

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, 'deleteBoardComment'>,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARDS_COMMNET);

  const onCLickDeleteBoardComment = async (boardCommentId: string) => {
    const myPassword = prompt('비밀번호를 입력하세요.');
    try {
      await deleteBoardComment({
        variables: {
          boardCommentId,
          password: myPassword,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENT,
            variables: {
              boardId: props.boardId,
              page: 1,
            },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onLoadMore = async () => {
    if (!CommentsData) return;

    await fetchMore({
      variables: {
        page: Math.ceil(CommentsData?.fetchBoardComments?.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoardComments) {
          return {
            fetchBoardComments: [...prev.fetchBoardComments],
          };
        } else {
          return {
            fetchBoardComments: [
              ...prev.fetchBoardComments,
              ...fetchMoreResult.fetchBoardComments,
            ],
          };
        }
      },
    });
  };

  return (
    <BoardCommentList_presenter
      CommentsData={CommentsData}
      onCLickDeleteBoardComment={onCLickDeleteBoardComment}
      onLoadMore={onLoadMore}
    />
  );
}

// [{
// 	"resource": "/c:/Users/Lekosk/Desktop/Works/codecamp_frontend_gyeongseok/freeboard_frontend/src/components/units/BoardCommentList/BoardCommentList_container.tsx",
// 	"owner": "typescript",
// 	"code": "2322",
// 	"severity": 8,
// 	"message": "'(prev: Pick<IQuery, \"fetchBoardComments\">, { fetchMoreResult }: { fetchMoreResult: Pick<IQuery, \"fetchBoardComments\">; variables: { page: number; }; }) => { fetchBoards: any[]; }' 형식은 '(previousQueryResult: Pick<IQuery, \"fetchBoardComments\">, options: { fetchMoreResult: Pick<IQuery, \"fetchBoardComments\">; variables: { page: number; }; }) => Pick<...>' 형식에 할당할 수 없습니다.\n  'fetchBoardComments' 속성이 '{ fetchBoards: any[]; }' 형식에 없지만 'Pick<IQuery, \"fetchBoardComments\">' 형식에서 필수입니다.",
// 	"source": "ts",
// 	"startLineNumber": 59,
// 	"startColumn": 7,
// 	"endLineNumber": 59,
// 	"endColumn": 18,
// 	"relatedInformation": [
// 		{
// 			"startLineNumber": 293,
// 			"startColumn": 3,
// 			"endLineNumber": 293,
// 			"endColumn": 21,
// 			"message": "여기서는 'fetchBoardComments'이(가) 선언됩니다.",
// 			"resource": "/c:/Users/Lekosk/Desktop/Works/codecamp_frontend_gyeongseok/freeboard_frontend/src/commons/types/generated/types.ts"
// 		},
// 		{
// 			"startLineNumber": 49,
// 			"startColumn": 9,
// 			"endLineNumber": 49,
// 			"endColumn": 20,
// 			"message": "필요한 형식은 여기에서 'FetchMoreQueryOptions<{ page: number; }, Pick<IQuery, \"fetchBoardComments\">> & { updateQuery?: ((previousQueryResult: Pick<IQuery, \"fetchBoardComments\">, options: { ...; }) => Pick<...>) | undefined; }' 형식에 선언된 'updateQuery' 속성에서 가져옵니다.",
// 			"resource": "/c:/Users/Lekosk/Desktop/Works/codecamp_frontend_gyeongseok/freeboard_frontend/node_modules/@apollo/client/core/ObservableQuery.d.ts"
// 		}
// 	]
// }]
