import Avatar from '../../components/templates/profile/Avatar/Avatar'
import SecurityProfile from '../../components/templates/profile/SecurityProfile/SecurityProfile'
import MetaTag from '../../hook/MetaTag/MetaTag'


function Profile() {
  return (
    <>
    <MetaTag title='Dashboard | Profile' />
    <Avatar/>
    <SecurityProfile/>
    </>
  )
}

export default Profile