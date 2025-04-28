import './ProductEdit.css'
import {useTranslation} from 'react-i18next'
import {NavLink, useParams} from 'react-router-dom'
import useProductStore from '../../../../zustand/useProductStore';
import { useEffect, useState } from 'react';
import { apiRequest } from '../../../../services/axios/config';

function ProductEdit() {
    const {t} = useTranslation();
    const {editProduct} = useProductStore();
    const [product , setProduct]= useState();
    console.log("product" , product?.name)
    const [name, setName] = useState()
    const [category, setCategory] = useState(product?.category);
    const [price, setPrice] = useState(product?.price);
    const [stock, setStock] = useState(product?.stock);
    const [description, setDescription] = useState(product?.description);
    const [image, setImage] = useState(product?.image);
    console.log("edit=>" , name , category , price ,stock ,description)

    const {id} = useParams();
    console.log("id=>" ,id)

       useEffect(()=>{
            const fetchData = async ()=>{
                const res = await apiRequest(`/product/details-product/${id}`)
                if(res.status === 200){
                    setProduct(res.data?.data);
                    setName(res.data.data.name)
                    setCategory(res.data.data.category)
                    setPrice(res.data.data.price)
                    setStock(res.data.data.stock)
                    setDescription(res.data.data.description)
                    setImage(res.data.data.image)
                }
            };
            fetchData()
       },[])

    const handlerEditProduct =  (e)=>{
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", name);
        formData.append("category", category);
        formData.append("price", price);
        formData.append("stock", stock);
        formData.append("description", description);
        if (image) {
            formData.append("image", image);
        }

        editProduct(id , formData)
    }

  return (
    <section className="productEdit box">
        <div>
            <NavLink to='/Products' className='btn link btn_back'>{t("Back to Products")}</NavLink>
            <h2 className="title_header">{t("Edit Product")}</h2>
            <form action="#" className="productEdit_form">
            <div className="form_group">
                    <label >{t("Product Name")}</label>
                    <input type="text" className="form_input" 
                    placeholder={product?.name}
                    onChange={(event)=>setName(event.target.value)}
                    />
                </div>
                <div  className="form_group">
                    <label>{t("Category")}</label>
                    <select defaultValue={category} className='form_input'
                    onChange={(event)=>setCategory(event.target.value)}
                    >
                        <option value="category">{product?.category}</option>
                        <option value="Electronics">{t("Electronics")}</option>
                        <option value="Clothing">{t("Clothing")}</option>
                        <option value="Books">{t("Books")}</option>
                    </select>
                </div>
                <div className="form_group">
                    <label>{t("Price")}</label>
                    <input type="text" className="form_input" 
                    placeholder={product?.price}
                    value={price}
                    onChange={(event)=>setPrice(event?.price)}
                    />
                </div>
                <div className="form_group">
                    <label >{t("Stock")}</label>
                    <input type="text" className="form_input" 
                    placeholder={product?.stock}
                    value={stock}
                    onChange={(event)=>setStock(event.target.value)}
                    />
                </div>
                <div className="form_group">
                    <label>{t("Description")}</label>
                    <input type="text" className="form_input"
                    placeholder={product?.description}
                    value={description}
                    onChange={(event)=>setDescription(event.target.value)}
                    />
                </div>
                <div className="form_group">
                    <label >{t("Current Image")}</label>
                    <input type="file"  className='form_input'
                    placeholder={product?.image}
                    onChange={(event)=>setImage(event.target.files[0])}
                    />
                </div>
                <button className="btn" onClick={handlerEditProduct}>{t("Save Product")}</button>
            </form>
        </div>
    </section>
  )
}

export default ProductEdit