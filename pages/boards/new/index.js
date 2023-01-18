import { useMutation, gql } from '@apollo/client'

const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!){
        createBoard(createBoardInput: $createBoardInput){
            _id
        }
    }
`

import { 
    Main,
    Form, 
    InputWrapper,
    SubmitButton,
    Title
} from '../../../styles/emotion'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function index() {

    const [createBoard] = useMutation(CREATE_BOARD)
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

    const onChangeWriter = (e)=>{
        setWriter(e.target.value)
        setWriterError(false)
    }

    const onChangePassword = (e)=>{
        setPassword(e.target.value)
        setPasswordError(false)
    }

    const onChangeTitle = (e)=>{
        setTitle(e.target.value)
        setTitleError(false)
    }

    const onChangeContents = (e)=>{
        setContents(e.target.value)
        setContentsError(false)
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
                            contents,
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

    return (
        <Main>
            <Form>
            <Title>게시물 등록</Title>
            <div className='writer'>
                <InputWrapper>
                    <label>작성자</label>
                    <input onChange={onChangeWriter} type="text" placeholder='이름을 입력해주세요.'/>
                    {writerError && <p className='alert'>이름을 입력해주세요.</p>}
                </InputWrapper>
                <InputWrapper>
                    <label>비밀번호</label>
                    <input onChange={onChangePassword}  autoComplete="off" type="password" placeholder='비밀번호를 입력해주세요.'/>
                    {passwordError && <p className='alert'>비밀번호를 입력해주세요.</p>}
                </InputWrapper>
            </div>
                <InputWrapper>
                    <label>제목</label>
                    <input onChange={onChangeTitle} type="text" placeholder='제목을 작성해주세요.'/>
                    {titleError && <p className='alert'>제목을 작성해주세요.</p>}
                </InputWrapper>

                <InputWrapper>
                    <label>내용</label>
                    <textarea onChange={onChangeContents} type="text" placeholder='내용을 작성해주세요.'/>
                    {contentsError && <p className='alert'>내용을 작성해주세요.</p>}
                </InputWrapper>
                <InputWrapper>
                    <label>주소</label>
                    <div className='zipcode'>
                        <input onChange={onChangeZipcode} type="text" placeholder='07250'/>
                        <button onClick={(e)=>{e.preventDefault()}}>우편번호 검색</button>
                    </div>
                    <input onChange={onChangeAddress} className='address' type="text"/>
                    <input onChange={onChangeAddressDetail} type="text"/>
                </InputWrapper>

                <InputWrapper>
                    <label>유튜브</label>
                    <input onChange={onChangeYoutubeUrl} type="text" placeholder='링크를 복사해주세요.'/>
                </InputWrapper>

                <InputWrapper>
                    <label>사진 첨부</label>
                    <div className='uploadImages'>
                        <span className='uploadImage'>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#4F4F4F"/>
                            </svg>
                            <p>Upload</p>
                        </span>
                        <span className='uploadImage'>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#4F4F4F"/>
                            </svg>
                            <p>Upload</p>
                        </span>
                        <span className='uploadImage'>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#4F4F4F"/>
                            </svg>
                            <p>Upload</p>
                        </span>
                    </div>
                </InputWrapper>

                <InputWrapper>
                    <div className='radios'>
                        <span>
                            <input type="radio" id="youtube" name="radios" value="youtube" defaultChecked onChange={onChangeImages}/>
                            <label htmlFor="youtube">유튜브</label>
                        </span>
                        <span>
                            <input type="radio" id="image" name="radios" value="image" onChange={onChangeImages}/>
                            <label htmlFor="image">사진</label>
                        </span>
                    </div>
                </InputWrapper>
                <SubmitButton onClick={onSubmit}>등록하기</SubmitButton>
            </Form>
        </Main>

    )
}
