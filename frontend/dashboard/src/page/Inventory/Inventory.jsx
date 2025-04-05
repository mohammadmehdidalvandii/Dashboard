import InventoryManagement from '../../components/templates/inventory/InventoryManagement/InventoryManagement'
import MetaTag from '../../hook/MetaTag/MetaTag'

function Inventory() {
  return (
    <>
    <MetaTag title='Dashboard | Inventory' />
    <InventoryManagement/>
    </>
  )
}

export default Inventory