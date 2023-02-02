import { Modal } from 'antd';
import DaumPostcodeEmbed from 'react-daum-postcode';
import { Main, Title } from '../../../commons/styles/emotion';
import * as S from './BoardWrite_styles';
import { type IBoardWrite_presenter_Props } from './BoardWrite_types';

import CustomUplaod from '../../commons/upload/CustomUplaod';

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
							id="writer"
							onChange={props.onChangeCoreInput}
							type="text"
							placeholder="이름을 입력해주세요."
							defaultValue={props.data?.fetchBoard.writer ?? ""}
							readOnly={!!props.data?.fetchBoard.writer}
						/>
						{/* {props.writerError && (
							<p className="alert">이름을 입력해주세요.</p>
						)} */}
					</S.InputWrapper>

					<S.InputWrapper>
						<label>비밀번호</label>
						<input
							id="password"
							onChange={props.onChangeCoreInput}
							autoComplete="off"
							type="password"
							placeholder="비밀번호를 입력해주세요."
							defaultValue={``}
						/>
						{/* {props.passwordError && (
							<p className="alert">비밀번호를 입력해주세요.</p>
						)} */}
					</S.InputWrapper>
				</div>

				<S.InputWrapper>
					<label>제목</label>
					<input
						id='title'
						onChange={props.onChangeCoreInput}
						type="text"
						placeholder="제목을 작성해주세요."
						defaultValue={data?.title}
					/>
					{/* {props.titleError && (
						<p className="alert">제목을 작성해주세요.</p>
					)} */}
				</S.InputWrapper>

				<S.InputWrapper>
					<label>내용</label>
					<textarea
						id='contents'
						onChange={props.onChangeCoreInput}
						placeholder="내용을 작성해주세요."
						defaultValue={props.data?.fetchBoard.contents}
					/>
					{/* {props.contentsError && (
						<p className="alert">내용을 작성해주세요.</p>
					)} */}
				</S.InputWrapper>

				<S.InputWrapper>
					<label>주소</label>
					<div className="zipcode">
						<input
							id="zipcode"
							onChange={props.onChangeInput}
							type="text"
							// placeholder="00000"
							readOnly
							value={
								props.address ||
								(props.data?.fetchBoard.boardAddress?.address ?? "")
							}
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
						id='address'
						onChange={props.onChangeInput}
						className="address"
						type="text"
						readOnly
						value={props.address !== "undefined" ? props.address : ""}
					/>
					<input
						id='addressDetail'
						onChange={props.onChangeInput}
						type="text"
						defaultValue={
							data?.boardAddress?.addressDetail
								? data?.boardAddress?.addressDetail
								: ''
						}
					/>
				</S.InputWrapper>

				<S.InputWrapper>
					<label>유튜브</label>
					<input
						id='youtubeUrl'
						onChange={props.onChangeInput}
						type="text"
						placeholder="링크를 복사해주세요."
						defaultValue={
							data?.youtubeUrl ? data?.youtubeUrl : ''
						}
					/>
				</S.InputWrapper>

				<S.InputWrapper>
					<label>사진업로드</label>
					<div style={{ display: "flex", gap: "10px" }}>
						{props.imgUrls.map((imgUrl, index) => {
							return (
								<CustomUplaod
									key={imgUrl + index}
									imgUrl={imgUrl}
									index={index}
									onChangeFileUrls={props.onChangeFileUrls}
								></CustomUplaod>
							)
						})}
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
								onChange={props.onChangeRadio}
							/>
							<label htmlFor="youtube">유튜브</label>
						</span>
						<span>
							<input
								type="radio"
								id="image"
								name="radios"
								value="image"
								onChange={props.onChangeRadio}
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
