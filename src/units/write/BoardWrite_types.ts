import { type IQuery } from '@/src/commons/types/generated/types';
import { type ChangeEvent } from 'react';

export interface IBoardWrite_container_Props {
  isEditing: boolean;
  boardId?: string | string[];
  data?: Pick<IQuery, 'fetchBoard'>;
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
  onChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeZipcode: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddress: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressDetail: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeYoutubeUrl: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeImages: (e: ChangeEvent<HTMLInputElement>) => void;
  handleComplete:any;

  writerError: boolean;
  passwordError: boolean;
  titleError: boolean;
  contentsError: boolean;

  onSubmit: (e: { preventDefault: () => void }) => void;
  onUpdate: (e: { preventDefault: () => void }) => void;

  valid: boolean;
  isEditing: boolean;
  data?: Pick<IQuery, 'fetchBoard'>;

  isOpen:boolean;
  onToggleModal:()=>void;

  zipcode:string;
  address:string;
}
