import {create} from 'zustand';
import { apiRequest } from '../services/axios/config';
import swal from 'sweetalert';
import i18next from 'i18next';

const useInventoryStore = create((set)=>({
    inventors:[],
    addInventory: async (productID , quantity , category , status)=>{
        try{
            const res = await apiRequest.post('/inventory/add-inventory',{
                productID,
                quantity,
                category,
                status,
            })
            if(res.status === 201){
                set((state)=>({inventors:[...state.inventors , res.data.data]}))
                swal({
                    title:i18next.t('Created new inventory success'),
                    icon:"success",
                    buttons:i18next.t('Ok')
                }).then(()=>{
                    window.location.reload()
                })
            }
        }
        catch(error){
            console.log("Error addInventory =>",error)
        }
    },
    updateInventory:async (id , productID , quantity , category , status)=>{
        try{
            const res = await apiRequest.put(`/inventory/update-inventory/${id}`,{
                productID,
                quantity,
                category,
                status
            })
            if(res.status === 200){
                set((state)=>({
                    inventors:state.inventors.map((inventor)=> inventor._id !== id ? {...inventor , ...res.data.data} : inventor)
                }))
                swal({
                    title:i18next.t('Update inventory success'),
                    icon:"success",
                    buttons:i18next.t('Ok')
                }).then(()=>{
                    window.location.reload()
                })
            }
        }catch(error){
            console.log("Error update inventory" , error)
        }
    },
    deleteInventory: (id)=>{
        try{
            swal({
                title:i18next.t('Are you sure you want to delete the inventory ?'),
                icon:"error",
                buttons:[i18next.t('no'), i18next.t('yes')]
            }).then(async (result)=>{
                if(result){
                    const res = await apiRequest.delete(`/inventory/delete-inventory/${id}`);
                    if(res.status === 200){
                        set((state)=>({
                            inventors:state.inventors.filter((inventor)=>inventor._id !== id)
                        }));
                        swal({
                            title:i18next.t('Delete inventory success'),
                            icon:"success",
                            buttons:i18next.t('Ok')
                        }).then(()=>{
                            window.location.reload()
                        })
                    }
                }
            })
        }catch(error){
            console.log("Error delete Inventory" ,error)
        }
    }
}));


export default useInventoryStore