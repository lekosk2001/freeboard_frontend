import BoardWrite_presenter from './BoardDetail_presenter'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { FETCH_BOARD } from './BoardDetail_queries'

export default function BoardDetail_container() {
    const router = useRouter();
    const boardId = router.query.boardId;
    
    const {data} = useQuery(FETCH_BOARD,{
        variables:{
            boardId
        }
    });

    return (
        <BoardWrite_presenter data={data}/>
    )
}
