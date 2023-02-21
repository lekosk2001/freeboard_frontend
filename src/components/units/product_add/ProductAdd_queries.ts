import { gql } from '@apollo/client';

export const CREATE_USED_ITEM = gql`
	mutation createUseditem(
		$createUseditemInput: CreateUseditemInput!
	) {
		createUseditem(
			createUseditemInput: $createUseditemInput
		) {
			_id
		}
	}
`;

export const UPDATE_USED_ITEM = gql`
	mutation updateUseditem(
		$useditemId:ID!
		$updateUseditemInput: UpdateUseditemInput!
	) {
		updateUseditem(
			useditemId:$useditemId
			updateUseditemInput: $updateUseditemInput
		) {
			_id
		}
	}
`;