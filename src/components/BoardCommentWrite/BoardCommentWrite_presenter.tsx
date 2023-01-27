import { CloseCircleOutlined, CommentOutlined } from '@ant-design/icons';
import { Rate } from 'antd';
import * as S from './BoardCommentWrite_styles';
import * as SS from '@/src/components/BoardCommentList/BoardCommentList_styles';
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
          <Rate value={props.rating} onChange={props.onChangeRate} />
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
        <S.CommentSubmitBoxRightside>
          {props.isEditing && (
            <SS.CommentButton
              onClick={(e) => {
                props.onClickCancleButton(e);
              }}
            >
              {' '}
              <CloseCircleOutlined
                style={{ fontSize: '18px', color: '#bdbdbd' }}
              />
            </SS.CommentButton>
          )}

          <S.CommentSubmitButton
            onClick={
              props.isEditing
                ? props.onCLickEditBoardComment
                : props.onClickSumit
            }
            valid={props.valid}
            disabled={!props.valid}
          >
            {props.isEditing ? '수정하기' : '등록하기'}
          </S.CommentSubmitButton>
        </S.CommentSubmitBoxRightside>
      </S.CommentSubmitBox>
    </S.WriteComment>
  );
};

export default BoardCommentWrite_presenter;
