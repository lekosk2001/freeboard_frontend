import {  useState } from 'react'
import { useRouter } from 'next/router'
import BoardWrite_presenter from './BoardWrite_presenter'
import { CREATE_BOARD,UPDATE_BOARD } from './BoardWrite_queries';
import { useMutation} from '@apollo/client'

export default function BoardWrite_container(props) {

    const [createBoard] = useMutation(CREATE_BOARD);
    const [updateBoard] = useMutation(UPDATE_BOARD);
    
    const router = useRouter();

    const [writer,setWriter] = useState('')
    const [password,setPassword] = useState('')
    const [title,setTitle] = useState('')
    const [contents,setContents] = useState('')
    const [zipcode,setZipcode] = useState('')
    const [address,setAddress] = useState('')
    const [addressDetail,setAddressDetail] = useState('')
    const [youtubeUrl,setYoutubeUrl] = useState('')
    const [images,setImages] = useState('youtube')
    
    const [writerError,setWriterError] = useState(false)
    const [passwordError,setPasswordError] = useState(false)
    const [titleError,setTitleError] = useState(false)
    const [contentsError,setContentsError] = useState(false)
    
    const [valid,setValid] = useState(false);

    const onChangeWriter = (e)=>{
        setWriter(e.target.value)
        setWriterError(false)
        if(e.target.value&&password&&title&&contents){ setValid(true) }
        else setValid(false)
    }

    const onChangePassword = (e)=>{
        setPassword(e.target.value)
        setPasswordError(false)
        if((props.isEditing??writer)&&e.target.value&&title&&contents){ setValid(true) }
        else setValid(false)
    }

    const onChangeTitle = (e)=>{
        setTitle(e.target.value)
        setTitleError(false)
        if((props.isEditing??writer)&&password&&e.target.value&&contents){ setValid(true) }
        else setValid(false)
    }

    const onChangeContents = (e)=>{
        setContents(e.target.value)
        setContentsError(false)
        if((props.isEditing??writer)&&password&&title&&e.target.value){ setValid(true) }
        else setValid(false)
    }

    const onChangeZipcode = (e)=>{
        setZipcode(e.target.value)
    }

    const onChangeAddress = (e)=>{
        setAddress(e.target.value)
    }

    const onChangeAddressDetail = (e)=>{
        setAddressDetail(e.target.value)
    }

    const onChangeYoutubeUrl = (e)=>{
        setYoutubeUrl(e.target.value)
    }

    const onChangeImages = (e)=>{
        setImages(e.target.value)
    }

    const onSubmit = async (e)=>{
        e.preventDefault()
        if(!writer){setWriterError(true)}
        if(!password){setPasswordError(true)}
        if(!title){setTitleError(true)}
        if(!contents){setContentsError(true)}

        if(writer&&password&&title&&contents){
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
                            boardAddress:{
                                zipcode,
                                address,
                                addressDetail,
                            }
                        }
                    }
                })
                console.log(result)
                router.push(`/boards/${result.data.createBoard._id}`)
            } catch(error) {
                alert(error.message)
            }
        }
    }

    const onUpdate = async (e)=>{
        e.preventDefault()

        const updatedVariables = {
            boardId : props.boardId,
            password,
            updateBoardInput: {
                boardAddress:{
                }
            }
        }

        if(contents) updatedVariables.updateBoardInput.contents=contents;
        if(title) updatedVariables.updateBoardInput.title=title;
        if(youtubeUrl) updatedVariables.updateBoardInput.youtubeUrl=youtubeUrl;
        if(images) updatedVariables.updateBoardInput.images=images;
        if(zipcode) updatedVariables.updateBoardInput.boardAddress.zipcode=zipcode;
        if(address) updatedVariables.updateBoardInput.boardAddress.address=address;
        if(addressDetail) updatedVariables.updateBoardInput.boardAddress.addressDetail=addressDetail;

        if(!password){setPasswordError(true)}
        if(!title){setTitleError(true)}
        if(!contents){setContentsError(true)}

        if(password&&title&&contents){
            try {
                const result = await updateBoard({
                    variables: updatedVariables
                })
                console.log(result)
                router.push(`/boards/${result.data.updateBoard._id}`)
            } catch(error) {
                alert(error.message)
            }
        }
    }

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
        />
    )
}
