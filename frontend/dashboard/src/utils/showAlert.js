import swal from "sweetalert";
const showAlert = (title , icon , buttons)=>{
    swal({
        title:title,
        icon:icon,
        buttons:buttons
    })
}

export default showAlert