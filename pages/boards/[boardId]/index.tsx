import BoardCommentList_container from '@/src/components/units/BoardCommentList/BoardCommentList_container';
import BoardCommentWrite_container from '@/src/components/units/BoardCommentWrite/BoardCommentWrite_container';
import BoardDetail_container from '@/src/components/units/detail/BoardDetail_container';
import { useRouter } from 'next/router';

export default function index() {
  const router = useRouter();
  const boardId = String(router.query.boardId);

  return (
    <>
      {<BoardDetail_container boardId={boardId} router={router} />}
      <BoardCommentWrite_container
        isEditing={false}
        setIsEditing={() => null}
        comment={null}
      />
      <BoardCommentList_container boardId={boardId} />
    </>
  );
}
