import { type IQuery } from '@/src/commons/types/generated/types';
import { type ChangeEvent } from 'react';

export interface IBoardList_presenter_Props {
	onClickBoardDetail: (arg: string) => void;
	onClickBoardNew: () => void;
	data?: Pick<IQuery, 'fetchBoards'>;
	refetch: (arg0: { page: number }) => void;
	count: number;
	onChangeSearch:(e:ChangeEvent<HTMLInputElement>)=>void;
	search:string;
}
