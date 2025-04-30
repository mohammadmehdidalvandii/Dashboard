import {create} from 'zustand';
import { apiRequest } from '../services/axios/config';
import swal from 'sweetalert';

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
                    title:"Created new inventory success",
                    icon:"success",
                    buttons:"Ok"
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
                    title:"update inventory success",
                    icon:"success",
                    buttons:"Ok"
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
                title:"Are you sure you want to delete the inventory?",
                icon:"error",
                buttons:["no","yes"]
            }).then(async (result)=>{
                if(result){
                    const res = await apiRequest.delete(`/inventory/delete-inventory/${id}`);
                    if(res.status === 200){
                        set((state)=>({
                            inventors:state.inventors.filter((inventor)=>inventor._id !== id)
                        }));
                        swal({
                            title:"Delete Inventory success",
                            icon:"success",
                            buttons:"Ok"
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