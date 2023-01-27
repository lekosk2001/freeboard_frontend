import { useQuery } from '@apollo/client';
import BoardList_presenter from './BoardList_presenter';
import { FETCH_BOARDS } from './BoardList_queries';
import { useRouter } from 'next/router';
import {
  type IQuery,
  type IQueryFetchBoardsArgs,
} from '@/src/commons/types/generated/types';

export default function BoardList_container() {
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(
    FETCH_BOARDS,
    {
      variables: {
        page: 1,
      },
    }
  );

  const onClickBoardNew = () => {
    void router.push(`/boards/new`);
  };

  const onClickBoardDetail = (id: string) => {
    void router.push(`/boards/${id}`);
  };

  return (
    <BoardList_presenter
      data={data}
      onClickBoardNew={onClickBoardNew}
      onClickBoardDetail={onClickBoardDetail}
    />
  );
}
