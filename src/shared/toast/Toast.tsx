import { styled } from "@mui/material";
import { FC } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast: FC = () => {
  return <StyledToastContainer />;
};

const StyledToastContainer = styled(ToastContainer)`
  position: fixed;
  left: 70%;
  transform: translateX(-50%);
  .Toastify__toast-container {
    padding: 25px;
    border-radius: 4px;
    background-color: #ffffff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .Toastify__toast {
    position: relative;
    width: 500px;
    height: 107px;
    background-color: rgba(198, 240, 194, 1);
    padding: 10px;
  }

  .Toastify__toast--success {
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: rgba(198, 240, 194, 1);

    .toast-content {
      text-align: left;
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
    }
    h1 {
      color: rgba(50, 50, 77, 1);
      font-size: 14px;
      font-weight: 600;
      line-height: 16px;
      text-align: left;
    }
    p {
      padding: 10px 0;
      color: rgba(50, 50, 77, 1);
      font-size: 14px;
      font-weight: 400;
      text-align: left;
    }
  }
  .toast-title {
    display: flex;
    align-items: center;

    img {
      position: absolute;
      left: 10px;
      top: 18px;
      width: 20px;
      height: 20px;
    }
  }

  .Toastify__toast--success .message {
    margin: 0;
  }
`;

export default Toast;
