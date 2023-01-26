import { IBoardComment } from "@/src/commons/types/generated/types"
import { ChangeEvent } from 'react'
export interface BoardCommentWrite_container_Props{
    isEditing:boolean,
    setIsEditing:(arg:boolean)=>void,
    comment:IBoardComment
    boardId:string
}

export interface BoardCommentWrite_presenter_Props{
    onClickSumit:(e: { preventDefault: () => void })=>Promise<void>,
    onCLickEditBoardComment:(e: { preventDefault: () => void })=>Promise<void>,
    isEditing:boolean

    onChangeWriter:(e:ChangeEvent<HTMLInputElement>)=>void,
    onChangePassword:(e:ChangeEvent<HTMLInputElement>)=>void,
    onChangeRating:(e:ChangeEvent<HTMLInputElement>)=>void,
    onChangeContents:(e:ChangeEvent<HTMLTextAreaElement>)=>void,

    maxText:number,
    valid:boolean,
    writer:string,
    password:string,
    rating:number,
    contents:string,
}