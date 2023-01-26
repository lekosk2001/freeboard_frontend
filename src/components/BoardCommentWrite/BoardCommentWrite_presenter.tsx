import { CommentOutlined } from '@ant-design/icons';
import * as S from './BoardCommentWrite_styles';
import { type BoardCommentWrite_presenter_Props } from './BoardCommentWrite_types';

const BoardCommentWrite_presenter = (
  props: BoardCommentWrite_presenter_Props
) => {
  return (
    <S.WriteComment>
      {!props.isEditing && (
        <S.CommetLabel>
          <CommentOutlined style={{ fontSize: '18px' }} />
          <h4>댓글</h4>
        </S.CommetLabel>
      )}
      <S.CommnetWriteHead>
        <S.Input
          readOnly={props.isEditing}
          placeholder="작성자"
          onChange={props.onChangeWriter}
          value={props.writer}
        ></S.Input>
        <S.Input
          autoComplete="off"
          placeholder="비밀번호"
          onChange={props.onChangePassword}
          value={props.password}
          type="password"
        ></S.Input>
        <S.RateStars>
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
              fill="#BDBDBD"
            />
          </svg>
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
              fill="#BDBDBD"
            />
          </svg>
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
              fill="#BDBDBD"
            />
          </svg>
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
              fill="#BDBDBD"
            />
          </svg>
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
              fill="#BDBDBD"
            />
          </svg>
        </S.RateStars>
      </S.CommnetWriteHead>
      <S.CommetWriteBox
        onChange={props.onChangeContents}
        value={props.contents}
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
      ></S.CommetWriteBox>
      <S.CommentSubmitBox>
        <S.CommentLength>
          {props.contents.length}/{props.maxText}
        </S.CommentLength>
        <S.CommentSubmitButton
          onClick={
            props.isEditing ? props.onCLickEditBoardComment : props.onClickSumit
          }
          valid={props.valid}
          disabled={!props.valid}
        >
          {props.isEditing ? '수정하기' : '등록하기'}
        </S.CommentSubmitButton>
      </S.CommentSubmitBox>
    </S.WriteComment>
  );
};

export default BoardCommentWrite_presenter;
