import styled from '@emotion/styled'

export const Main = styled.main`
    display: flex;
    margin: 0px auto;
    max-width: 1200px;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;
    flex-direction: column;
    padding: 48px 60px 280px 60px;

    input,textarea{
        margin: 0px;
        padding-left: 16px;
        border: 1px solid #BDBDBD;
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
`

export const ContentsWrapper = styled.section`
    display: flex;
    max-width: 1200px;
    padding: 60px 101px 100px 100px;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;
    flex-direction: column;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
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

export const ContentHead = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    border-bottom:1px solid #BDBDBD;
    padding-bottom: 24px;
    flex-wrap: wrap;
    gap:30px;
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
        color: #828282;
    }
`

export const ContentHeadButtons = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
    svg{
        cursor: pointer;
    }
`

export const ContentFooter = styled.div``

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


export const Title = styled.h1`
`

export const SubmitButton = styled.button`
    font-size: 16px;
    font-weight: 500;
    width: 179px;
    height: 52px;
    align-self: center;
    cursor: pointer;
    border: 0px;
    background-color: #FFD600;
`

export const Form = styled.form`
    h1{
        text-align: center;
        margin-bottom: 80px;
    }
    display: flex;
    width: 100%;
    flex-direction: column;

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

export const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;

    .alert{
        margin-top: 6px;
        margin-bottom: -24px;
        color: red;
    }

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