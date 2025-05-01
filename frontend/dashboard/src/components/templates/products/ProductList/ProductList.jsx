import { FaSearch } from 'react-icons/fa';
import './ProductList.css';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {NavLink} from 'react-router-dom'
import { apiRequest } from '../../../../services/axios/config';
import useProductStore from '../../../../zustand/useProductStore';


function ProductList() {
    const { t } = useTranslation();
    const {deleteProduct}  = useProductStore()
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect( ()=>{
        const fetchData = async()=>{
            const res = await apiRequest.get('/product');
            if(res.status === 200){
                setProducts(res.data.data)
            }
        };
        fetchData()
    },[])

    const handlerDeleteProduct = (productID)=>{
        deleteProduct(productID)
    }
    // Search Product 
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );



  return (
    <section className="productList box">
        <div className='productList_management'>
            <h2 className="title_header">{t("All Products")}</h2>
            <div className="product_list_search">
                <input 
                    type="text" 
                    className="form_input"  
                    placeholder={t("Search Products")}
                    value={searchTerm}
                    onChange={(event)=>setSearchTerm(event.target.value)}
                />
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
                {filteredProducts?.length > 0 ?(
                    filteredProducts.map((product)=>(
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
                            <button className="btn_delete" onClick={()=>handlerDeleteProduct(product._id)} >
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
    
    </section>
  )
}

export default ProductList