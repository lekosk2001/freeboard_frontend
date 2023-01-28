import { useQuery } from '@apollo/client';
import BoardList_presenter from './BoardList_presenter';
import { FETCH_BOARDS } from './BoardList_queries';
import { useRouter } from 'next/router';
import {
  type IQuery,
  type IQueryFetchBoardsArgs,
} from '@/src/commons/types/generated/types';
import { useState } from 'react';

export default function BoardList_container() {
  const router = useRouter();

  const { data, refetch } = useQuery<
    Pick<IQuery, 'fetchBoards'>,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onClickBoardNew = () => {
    void router.push(`/boards/new`);
  };

  const onClickBoardDetail = (id: string) => {
    void router.push(`/boards/${id}`);
  };

  const onClickPage = (e: React.MouseEvent<HTMLDivElement>) => {
    void refetch({ page: Number(e.currentTarget.id) });
  };

  const [pageNumber] = useState(10);
  const [startPage, setStartPage] = useState(1);

  const onClickPrev = () => {
    if (startPage > 1) {
      setStartPage((prev) => prev - 10);
    }
  };

  const onClickNext = () => {
    setStartPage((prev) => prev + 10);
  };

  return (
    <BoardList_presenter
      data={data}
      onClickBoardNew={onClickBoardNew}
      onClickBoardDetail={onClickBoardDetail}
      onClickPage={onClickPage}
      pageNumber={pageNumber}
      startPage={startPage}
      onClickPrev={onClickPrev}
      onClickNext={onClickNext}
    />
  );
}
