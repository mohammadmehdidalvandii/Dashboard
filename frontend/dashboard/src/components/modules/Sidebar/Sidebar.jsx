import './Sidebar.css'
import { NavLink } from 'react-router-dom';
import { MdHome, MdInventory } from "react-icons/md";
import {FaBox , FaShoppingCart, FaUsers } from 'react-icons/fa'
import { FaComments } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';


function Sidebar() {
    const [routeMenu , setRouteMenu ] = useState('/');
    const location = useLocation();
    const {t}= useTranslation();


    useEffect(()=>{
        const pathName = location.pathname;
        setRouteMenu(pathName);
        window.scroll(0,0)
    },[location])


  return (
    <section className="sidebar">
        <div className="sidebar_header">
            <h2>{t("Admin Panel")}</h2>
            <p>{t("E-Commerce Management")}</p>
        </div>
        <nav>
            <ul className="nav_menu">
            <li className={`nav_item ${routeMenu === '/' ? "active":""}`}>
                    <NavLink to='/Dashboard' className='nav_link'>
                    <span className="nav_link_icon">
                        <MdHome/>
                    </span>
                        <span>{t("Dashboard")}</span>
                    </NavLink>
                </li>
                <li className={`nav_item ${routeMenu === '/{t("Products")}' ? "active":""}`}>
                    <NavLink to='/Products' className='nav_link'>
                    <span className="nav_link_icon">
                        <FaBox/>
                    </span>
                        <span>{t("Products")}</span>
                    </NavLink>
                </li>
                <li className={`nav_item ${routeMenu === '/Orders' ? "active":""}`}>
                    <NavLink to='/Orders' className='nav_link'>
                    <span className="nav_link_icon">
                        <FaShoppingCart/>
                    </span>
                        <span>{t("Orders")}</span>
                    </NavLink>
                </li>
                <li className={`nav_item ${routeMenu === '/Customers' ? "active":""}`}>
                    <NavLink to='/Customers' className='nav_link'>
                    <span className="nav_link_icon">
                        <FaUsers/>
                    </span>
                        <span>{t("Customers")}</span>
                    </NavLink>
                </li>
                <li className={`nav_item ${routeMenu === '/Comments' ? "active":""}`}>
                    <NavLink to='/Comments' className='nav_link'>
                    <span className="nav_link_icon">
                        <FaComments/>
                    </span>
                        <span>{t("Comments")}</span>
                    </NavLink>
                </li>
                <li className={`nav_item ${routeMenu === '/Inventory' ? "active":""}`}>
                    <NavLink to='/Inventory' className='nav_link'>
                    <span className="nav_link_icon">
                        <MdInventory/>
                    </span>
                        <span>{t("Inventory")}</span>
                    </NavLink>
                </li>
                <li className={`nav_item ${routeMenu === '/Settings' ? "active":""}`}>
                    <NavLink to='/Settings' className='nav_link'>
                    <span className="nav_link_icon">
                        <IoSettingsSharp/>
                    </span>
                        <span>{t("Settings")}</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    </section>
  )
}

export default Sidebar