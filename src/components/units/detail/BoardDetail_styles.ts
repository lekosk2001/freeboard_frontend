import styled from '@emotion/styled';

export const ContentsWrapper = styled.section`
	display: flex;
	padding: 60px 101px 100px 100px;
	flex-direction: column;
	box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const ContentHead = styled.div`
	margin-top: 20px;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #bdbdbd;
	padding-bottom: 24px;
	flex-wrap: wrap;
	gap: 30px;
`;

export const ContentHeadButtons = styled.div`
	display: flex;
	gap: 20px;
	align-items: center;
	svg {
		cursor: pointer;
	}
`;

export const ContentBody = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-top: 80px;
	gap: 40px;

	h1 {
		display: flex;
		align-self: flex-start;
	}
`;

export const Profile = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;

	span {
		display: flex;
		flex-direction: column;
	}

	h4 {
		font-weight: 400;
		color: #828282;
	}
`;

export const ImageWrapper = styled.div`
`

export const Image = styled.img``

export const LikeButtons = styled.div`
	display: flex;
	margin-top: 120px;
	gap: 40px;
`;

export const LikeButton = styled.button`
	cursor: pointer;
	background-color: inherit;
	border: 0px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	h3 {
		font-weight: 400;
		color: #1677ff;
	}
	span {
		transition: all 0.2s ease;
		border-radius: 4px;
		:hover {
			color: #fff;
			background-color: #1677ff;
		}
	}
`;

export const DislikeButton = styled.button`
	cursor: pointer;
	background-color: inherit;
	border: 0px;
	width: 40px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	h3 {
		font-weight: 400;
		color: #828282;
	}
	span {
		transition: all 0.05s ease;
		border-radius: 4px;
		:hover {
			color: #fff;
			background-color: #1677ff;
		}
	}
`;

export const TextBox = styled.h4`
	font-weight: 400;
	font-size: 16px;
	color: #000000;
	font-weight: 400;
	margin-bottom: 120px;
	align-self: flex-start;
`;

export const ImageBox = styled.div`
	background-color: #bdbdbd;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	max-height: 480px;
	overflow: hidden;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	margin-bottom: 40px;
`;

export const YoutubeBox = styled.div`
	height: 600px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const PlayButton = styled.div``;
