import { type IQuery } from '@/src/commons/types/generated/types';
import { type ChangeEvent } from 'react';

export interface IBoardList_presenter_Props {
	onClickBoardDetail: (arg: string) => void;
	onClickBoardNew: () => void;
	data?: Pick<IQuery, 'fetchBoards'>;
	refetch: any;
	count: any;
	onChangeSearch:(e:ChangeEvent<HTMLInputElement>)=>void
}
