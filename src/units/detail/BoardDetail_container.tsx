import {useEffect,useState} from 'react';
import BoardDetail_presenter from './BoardDetail_presenter'
import { useQuery,useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { DELETE_BOARDS, FETCH_BOARD, FETCH_BOARD_COMMENT } from './BoardDetail_queries'


export default function BoardDetail_container() {

    const [deleteBoard] = useMutation(DELETE_BOARDS);
    const [boardId,setBoardId] = useState('')
    const router = useRouter();

    useEffect(() => {
        if(!router.isReady) return;
        setBoardId(String(router.query.boardId))
    }, [router.isReady])

    const {data} = useQuery(FETCH_BOARD,{
        variables:{
            boardId
        }
    });

    const {data:CommentsData} = useQuery(FETCH_BOARD_COMMENT,{
        variables:{
            boardId,
            page:1
        }
    })

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
        <>
            {router.isReady&&<BoardDetail_presenter
                data={data}
                router={router}
                onCLickDeleteBoard={onCLickDeleteBoard}
                CommentsData={CommentsData}
            />}
        </>
    )
}
