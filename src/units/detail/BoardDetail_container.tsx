import BoardDetail_presenter from './BoardDetail_presenter'
import { useQuery,useMutation } from '@apollo/client'
import { DELETE_BOARDS, FETCH_BOARD } from './BoardDetail_queries'


export default function BoardDetail_container(props) {

    const [deleteBoard] = useMutation(DELETE_BOARDS);

    const {data} = useQuery(FETCH_BOARD,{
        variables:{
            boardId:props.boardId
        }
    });

    const onCLickDeleteBoard = async (boardId) => {
        try {
            if (confirm("정말 삭제하시겠습니까?") === true){
                await deleteBoard({variables: {boardId}})
                props.router.push(`/boards`)
            }else{
                return
            }

        } catch(error) {
            alert(error.message)
        }
    }

    return (
        <>
            {props.router.isReady&&<BoardDetail_presenter
                data={data}
                router={props.router}
                onCLickDeleteBoard={onCLickDeleteBoard}
            />}
        </>
    )
}
