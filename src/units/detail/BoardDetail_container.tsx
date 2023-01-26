import BoardDetail_presenter from './BoardDetail_presenter';
import { useQuery, useMutation } from '@apollo/client';
import { DELETE_BOARDS, FETCH_BOARD } from './BoardDetail_queries';
import {
  type IMutation,
  type IMutationDeleteBoardArgs,
  type IQuery,
  type IQueryFetchBoardArgs,
} from '@/src/commons/types/generated/types';
import { type IBoardDetail_container_Props } from './BoardDetail_types';

export default function BoardDetail_container(
  props: IBoardDetail_container_Props
) {
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

  const onCLickDeleteBoard = async (boardId: string) => {
    try {
      if (confirm('정말 삭제하시겠습니까?')) {
        await deleteBoard({ variables: { boardId } });
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
        />
      )}
    </>
  );
}
