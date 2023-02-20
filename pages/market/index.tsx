import { withAuth } from '@/src/components/commons/hocs/withAuth'
import ProductList_container from '@/src/components/units/product_list/ProductList_container'

const index = () => {
    withAuth()
    return (
        <ProductList_container></ProductList_container>
    )
}

export default index