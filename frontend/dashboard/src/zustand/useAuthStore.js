import {create} from 'zustand';
import { apiRequest } from '../services/axios/config';
import swal from 'sweetalert';
import i18next from 'i18next'

const useAuthStore = create((set)=>({
    user:null,
    isAuthenticated:false,
    userInfo:null,
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
                    title: i18next.t('Login successful'),
                    icon:'success',
                    buttons: i18next.t('Go to dashboard')
                }).then(()=>{
                    window.location.replace('/')
                })
            }
            
        } catch(error){
            if(error.status === 422){
                swal({
                    title: i18next.t('Email or Password is not valid'),
                    icon:"error",
                    buttons:"try"
                })
            }
            console.error('Login error:', error);
        }
    },
    logout:()=>{
        try{
            swal({
                title: i18next.t('Are you sure you want to leave?'),
                icon:"warning",
                buttons:[i18next.t('no'), i18next.t('yes')]
            }).then(async (result)=>{
                if(result){
                    const res = await apiRequest.post('/auth/logout')
                    if(res.status === 200){
                        swal({
                            title:"Logout Is success",
                            icon:"success",
                            buttons:"done"
                        }).then(()=>{
                            window.location.reload()
                        })
                    }
                }
            })
        } catch(error){
            console.log("logout Error =>" , error)
        }
    },
    getUserInfo:async ()=>{
        try{
            const res = await apiRequest.get('/auth/me');
            if(res.status === 200){
               set({userInfo:res.data.data})
            }
        }catch(error){
            console.log("get User Info Error =>", error)
        }
    },
    updateRefreshToken:  (refreshToken)=>{
        try{
            setInterval(async()=>{
                const res = await apiRequest.post('/auth/refresh-token',{
                    refreshToken
                });
                if(res.status === 200){
                    console.log("Update Token successfully")
                }
            }, 55 * 50 * 1000);
        } catch(error){
            console.log("Error update RefreshToken")
        }
    }
}))

export default useAuthStore