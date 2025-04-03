import './AddNewCustomer.css'
import {NavLink} from 'react-router-dom'

function AddNewCustomer() {
  return (
    <section className="addCustomer box">
        <div>
            <NavLink to='/Customers' className="btn link btn_back">Back To Customers</NavLink>
            <h2 className='title_header'> Add New Customer</h2>
            <form action="#" className="addCustomer_form">
                <div className="form_wrapper">
                    <div className="from_group">
                        <label>First Name</label>
                        <input type="text" className="form_input" />
                    </div>
                    <div className="from_group">
                        <label>Last Name</label>
                        <input type="text" className="form_input" />
                    </div>
                </div>
                    <div className="from_group">
                        <label>Email</label>
                        <input type="text" className="form_input" />
                    </div>
                    <div className="from_group">
                        <label>Phone</label>
                        <input type="text" className="form_input" />
                    </div>
                    <div className="from_group">
                        <label>Address</label>
                        <textarea type="text" className="form_input"  rows={4}/>
                    </div>
                    <div className="form_group">
                        <select className='form_input'>
                            <option value="">Bronze</option>
                            <option value="">Silver</option>
                            <option value="">Gold</option>
                            <option value="">PLatinum</option>
                        </select>
                    </div>
                    <div className="from_group">
                        <label>Note</label>
                        <textarea type="text" className="form_input"  rows={4}/>
                    </div>
                    <div className="btn_action">
                        <button className="btn">Save Customer</button>
                        <button className="btn_cancel">Cancel</button>
                    </div>
            </form>
        </div>
    </section>
  )
}

export default AddNewCustomer