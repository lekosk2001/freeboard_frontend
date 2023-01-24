import BoardCommentList_container from "@/src/components/BoardCommentList/BoardCommentList_container";
import BoardCommentWrite_container from "@/src/components/BoardCommentWrite/BoardCommentWrite_container";
import BoardDetail_container from "@/src/units/detail/BoardDetail_container";
import {useEffect,useState} from 'react';
import { useRouter } from 'next/router'

export default function index() {
    
    // const [boardId,setBoardId] = useState('')
    const router = useRouter();
    const boardId = String(router.query.boardId)
    
    // useEffect(() => {
    //     if(!router.isReady) return;
    //     setBoardId(String(router.query.boardId))
    // }, [router.isReady])

    return (
        <>
            <BoardDetail_container boardId={boardId} router={router}/>
            <BoardCommentWrite_container boardId={boardId} isEditing={false}/>
            <BoardCommentList_container boardId={boardId}/>
        </>
    )
}
