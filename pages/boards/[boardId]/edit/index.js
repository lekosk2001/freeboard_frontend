import { FETCH_BOARD } from '@/src/units/detail/BoardDetail_queries';
import BoardWrite_container from '@/src/units/write/BoardWrite_container'
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

export default function index() {   
    const router = useRouter();
    const boardId = router.query.boardId;

    const {data} = useQuery(FETCH_BOARD,{
            variables:{
                boardId
            }
        });
    

    return (
        <BoardWrite_container 
            isEditing={true} data={data} boardId={boardId}
        />
    )
}
