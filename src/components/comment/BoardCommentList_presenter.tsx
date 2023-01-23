import React from 'react'
import * as S from './BoardCommentList_styles'


type Props = {
  CommentsData:any
}


export default function BoardCommentList_presenter(props: Props) {

  const CommentsData = props.CommentsData;

  return (
    <S.CommentsList>
                {CommentsData?.fetchBoardComments.map((comment)=>{
                    return <S.CommentBox key={comment._id}>
                        <S.CommentWriterIcon>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM20 6C23.32 6 26 8.68 26 12C26 15.32 23.32 18 20 18C16.68 18 14 15.32 14 12C14 8.68 16.68 6 20 6ZM20 34.4C15 34.4 10.58 31.84 8 27.96C8.06 23.98 16 21.8 20 21.8C23.98 21.8 31.94 23.98 32 27.96C29.42 31.84 25 34.4 20 34.4Z" fill="#BDBDBD"/>
                            </svg>
                        </S.CommentWriterIcon>
                        <S.CommentContents>
                            <S.CommentHead>
                                <S.CommentWriter>{comment.writer}</S.CommentWriter>
                                <S.RateStars>
                                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#BDBDBD"/>
                                    </svg>
                                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#BDBDBD"/>
                                    </svg>
                                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#BDBDBD"/>
                                    </svg>
                                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#BDBDBD"/>
                                    </svg>
                                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#BDBDBD"/>
                                    </svg>
                                </S.RateStars>
                            </S.CommentHead>
                            <S.CommentBody>
                                {comment.contents}
                            </S.CommentBody>
                            <S.Space hight={20}></S.Space>
                            <S.CommentFooter>
                                {comment.createdAt}
                            </S.CommentFooter>
                        </S.CommentContents>
                    </S.CommentBox>
                })}
            </S.CommentsList>
  )
}