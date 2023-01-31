import { type ChangeEvent, useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import BoardWrite_presenter from './BoardWrite_presenter';
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from './BoardWrite_queries';
import { useMutation } from '@apollo/client';
import {
	type IBoardWrite_container_Props,
	type IUpdatedVariables,
} from './BoardWrite_types';
import { type Address } from 'react-daum-postcode/lib/loadPostcode';

import { checkFileValidation } from '../../commons/checkFileValidation';
import { Modal } from 'antd';

import type { RcFile } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';
import { getBase64 } from '@/src/commons/utils/utils';

export default function BoardWrite_container(
	props: IBoardWrite_container_Props
) {
	useEffect(() => {
		setWriter(String(props.data?.fetchBoard.writer));
		setTitle(String(props.data?.fetchBoard.title));
		setContents(String(props.data?.fetchBoard.contents));
		setInput({ ...input, zipcode: String(props.data?.fetchBoard.boardAddress?.zipcode), address: String(props.data?.fetchBoard.boardAddress?.address), addressDetail: String(props.data?.fetchBoard.boardAddress?.addressDetail), youtubeUrl: (String(props.data?.fetchBoard.youtubeUrl)) });

		setImages(String(props.data?.fetchBoard.images));
	}, [props.data]);

	const [createBoard] = useMutation(CREATE_BOARD);
	const [updateBoard] = useMutation(UPDATE_BOARD);

	const router = useRouter();

	const [writer, setWriter] = useState('');
	const [password, setPassword] = useState('');
	const [title, setTitle] = useState('');
	const [contents, setContents] = useState('');

	const [images, setImages] = useState('youtube');

	const [isOpen, setIsOpen] = useState(false);

	const [writerError, setWriterError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);
	const [titleError, setTitleError] = useState(false);
	const [contentsError, setContentsError] = useState(false);

	const [valid, setValid] = useState(false);

	const onChangeWriter = (e: ChangeEvent<HTMLInputElement>) => {
		setWriter(e.target.value);
		setWriterError(false);
		if (e.target.value && password && title && contents) {
			setValid(true);
		} else setValid(false);
	};

	const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
		setPasswordError(false);
		if (writer && e.target.value && title && contents) {
			setValid(true);
		} else setValid(false);
	};

	const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
		setTitleError(false);
		if (writer && password && e.target.value && contents) {
			setValid(true);
		} else setValid(false);
	};

	const onChangeContents = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setContents(e.target.value);
		setContentsError(false);
		if (writer && password && title && e.target.value) {
			setValid(true);
		} else setValid(false);
	};


	const onChangeImages = (e: ChangeEvent<HTMLInputElement>) => {
		setImages(e.target.value);
	};

	const [input, setInput] = useState({
		zipcode: "",
		address: "",
		addressDetail: "",
		youtubeUrl: ""
	})

	const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
		setInput({ ...input, [e.target.id]: e.target.value });
	};


	const onSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault();
		if (writer === '') {
			setWriterError(true);
		}
		if (password === '') {
			setPasswordError(true);
		}
		if (title === '') {
			setTitleError(true);
		}
		if (contents === '') {
			setContentsError(true);
		}

		if (writer && password && title && contents) {
			try {
				const result = await createBoard({
					variables: {
						createBoardInput: {
							writer,
							contents,
							password,
							title,
							youtubeUrl: input.youtubeUrl,
							images,
							boardAddress: {
								zipcode: input.zipcode,
								address: input.address,
								addressDetail: input.addressDetail,
							},
						},
					},
				});
				console.log(result);
				void router.push(`/boards/${result.data.createBoard._id}`);
			} catch (error) {
				if (error instanceof Error) alert(error.message);
			}
		}
	};

	const onUpdate = async (e: { preventDefault: () => void }) => {
		e.preventDefault();

		const updatedVariables: IUpdatedVariables = {
			boardId: props.boardId,
			password,
			updateBoardInput: {
				contents,
				title,
				youtubeUrl: input.youtubeUrl,
				images,
				boardAddress: {
					zipcode: input.zipcode,
					address: input.address,
					addressDetail: input.addressDetail,
				},
			},
		};

		if (!password) {
			setPasswordError(true);
		}
		if (!title) {
			setTitleError(true);
		}
		if (!contents) {
			setContentsError(true);
		}

		if (password !== '' && title !== '' && contents !== '') {
			try {
				const result = await updateBoard({
					variables: updatedVariables,
				});
				console.log(result);
				void router.push(`/boards/${result.data.updateBoard._id}`);
			} catch (error) {
				if (error instanceof Error) alert(error.message);
			}
		}
	};

	const onToggleModal = () => {
		setIsOpen((prev) => !prev);
	};

	const handleComplete = (data: Address) => {
		let fullAddress = data.address;
		let extraAddress = '';

		if (data.addressType === 'R') {
			if (data.bname !== '') {
				extraAddress += data.bname;
			}
			if (data.buildingName !== '') {
				extraAddress +=
					extraAddress !== ''
						? `, ${data.buildingName}`
						: data.buildingName;
			}
			fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
		}
		setInput({ ...input, address: fullAddress, zipcode: data.zonecode });
		onToggleModal();
	};

	const [uploadFile] = useMutation(UPLOAD_FILE);

	const [imgUrl, setImgUrl] = useState("")
	const fileRef = useRef<HTMLInputElement>(null)

	const onClickFile = () => {
		fileRef.current?.click()
	}

	const onChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		console.log(file)

		const isValid = checkFileValidation(file);
		if (!isValid) { return }

		if (isValid) {

			try {
				const result = await uploadFile({
					variables: {
						file
					}
				})
				console.log(result.data?.uploadFile.url)

				setImgUrl(result.data?.uploadFile.url)

			} catch (error) {
				if (error instanceof Error) {
					Modal.error({ content: error.message })
				}
			}
		}
	}

	const [previewOpen, setPreviewOpen] = useState(false);
	const [previewImage, setPreviewImage] = useState('');
	const [previewTitle, setPreviewTitle] = useState('');
	const [fileList, setFileList] = useState<UploadFile[]>([]);

	const handleCancel = () => { setPreviewOpen(false); };

	const handlePreview = async (file: UploadFile) => {
		if (!file.url && !file.preview) {
			file.preview = await getBase64(file.originFileObj as RcFile);
		}

		setPreviewImage(file.url ?? (file.preview as string));
		setPreviewOpen(true);
		setPreviewTitle(file.url ? (file.name || file.url.substring(file.url.lastIndexOf('/') + 1)) : "");
	};

	return (
		<BoardWrite_presenter

			onChangeWriter={onChangeWriter}
			onChangePassword={onChangePassword}
			onChangeTitle={onChangeTitle}
			onChangeContents={onChangeContents}
			onChangeInput={onChangeInput}

			onChangeImages={onChangeImages}

			writerError={writerError}
			passwordError={passwordError}
			titleError={titleError}
			contentsError={contentsError}

			zipcode={input.zipcode}
			address={input.address}

			onSubmit={onSubmit}
			onUpdate={onUpdate}

			valid={valid}
			isEditing={props.isEditing}
			data={props.data}

			isOpen={isOpen}
			handleComplete={handleComplete}

			onToggleModal={onToggleModal}

			imgUrl={imgUrl}
			onClickFile={onClickFile}
			onChangeFile={onChangeFile}
			fileRef={fileRef}


			fileList={fileList}
			handlePreview={handlePreview}
			setFileList={setFileList}
			previewOpen={previewOpen}
			previewTitle={previewTitle}
			handleCancel={handleCancel}
			previewImage={previewImage}
		/>
	);
}
