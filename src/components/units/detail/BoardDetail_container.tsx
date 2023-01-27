import BoardDetail_presenter from './BoardDetail_presenter';
import { useQuery, useMutation } from '@apollo/client';
import {
  DELETE_BOARDS,
  DISLIKEBOARD,
  FETCH_BOARD,
  LIKEBOARD,
} from './BoardDetail_queries';
import {
  type IMutationLikeBoardArgs,
  type IMutation,
  type IMutationDeleteBoardArgs,
  type IQuery,
  type IQueryFetchBoardArgs,
  type IMutationDislikeBoardArgs,
} from '@/src/commons/types/generated/types';
import { type IBoardDetail_container_Props } from './BoardDetail_types';

export default function BoardDetail_container(
  props: IBoardDetail_container_Props
) {
  const [likeBoard] = useMutation<
    Pick<IMutation, 'likeBoard'>,
    IMutationLikeBoardArgs
  >(LIKEBOARD);

  const onClickLikeBoard = async () => {
    try {
      await likeBoard({
        variables: { boardId: props.boardId },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: {
              boardId: props.boardId,
            },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const [dislikeBoard] = useMutation<
    Pick<IMutation, 'dislikeBoard'>,
    IMutationDislikeBoardArgs
  >(DISLIKEBOARD);

  const onClickDislikeBoard = async () => {
    try {
      await dislikeBoard({
        variables: { boardId: props.boardId },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: {
              boardId: props.boardId,
            },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const [deleteBoard] = useMutation<
    Pick<IMutation, 'deleteBoard'>,
    IMutationDeleteBoardArgs
  >(DELETE_BOARDS);

  const { data } = useQuery<Pick<IQuery, 'fetchBoard'>, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId: props.boardId,
      },
    }
  );

  const onCLickDeleteBoard = async () => {
    try {
      if (confirm('정말 삭제하시겠습니까?')) {
        await deleteBoard({ variables: { boardId: props.boardId } });
        props.router.push(`/boards`);
      } else {
        return;
      }
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <>
      {(props.router.isReady ?? false) && (
        <BoardDetail_presenter
          data={data}
          router={props.router}
          onCLickDeleteBoard={onCLickDeleteBoard}
          onClickLikeBoard={onClickLikeBoard}
          onClickDislikeBoard={onClickDislikeBoard}
        />
      )}
    </>
  );
}
