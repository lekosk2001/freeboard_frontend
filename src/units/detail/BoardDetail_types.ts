import { IQuery } from "@/src/commons/types/generated/types";

export interface IBoardDetail_container_Props{
    router: { push: (arg: string)=>void; isReady?: boolean; }
    boardId: string
}

export interface IBoardDetail_presenter_Props {
    router:{push:(arg: string)=>void};
    data?: Pick<IQuery,"fetchBoard">;
    onCLickDeleteBoard: (arg?:string)=> void;
}