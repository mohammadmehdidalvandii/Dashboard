import MetaTag from "../../hook/MetaTag/MetaTag"
import ProductManagement from "../../components/templates/products/Product/ProductManagement"

function Products() {
  return (
    <>
      <MetaTag title="Dashboard  | Products"/>
      <ProductManagement/>
    </>
  )
}

export default Products