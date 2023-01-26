import { IQuery } from "@/src/commons/types/generated/types";

export interface IBoardList_presenter_Props{
    onClickBoardDetail:(arg:string)=>void;
    onClickBoardNew:()=>void;
    data?: Pick<IQuery,"fetchBoards">;
}