import { FaArrowDown, FaUser } from 'react-icons/fa';
import './Header.css';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoSettingsSharp ,IoExitSharp } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';
import BtnChangeLang from '../BtnChangeLang/BtnChangeLang';
import useAuthStore from '../../../zustand/useAuthStore';


function Header() {
    const {logout , getUserInfo , userInfo} = useAuthStore()
    const [activeMenu , setActiveMenu] = useState(false);
    const {t} = useTranslation()

    useEffect(()=>{
        getUserInfo()
    },[])


    const handlerShowProfileMenu = ()=>{
        setActiveMenu(!activeMenu);
    }

    const handlerShowBg = ()=>{
        setActiveMenu(false)
    }

    const handlerLogout = ()=>{
        logout()
    }


  return (
    <section className="header">
        <div>
            {/* Language Switcher */}
            <BtnChangeLang/>
            <div className="profiles">
                <button onClick={handlerShowProfileMenu}>
                    <span className="profile_icon">
                        <FaArrowDown/>
                    </span>
                    <div className="profile_name">
                        <span>{userInfo?.username}</span>
                        <span>{userInfo?.role}</span>
                    </div>
                    <img src={userInfo?.image} alt="avatar"  />
                </button>
            </div>
            {/* Show Model Profile */}
            {activeMenu && (
                <>
                         <div className="bg_shadow " onClick={handlerShowBg}>
            <div className="profileMenu">
                <div className="profileMenu_users">
                    <span>{userInfo?.username}</span>
                    <span>{userInfo?.email}</span>
                </div>
                <div className="profileMenu_items">
                    <NavLink to='/Profile' className="profileMenu_link">
                        <span className='icon'>
                            <FaUser/>
                        </span>
                        <span className='text'>{t("Profile")}</span>
                    </NavLink>
                    <NavLink to='/Settings' className="profileMenu_link">
                        <span className='icon'>
                            <IoSettingsSharp/>
                        </span>
                        <span className='text'>{t("Settings")}</span>
                    </NavLink>
                    <button className="profileMenu_logout" onClick={handlerLogout}>
                        <span className='icon'>
                            <IoExitSharp />
                        </span>
                        <span className='text'>{t("Logout")}</span>
                    </button>
                </div>
            </div>
                </div>
                </>
            )}
        </div>
    </section>
  )
}

export default Header