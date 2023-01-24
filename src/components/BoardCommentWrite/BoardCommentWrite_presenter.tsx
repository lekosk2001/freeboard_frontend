import React from 'react'
import * as S from './BoardCommentWrite_styles'

type Props = {
    onClickSumit:(e)=>Promise<void>,

    onChangeWriter:(e)=>void,
    onChangePassword:(e)=>void,
    onChangeRating:(e)=>void,
    onChangeContents:(e)=>void,

    maxText:number,
    valid:boolean,
    writer:string,
    password:string,
    rating:number,
    contents:string,
}

const BoardCommentWrite_presenter = (props: Props) => {
    return (
            <S.WriteComment>
                <S.CommetLabel>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 14H3.17L2.58 14.59L2 15.17V2H18V14ZM8.5 12H16V10H10.5L8.5 12ZM12.36 6.13C12.56 5.93 12.56 5.62 12.36 5.42L10.59 3.65C10.39 3.45 10.08 3.45 9.88 3.65L4 9.53V12H6.47L12.36 6.13Z" fill="#FFD600"/>
                    </svg>
                    <h4>댓글</h4>
                </S.CommetLabel>
                <S.CommnetWriteHead>
                    <S.Input placeholder='작성자' onChange={props.onChangeWriter} value={props.writer}></S.Input>
                    <S.Input placeholder='비밀번호' onChange={props.onChangePassword} value={props.password}></S.Input>
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
                </S.CommnetWriteHead>
                <S.CommetWriteBox
                    onChange={props.onChangeContents}
                    value={props.contents}
                    placeholder='개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.'
                ></S.CommetWriteBox>
                <S.CommentSubmitBox>
                    <S.CommentLength>{props.contents.length}/{props.maxText}</S.CommentLength>
                    <S.CommentSubmitButton onClick={props.onClickSumit} valid={props.valid} disabled={!props.valid}>
                        등록하기
                    </S.CommentSubmitButton>
                </S.CommentSubmitBox>
            </S.WriteComment>
    )
}

export default BoardCommentWrite_presenter

