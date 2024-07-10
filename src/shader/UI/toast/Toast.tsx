import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";

const CustomToastContainer = styled(ToastContainer)(({ theme }) => ({
  width: "500px",

  ".Toastify__toast--success": {
    background: "#EAFBE7",
    border: "1px solid rgba(234, 251, 231, 1)",
    borderRadius: "4px",
    height: "107px",
    color: theme.palette.text.primary,
  },
}));

const ToastComponent = () => {
  const notify = () => {
    toast(
      <ToastMessage>
        <Header>
          <CheckIcon />
          <BoldText>Спасибо что сообщили нам об этом</BoldText>
          <IconButton
            onClick={() => toast.dismiss()}
            style={{ color: "inherit", marginLeft: "auto" }}
          >
            <CloseIcon />
          </IconButton>
        </Header>
        <RegularText>
          Ваши отзывы помогают нам сделать сообщество GIFT LIST безопасной
          средой для всех.
        </RegularText>
      </ToastMessage>,
      {
        closeButton: false,
      }
    );
  };

  return (
    <div>
      <button onClick={notify}>Показать Toast</button>
      <CustomToastContainer />
    </div>
  );
};

const ToastMessage = styled("div")({
  display: "flex",
  flexDirection: "column",
  padding: "10px",
  position: "relative",
});

const Header = styled("div")({
  display: "flex",
  alignItems: "center",
  paddingBottom: "1px",
});

const CheckIcon = styled(CheckCircleIcon)({
  color: "rgba(50, 128, 72, 1)",
  width: "20px",
  height: "20px",
});

const BoldText = styled("p")({
  fontWeight: "bold",
  fontSize: "14px",
  color: "rgba(50, 50, 77, 1)",
});

const RegularText = styled("p")({
  fontSize: "14px",
  color: "rgba(50, 50, 77, 1)",
});

export default ToastComponent;
