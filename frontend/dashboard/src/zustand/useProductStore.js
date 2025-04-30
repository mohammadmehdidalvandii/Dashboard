import {create} from 'zustand';
import { apiRequest } from '../services/axios/config';
import swal from 'sweetalert';
import i18next from 'i18next';


const useProductStore = create((set)=>({
    products:[],
    addProduct: async (formData)=>{
        try{
            const res = await apiRequest.post('/product/add-product',formData,{
                headers:{"Content-Type":"multipart/form-data"}
            })
            if(res.status === 201){
                set((state)=>({products:[...state.products , res.data]}));
                swal({
                    title:i18next.t('New product added successfully'),
                    icon:'success',
                    buttons:i18next.t('Ok')
                }).then(()=>{
                    window.location.reload()
                })
            }
        }catch(error){
            console.error("AddProduct error", error);
        }
    },
    editProduct:async (id , formData)=>{
        try{
            const res = await apiRequest.put(`/product/update-product/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if(res.status === 200){
                set((state)=>(
                    {
                        products:state.products.map((product)=> product._id === id ? {...product , ...res.data}:product)
                    }
                ));
                swal({
                    title:i18next.t('Product updated successfully'),
                    icon:"success",
                    buttons:i18next.t('Ok')
                }).then(()=>{
                    window.location.reload()
                })
            }
        }catch(error){
            console.log("Edit Product error" ,error)
        }
    },
    deleteProduct:(id)=>{
        swal({
            title:i18next.t('Are you sure you want to delete the product ?'),
            icon:"error",
            buttons:[i18next.t('no'), i18next.t('yes')]
        }).then(async (result)=>{
            if(result){
                const res = await apiRequest.delete(`/product/delete-Product/${id}`);
                if(res.status === 200){
                    set((state)=>({
                        products:state.products.filter((product)=>product._id !== id)
                    }));
                swal({
                    title:i18next.t('Delete product successfully'),
                    icon:"success",
                    buttons:i18next.t('Ok')
                }).then(()=>{
                    window.location.reload()
                })
                }
            }
        })
    }
}));

export default useProductStore