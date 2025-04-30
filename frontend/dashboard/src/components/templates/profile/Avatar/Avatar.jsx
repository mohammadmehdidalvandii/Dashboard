import { useEffect, useState } from 'react';
import useAuthStore from '../../../../zustand/useAuthStore';
import './Avatar.css';
import {useTranslation} from 'react-i18next'
import showAlert from '../../../../utils/showAlert'

function Avatar() {
    const {t} = useTranslation()
    const { getUserInfo , userInfo} = useAuthStore();
    const [firstName , setFirstName] = useState();
    const [lastName , setLastName] = useState();
    const [email , setEmail] = useState();
    const [phone , setPhone] = useState();

     useEffect(()=>{
            getUserInfo()
        },[])

        const handlerChangeAvatar = (e)=>{
            e.preventDefault()
            showAlert("This feature is not enabled","warning","ok")
        }

  return (
    <section className="avatar box">
        <div>
            <img src="" alt="" />
            <div>
                <h5>{userInfo?.username}</h5>
                <p>{userInfo?.email}</p>
                <span>{userInfo?.role}</span>
            </div>
        </div>
        <form action="#" className="avatar_form">
            <div className="avatar_form_wrapper">
                <div className="form_group">
                    <label htmlFor="">{t("First Name")}</label>
                        <input type="text" className='form_input'
                            placeholder={userInfo?.firstName || "-"}
                        />
                </div>
                <div className="form_group">
                    <label htmlFor="">{t("Last Name")}</label>
                        <input type="text" className='form_input'
                        placeholder={userInfo?.lastName || "-"}
                        />
                </div>
            </div>
            <div className="avatar_form_wrapper">
                <div className="form_group">
                    <label htmlFor="">{t("Email")}</label>
                        <input type="text" className='form_input'
                        placeholder={userInfo?.email}
                        />
                </div>
                <div className="form_group">
                    <label htmlFor="">{t("Phone")}</label>
                        <input type="text" className='form_input'
                            placeholder={userInfo?.phone}
                        />
                </div>
            </div>
            {/* <div className="form_group">
                    <label htmlFor="">{t("Bio")}</label>
                        <textarea rows={4} type="text" className='form_input' />
                </div> */}
                <button className="btn" onClick={handlerChangeAvatar}>{t("Save Change")}</button>
        </form>
    </section>
  )
}

export default Avatar