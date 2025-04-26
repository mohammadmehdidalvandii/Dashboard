import { FaSearch } from 'react-icons/fa';
import './ProductList.css';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {NavLink} from 'react-router-dom'
import { apiRequest } from '../../../../services/axios/config';


function ProductList() {
    const { t } = useTranslation();
    const [products , setProducts] = useState();

    const [modelDelete , SetModelDelete] = useState(false);

    const handlerShowModelDelete = ()=>{
        SetModelDelete(true)
    }
    const handlerShowExit =()=>{
        SetModelDelete(false)
    }

    useEffect( ()=>{
        const fetchData = async()=>{
            const res = await apiRequest.get('/product');
            if(res.status === 200){
                setProducts(res.data.data)
            }
        };
        fetchData()
    },[])



  return (
    <section className="productList box">
        <div className='productList_management'>
            <h2 className="title_header">{t("All Products")}</h2>
            <div className="product_list_search">
                <input type="text" className="form_input"  placeholder={t("Search Products")}/>
                <button className="btn">
                    <FaSearch/>
                </button>
            </div>
        </div>
            <table>
                <thead>
                    <tr>
                        <th>{t("Image")}</th>
                        <th>{t("Product Name")}</th>
                        <th>{t("Category")}</th>
                        <th>{t("Price")}</th>
                        <th>{t("Stock")}</th>
                        <th>{t("Status")}</th>
                        <th>{t("Actions")}</th>
                    </tr>
                </thead>
                <tbody>
                {products?.length > 0 ?(
                    products.map((product)=>(
                        <tr key={product._id}>
                        <td>
                            <img src={product.image} alt="Product 1" />
                        </td>
                        <td>{product.name}</td>
                        <td>{product.category}</td>
                        <td> ${product.price}</td>
                        <td>{product.stock}</td>
                        <td><span className="status-badge in-stock">{product.status}</span></td>
                        <td>
                            <div className="btn_action">
                            <NavLink to={`/EditProduct/${product._id}`} className="btn_edit link"  >
                                   {t("Edit")}
                                </NavLink>
                            <button className="btn_delete" onClick={handlerShowModelDelete} >
                               {t("Delete")}
                            </button>
                            </div>
                        </td>
                    </tr>
                    ))
                ) : (
                    <span>The product is not available</span>
                )}
               
                </tbody>
            </table>
    
            {modelDelete && (
            <div className={modelDelete ? "bg_model show":"bg_model"}>
                 <div className="model delete_model">
        <h6 className="title_header">{t("Delete Product")}</h6>
        <p>{t("Are you sure you want to delete this product? This action cannot be undone.")}</p>
        <div className="btn_action">
            <button className="btn_delete" >{t("Delete")}</button>
            <button className="btn_cancel" onClick={handlerShowExit}>{t("Cancel")}</button>
        </div>
    </div>
            </div>
            )}
    </section>
  )
}

export default ProductList