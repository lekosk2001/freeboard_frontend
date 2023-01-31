import { Button, Image, Modal, Upload } from 'antd';
import DaumPostcodeEmbed from 'react-daum-postcode';
import { Main, Title } from '../../../commons/styles/emotion';
import * as S from './BoardWrite_styles';
import { type IBoardWrite_presenter_Props } from './BoardWrite_types';
import type { UploadProps } from 'antd/es/upload';
import { PlusOutlined } from '@ant-design/icons';

export default function BoardWrite_presenter(
	props: IBoardWrite_presenter_Props
) {
	const valid = props.valid;
	const isEditing = props.isEditing;
	const data = props.data?.fetchBoard;



	const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => { props.setFileList(newFileList); };

	const uploadButton = (
		<div>
			<PlusOutlined />
			<div style={{ marginTop: 8 }}>Upload</div>
		</div>
	);

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
							id="zipcode"
							disabled
							onChange={props.onChangeInput}
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
						id='address'
						onChange={props.onChangeInput}
						className="address"
						type="text"
						disabled
						value={props.address !== "undefined" ? props.address : ""}
					/>
					<input
						id='addressDetail'
						onChange={props.onChangeInput}
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
						id='youtubeUrl'
						onChange={props.onChangeInput}
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
					<Upload
						// action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
						listType="picture-card"
						fileList={props.fileList}
						onPreview={props.handlePreview}
						onChange={handleChange}
					>
						{props.fileList.length >= 8 ? null : uploadButton}
					</Upload>
					<Modal open={props.previewOpen} title={props.previewTitle} footer={null} onCancel={props.handleCancel}>
						<img alt={props.previewTitle} style={{ width: '100%' }} src={props.previewImage} />
					</Modal>
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
