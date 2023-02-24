import { type IQuery } from '@/src/commons/types/generated/types';
import { type ChangeEvent, type Dispatch, type SetStateAction } from 'react';
import { type Address } from 'react-daum-postcode';

export interface IBoardWrite_container_Props {
	isEditing: boolean;
}

export interface IUpdatedVariables {
	boardId?: string | string[];
	password: string;
	updateBoardInput: {
		contents: string;
		title: string;
		youtubeUrl: string;
		images: string[];
		boardAddress: {
			zipcode: string;
			address: string;
			addressDetail: string;
		};
	};
}

export interface IBoardWrite_presenter_Props {
	images:string;
	imgUrls:string[];
	onChangeFileUrls:(fileUrl: string, index: number)=>void;
	
	setImgUrls:Dispatch<SetStateAction<string[]>>

	onChangeCoreInput: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	
	onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;

	onChangeRadio: (e: ChangeEvent<HTMLInputElement>) => void;
	handleComplete: (data: Address)=>void

	onSubmit: (e: { preventDefault: () => void }) => void;
	onUpdate: (e: { preventDefault: () => void }) => void;

	valid: boolean;
	isEditing: boolean;
	data?: Pick<IQuery, 'fetchBoard'>;

	isOpen: boolean;
	onToggleModal: () => void;

	zipcode: string;
	address: string;

	files:File[]
	setfles:Dispatch<SetStateAction<File[]>>
}
