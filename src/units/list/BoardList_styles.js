import styled from '@emotion/styled'

export const BestWrapper = styled.section`
h1{text-align: center;}
margin-top: 80px;
display: flex;
flex-direction: column;
gap: 40px;
margin-bottom: 80px;
`

export const BestCards = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 24px;
`

export const Card = styled.section`
width: 282px;
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
border-radius: 20px;
height: 257px;

`

export const ListsWrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 40px;
`
export const ListsHead = styled.div`
    display: flex;
    height: 52px;
    justify-content: space-between;
    gap:40px;
`
export const SearchBarBox = styled.div`
    background: #F2F2F2;
    border-radius: 10px;
    width: 776px;
    display: flex;
    align-items: center;
    padding: 0px 19px;
    gap:11px;
    input{
        height: 100%;
        width: 100%;
        padding: 0px 10px;
        border: 0px solid inherit;
        background-color: inherit;
        align-items: center;
    }
`

export const DateInputBox = styled.div`
    display: flex;
    border: 1px solid #BDBDBD;
    align-items: center;
    padding: 16px;
    gap:8px;
    width: 244px;
    color: #BDBDBD;
    input{
        padding: 0px;
        border: 0px;
    }
`

export const SearchButton = styled.button`
    min-width: 94px;
    cursor: pointer;
    border-radius: 10px;
    background-color: #000;
    color: #fff;
`

export const Lists = styled.div`
    border-top:2px solid #000 ;
    border-bottom:2px solid #000 ;
`

export const Tab = styled.div`
    font-size: 18px;
    align-items: center;
    display: flex;
    padding: 0px 10px;
    border-bottom: 1px solid #BDBDBD;
    justify-content: space-between;
    height: 52px;
    h4{
        font-size: 18px;
        font-weight: 500;
        align-items: center;
        color: #000;
    }
`
export const Row = styled.div`
    display: flex;
    padding: 0px 10px;
    justify-content: space-between;
    border-bottom: 1px solid #BDBDBD;
    height: 51px;
`
export const Column = styled.h4`
    color: #4F4F4F;
    display: flex;
    justify-content: center;
    align-items: center;

        &:nth-child(1){
            display: flex;
            width: 50px;
        }
        &:nth-child(2){
            display: flex;
            flex-grow: 1;
        }
        &:nth-child(3){
            display: flex;
            width: 100px;
        }
        &:nth-child(4){
            display: flex;
            width: 100px;
    }
`

export const Pagenation = styled.div`

`
export const PageButtons = styled.div`

`
export const CreateBotton = styled.button`
display: flex;
cursor: pointer;
align-items: center;
justify-content: center;
gap:8px;
width: 171px;
height: 52px;
background-color: #fff;
border: 1px solid #F2F2F2;
border-radius: 10px;

`