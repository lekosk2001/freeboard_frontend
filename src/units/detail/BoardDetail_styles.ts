import styled from '@emotion/styled'

export const ContentsWrapper = styled.section`
    display: flex;
    padding: 60px 101px 100px 100px;
    flex-direction: column;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`

export const ContentHead = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    border-bottom:1px solid #BDBDBD;
    padding-bottom: 24px;
    flex-wrap: wrap;
    gap:30px;
`

export const ContentHeadButtons = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
    svg{
        cursor: pointer;
    }
`

export const ContentBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 80px;
    gap:40px;

    h1{
        display: flex;
        align-self: flex-start;
    }
`

export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    
    span{
        display: flex;
        flex-direction: column;
    }

    h4{
        
        font-weight: 400;
        color: #828282;
    }
`

export const LikeButtons = styled.div`
    display: flex;
    margin-top: 120px;
    gap:80px;

`

export const LikeButton = styled.span`
    cursor: pointer;
    width: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    h3{
        font-weight: 400;
        color: #FFD600;
    }
`

export const DislikeButton = styled.span`
    cursor: pointer;
    width: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    h3{
        font-weight: 400;
        color: #828282;
    }
`

export const TextBox = styled.h4`
    font-weight: 400;
    font-size: 16px;
    color: #000000;
    font-weight: 400;
    margin-bottom: 120px;
    align-self: flex-start;
`

export const ImageBox = styled.div`
    background-color: #BDBDBD;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-height: 480px;
    overflow: hidden;
        img{
            width: 100%;
            height: 100%;
            object-fit:cover;
        }
    margin-bottom: 40px;
`

export const YoutubeBox = styled.div`
    height: 600px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PlayButton = styled.div`
`

export const ContentFooter = styled.div``


export const CommentsWrapper = styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
`

export const WriteComment = styled.div`
    display: flex;
    flex-direction: column;
    width:inherit;
    margin-bottom: 40px;
`

export const CommentSubmitBox = styled.div`
    display: flex;
    border-top: 1px solid #F2F2F2;
    height: 52px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #BDBDBD;
    border-left: 1px solid #BDBDBD;
    padding-left:20px;
`

export const CommentLength = styled.h4`

    font-weight: 400;
    color: #BDBDBD;
`

export const CommentSubmitButton = styled.button`
    width: 91px;
    color: #fff;
    background-color: #000;
    cursor: pointer;
    height: inherit;
`


export const CommetWriteBox = styled.textarea`
    margin-top: 22px;
    height: 108px;
    border: 1px solid #BDBDBD;
    border-bottom: 0px;
    padding: 20px;
    font-size: 16px;
    font-weight: 500;
    &::placeholder {
        color:#BDBDBD;
    }
    resize: none;
`
