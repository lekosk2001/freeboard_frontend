import { Button, Image, Modal } from 'antd';
import DaumPostcodeEmbed from 'react-daum-postcode';
import { Main, Title } from '../../../commons/styles/emotion';
import * as S from './BoardWrite_styles';
import { type IBoardWrite_presenter_Props } from './BoardWrite_types';

export default function BoardWrite_presenter(
	props: IBoardWrite_presenter_Props
) {
	const valid = props.valid;
	const isEditing = props.isEditing;
	const data = props.data?.fetchBoard;

	return (
		<Main>
			<S.Form>
				<Title>게시물 {isEditing ? '수정' : '등록'}</Title>
				<div className="writer">
					<S.InputWrapper>
						<label>작성자</label>
						<input
							onChange={props.onChangeWriter}
							type="text"
							placeholder="이름을 입력해주세요."
							defaultValue={data ? String(data?.writer) : ''}
							readOnly={isEditing}
						/>
						{props.writerError && (
							<p className="alert">이름을 입력해주세요.</p>
						)}
					</S.InputWrapper>
					<S.InputWrapper>
						<label>비밀번호</label>
						<input
							onChange={props.onChangePassword}
							autoComplete="off"
							type="password"
							placeholder="비밀번호를 입력해주세요."
							defaultValue={``}
						/>
						{props.passwordError && (
							<p className="alert">비밀번호를 입력해주세요.</p>
						)}
					</S.InputWrapper>
				</div>
				<S.InputWrapper>
					<label>제목</label>
					<input
						onChange={props.onChangeTitle}
						type="text"
						placeholder="제목을 작성해주세요."
						defaultValue={data?.title}
					/>
					{props.titleError && (
						<p className="alert">제목을 작성해주세요.</p>
					)}
				</S.InputWrapper>

				<S.InputWrapper>
					<label>내용</label>
					<textarea
						onChange={props.onChangeContents}
						placeholder="내용을 작성해주세요."
						defaultValue={data?.contents}
					/>
					{props.contentsError && (
						<p className="alert">내용을 작성해주세요.</p>
					)}
				</S.InputWrapper>
				<S.InputWrapper>
					<label>주소</label>
					<div className="zipcode">
						<input
							disabled
							onChange={props.onChangeZipcode}
							type="text"
							// placeholder="00000"
							value={props.zipcode !== "undefined" ? props.zipcode : ""}
						/>
						<button
							onClick={(e) => {
								e.preventDefault();
								props.onToggleModal();
							}}
						>
							우편번호 검색
						</button>
						{props.isOpen && (
							<Modal
								title={'우편번호 검색'}
								open={props.isOpen}
								onOk={props.onToggleModal}
								onCancel={props.onToggleModal}
							>
								<DaumPostcodeEmbed
									onComplete={props.handleComplete}
								></DaumPostcodeEmbed>
							</Modal>
						)}
					</div>
					<input
						onChange={props.onChangeAddress}
						className="address"
						type="text"
						disabled
						value={props.address !== "undefined" ? props.address : ""}
					/>
					<input
						onChange={props.onChangeAddressDetail}
						type="text"
						defaultValue={
							data?.boardAddress
								? String(data?.boardAddress?.addressDetail)
								: ''
						}
					/>
				</S.InputWrapper>

				<S.InputWrapper>
					<label>유튜브</label>
					<input
						onChange={props.onChangeYoutubeUrl}
						type="text"
						placeholder="링크를 복사해주세요."
						defaultValue={
							data?.youtubeUrl ? String(data?.youtubeUrl) : ''
						}
					/>
				</S.InputWrapper>

				<S.InputWrapper>
					<label>사진업로드</label>
					<Button onClick={props.onClickFile}>사진 업로드</Button>
					<input
						style={{ display: "none" }}
						ref={props.fileRef}
						onChange={props.onChangeFile}
						type="file"

					/>
				</S.InputWrapper>
				{props.imgUrl && <Image src={`https://storage.googleapis.com/${props.imgUrl}`}></Image>}

				<S.InputWrapper>
					<label>사진 첨부</label>
					<div className="uploadImages">
						<span className="uploadImage">
							<svg
								width="14"
								height="14"
								viewBox="0 0 14 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z"
									fill="#4F4F4F"
								/>
							</svg>
							<p>Upload</p>
						</span>
						<span className="uploadImage">
							<svg
								width="14"
								height="14"
								viewBox="0 0 14 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z"
									fill="#4F4F4F"
								/>
							</svg>
							<p>Upload</p>
						</span>
						<span className="uploadImage">
							<svg
								width="14"
								height="14"
								viewBox="0 0 14 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z"
									fill="#4F4F4F"
								/>
							</svg>
							<p>Upload</p>
						</span>
					</div>
				</S.InputWrapper>

				<S.InputWrapper>
					<div className="radios">
						<span>
							<input
								type="radio"
								id="youtube"
								name="radios"
								value="youtube"
								defaultChecked
								onChange={props.onChangeImages}
							/>
							<label htmlFor="youtube">유튜브</label>
						</span>
						<span>
							<input
								type="radio"
								id="image"
								name="radios"
								value="image"
								onChange={props.onChangeImages}
							/>
							<label htmlFor="image">사진</label>
						</span>
					</div>
				</S.InputWrapper>
				<S.SubmitButton
					onClick={isEditing ? props.onUpdate : props.onSubmit}
					valid={valid}
					disabled={!valid}
				>
					{isEditing ? '수정하기' : '등록하기'}
				</S.SubmitButton>
			</S.Form>
		</Main>
	);
}
