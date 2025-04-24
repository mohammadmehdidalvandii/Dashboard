import { useState } from 'react'
import './Signup.css'
import useAuthStore from '../../../../zustand/useAuthStore';
import showAlert from '../../../../utils/showAlert'

function Signup() {
    const {login} = useAuthStore()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = async (event) => {
        event.preventDefault();
        if(!email || !password){
            showAlert("Email and Password is required" , "error" , "try again")
        }
        login(email , password)
    }

    return (
        <section className="signup">
            <div className="signup_wrapper box">
                <div className="signup_header">
                    <h6 className="title_header">Welcome Back</h6>
                    <p>Please login to your account</p>
                </div>
                <form onSubmit={loginHandler} className="signup_form">
                    <div className="form_group">
                        <label>Email Address</label>
                        <input 
                            type="text" 
                            className="form_input" 
                            placeholder='Enter your Email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form_group">
                        <label>Password</label>
                        <input 
                            type="password" 
                            className="form_input" 
                            placeholder='Enter your Password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn">Login</button>
                </form>
            </div>
        </section>
    )
}

export default Signup