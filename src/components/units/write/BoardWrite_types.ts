import { type IQuery } from '@/src/commons/types/generated/types';
import { type UploadFile } from 'antd';
import { type RefObject, type ChangeEvent, type Dispatch, type SetStateAction } from 'react';

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
		images: string;
		boardAddress: {
			zipcode: string;
			address: string;
			addressDetail: string;
		};
	};
}

export interface IBoardWrite_presenter_Props {

	onChangeCoreInput: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	
	onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;

	onChangeImages: (e: ChangeEvent<HTMLInputElement>) => void;
	handleComplete: any;

	writerError: boolean;
	passwordError: boolean;
	titleError: boolean;
	contentsError: boolean;

	onSubmit: (e: { preventDefault: () => void }) => void;
	onUpdate: (e: { preventDefault: () => void }) => void;

	valid: boolean;
	isEditing: boolean;
	data?: Pick<IQuery, 'fetchBoard'>;

	isOpen: boolean;
	onToggleModal: () => void;

	zipcode: string;
	address: string;

	imgUrl:string;
	onClickFile:()=>void
	onChangeFile:(e: ChangeEvent<HTMLInputElement>)=>void
	fileRef:RefObject<HTMLInputElement>

	fileList:UploadFile[];
	handlePreview:(file: UploadFile) => Promise<void>;
	setFileList:Dispatch<SetStateAction<Array<UploadFile<any>>>>
	previewOpen:boolean
	previewTitle:string;
	handleCancel:()=>void;
	previewImage:string
}
