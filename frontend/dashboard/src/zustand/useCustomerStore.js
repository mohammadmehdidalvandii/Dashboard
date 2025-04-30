import {create} from 'zustand';
import { apiRequest } from '../services/axios/config';
import swal from 'sweetalert';
import i18next from 'i18next'

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
                    title:i18next.t('Created new Customer success'),
                    icon:"success",
                    buttons:i18next.t('Ok')
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
                    title:i18next.t('Update Customer success'),
                    icon:"success",
                    buttons:i18next.t('Ok'),
                }).then(()=>{
                    window.location.reload()
                })
            }
        } catch(error){
            console.log("Error update customer =>", error)
        }
    },
    deleteCustomer: (id)=>{
        swal({
            title:i18next.t('Are you sure you want to delete the Customer ?'),
            icon:"error",
            buttons:[i18next.t('no'), i18next.t('yes')]
        }).then(async (result)=>{
            if(result){
                const res = await apiRequest.delete(`/customers/delete-customer/${id}`);
                if(res.status === 200){
                    set((state)=>({
                        customers:state.customers.filter((customer)=>customer._id !== id)
                    }));
                    swal({
                        title:i18next.t('Delete customer success'),
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

export default useCustomerStore