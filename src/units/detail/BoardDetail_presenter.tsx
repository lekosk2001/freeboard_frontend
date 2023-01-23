import * as C from '../../../styles/emotion'
import * as S from './BoardDetail_styles';
import { dateFormat } from '@/src/commons/utils/utils';

export default function BoardDetail_presenter(props) {
    const router = props.router;
    const data = props.data?.fetchBoard;
    const onCLickDeleteBoard = props.onCLickDeleteBoard;

    return (
        <C.Main>
            <S.ContentsWrapper>
                <S.ContentHead>
                    <S.Profile>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 0.666672C11.12 0.666672 0.666687 11.12 0.666687 24C0.666687 36.88 11.12 47.3333 24 47.3333C36.88 47.3333 47.3334 36.88 47.3334 24C47.3334 11.12 36.88 0.666672 24 0.666672ZM24 7.66667C27.8734 7.66667 31 10.7933 31 14.6667C31 18.54 27.8734 21.6667 24 21.6667C20.1267 21.6667 17 18.54 17 14.6667C17 10.7933 20.1267 7.66667 24 7.66667ZM24 40.8C18.1667 40.8 13.01 37.8133 10 33.2867C10.07 28.6433 19.3334 26.1 24 26.1C28.6434 26.1 37.93 28.6433 38 33.2867C34.99 37.8133 29.8334 40.8 24 40.8Z" fill="#BDBDBD"/>
                        </svg>
                        <span>
                            <h2>{data?.writer}</h2>
                            <h4>{data&&dateFormat(data?.createdAt)}</h4>
                        </span>
                    </S.Profile>
                    <S.ContentHeadButtons>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_24_517)">
                        <path d="M22.6666 9.33333H17.3333V12H22.6666C24.8666 12 26.6666 13.8 26.6666 16C26.6666 18.2 24.8666 20 22.6666 20H17.3333V22.6667H22.6666C26.3466 22.6667 29.3333 19.68 29.3333 16C29.3333 12.32 26.3466 9.33333 22.6666 9.33333ZM14.6666 20H9.33329C7.13329 20 5.33329 18.2 5.33329 16C5.33329 13.8 7.13329 12 9.33329 12H14.6666V9.33333H9.33329C5.65329 9.33333 2.66663 12.32 2.66663 16C2.66663 19.68 5.65329 22.6667 9.33329 22.6667H14.6666V20ZM10.6666 14.6667H21.3333V17.3333H10.6666V14.6667Z" fill="#FFD600"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_24_517">
                        <rect width="32" height="32" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>

                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_24_513)">
                            <path d="M16 2.66667C10.84 2.66667 6.66663 6.84001 6.66663 12C6.66663 19 16 29.3333 16 29.3333C16 29.3333 25.3333 19 25.3333 12C25.3333 6.84001 21.16 2.66667 16 2.66667ZM9.33329 12C9.33329 8.32001 12.32 5.33334 16 5.33334C19.68 5.33334 22.6666 8.32001 22.6666 12C22.6666 15.84 18.8266 21.5867 16 25.1733C13.2266 21.6133 9.33329 15.8 9.33329 12Z" fill="#FFD600"/>
                            <path d="M16 15.3333C17.8409 15.3333 19.3333 13.841 19.3333 12C19.3333 10.1591 17.8409 8.66667 16 8.66667C14.159 8.66667 12.6666 10.1591 12.6666 12C12.6666 13.841 14.159 15.3333 16 15.3333Z" fill="#FFD600"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_24_513">
                            <rect width="32" height="32" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg> 
                    </S.ContentHeadButtons>
                </S.ContentHead>
                <S.ContentBody>
                    <C.Title>{data?.title}</C.Title>

                    {data?.images&&<S.ImageBox><img src='/image.png'></img></S.ImageBox>}

                    <S.TextBox>
                        {data?.contents}
                    </S.TextBox>

                    {data?.youtubeUrl&&<S.YoutubeBox>
                        {/* <PlayButton>
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle opacity="0.6" cx="24" cy="24" r="24" fill="white"/>
                            <path d="M34 24L19 32.6603L19 15.3397L34 24Z" fill="black"/>
                            </svg>
                        </PlayButton> */}
                        <iframe width="100%" height="100%" src={"https://www.youtube.com/embed/"+data?.youtubeUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </S.YoutubeBox>}

                    <S.LikeButtons>
                        <S.LikeButton>
                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.11 3.72L10.54 6.61C10.42 7.2 10.58 7.81 10.96 8.27C11.34 8.73 11.9 9 12.5 9H18V10.08L15.43 16H7.34C7.16 16 7 15.84 7 15.66V7.82L11.11 3.72ZM12 0L5.59 6.41C5.21 6.79 5 7.3 5 7.83V15.66C5 16.95 6.05 18 7.34 18H15.44C16.15 18 16.8 17.63 17.16 17.03L19.83 10.88C19.94 10.63 20 10.36 20 10.08V9C20 7.9 19.1 7 18 7H12.5L13.42 2.35C13.47 2.13 13.44 1.89 13.34 1.69C13.11 1.24 12.82 0.83 12.46 0.47L12 0ZM2 7H0V18H2C2.55 18 3 17.55 3 17V8C3 7.45 2.55 7 2 7Z" fill="#FFD600"/>
                            </svg>
                            <h3>{data?.likeCount}</h3>
                        </S.LikeButton>
                        <S.DislikeButton>
                            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 0H5C4.17 0 3.46 0.5 3.16 1.22L0.14 8.27C0.05 8.5 0 8.74 0 9V11C0 12.1 0.9 13 2 13H8.31L7.36 17.57L7.33 17.89C7.33 18.3 7.5 18.68 7.77 18.95L8.83 20L15.42 13.41C15.78 13.05 16 12.55 16 12V2C16 0.9 15.1 0 14 0ZM14 12L9.66 16.34L11 11H2V9L5 2H14V12ZM18 0H22V12H18V0Z" fill="#828282"/>
                            </svg>
                            <h3>{data?.dislikeCount}</h3>
                        </S.DislikeButton>
                    </S.LikeButtons>
                </S.ContentBody>
            </S.ContentsWrapper>
        <C.BottomWrapper>
            <C.Button onClick={()=>{router.push(`/boards`)}}>목록으로</C.Button>
            <C.Button onClick={()=>{router.push(`/boards/${data?._id}/edit`)}}>수정하기</C.Button>
            <C.Button onClick={()=>{onCLickDeleteBoard(data?._id)}}>삭제하기</C.Button>
        </C.BottomWrapper>
        <C.Line />
        <S.CommentsWrapper>
            <S.WriteComment>
                <S.CommetLabel>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 14H3.17L2.58 14.59L2 15.17V2H18V14ZM8.5 12H16V10H10.5L8.5 12ZM12.36 6.13C12.56 5.93 12.56 5.62 12.36 5.42L10.59 3.65C10.39 3.45 10.08 3.45 9.88 3.65L4 9.53V12H6.47L12.36 6.13Z" fill="#FFD600"/>
                    </svg>
                    <h4>댓글</h4>
                </S.CommetLabel>
                <S.RateStars>
                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#BDBDBD"/>
                    </svg>
                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#BDBDBD"/>
                    </svg>
                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#BDBDBD"/>
                    </svg>
                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#BDBDBD"/>
                    </svg>
                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#BDBDBD"/>
                    </svg>
                </S.RateStars>
                <S.CommetWriteBox
                placeholder='개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.'
                ></S.CommetWriteBox>
                <S.CommentSubmitBox>
                    <S.CommentLength>0/100</S.CommentLength>
                    <S.CommentSubmitButton>
                        등록하기
                    </S.CommentSubmitButton>
                </S.CommentSubmitBox>
            </S.WriteComment>
            
            <S.CommentsList>
                <S.CommentBox>
                    <S.CommentWriterIcon>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM20 6C23.32 6 26 8.68 26 12C26 15.32 23.32 18 20 18C16.68 18 14 15.32 14 12C14 8.68 16.68 6 20 6ZM20 34.4C15 34.4 10.58 31.84 8 27.96C8.06 23.98 16 21.8 20 21.8C23.98 21.8 31.94 23.98 32 27.96C29.42 31.84 25 34.4 20 34.4Z" fill="#BDBDBD"/>
                        </svg>
                    </S.CommentWriterIcon>
                    <S.CommentContents>
                        <S.CommentHead>
                            <S.CommentWriter>노원두</S.CommentWriter>
                            <S.RateStars>
                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#BDBDBD"/>
                                </svg>
                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#BDBDBD"/>
                                </svg>
                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#BDBDBD"/>
                                </svg>
                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#BDBDBD"/>
                                </svg>
                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#BDBDBD"/>
                                </svg>
                            </S.RateStars>
                        </S.CommentHead>
                        <S.CommentBody>
                            진짜 유익하고 정말 필요한 정보인 것 같아요~! 앞으로도 좋은 정보 부탁드립니다~!
                        </S.CommentBody>
                        <S.Space hight={20}></S.Space>
                        <S.CommentFooter>
                            2021.02.22
                        </S.CommentFooter>
                    </S.CommentContents>
                </S.CommentBox>
                
            </S.CommentsList>

        </S.CommentsWrapper>
    </C.Main>
    )
}
