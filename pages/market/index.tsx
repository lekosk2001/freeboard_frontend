import { withAuth } from '@/src/components/commons/hocs/withAuth'
import React from 'react'


const index = () => {
    return (
        <div>market</div>
    )
}

export default withAuth(index)