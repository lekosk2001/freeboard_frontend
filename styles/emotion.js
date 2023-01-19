import styled from '@emotion/styled'

export const Main = styled.main`
    font-family: 'NotoSansKR', sans-serif;
    max-width: 1200px;
    width: 100%;
    margin: 0px auto 100px auto;
    display: flex;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;
    flex-direction: column;
    word-break: break-all;

    input,textarea{
        margin: 0px;
        padding-left: 16px;
        border: 0px;
    }

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
        font-weight: 400;
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

export const Button = styled.button`
    cursor: pointer;
    width: 179px;
    height: 45px;
    border: 1px solid #BDBDBD;
`

export const BottomWrapper = styled.section`
    padding-top: 101px;
    padding-bottom: 87px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    gap: 24px;
    border-bottom: 1px solid #BDBDBD;
`

export const Title = styled.h1`
`