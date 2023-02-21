import styled from '@emotion/styled';

export const ContentsWrapper = styled.section`
	display: flex;
	max-width: 800px;
	flex-direction: column;
	margin: 0px auto;
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
	padding-top: 20px;
	gap: 80px;
	padding-bottom: 80px;
	border-bottom: 1px solid #BDBDBD;
	margin-bottom: 80px;
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
	display: flex;
	gap:20px;
	flex-wrap: wrap;
	justify-content: center;
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


export const ItemInfos = styled.section`
width: 100%;
display: flex;
flex-direction: column;
gap: 10px;
`


export const ItemInfoDetail = styled.section`
	align-items: center;
	display: flex;
	justify-content: space-between;
`


export const PickedCountBox = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
`

export const PickedCount = styled.h3`
	font-size: 18px;
	font-weight: 500;
`;




export const Name = styled.h2`
`



export const Price = styled.h1`
`




export const Remarks = styled.h4`
	font-weight: 500;
	font-size: 18px;
	color: #BDBDBD;
	align-self: flex-start;
`;



export const TextBox = styled.h4`
	font-weight: 500;
	font-size: 18px;
	color: #4F4F4F;
	align-self: flex-start;
`;


export const Tags = styled.div`
width: 100%;
display: flex;
gap: 10px;
padding-bottom: 40px;
margin-top: -40px;
border-bottom: 1px solid #BDBDBD;
`;


export const Tag = styled.p`
font-size: 16px;
color: #BDBDBD;
`;

export const Map = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 360px;
width: 100%;
background-color: #BDBDBD;
`



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
