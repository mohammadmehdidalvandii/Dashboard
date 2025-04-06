import './Avatar.css';
import {FaUser } from 'react-icons/fa'

function Avatar() {
  return (
    <section className="avatar box">
        <div>
            <img src="" alt="" />
            <div>
                <h5>John Doe</h5>
                <p>john.doe@example.com</p>
                <span>Super Admin</span>
            </div>
        </div>
        <form action="#" className="avatar_form">
            <div className="avatar_form_wrapper">
                <div className="form_group">
                    <label htmlFor="">First Name</label>
                        <input type="text" className='form_input'/>
                </div>
                <div className="form_group">
                    <label htmlFor="">Last Name</label>
                        <input type="text" className='form_input'/>
                </div>
            </div>
            <div className="avatar_form_wrapper">
                <div className="form_group">
                    <label htmlFor="">Email</label>
                        <input type="text" className='form_input'/>
                </div>
                <div className="form_group">
                    <label htmlFor="">Phone</label>
                        <input type="text" className='form_input'/>
                </div>
            </div>
            <div className="form_group">
                    <label htmlFor="">Bio</label>
                        <textarea rows={4} type="text" className='form_input' />
                </div>
                <button className="btn">Save Change</button>
        </form>
    </section>
  )
}

export default Avatar