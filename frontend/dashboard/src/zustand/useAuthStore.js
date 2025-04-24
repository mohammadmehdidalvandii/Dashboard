import {create} from 'zustand';
import { apiRequest } from '../services/axios/config';
import swal from 'sweetalert';

const useAuthStore = create((set)=>({
    user:null,
    isAuthenticated:false,
    login: async (email, password)=>{
        try{
            const res = await apiRequest.post('/auth/login',{
                email:email,
                password:password
            },{
                withCredentials:true
            });
            
            if(res.status === 200){
                const data = res.data;
                set({user:data.user, isAuthenticated:true});
                swal({
                    title:"Login Successful",
                    icon:'success',
                    buttons:"Go to Dashboard"
                }).then(()=>{
                    window.location.replace('/')
                })
            }
        } catch(error){
            console.error('Login error:', error);
        }
    }
}))

export default useAuthStore