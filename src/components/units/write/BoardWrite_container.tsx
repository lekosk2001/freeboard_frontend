import { type ChangeEvent, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import BoardWrite_presenter from './BoardWrite_presenter';
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite_queries';
import { useMutation, useQuery } from '@apollo/client';
import {
	type IBoardWrite_container_Props,
	type IUpdatedVariables,
} from './BoardWrite_types';
import { type Address } from 'react-daum-postcode/lib/loadPostcode';

import { Spin } from 'antd';

import { FETCH_BOARD } from '../detail/BoardDetail_queries';
import { type IQuery } from '@/src/commons/types/generated/types';
import { Loading3QuartersOutlined } from '@ant-design/icons';

export default function BoardWrite_container(
	props: IBoardWrite_container_Props
) {
	const router = useRouter();
	const boardId = router.query.boardId;


	if (props.isEditing && !boardId) {
		return (
			<Spin indicator={<Loading3QuartersOutlined spin />} />
		)
	}

	const { data } = useQuery<Pick<IQuery, 'fetchBoard'>>(FETCH_BOARD, {
		variables: {
			boardId,
		},
	});

	const fetchBoard = data?.fetchBoard;

	if (props.isEditing && !boardId && !fetchBoard) {
		return (
			<Spin indicator={<Loading3QuartersOutlined spin />} />
		)
	}

	const [createBoard] = useMutation(CREATE_BOARD);
	const [updateBoard] = useMutation(UPDATE_BOARD);

	const [images, setImages] = useState('youtube');
	const [isOpen, setIsOpen] = useState(false);

	const [writerError, setWriterError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);
	const [titleError, setTitleError] = useState(false);
	const [contentsError, setContentsError] = useState(false);

	const [valid, setValid] = useState(false);

	interface ICoreInput {
		[key: string]: string
		writer: string
		password: string
		title: string
		contents: string
	}

	const [coreInput, setCoreInput] = useState<ICoreInput>({
		writer: fetchBoard?.writer ?? '',
		password: '',
		title: fetchBoard?.title ?? '',
		contents: fetchBoard?.contents ?? ''
	})

	const [coreInputErorr, setCoreInputErorr] = useState({
		writer: false,
		password: false,
		title: false,
		contents: false
	})

	useEffect(() => {
		if (fetchBoard) {
			setCoreInput({
				...coreInput,
				writer: String(fetchBoard.writer),
				title: String(fetchBoard.title),
				contents: String(fetchBoard.contents),
			})
			if (fetchBoard.images) { setImgUrls(fetchBoard.images) }
		}
	}, [data])

	const onChangeCoreInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

		setCoreInput({ ...coreInput, [e.currentTarget.id]: e.currentTarget.value });
		setCoreInputErorr({ ...coreInputErorr, [e.currentTarget.id]: false });
		const value = (document.getElementById(e.target.id) as HTMLInputElement)?.value;

		console.log(value)
		const AllInputs: string[] = [];

		for (const prop in coreInput) {
			if (prop !== e.currentTarget.id) {
				AllInputs.push(coreInput[prop])
			}
			else {
				AllInputs.push(e.currentTarget.value)
			}
		}
		// console.log("AllInputs : " + AllInputs)

		if (!AllInputs.includes('' && "undefined")) {
			setValid(true);
		} else setValid(false);
	};


	const [imgUrls, setImgUrls] = useState(["", "", ""])

	const onChangeFileUrls = (fileUrl: string, index: number) => {
		const newFileUrls = [...imgUrls];
		newFileUrls[index] = fileUrl;
		setImgUrls(newFileUrls);
	};

	const onChangeRadio = (e: ChangeEvent<HTMLInputElement>) => {
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
		if (coreInput.writer === '') {
			setWriterError(true);
		}
		if (coreInput.password === '') {
			setPasswordError(true);
		}
		if (coreInput.title === '') {
			setTitleError(true);
		}
		if (coreInput.contents === '') {
			setContentsError(true);
		}

		if (coreInput.writer && coreInput.password && coreInput.title && coreInput.contents) {
			try {
				const result = await createBoard({
					variables: {
						createBoardInput: {
							writer: coreInput.writer,
							contents: coreInput.contents,
							password: coreInput.password,
							title: coreInput.title,
							youtubeUrl: input.youtubeUrl,
							images: imgUrls,
							boardAddress: {
								zipcode: input.zipcode,
								address: input.address,
								addressDetail: input.addressDetail,
							},
						},
					},
				});
				void router.push(`/boards/${result.data.createBoard._id}`);
			} catch (error) {
				if (error instanceof Error) alert(error.message);
			}
		}
	};

	const onUpdate = async (e: { preventDefault: () => void }) => {
		e.preventDefault();

		const updatedVariables: IUpdatedVariables = {
			boardId,
			password: coreInput.password,
			updateBoardInput: {
				contents: coreInput.contents,
				title: coreInput.title,
				youtubeUrl: input.youtubeUrl,
				images: imgUrls,
				boardAddress: {
					zipcode: input.zipcode,
					address: input.address,
					addressDetail: input.addressDetail,
				},
			},
		};

		if (!coreInput.password) {
			setPasswordError(true);
		}
		if (!coreInput.title) {
			setTitleError(true);
		}
		if (!coreInput.contents) {
			setContentsError(true);
		}

		if (!coreInput.password && !coreInput.title && !coreInput.contents) {
			try {
				const result = await updateBoard({
					variables: updatedVariables,
				});
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

	return (
		<BoardWrite_presenter

			onChangeInput={onChangeInput}
			onChangeCoreInput={onChangeCoreInput}

			onChangeRadio={onChangeRadio}

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
			data={data}

			isOpen={isOpen}
			handleComplete={handleComplete}

			onToggleModal={onToggleModal}

			images={images}

			imgUrls={imgUrls}
			setImgUrls={setImgUrls}
			onChangeFileUrls={onChangeFileUrls}
		/>
	);
}