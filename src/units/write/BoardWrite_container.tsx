import { type ChangeEvent, useState } from 'react';
import { useRouter } from 'next/router';
import BoardWrite_presenter from './BoardWrite_presenter';
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite_queries';
import { useMutation } from '@apollo/client';
import {
  type IBoardWrite_container_Props,
  type IUpdatedVariables,
} from './BoardWrite_types';
import { type Address } from 'react-daum-postcode/lib/loadPostcode';

export default function BoardWrite_container(
  props: IBoardWrite_container_Props
) {
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const router = useRouter();

  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [address, setAddress] = useState('');
  const [addressDetail, setAddressDetail] = useState('');
  const [youtubeUrl, setYoutubeUrl] = useState('');
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
    if (
      e.target.value !== '' &&
      password !== '' &&
      title !== '' &&
      contents !== ''
    ) {
      setValid(true);
    } else setValid(false);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordError(false);
    if (
      (props.isEditing ?? writer) &&
      e.target.value !== '' &&
      title !== '' &&
      contents !== ''
    ) {
      setValid(true);
    } else setValid(false);
  };

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    setTitleError(false);
    if (
      (props.isEditing ?? writer) &&
      password !== '' &&
      e.target.value !== '' &&
      contents !== ''
    ) {
      setValid(true);
    } else setValid(false);
  };

  const onChangeContents = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(e.target.value);
    setContentsError(false);
    if (
      (props.isEditing ?? writer) &&
      password !== '' &&
      title !== '' &&
      e.target.value !== ''
    ) {
      setValid(true);
    } else setValid(false);
  };

  const onChangeZipcode = (e: ChangeEvent<HTMLInputElement>) => {
    setZipcode(e.target.value);
  };

  const onChangeAddress = (e: ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const onChangeAddressDetail = (e: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(e.target.value);
  };

  const onChangeYoutubeUrl = (e: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(e.target.value);
  };

  const onChangeImages = (e: ChangeEvent<HTMLInputElement>) => {
    setImages(e.target.value);
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

    if (writer !== '' && password !== '' && title !== '' && contents !== '') {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              contents,
              password,
              title,
              youtubeUrl,
              images,
              boardAddress: {
                zipcode,
                address,
                addressDetail,
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
        youtubeUrl,
        images,
        boardAddress: {
          zipcode,
          address,
          addressDetail,
        },
      },
    };

    if (password === '') {
      setPasswordError(true);
    }
    if (title === '') {
      setTitleError(true);
    }
    if (contents === '') {
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
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    setAddress(fullAddress);
    setZipcode(data.zonecode);
    onToggleModal();
  };

  return (
    <BoardWrite_presenter
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onChangeZipcode={onChangeZipcode}
      onChangeAddress={onChangeAddress}
      onChangeAddressDetail={onChangeAddressDetail}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      onChangeImages={onChangeImages}
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      onSubmit={onSubmit}
      onUpdate={onUpdate}
      valid={valid}
      isEditing={props.isEditing}
      data={props.data}
      isOpen={isOpen}
      handleComplete={handleComplete}
      zipcode={zipcode}
      address={address}
      onToggleModal={onToggleModal}
    />
  );
}
