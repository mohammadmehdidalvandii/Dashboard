import {create} from 'zustand';
import { apiRequest } from '../services/axios/config';
import swal from 'sweetalert';

const useCustomerStore = create((set)=>({
    customers:[],
    addCustomer: async (firstName , lastName , email , phone , street , city , state , zipCode , country , membership , note)=>{
        try{
            const res = await apiRequest.post('/customers/add-customer',{
                firstName,
                lastName,
                email,
                phone,
                street,
                city,
                state,
                zipCode,
                country,
                membership,
                note
            });
            if(res.status === 201){
                set((state)=>({customers:[...state.customers , res.data]}));
                swal({
                    title:"Created new Customer success",
                    icon:"success",
                    buttons:"ok"
                }).then(()=>{
                    window.location.reload()
                })
            }
        } catch(error){
            console.log("Error AddCustomer =>" ,error)
        }
    },
    editCustomer: async (id , firstName , lastName , email , phone , street , city , state , zipCode , country , membership , note)=>{
        try{
            const res = await apiRequest.put(`/customers/edit-customer/${id}`,{
                firstName,
                lastName,
                email,
                phone,
                street,
                city,
                state,
                zipCode,
                country,
                membership,
                note
            });
            if(res.status === 200){
                set((state)=>({
                    customers:state.customers.map((customer)=> customer._id === id ? {...customer , ...res.data}:customer)
                }))
                swal({
                    title:"Edit Customer success",
                    icon:"success",
                    buttons:"Ok",
                }).then(()=>{
                    window.location.reload()
                })
            }
        } catch(error){
            console.log("Error update customer =>", error)
        }
    }
}));

export default useCustomerStore