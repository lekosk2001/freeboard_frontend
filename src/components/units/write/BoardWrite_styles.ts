import styled from '@emotion/styled';

export const Form = styled.form`
	display: flex;
	padding: 48px 60px 100px 60px;
	box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
	flex-direction: column;

	h1 {
		text-align: center;
		margin-bottom: 80px;
	}

	.writer {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 24px;
		div {
			flex: 1;
		}
	}

	@media (max-width: 768px) {
		.writer {
			flex-direction: column;
			gap: 0px;
		}
	}
`;

export const SubmitButton = styled.button<{ valid: boolean }>`
	font-size: 16px;
	font-weight: 500;
	width: 179px;
	height: 52px;
	align-self: center;
	cursor: ${(props) => (props.valid ? 'pointer' : 'default')};
	border: 0px;
	background-color: ${(props) => (props.valid ? '#FFD600' : 'gray')};
`;


export const BackButton = styled.button`
    align-self: flex-end;
    border-radius: 16px;
    width: 40px;
    height: 40px;
    background-color:#4F4F4F;
    font-size: 14px;
    font-weight: 700;
    color: #BDBDBD;
`

export const InputWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-bottom: 40px;

	.alert {
		margin-top: 6px;
		margin-bottom: -24px;
		color: red;
	}

	label {
		display: flex;
		font-family: Noto Sans CJK KR;
		font-weight: 500;
		line-height: 24px;
		letter-spacing: 0em;
		text-align: left;
		margin-bottom: 16px;
	}

	input {
		box-sizing: border-box;
		font-size: 16px;
		height: 52px;
		border: 1px solid #bdbdbd;
		padding-left: 16px;
		&::placeholder {
			color: #bdbdbd;
		}
	}

	textarea {
		font-size: 16px;
		padding: 14px 16px;
		height: 480px;
		resize: none;
		border: 1px solid #bdbdbd;
	}

	.zipcode {
		display: flex;
		margin-bottom: 16px;

		input {
			padding-left: 13px;
			width: 72px;
			margin-right: 16px;
		}
		button {
			width: 124px;
			color: #fff;
			background-color: #000;
			cursor: pointer;
		}
	}

	.address {
		margin-bottom: 30px;
	}

	.uploadImages {
		display: flex;
		flex-wrap: nowrap;
		gap: 24px;

		.uploadImage {
			cursor: pointer;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 78px;
			height: 78px;
			background-color: #bdbdbd;

			svg {
				margin-bottom: 5px;
			}
		}
	}

	.radios {
		display: flex;
		align-items: center;
		gap: 22px;

		label {
			margin: 0px 0px 0px 10px;
		}

		span {
			display: flex;
			align-items: center;
		}
	}
`;
