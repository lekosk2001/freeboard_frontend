import React from 'react';
import BoardCommentList_item from './BoardCommentList_item';
import * as S from './BoardCommentList_styles';
import { type IBoardComment } from '@/src/commons/types/generated/types';
import { type BoardCommentList_presenter_Props } from './BoardCommentList_types';

export default function BoardCommentList_presenter(
  props: BoardCommentList_presenter_Props
) {
  const CommentsData = props.CommentsData;

  return (
    <S.CommentsList>
      {CommentsData?.fetchBoardComments.map((comment: IBoardComment) => {
        return (
          <BoardCommentList_item
            key={comment._id}
            comment={comment}
            onCLickDeleteBoardComment={props.onCLickDeleteBoardComment}
          />
        );
      })}
    </S.CommentsList>
  );
}
