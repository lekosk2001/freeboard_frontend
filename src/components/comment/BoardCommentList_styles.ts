import styled from '@emotion/styled'

export const CommentsList = styled.div`
    font-family: 'NotoSansKR', sans-serif;
    max-width: 1200px;
    width: 100%;
    margin: 0px auto 100px auto;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;
    flex-direction: column;
    word-break: break-all;
    width: inherit;
    display: flex;
    gap: 20px;
    
    h1,h2,h3,h4,p{
        margin: 0px;
        padding: 0px;
    }

    h1{
        font-size: 36px;
        font-weight: 700;
    }

    h2{
        font-size: 24px;
        line-height: 36px;
    }

    h3{
        font-size:18px;
        line-height: 26px;
    }

    h4{
        font-size: 16px;
    }

    p{
        font-size: 12px;
        color: #4F4F4F;
        line-height: 18px;
    }
    button{
        margin: 0px;
        padding: 0px;
    }

`


export const CommetLabel = styled.div`
    display: flex;
    gap: 14px;
    justify-items: center;
    h4{font-weight: 500;}
    margin-bottom: 44px;
`

export const RateStars = styled.div`
    display: flex;
    gap: 4px;
`

export const CommentBox = styled.div`
width: inherit;
display: flex;
border-bottom: 1px solid #BDBDBD;
gap: 16px;
padding-bottom: 20px;
`

export const CommentWriterIcon = styled.div`
width: 40px;
`


export const CommentHead = styled.div`
flex-wrap: wrap;
display: flex;
align-items: center;
gap: 18px;
margin-bottom: 4px;

`


export const CommentBody = styled.h4`
font-weight: 400;
color: #4F4F4F;

`

export const CommentWriter = styled.h4`
font-weight:500;
`

export const CommentFooter = styled.p`
color: #BDBDBD;
`

export const Space = styled.div<{hight:number}>`
display: flex;
width: inherit;
height: ${props=>props.hight}px;

`

export const CommentContents = styled.div`
display: flex;
flex-direction: column;

`