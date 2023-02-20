import { type IQuery, type IQueryFetchUseditemsArgs } from '@/src/commons/types/generated/types'
import { useQuery } from '@apollo/client'
import { Button, Input } from 'antd'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { FETCH_USED_ITEMS } from './ProductList_queries'
import * as S from './ProductList_styles'

const ProductList_presenter = () => {

    const router = useRouter()


    const { data } = useQuery<
        Pick<IQuery, 'fetchUseditems'>,
        IQueryFetchUseditemsArgs
    >(FETCH_USED_ITEMS);

    const [tabActive, setTabActive] = useState("onSale")

    const onClickTab = (e: React.MouseEvent<HTMLHeadingElement>) => {
        setTabActive(e.currentTarget.id)
    }

    return (
        <S.ListsWrapper>
            <S.ListHeader>
                <S.Tabs>
                    <S.Tab id="onSale" active={tabActive} onClick={onClickTab}>판매중상품</S.Tab>
                    <S.Tab id="soldOut" active={tabActive} onClick={onClickTab}>판매된상품</S.Tab>
                </S.Tabs>
                <S.SearchBox>
                    <Input placeholder='제품을 검색해주세요'></Input>
                    <Button style={{ color: "#fff", backgroundColor: "#000", "height": "100%" }}>검색</Button>
                </S.SearchBox>
            </S.ListHeader>
            <S.ListBox>
                {data?.fetchUseditems.map((list) =>
                    <S.List key={list._id} onClick={() => { void router.push(`/market/${list._id}`) }}>
                        <S.ListContents>
                            <S.ThumbnailBox>
                                {list.images?.[0] && <S.Thumbnail src={`https://storage.googleapis.com/${list.images[0]}`} />}
                                {!list.images?.[0] && <S.NoImages>No Images</S.NoImages>}
                            </S.ThumbnailBox>
                            <S.ItemInfo>
                                <S.ItemName>{list.name}</S.ItemName>
                                <S.ItemRemarks>{list.remarks}</S.ItemRemarks>
                                <S.ItemTags>{list.tags?.map((tag, i) =>
                                    <S.Tag key={tag + i}>{tag}</S.Tag>
                                )}</S.ItemTags>
                            </S.ItemInfo>
                        </S.ListContents>
                        <S.Price>
                            {list.price?.toLocaleString('ko-KR')}원
                        </S.Price>
                    </S.List>
                )}
            </S.ListBox>
            <Button onClick={() => { void router.push(`/market/add`) }}>상품등록</Button>
        </S.ListsWrapper>
    )
}

export default ProductList_presenter