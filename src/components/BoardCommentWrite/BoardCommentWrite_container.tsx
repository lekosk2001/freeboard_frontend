import React from 'react'
import BoardCommentWrite_presenter from './BoardCommentWrite_presenter'

type Props = {
    boardId:string
    router:{}
}

const BoardCommentWrite_container = (props: Props) => {
    return (
        <BoardCommentWrite_presenter/>
    )
}

export default BoardCommentWrite_container