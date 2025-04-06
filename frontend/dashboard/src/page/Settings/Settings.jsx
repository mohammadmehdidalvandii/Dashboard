import SettingsManagement from '../../components/templates/settings/SettingsManagement/SettingsManagement'
import MetaTag from '../../hook/MetaTag/MetaTag'

function Setting() {
  return (
    <>
     <MetaTag title='Dashboard | Settings' />
     <SettingsManagement/>
    </>
  )
}

export default Setting