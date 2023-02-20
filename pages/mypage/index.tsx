import { withAuth } from '@/src/components/commons/hocs/withAuth'
import React from 'react'


const index = () => {
    withAuth()
    return (
        <div>mypage</div>
    )
}

export default index