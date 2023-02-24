import {
	type IBoardComment,
	type IQuery,
} from '@/src/commons/types/generated/types';

export interface BoardCommentList_container_Props {
	boardId: string;
}

export interface BoardCommentList_presenter_Props {
	CommentsData?: Pick<IQuery, 'fetchBoardComments'>;
	onCLickDeleteBoardComment: (arg0: string) => void;
	onLoadMore: (page: number) => void;
}

export interface BoardCommentList_item_Props {
	onCLickDeleteBoardComment: (arg0: string) => void;
	comment: IBoardComment;
}

