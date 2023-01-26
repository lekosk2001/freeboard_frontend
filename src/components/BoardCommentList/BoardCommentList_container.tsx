import BoardCommentList_presenter from './BoardCommentList_presenter';
import { useQuery, useMutation } from '@apollo/client';
import {
  DELETE_BOARDS_COMMNET,
  FETCH_BOARD_COMMENT,
} from '@/src/components/BoardCommentList/BoardCommentList_queries';
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
  const { data: CommentsData } = useQuery<
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

  return (
    <BoardCommentList_presenter
      CommentsData={CommentsData}
      onCLickDeleteBoardComment={onCLickDeleteBoardComment}
    />
  );
}
