import * as S from './BoardCommentList_styles';
import { dateFormat } from '@/src/commons/utils/utils';
import BoardCommentWrite_container from '../BoardCommentWrite/BoardCommentWrite_container';
import React, { useState } from 'react';
import { type BoardCommentList_item_Props } from './BoardCommentList_types';
import { Rate } from 'antd';
const BoardCommentList_item = (props: BoardCommentList_item_Props) => {
  const comment = props.comment;

  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      {!isEditing && (
        <S.CommentBox id={comment._id}>
          <S.CommentWriterIcon>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM20 6C23.32 6 26 8.68 26 12C26 15.32 23.32 18 20 18C16.68 18 14 15.32 14 12C14 8.68 16.68 6 20 6ZM20 34.4C15 34.4 10.58 31.84 8 27.96C8.06 23.98 16 21.8 20 21.8C23.98 21.8 31.94 23.98 32 27.96C29.42 31.84 25 34.4 20 34.4Z"
                fill="#BDBDBD"
              />
            </svg>
          </S.CommentWriterIcon>
          <S.CommentContents>
            <S.CommentHead>
              <S.CommentHeadLeftside>
                <S.CommentWriter>{comment.writer}</S.CommentWriter>
                <Rate />
              </S.CommentHeadLeftside>

              <S.CommentButtons>
                <S.CommentButton
                  onClick={() => {
                    setIsEditing(true);
                  }}
                >
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.06 6.02L11.98 6.94L2.92 16H2V15.08L11.06 6.02ZM14.66 0C14.41 0 14.15 0.1 13.96 0.29L12.13 2.12L15.88 5.87L17.71 4.04C18.1 3.65 18.1 3.02 17.71 2.63L15.37 0.29C15.17 0.09 14.92 0 14.66 0ZM11.06 3.19L0 14.25V18H3.75L14.81 6.94L11.06 3.19Z"
                      fill="#BDBDBD"
                    />
                  </svg>
                </S.CommentButton>
                <S.CommentButton
                  onClick={() => {
                    props.onCLickDeleteBoardComment(comment._id);
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                      fill="#BDBDBD"
                    />
                  </svg>
                </S.CommentButton>
              </S.CommentButtons>
            </S.CommentHead>
            <S.CommentBody>{comment.contents}</S.CommentBody>
            <S.Space hight={20}></S.Space>
            <S.CommentFooter>{dateFormat(comment.createdAt)}</S.CommentFooter>
          </S.CommentContents>
        </S.CommentBox>
      )}
      {isEditing && (
        <BoardCommentWrite_container
          comment={comment}
          isEditing={true}
          setIsEditing={setIsEditing}
        />
      )}
    </>
  );
};

export default BoardCommentList_item;
