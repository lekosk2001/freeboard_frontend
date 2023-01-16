import styled from '@emotion/styled'

export default function index() {
    return (
        <Form>
            <h1>게시물 등록</h1>
            <div className='writer'>
                <InputWrapper>
                    <label>작성자</label>
                    <input type="text" placeholder='이름을 입력해주세요.'/>
                </InputWrapper>
                <InputWrapper>
                    <label>비밀번호</label>
                    <input autoComplete="off" type="password" placeholder='비밀번호를 입력해주세요.'/>
                </InputWrapper>
            </div>
                <InputWrapper>
                    <label>제목</label>
                    <input type="text" placeholder='제목을 작성해주세요.'/>
                </InputWrapper>

                <InputWrapper>
                    <label>내용</label>
                    <textarea type="text" placeholder='내용을 작성해주세요.'/>
                </InputWrapper>
                <InputWrapper>
                        <label>주소</label>
                        <div className='zipcode'>
                            <input type="text" placeholder='07250'/>
                            <button onClick={(e)=>{e.preventDefault()}}>우편번호 검색</button>
                        </div>
                        <input className='address' type="text"/>
                        <input type="text"/>
                    </InputWrapper>

                <InputWrapper>
                    <label>유튜브</label>
                    <input type="text" placeholder='링크를 복사해주세요.'/>
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
                            <input type="radio" id="youtube" name="drone" value="huey" defaultChecked/>
                            <label htmlFor="youtube">유튜브</label>
                        </span>
                        <span>
                            <input type="radio" id="image" name="drone" value="huey"/>
                            <label htmlFor="image">사진</label>
                        </span>
                    </div>
                </InputWrapper>
                <button onClick={(e)=>{e.preventDefault()}}>등록하기</button>
        </Form>
    )
}

const Form = styled.form`
    margin: 0px auto;
    font-size: 16px;
    font-weight: 500;
    display: flex;
    padding: 60px 101px 100px 100px;
    justify-content: center;
    flex-direction: column;
    max-width: 1200px;

    button{
        font-size: 16px;
    font-weight: 500;
        width: 179px;
        height: 52px;
        align-self: center;
        cursor: pointer;
        border: 0px;
        background-color: #FFD600;
    }
    
    input,textarea{
        margin: 0px;
        padding: 0px;
        border: 1px solid #BDBDBD;
    }
    
    h1,h2,h3,p{
        margin: 0px;
        padding: 0px;
    }

    h1{
        font-size: 36px;
        align-self: center;
        margin-bottom: 80px;
        font-weight: 700;
    }

    p{
        font-size: 12px;
        color: #4F4F4F;
        line-height: 18px;
    }

    .writer{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 24px;
        div{
            flex:1
        }
    }

    @media (max-width:768px) { 
        .writer{
            flex-direction: column;
            gap:0px;
        }
    } 
`

const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;

    label{
        display: flex;
        font-family: Noto Sans CJK KR;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        margin-bottom: 16px;
    };

    input{
        box-sizing:border-box;
        font-size: 16px;
        height: 52px;
        padding-left: 16px;
    }
    
    textarea{
        font-size: 16px;
        padding: 14px 16px;
        height: 480px;
        resize: none;
    }

    .zipcode{
        display: flex;
        margin-bottom: 16px;

        input{
            padding-left: 13px;
            width: 72px;
            margin-right: 16px;
        }
        button{
            width: 124px;
            color: #fff;
            background-color: #000;
            cursor: pointer;
        }
    }

    .address{
            margin-bottom: 30px;
        }

    .uploadImages{
        display: flex;
        flex-wrap: nowrap;
        gap: 24px;

        .uploadImage{
            cursor: pointer;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 78px;
            height: 78px;
            background-color: #BDBDBD;

            svg{
                margin-bottom: 5px;
            }
        }
    }

    .radios{
        display: flex;
        align-items: center;
        gap: 22px;

        label{
            margin: 0px 0px 0px 10px;
        }

        span{
            display: flex;
            align-items: center;
        }
    }


`