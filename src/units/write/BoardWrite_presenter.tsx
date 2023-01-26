import {
    Main,
    Title
} from '../../../styles/emotion'

import {
    Form, 
    InputWrapper,
    SubmitButton
} from './BoardWrite_styles'
import { IBoardWrite_presenter_Props } from './BoardWrite_types';

export default function BoardWrite_presenter(props:IBoardWrite_presenter_Props) {

    const onChangeWriter=props.onChangeWriter;
    const onChangePassword=props.onChangePassword;
    const onChangeTitle=props.onChangeTitle;
    const onChangeContents=props.onChangeContents;
    const onChangeZipcode=props.onChangeZipcode;
    const onChangeAddress=props.onChangeAddress;
    const onChangeAddressDetail=props.onChangeAddressDetail;
    const onChangeYoutubeUrl=props.onChangeYoutubeUrl;
    const onChangeImages=props.onChangeImages;

    const writerError=props.writerError;
    const passwordError=props.passwordError;
    const titleError=props.titleError;
    const contentsError=props.contentsError;

    const onSubmit=props.onSubmit;
    const onUpdate=props.onUpdate;

    const valid=props.valid;
    const isEditing=props.isEditing;
    const data = props.data?.fetchBoard;

    return (
        <Main>
            <Form>
                <Title>게시물 {isEditing?"수정":"등록"}</Title>
                <div className='writer'>
                    <InputWrapper>
                        <label>작성자</label>
                        <input 
                            onChange={onChangeWriter}
                            type="text" 
                            placeholder='이름을 입력해주세요.'
                            defaultValue={data?String(data?.writer):''}
                            readOnly={isEditing}
                        />
                        {writerError && <p className='alert'>이름을 입력해주세요.</p>}
                    </InputWrapper>
                    <InputWrapper>
                        <label>비밀번호</label>
                        <input onChange={onChangePassword}
                            autoComplete="off" type="password" placeholder='비밀번호를 입력해주세요.'
                            defaultValue={``}
                        />
                        {passwordError && <p className='alert'>비밀번호를 입력해주세요.</p>}
                    </InputWrapper>
                </div>
                <InputWrapper>
                    <label>제목</label>
                    <input onChange={onChangeTitle}
                        type="text" 
                        placeholder='제목을 작성해주세요.'
                        defaultValue={data?.title}
                    />
                    {titleError && <p className='alert'>제목을 작성해주세요.</p>}
                </InputWrapper>

                <InputWrapper>
                    <label>내용</label>
                    <textarea
                        onChange={()=>onChangeContents}
                        placeholder='내용을 작성해주세요.'
                        defaultValue={data?.contents}
                    />
                    {contentsError && <p className='alert'>내용을 작성해주세요.</p>}
                </InputWrapper>
                <InputWrapper>
                    <label>주소</label>
                    <div className='zipcode'>
                        <input
                            onChange={onChangeZipcode}
                            type="text" 
                            placeholder='07250'
                            defaultValue={data?.boardAddress?String(data?.boardAddress?.zipcode):''}
                        />
                        <button onClick={(e)=>{e.preventDefault()}}>우편번호 검색</button>
                    </div>
                    <input
                        onChange={onChangeAddress}
                        className='address'
                        type="text"
                        defaultValue={data?.boardAddress?String(data?.boardAddress?.address):''}
                    />
                    <input
                        onChange={onChangeAddressDetail}
                        type="text"
                        defaultValue={data?.boardAddress?String(data?.boardAddress?.addressDetail):''}
                    />
                </InputWrapper>

                <InputWrapper>
                    <label>유튜브</label>
                    <input 
                        onChange={onChangeYoutubeUrl}
                        type="text" 
                        placeholder='링크를 복사해주세요.'
                        defaultValue={data?.youtubeUrl?String(data?.youtubeUrl):''}
                    />
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
                            <input type="radio" 
                                id="youtube" 
                                name="radios" 
                                value="youtube" 
                                defaultChecked 
                                onChange={onChangeImages}
                            />
                            <label htmlFor="youtube">유튜브</label>
                        </span>
                        <span>
                            <input
                                type="radio" 
                                id="image" 
                                name="radios" 
                                value="image" 
                                onChange={onChangeImages}
                            />
                            <label htmlFor="image">사진</label>
                        </span>
                    </div>
                </InputWrapper>
                <SubmitButton
                    onClick={isEditing?onUpdate:onSubmit}
                    valid={valid}
                    disabled={!valid}
                >
                    {isEditing?"수정하기":"등록하기"}
                </SubmitButton>
            </Form>
        </Main>
    )
}
