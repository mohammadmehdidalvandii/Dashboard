import {create} from 'zustand';
import { apiRequest } from '../services/axios/config';
import swal from 'sweetalert';


const useProductStore = create((set)=>({
    products:[],
    addProduct: async (formData) => {
        try {
            const res = await apiRequest.post('/product/add-product', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            
            if(res.status === 201){
                swal({
                    title: "New product added successfully.",
                    icon: 'success',
                    buttons: "ok"
                }).then(() => {
                    window.location.reload();
                });
            }
        } catch(error) {
            console.log("AddProduct error", error);
        }
    },
    editProduct:async ()=>{},
    deleteProduct:async()=>{}
}));

export default useProductStore