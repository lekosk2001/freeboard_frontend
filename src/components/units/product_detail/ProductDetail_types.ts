import { type IQuery } from '@/src/commons/types/generated/types';

export interface IBoardDetail_container_Props {
	router: { push: (arg: string) => void; isReady?: boolean; asPath: string };
	boardId: string;
}

export interface IBoardDetail_presenter_Props {
	router: { push: (arg: string) => void; asPath: string };
	data?: Pick<IQuery, 'fetchBoard'>;
	onCLickDeleteBoard: () => void;
	onClickLikeBoard: () => void;
	onClickDislikeBoard: () => void;
}
