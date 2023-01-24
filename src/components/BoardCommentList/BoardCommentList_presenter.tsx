
import React from 'react'
import BoardCommentList_item from './BoardCommentList_item'
import * as S from './BoardCommentList_styles'

type Props = {
    CommentsData:any
    onCLickDeleteBoardComment:(
        boardCommentId:string
    )=>{}
    boardId:string
}

export default function BoardCommentList_presenter(props: Props) {
    
    const CommentsData = props.CommentsData;
    console.log(CommentsData?.fetchBoardComments)
    return (
        <S.CommentsList>
            {CommentsData?.fetchBoardComments.map((comment)=>{ return (
                <BoardCommentList_item
                    key={comment._id}
                    comment={comment}
                    onCLickDeleteBoardComment={props.onCLickDeleteBoardComment}
                    boardId={props.boardId}
                />
                
            )})}
        </S.CommentsList>
    )
}