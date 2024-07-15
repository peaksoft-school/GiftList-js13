import { toast } from "react-toastify";

export const showToast = ({ type, message, title }: ToastProps) => {
  switch (type) {
    case "success":
      toast(
        <div className="Toastify__toast--success">
          <div>
          <div className="toast-content">
            <div className="toast-title">
              <img src="src/assets/icon/sucess.icon.svg" alt="" />
              <h1>{title}</h1>
            </div>
            <img
              src="src/assets/icon/close.svg"
              alt="x"
              onClick={() => toast.dismiss()}
            />
          </div>
          <p className="message">{message}</p>
          </div>
        </div>,
        {
          closeButton: false,
          autoClose: 5000,
        }
      );
      break;
    case "warning":
      toast.warning(message);
      break;
    case "error":
      toast.error(message);
      break;
    default:
      toast(message);
      break;
  }
};

interface ToastProps {
  type: "success" | "warning" | "error";
  message: string;
  title: string;
}
