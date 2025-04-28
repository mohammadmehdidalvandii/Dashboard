import {create} from 'zustand';
import { apiRequest } from '../services/axios/config';
import swal from 'sweetalert';

const useCustomerStore = create((set)=>({
    customers:[],
    addCustomer: async (firstName , lastName , email , phone , street , city , state , zipCode , country , membership , note)=>{
        console.log("customer add", firstName ,lastName ,email ,phone ,street ,city ,zipCode ,country ,membership ,note)
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
    }
}));

export default useCustomerStore