import './SecurityProfile.css'

function SecurityProfile() {
  return (
    <section className="securityProfile box">
        <div>
            <h2 className="title_header">Security Settings</h2>
            <form action="#">
                <div className="form_group">
                    <label htmlFor="">Current Password</label>
                    <input type="text" className="form_input" placeholder='Enter current password'/>
                </div>
                <div className="form_group">
                    <label htmlFor="">New Password</label>
                    <input type="text" className="form_input" placeholder='Enter new password'/>
                </div>
                <div className="form_group">
                    <label htmlFor="">Confirm New Password</label>
                    <input type="text" className="form_input" placeholder='Confirm new password'/>
                </div>
                <button className="btn">Update Password</button>
            </form>
        </div>
    </section>
  )
}

export default SecurityProfile