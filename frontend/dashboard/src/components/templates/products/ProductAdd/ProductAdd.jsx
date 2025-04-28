import { NavLink } from 'react-router-dom';
import './ProductAdd.css'
import {useTranslation} from 'react-i18next'
import { useState } from 'react';
import useProductStore from '../../../../zustand/useProductStore';

function ProductAdd() {
    const {addProduct} = useProductStore()
    const {t} =  useTranslation();
    const [name , setName] = useState("")
    const [category , setCategory] = useState("1");
    const [price , setPrice] = useState("");
    const [stock , setStock] = useState("");
    const [description , setDescription] = useState("");
    const [image , setImage] = useState("");

    const handlerAddProduct = (e)=>{
        e.preventDefault();

        const formData = new FormData();

        formData.append("name",name)
        formData.append("category", category);
        formData.append("price", price);
        formData.append("stock", stock);
        formData.append("description", description);
        if (image) {
            formData.append("image", image);
        }

        addProduct(formData)

    }

  return (
    <section className="addProduct box">
        <div>
             <NavLink to='/Products' className='btn link btn_back'>{t("Back to Products")}</NavLink>
            <h2 className="title_header">{t("Add Product")}</h2>
            <form action="#" className="addProduct_form">
                <div className="form_group">
                    <label >{t("Product Name")}</label>
                    <input type="text" className="form_input"
                    value={name}
                    onChange={(event)=>setName(event.target.value)}
                    />
                </div>
                <div className="form_group">
                    <label>{t("Category")}</label>
                    <select defaultValue={category} className='form_input'
                        onChange={(event)=> setCategory(event.target.value)}
                    >
                        <option value="1">{t("Select Category")}</option>
                        <option value="Electronics">{t("Electronics")}</option>
                        <option value="Clothing">{t("Clothing")}</option>
                        <option value="Books">{t("Books")}</option>
                    </select>
                </div>
                <div className="form_group">
                    <label>{t("Price")}</label>
                    <input type="text" className="form_input" 
                    value={price}
                    onChange={(event)=> setPrice(event.target.value)}
                    />
                </div>
                <div className="form_group">
                    <label >{t("Stock")}</label>
                    <input type="text" className="form_input" 
                    value={stock}
                    onChange={(event)=>setStock(event.target.value)}
                    />
                </div>
                <div className="form_group">
                    <label>{t("Description")}</label>
                    <input type="text" className="form_input" 
                    value={description}
                    onChange={(event)=>setDescription(event.target.value)}
                    />
                </div>
                <div className="form_group">
                    <label >{t("Image")}</label>
                    <input type="file"  className='form_input'
                    onChange={(event)=>setImage(event.target.files[0])}
                    />
                </div>
                <button className="btn" onClick={handlerAddProduct}>{t("Save Product")}</button>
            </form>
        </div>
    </section>
  )
}

export default ProductAdd