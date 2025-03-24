import { NavLink } from 'react-router-dom';
import './MenuBar.css';
import { MdHome, MdInventory } from "react-icons/md";
import {FaBox , FaShoppingCart, FaUsers } from 'react-icons/fa'
import { FaComments } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function MenuBar() {
    const [routeMenu , setRouteMenu ] = useState('/');
    const location = useLocation();

    useEffect(()=>{
        const pathName = location.pathname;
        setRouteMenu(pathName);
        window.scroll(0,0)
    },[location])
  return (
    <section className="menuBar">
        <nav>
            <ul className="nav_menu">
                <li className={`nav_item ${routeMenu === '/' ? "active":""}`}>
                    <NavLink to='' className='nav_link'>
                        <span className="nav_link_icon">
                            <MdHome/>
                        </span>
                    </NavLink>
                </li>
                <li className={`nav_item ${routeMenu === '/Products' ? "active":""}`}>
                    <NavLink to='/Products' className='nav_link'>
                        <span className="nav_link_icon">
                            <FaBox/>
                        </span>
                    </NavLink>
                </li>
                <li className={`nav_item ${routeMenu === '/Orders' ? "active":""}`}>
                    <NavLink to='/Orders' className='nav_link'>
                        <span className="nav_link_icon">
                            <FaShoppingCart/>
                        </span>
                    </NavLink>
                </li>
                <li className={`nav_item ${routeMenu === '/Customers' ? "active":""}`}>
                    <NavLink to='/Customers' className='nav_link'>
                        <span className="nav_link_icon">
                            <FaUsers/>
                        </span>
                    </NavLink>
                </li>
                <li className={`nav_item ${routeMenu === '/Comments' ? "active":""}`}>
                    <NavLink to='/Comments' className='nav_link'>
                        <span className="nav_link_icon">
                            <FaComments/>
                        </span>
                    </NavLink>
                </li>
                <li className={`nav_item ${routeMenu === '/Inventory' ? "active":""}`}>
                    <NavLink to='/Inventory' className='nav_link'>
                        <span className="nav_link_icon">
                            <MdInventory/>
                        </span>
                    </NavLink>
                </li>
                <li className={`nav_item ${routeMenu === '/Settings' ? "active":""}`}>
                    <NavLink to='/Settings' className='nav_link'>
                        <span className="nav_link_icon">
                            <IoSettingsSharp/>
                        </span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    </section>
  )
}

export default MenuBar