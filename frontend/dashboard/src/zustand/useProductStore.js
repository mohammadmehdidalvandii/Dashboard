import {create} from 'zustand';
import { apiRequest } from '../services/axios/config';
import swal from 'sweetalert';


const useProductStore = create((set)=>({
    products:[],
    addProduct: async (name , description , price , category , image , stock )=>{
        try{
            const res = await apiRequest.post('/product/add-product',{
                name,
                description,
                price,
                category,
                image,
                stock,
                status,
            })
            if(res.status === 200){
                const newProduct = [name , description , price , category , image , stock , status];
                set((state)=>({products:[...state.products , newProduct]}));
                swal({
                    title:"New product added successfully.",
                    icon:'success',
                    buttons:"ok"
                }).then(()=>{
                    window.location.reload()
                })
            }
        }catch(error){
            console.log("AddProduct error",error)
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
                        products:state.products.map((product)=> product._id === id ? {...product , ...formData}:product)
                    }
                ));
                swal({
                    title:"Product updated successfully",
                    icon:"success",
                    buttons:"ok"
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
            title:"Are you sure you want to delete the product?",
            icon:"error",
            buttons:["no","yes"]
        }).then(async (result)=>{
            if(result){
                const res = await apiRequest.delete(`/product/delete-Product/${id}`);
                if(res.status === 200){
                    set((state)=>({
                        products:state.products.filter((product)=>product._id !== id)
                    }));
                swal({
                    title:"delete product successfully",
                    icon:"success",
                    buttons:"ok"
                }).then(()=>{
                    window.location.reload()
                })
                }
            }
        })
    }
}));

export default useProductStore