import styled from '@emotion/styled'

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
    border: 1px solid #4F4F4F;
    margin: 0px auto;
    font-size: 16px;
    font-weight: 500;
    display: flex;
    padding: 60px 101px 100px 100px;
    justify-content: center;
    flex-direction: column;
    max-width: 1200px;

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