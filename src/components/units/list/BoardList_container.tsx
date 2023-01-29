import { useQuery } from '@apollo/client';
import BoardList_presenter from './BoardList_presenter';
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from './BoardList_queries';
import { useRouter } from 'next/router';
import {
	type IQueryFetchBoardsCountArgs,
	type IQuery,
	type IQueryFetchBoardsArgs,
} from '@/src/commons/types/generated/types';

export default function BoardList_container() {
	const router = useRouter();

	const { data, refetch } = useQuery<
		Pick<IQuery, 'fetchBoards'>,
		IQueryFetchBoardsArgs
	>(FETCH_BOARDS);

	const { data: totalBoards } = useQuery<
		Pick<IQuery, 'fetchBoardsCount'>,
		IQueryFetchBoardsCountArgs
	>(FETCH_BOARDS_COUNT);

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
			refetch={refetch}
			count={totalBoards?.fetchBoardsCount}
		/>
	);
}
