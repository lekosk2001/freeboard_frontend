import { gql } from '@apollo/client'

export const FETCH_BOARD_COMMENT = gql`
    query fetchBoardComments($boardId:ID!,$page:Int){
        fetchBoardComments(boardId:$boardId,page:$page){
            _id writer contents rating  createdAt updatedAt deletedAt
            
        }
    }
`

export const DELETE_BOARDS_COMMNET = gql`
    mutation deleteBoardComment ($boardCommentId:ID!,$password:String){
        deleteBoardComment(boardCommentId:$boardCommentId,password:$password)
    }
`