import styled from '@emotion/styled';

export const BestWrapper = styled.section`
	h1 {
		text-align: center;
	}
	display: flex;
	flex-direction: column;
	gap: 40px;
`;

export const BestCards = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 24px;
`;

export const Card = styled.section`
	width: 282px;
	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
	border-radius: 20px;
	height: 257px;
`;

export const ListsWrapper = styled.section`
	display: flex;
	flex-direction: column;
	gap: 40px;
`;
export const ListsHead = styled.div`
	display: flex;
	height: 52px;
	justify-content: space-between;
	gap: 40px;
`;
export const SearchBarBox = styled.div`
	height: 52px;
	background: #f2f2f2;
	border-radius: 10px;
	width: 776px;
	display: flex;
	align-items: center;
	padding-left: 20px;
	gap: 11px;
	input {
		font-size: 16px;
		height: 100%;
		width: 100%;
		padding: 0px 10px;
		border: 0px solid inherit;
		background-color: inherit;
		align-items: center;
		line-height: 52px;
	}
`;

export const DateInputBox = styled.div`
	height: 52px;
	display: flex;
	border: 1px solid #bdbdbd;
	align-items: center;
	padding: 0px 16px;
	gap: 8px;
	color: #bdbdbd;
`;

export const SearchButton = styled.button`
	height: 52px;
	min-width: 94px;
	cursor: pointer;
	border-radius: 10px;
	background-color: #000;
	color: #fff;
`;

export const Lists = styled.div`
	border-top: 1px solid #000;
	border-bottom: 1px solid #000;
`;

export const Column = styled.span`
	white-space: nowrap;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 16px;
	&:nth-of-type(1) {
		display: flex;
		width: 50px;
	}
	&:nth-of-type(2) {
		display: flex;
		flex-grow: 1;
	}
	&:nth-of-type(3) {
		display: flex;
		width: 100px;
	}
	&:nth-of-type(4) {
		display: flex;
		width: 100px;
	}
`;

export const Tab = styled.div`
	font-size: 18px;
	align-items: center;
	display: flex;
	padding: 0px 10px;
	border-bottom: 1px solid #bdbdbd;
	justify-content: space-between;
	height: 52px;
	p {
		font-size: 18px;
		font-weight: 500;
		align-items: center;
		color: #000;
	}
`;

export const Row = styled.div`
	&:hover {
		background-color: #bdbdbd;
	}
	cursor: pointer;
	color: #4f4f4f;
	display: flex;
	padding: 0px 10px;
	justify-content: space-between;
	border-bottom: 1px solid #bdbdbd;
	height: 51px;
	&:last-child {
		border-bottom: 0px;
	}
`;

export const Pagenation = styled.div`
	display: flex;
	justify-content: center;
	position: relative;
`;

export const PageButtons = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
`;

export const ArrowButton = styled.div`
	cursor: pointer;
	padding: 5px;
`;

export const PageButton = styled.div<{ active?: boolean }>`
	padding: 10px;
	cursor: pointer;
	color: ${(props) => (props.active ?? false ? '#FFD600' : 'default')};
`;

export const CreateBotton = styled.button`
	position: absolute;
	right: 0px;
	display: flex;
	cursor: pointer;
	align-items: center;
	justify-content: center;
	gap: 8px;
	width: 171px;
	font-size: 16px;
	font-weight: 500;
	height: 52px;
	background-color: #fff;
	border: 1px solid #f2f2f2;
	border-radius: 10px;
`;
