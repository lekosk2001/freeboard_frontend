import { gql } from '@apollo/client'

export const FETCH_BOARD = gql`
    query fetchBoard ($boardId:ID!){
        fetchBoard(boardId:$boardId){
            _id writer title contents youtubeUrl likeCount
            dislikeCount images createdAt updatedAt deletedAt
            boardAddress{
                _id zipcode address addressDetail createdAt updatedAt deletedAt
            }
        }
    }
`

export const DELETE_BOARDS = gql`
    mutation deleteBoard ($boardId:ID!){
        deleteBoard(boardId:$boardId)
    }
`

export const FETCH_BOARD_COMMENT = gql`
    query fetchBoardComments($boardId:ID!,$page:Int){
        fetchBoardComments(boardId:$boardId,page:$page){
            _id writer contents rating  createdAt updatedAt deletedAt
            
        }
    }
`