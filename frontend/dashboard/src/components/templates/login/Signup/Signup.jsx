import './Signup.css'

function Signup() {
  return (
    <section className="signup">
        <div className="signup_wrapper box">
            <div className="signup_header">
                <h6 className="title_header">Welcome Back</h6>
                 <p>Please login to your account</p>
            </div>
            <form action="#" className="signup_form">
                <div className="form_group">
                    <label>Email Address</label>
                    <input type="text" className="form_input" placeholder='Enter your Email'/>
                </div>
                <div className="form_group">
                    <label>Password</label>
                    <input type="text" className="form_input" placeholder='Enter your Password'/>
                </div>
                <button className="btn">Login</button>
            </form>
        </div>
    </section>
  )
}

export default Signup