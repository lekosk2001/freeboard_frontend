import React from 'react';
import BoardCommentList_item from './BoardCommentList_item';
import * as S from './BoardCommentList_styles';
import { type IBoardComment } from '@/src/commons/types/generated/types';
import { type BoardCommentList_presenter_Props } from './BoardCommentList_types';
import InfiniteScroll from 'react-infinite-scroller';

export default function BoardCommentList_presenter(
	props: BoardCommentList_presenter_Props
) {
	return (
		<S.CommentsList>
			{props.CommentsData?.fetchBoardComments.map(
				(comment: IBoardComment) =>
					<InfiniteScroll
						pageStart={0}
						loadMore={props.onLoadMore}
						key={comment._id}
						hasMore={true}
					// loader={
					//   <div className="loader" key={0}>
					//     Loading ...
					//   </div>
					// }
					>
						{
							<BoardCommentList_item
								comment={comment}
								onCLickDeleteBoardComment={
									props.onCLickDeleteBoardComment
								}
							/>
						}
					</InfiniteScroll>
			)}
		</S.CommentsList>
	);
}
