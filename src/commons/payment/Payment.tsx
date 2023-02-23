import { gql, useMutation } from '@apollo/client'
import Script from 'next/script'
import React from 'react'


declare const window: typeof globalThis & {
    IMP: any
}
const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
    mutation createPointTransactionOfLoading($impUid: ID!) {
		createPointTransactionOfLoading(impUid: $impUid)
	}
`


const Payment = () => {

    const [createPointTransactionOfLoading] = useMutation(CREATE_POINT_TRANSACTION_OF_LOADING)

    const onClickPayment = () => {
        const IMP = window.IMP; // 생략 가능
        IMP.init("imp75171774"); // 예: imp00000000a

        IMP.request_pay({ // param
            pg: "nice",
            pay_method: "card",
            // merchant_uid: "ORD20180131-0000011",
            name: "노르웨이 회전 의자",
            amount: 100,
            buyer_email: "gildong@gmail.com",
            buyer_name: "홍길동",
            buyer_tel: "010-4242-4242",
            buyer_addr: "서울특별시 강남구 신사동",
            buyer_postcode: "01181",
        }, async (rsp: any) => { // callback
            if (rsp.success) {
                // 결제 성공 시 로직,
                alert("결제 성공.")
                console.log(rsp)
                await createPointTransactionOfLoading({
                    variables: {
                        impUid: rsp.imp_uid
                    }
                })
            } else {
                // 결제 실패 시 로직,
                alert("결제 실패.")
            }
        });
    }

    return (
        <div>
            {/* <!-- jQuery --> */}
            <Script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></Script>
            {/* <!-- iamport.payment.js --> */}
            <Script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"></Script>
            <button onClick={onClickPayment}>결제하기</button>
        </div>
    )
}

export default Payment