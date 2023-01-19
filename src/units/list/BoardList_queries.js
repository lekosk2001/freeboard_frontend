import { gql } from '@apollo/client'

export const FETCH_BOARDS = gql`
    query fetchBoards ($page:Int,$search:String, $startDate:DateTime, $endDate:DateTime){
        fetchBoards(page:$page, search:$search, startDate:$startDate, endDate:$endDate){
            _id writer title createdAt
        }
    }
`