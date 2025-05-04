import swal from "sweetalert";
import i18next from 'i18next'
const showAlert = (title , icon , buttons)=>{
    swal({
        title:i18next.t(title),
        icon:icon,
        buttons:i18next.t(buttons)
    })
}

export default showAlert