import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastMsg = (message, mode) => {
  toast[mode](message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

export default ToastMsg;
