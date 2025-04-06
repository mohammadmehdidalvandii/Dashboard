import './UpdateInventory.css';
import {NavLink} from 'react-router-dom'

function UpdateInventory() {
  return (
    <section className="inventoryUpdate box">
        <div>
            <NavLink to='/Inventory' className="btn link btn_back">Back to Inventory</NavLink>
            <h2 className="title_header">Update Stock</h2>
            <form action="#" className="inventoryUpdate_form">
                <div className="form_group">
                    <label>Product Name</label>
                    <input type="text" className="form_input" placeholder=''/>
                </div>
                <div className="form_group">
                    <label>SKU</label>
                    <input type="text" className="form_input" placeholder=''/>
                </div>
                <div className="form_group">
                    <label>Current Stock</label>
                    <input type="text" className="form_input" placeholder=''/>
                </div>
                <div className="form_group">
                    <label>Add/Remove Stock</label>
                    <input type="text" className="form_input" placeholder=''/>
                </div>
                <div className="form_group">
                    <label>New Stock Level</label>
                    <input type="text" className="form_input" placeholder=''/>
                </div>
                <div className="form_group">
                    <label>Note</label>
                    <textarea type="text" rows={4} className="form_input" placeholder=''/>
                </div>
                <button className="btn">Update Stock</button>
            </form>
        </div>
    </section>
  )
}

export default UpdateInventory