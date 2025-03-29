import { useState } from 'react';
import './ProductManagement.css';
import { FaPlus } from "react-icons/fa";


function Product() {
    const [addProduct , setAddProduct] = useState(false);

    const handlerShowModelAddProduct = ()=>{
        setAddProduct(true);
    }

    const handlerExitModelAddProduct = ()=>{
        setAddProduct(false);
    }
  return (
    <section className="product box">
        <div>
            <div className="management">
                <div>
                    <h2>Products Management</h2>
                    <p>View and manage products</p>
                </div>
                <button className='btn' onClick={handlerShowModelAddProduct}>
                    <span className="icon">
                        <FaPlus/>
                    </span>
                    <span className="text">Add Product</span>
                </button>
            </div>
            {/* AddProduct Model */}
            {addProduct && (
                  <div className={addProduct ? "bg_model show " : "bg_model"} >
                  <div className="model addProduct_model">
                      <h5 className="title_header">Add New Product</h5>
                      <form action="#" className="product_form">
                          <div className="form_group">
                              <label className='form_label'>Product Name</label>
                              <input type="text" className='form_input'/>
                          </div>
                          <div className="from_group">
                              <label className='form_label'>Category</label>
                              <select className='form_input'>
                                  <option value="">Select Category</option>
                                  <option value="">Electronics</option>
                                  <option value="">Clothing</option>
                                  <option value="">Books</option>
                              </select>
                          </div>
                          <div className="form_group">
                              <label className='form_label'>Price</label>
                              <input type="text" className='form_input'/>
                          </div>
                          <div className="form_group">
                              <label className='form_label'>Stock</label>
                              <input type="text" className='form_input'/>
                          </div>
                          <div className="form_group">
                              <label className='form_label'>Description</label>
                              <textarea className="form_input" rows="4"></textarea>
                          </div>
                          <div className="form_group">
                              <label className='form_label'>Product Image</label>
                              <input type="file" className='form_input' accept='image/*'/>
                          </div>
                          <div className="btn_action">
                              <button className="btn_save">Save Product</button>
                              <button className="btn_cancel" onClick={handlerExitModelAddProduct}>Cancel</button>
                          </div>
                      </form>
                  </div>
              </div>
            )}
        </div>
    </section>
  )
}

export default Product