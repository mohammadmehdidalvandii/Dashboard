import { FaUser } from 'react-icons/fa'
import './SettingsManagement.css'
import {NavLink} from 'react-router-dom'

function SettingsManagement() {
  return (
    <section className="settingManagement box">
        <div>
            <div className="management">
                <div>
                    <h2>Settings</h2>
                    <p>Manage your preferences</p>
                </div>
            <NavLink to='/profile' className="btn link">
                <span className="icon"><FaUser/></span>
                <span className="text">Go To Profile</span>
            </NavLink>
            </div>
        </div>
    </section>
  )
}

export default SettingsManagement