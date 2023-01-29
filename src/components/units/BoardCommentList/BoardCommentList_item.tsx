import * as S from './BoardCommentList_styles';
import { dateFormat } from '@/src/commons/utils/utils';
import BoardCommentWrite_container from '../BoardCommentWrite/BoardCommentWrite_container';
import React, { useState } from 'react';
import { type BoardCommentList_item_Props } from './BoardCommentList_types';
import { Avatar, Rate } from 'antd';
import { CloseOutlined, EditOutlined, UserOutlined } from '@ant-design/icons';
const BoardCommentList_item = (props: BoardCommentList_item_Props) => {
	const comment = props.comment;

	const [isEditing, setIsEditing] = useState(false);

	return (
		<>
			{!isEditing && (
				<S.CommentBox id={comment._id}>
					<S.CommentWriterIcon>
						<Avatar
							size={40}
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
							icon={<UserOutlined />}
						/>
					</S.CommentWriterIcon>
					<S.CommentContents>
						<S.CommentHead>
							<S.CommentHeadLeftside>
								<S.CommentWriter>
									{comment.writer}
								</S.CommentWriter>
								<Rate disabled value={comment.rating} />
							</S.CommentHeadLeftside>

							<S.CommentButtons>
								<S.CommentButton
									onClick={() => {
										setIsEditing(true);
									}}
								>
									<EditOutlined
										style={{
											fontSize: '18px',
											color: '#bdbdbd',
										}}
									/>
								</S.CommentButton>
								<S.CommentButton
									onClick={() => {
										props.onCLickDeleteBoardComment(
											comment._id
										);
									}}
								>
									<CloseOutlined
										style={{
											fontSize: '18px',
											color: '#bdbdbd',
										}}
									/>
								</S.CommentButton>
							</S.CommentButtons>
						</S.CommentHead>
						<S.CommentBody>{comment.contents}</S.CommentBody>
						<S.Space hight={20}></S.Space>
						<S.CommentFooter>
							{dateFormat(comment.createdAt)}
						</S.CommentFooter>
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
