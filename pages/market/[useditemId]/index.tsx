import ProductDetail_container from '@/src/components/units/product_detail/ProductDetail_container'
import { FETCH_USED_ITEM } from '@/src/components/units/product_detail/ProductDetail_queries'
import { GraphQLClient } from 'graphql-request'
import Head from 'next/head'
import React from 'react'

const index = (props: {
    meta: {
        name: string
        remarks: string
        images: string[]
    }
}) => {
    return (
        <>
            <Head>
                <meta property='og:title' content={props?.meta.name} />
                <meta property='og:description' content={props?.meta.remarks} />
                <meta property='og:image' content={props?.meta.images?.[0]} />
            </Head>
            <ProductDetail_container />
        </>
    )
}

export default index

interface Props {
    query: {
        useditemId: string
    }
}

export const getServerSideProps = async ({ query: { useditemId } }: Props) => {

    const graphQLClient = new GraphQLClient(
        "http://backendonline.codebootcamp.co.kr/graphql"
    );
    const result = await graphQLClient.request(FETCH_USED_ITEM, { useditemId })

    return {
        props: {
            meta: {
                name: result.fetchUseditem.name,
                remarks: result.fetchUseditem.remarks,
                images: result.fetchUseditem.images,
            }
        }
    }
}