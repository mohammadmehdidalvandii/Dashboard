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
    }
}));


export default useInventoryStore