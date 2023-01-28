import { type IQuery } from '@/src/commons/types/generated/types';

export interface IBoardList_presenter_Props {
  onClickBoardDetail: (arg: string) => void;
  onClickBoardNew: () => void;
  data?: Pick<IQuery, 'fetchBoards'>;
  onClickPage:(e:React.MouseEvent<HTMLDivElement>)=>void;
  pageNumber:number;
  startPage:number;
  onClickPrev:()=>void;
  onClickNext:()=>void;
}