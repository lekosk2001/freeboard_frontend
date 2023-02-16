import { withAuth } from '@/src/components/commons/hocs/withAuth'
import { useRouter } from 'next/router'
import React from 'react'


const index = () => {
    const router = useRouter()
    return (
        <button onClick={() => { void router.push(`/market/add`) }}>상품등록</button>
    )
}

export default withAuth(index)