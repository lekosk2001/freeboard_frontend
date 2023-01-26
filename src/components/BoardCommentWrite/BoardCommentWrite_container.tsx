import React, { type ChangeEvent, useEffect, useState } from 'react';
import BoardCommentWrite_presenter from './BoardCommentWrite_presenter';
import { useMutation } from '@apollo/client';
import { CREATE_BOARD_COMMENT } from './BoardCommentWrite_queries';
import {
  FETCH_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from '../BoardCommentList/BoardCommentList_queries';
import { useRouter } from 'next/router';
import { type BoardCommentWrite_container_Props } from './BoardCommentWrite_types';
import {
  type IMutation,
  type IMutationCreateBoardCommentArgs,
  type IMutationUpdateBoardCommentArgs,
} from '@/src/commons/types/generated/types';

const BoardCommentWrite_container = (
  props: BoardCommentWrite_container_Props
) => {
  const router = useRouter();
  const boardId = String(router.query.boardId);

  const comment = props.comment;

  useEffect(() => {
    if (props.isEditing && comment != null) {
      setWriter(comment.writer != null ? comment.writer : '');
      setRating(comment.rating);
      setContents(comment.contents);
    }
  }, []);

  const [createBoardComment] = useMutation<
    Pick<IMutation, 'createBoardComment'>,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const [rating, setRating] = useState(0);
  const [contents, setContents] = useState('');

  const [valid, setValid] = useState(false);

  const onChangeWriter = (e: ChangeEvent<HTMLInputElement>) => {
    setWriter(e.target.value);
    if (e.target.value !== '' && password !== '' && contents !== '') {
      setValid(true);
    } else setValid(false);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (writer !== '' && e.target.value !== '' && contents !== '') {
      setValid(true);
    } else setValid(false);
  };

  const onChangeRating = (e: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(e.target.value));
  };

  const onChangeContents = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (contents.length > maxText) {
      if (writer !== '' && password !== '' && e.target.value !== '') {
        setValid(true);
      } else setValid(false);
      setContents(e.target.value.substr(0, maxText));
    } else {
      setContents(e.target.value);
      if (writer !== '' && password !== '' && e.target.value !== '') {
        setValid(true);
      } else setValid(false);
    }
  };

  const onClickSumit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (writer !== '' && password !== '' && contents !== '') {
      try {
        await createBoardComment({
          variables: {
            boardId,
            createBoardCommentInput: {
              writer,
              contents,
              password,
              rating,
            },
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENT,
              variables: {
                boardId,
                page: 1,
              },
            },
          ],
        });
        setWriter('');
        setPassword('');
        setRating(0);
        setContents('');
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    }
  };

  const [updateBoardComment] = useMutation<
    Pick<IMutation, 'updateBoardComment'>,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);
  const onCLickEditBoardComment = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (comment?._id == null) {
      return;
    }
    try {
      await updateBoardComment({
        variables: {
          password,
          boardCommentId: comment._id,
          updateBoardCommentInput: {
            contents,
            rating,
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENT,
            variables: {
              boardId,
            },
          },
        ],
      });
      props.setIsEditing(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const maxText = 100;

  return (
    <BoardCommentWrite_presenter
      onClickSumit={onClickSumit}
      onCLickEditBoardComment={onCLickEditBoardComment}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeRating={onChangeRating}
      onChangeContents={onChangeContents}
      writer={writer}
      password={password}
      rating={rating}
      contents={contents}
      maxText={maxText}
      valid={valid}
      isEditing={props.isEditing}
    />
  );
};

export default BoardCommentWrite_container;
