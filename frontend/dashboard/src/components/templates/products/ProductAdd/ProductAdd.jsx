import { NavLink } from 'react-router-dom';
import './ProductAdd.css'
import {useTranslation} from 'react-i18next'
import { useState } from 'react';
import useProductStore from '../../../../zustand/useProductStore';

function ProductAdd() {
    const {t} = useTranslation();
    const {addProduct} = useProductStore()
    const [name, setName] = useState("")
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);

    const handlerAddProduct = (e) => {
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

        // Log the form data to check
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        addProduct(formData)
            .then(response => {
                console.log('Success:', response);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <section className="addProduct box">
            <div>
                <NavLink to='/Products' className='btn link btn_back'>{t("Back to Products")}</NavLink>
                <h2 className="title_header">{t("Add Product")}</h2>
                <form onSubmit={handlerAddProduct} className="addProduct_form">
                    <div className="form_group">
                        <label>{t("Product Name")}</label>
                        <input 
                            type="text" 
                            className="form_input"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form_group">
                        <label>{t("Category")}</label>
                        <select 
                            className='form_input'
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        >
                            <option value="">{t("Select Category")}</option>
                            <option value="Electronics">{t("Electronics")}</option>
                            <option value="Clothing">{t("Clothing")}</option>
                            <option value="Books">{t("Books")}</option>
                        </select>
                    </div>
                    <div className="form_group">
                        <label>{t("Price")}</label>
                        <input 
                            type="number" 
                            className="form_input" 
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form_group">
                        <label>{t("Stock")}</label>
                        <input 
                            type="number" 
                            className="form_input" 
                            value={stock}
                            onChange={(e) => setStock(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form_group">
                        <label>{t("Description")}</label>
                        <input 
                            type="text" 
                            className="form_input" 
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form_group">
                        <label>{t("Image")}</label>
                        <input 
                            type="file" 
                            className='form_input'
                            onChange={(e) => setImage(e.target.files[0])}
                            required
                        />
                    </div>
                    <button type="submit" className="btn">{t("Save Product")}</button>
                </form>
            </div>
        </section>
    );
}

export default ProductAdd