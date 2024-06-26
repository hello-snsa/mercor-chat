import { toast as toastMessage } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function toast(msg="", type="success") {
    const payload = {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        };
        type==="error"?toastMessage.error(msg, payload):
        type==="info"?toastMessage.info(msg, payload):
        toastMessage.success(msg, payload);
}
