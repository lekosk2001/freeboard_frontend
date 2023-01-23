import BoardCommentList_container from "@/src/components/comment/BoardCommentList_container";
import BoardCommentWrite_container from "@/src/components/comment/BoardCommentWrite_container";
import BoardDetail_container from "@/src/units/detail/BoardDetail_container";
import {useEffect,useState} from 'react';
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { FETCH_BOARD_COMMENT } from "@/src/components/comment/BoardCommentList_queries";


export default function index() {
    
    const [boardId,setBoardId] = useState('')
    const router = useRouter();
    
    useEffect(() => {
        if(!router.isReady) return;
        setBoardId(String(router.query.boardId))
    }, [router.isReady])

    const {data:CommentsData} = useQuery(FETCH_BOARD_COMMENT,{
        variables:{
            boardId,
            page:1
        }
    })


    return (
        <>
            <BoardDetail_container boardId={boardId} router={router}/>
            <BoardCommentWrite_container/>
            <BoardCommentList_container CommentsData={CommentsData}/>
        </>
    )
}
