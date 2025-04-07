import ProductAdd from '../../components/templates/products/ProductAdd/ProductAdd'
import MeteTag from '../../hook/MetaTag/MetaTag'

function AddProduct() {
  return (
    <>
    <MeteTag title="Dashboard | AddProduct"/>
    <ProductAdd/>
    </>
  )
}

export default AddProduct