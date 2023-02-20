import { gql } from '@apollo/client';

export const FETCH_USED_ITEM = gql`
	query fetchUseditem($useditemId: ID!) {
		fetchUseditem(useditemId: $useditemId) {
			_id
			name
			remarks
			contents
			price
			tags
			images
			pickedCount
			soldAt
			createdAt
			updatedAt
			deletedAt
			useditemAddress {
				_id
				zipcode
				address
				addressDetail
				lat
				lng
				createdAt
				updatedAt
				deletedAt
			}
		}
	}
`;

export const DELETE_USED_ITEM= gql`
	mutation deleteUseditem($useditemId: ID!) {
		deleteUseditem(useditemId: $useditemId)
	}
`;
