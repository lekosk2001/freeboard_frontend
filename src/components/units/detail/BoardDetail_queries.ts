import { gql } from '@apollo/client';

export const FETCH_BOARD = gql`
	query fetchBoard($boardId: ID!) {
		fetchBoard(boardId: $boardId) {
			_id
			writer
			title
			contents
			youtubeUrl
			likeCount
			dislikeCount
			images
			createdAt
			updatedAt
			deletedAt
			boardAddress {
				_id
				zipcode
				address
				addressDetail
				createdAt
				updatedAt
				deletedAt
			}
		}
	}
`;

export const LIKEBOARD = gql`
	mutation likeBoard($boardId: ID!) {
		likeBoard(boardId: $boardId)
	}
`;

export const DISLIKEBOARD = gql`
	mutation dislikeBoard($boardId: ID!) {
		dislikeBoard(boardId: $boardId)
	}
`;

export const DELETE_BOARDS = gql`
	mutation deleteBoard($boardId: ID!) {
		deleteBoard(boardId: $boardId)
	}
`;
