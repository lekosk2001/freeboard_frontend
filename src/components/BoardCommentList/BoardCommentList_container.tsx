import React from 'react'
import BoardCommentList_presenter from './BoardCommentList_presenter'

type Props = {
    CommentsData:{}
}

export default function BoardCommentList_container (props: Props) {

    return (
        <BoardCommentList_presenter
            CommentsData={props.CommentsData}
        />
    )
}

