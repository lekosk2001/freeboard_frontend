import { withAuth } from '@/src/components/commons/hocs/withAuth'
import React from 'react'


const index = () => {
    if (!withAuth()) { return <></> }
    return (
        <div>mypage</div>
    )
}

export default index