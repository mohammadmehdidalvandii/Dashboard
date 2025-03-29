import MetaTag from "../../hook/MetaTag/MetaTag"
import ProductManagement from "../../components/templates/products/Product/ProductManagement"
import ProductList from "../../components/templates/products/ProductList/ProductList"

function Products() {
  return (
    <>
      <MetaTag title="Dashboard  | Products"/>
      <ProductManagement/>
      <ProductList/>
    </>
  )
}

export default Products