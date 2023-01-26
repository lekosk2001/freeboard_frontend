import {IBoardComment} from '@/src/commons/types/generated/types'

export interface BoardCommentList_container_Props {
    boardId:string;
}

export interface BoardCommentList_item_Props{
    onCLickDeleteBoardComment:(
        boardCommentId:string
    )=>{};
    boardId:string;
    comment:IBoardComment
}