import InventoryStock from '../../components/templates/inventory/InventoryStock/InventoryStock'
import MetaTag from '../../hook/MetaTag/MetaTag'

function AddStock() {
  return (
    <>
    <MetaTag title='Dashboard | Inventory- ADD STOCK'/>
    <InventoryStock/>
    </>
  )
}

export default AddStock