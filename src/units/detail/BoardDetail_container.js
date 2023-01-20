import BoardDetail_presenter from './BoardDetail_presenter'
import { useQuery,useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { DELETE_BOARDS, FETCH_BOARD } from './BoardDetail_queries'

export default function BoardDetail_container() {

    const [deleteBoard] = useMutation(DELETE_BOARDS);

    const router = useRouter();
    const boardId = router.query.boardId;
    
    const {data} = useQuery(FETCH_BOARD,{
        variables:{
            boardId
        }
    });

    const onCLickDeleteBoard = async (boardId) => {
        try {
            if (confirm("정말 삭제하시겠습니까?") === true){
                await deleteBoard({variables: {boardId}})
                router.push(`/boards`)
            }else{
                return
            }

        } catch(error) {
            alert(error.message)
        }
    }


    return (
        <BoardDetail_presenter
            data={data}
            onCLickDeleteBoard={onCLickDeleteBoard}
        />
    )
}
