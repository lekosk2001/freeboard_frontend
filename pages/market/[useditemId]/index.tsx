import ProductDetail_container from '@/src/components/units/product_detail/ProductDetail_container'
import { FETCH_USED_ITEM } from '@/src/components/units/product_detail/ProductDetail_queries'
import { GraphQLClient } from 'graphql-request'
import Head from 'next/head'
import React from 'react'

const index = (props: any) => {
    return (
        <>
            <Head>
                <meta property='og:title' content={props?.qqq.name} />
                <meta property='og:description' content={props?.qqq.remarks} />
                <meta property='og:image' content={props?.qqq.images?.[0]} />
            </Head>
            <ProductDetail_container />
        </>
    )
}

export default index

export const getServerSideProps = async () => {

    const graphQLClient = new GraphQLClient(
        "http://backendonline.codebootcamp.co.kr/graphql"
    );
    const result = await graphQLClient.request(FETCH_USED_ITEM, { useditemId: "63f6e5a11182750028ee706c" })

    return {
        props: {
            qqq: {
                name: result.fetchUseditem.name,
                remarks: result.fetchUseditem.remarks,
                images: result.fetchUseditem.images,
            }
        }
    }
}