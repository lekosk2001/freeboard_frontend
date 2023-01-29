import { type IBoardComment } from '@/src/commons/types/generated/types';
import { type MouseEventHandler, type ChangeEvent } from 'react';
export interface BoardCommentWrite_container_Props {
	isEditing: boolean;
	setIsEditing: ((arg: boolean) => void) | (() => void);
	comment: IBoardComment | null;
}

export interface BoardCommentWrite_presenter_Props {
	onClickSumit: MouseEventHandler<HTMLButtonElement> | undefined;
	onCLickEditBoardComment: MouseEventHandler<HTMLButtonElement> | undefined;
	isEditing: boolean;
	onChangeRate: (args: number) => void;
	setIsEditing: ((arg: boolean) => void) | (() => void);

	onChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void;
	onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
	onChangeRating: (e: ChangeEvent<HTMLInputElement>) => void;
	onChangeContents: (e: ChangeEvent<HTMLTextAreaElement>) => void;
	onClickCancleButton: (e: { preventDefault: () => void }) => void;

	maxText: number;
	valid: boolean;
	writer: string;
	password: string;
	rating: number;
	contents: string;
}
