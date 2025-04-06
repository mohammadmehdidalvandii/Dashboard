import './NotificationSettings.css'

function NotificationSettings() {
  return (
    <section className="notificationSettings box">
        <div>
            <h2 className="title_header">Notification Settings</h2>
            <h5>Email Notifications</h5>
            <p>Receive notifications via email</p>
            <form action="#">
            <div className="form_group">
                <label >Email</label>
                <input type="text"className='form_input' />
            </div>
            <button className="btn">Save Email</button>
            </form>
        </div>
    </section>
  )
}

export default NotificationSettings