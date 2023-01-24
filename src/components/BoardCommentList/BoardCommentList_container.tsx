import React from 'react'
import BoardCommentList_presenter from './BoardCommentList_presenter'
import { useQuery } from '@apollo/client'
import { FETCH_BOARD_COMMENT } from "@/src/components/BoardCommentList/BoardCommentList_queries";

type Props = {
    boardId:string
}

export default function BoardCommentList_container (props: Props) {

    const {data:CommentsData} = useQuery(FETCH_BOARD_COMMENT,{
        variables:{
            boardId:props.boardId,
            page:1
        }
    })

    return (
        <BoardCommentList_presenter
            CommentsData={CommentsData}/>
    )
}

