import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { AlertColor } from "@mui/material/Alert";
import { styled } from "@mui/system";

interface ToastProps {
  open: boolean;
  message: string;
  severity: AlertColor;
  onClose: () => void;
}

const StyledAlert = styled(Alert)(({ theme, severity }) => ({
  width: "100%",
  backgroundColor: (() => {
    switch (severity) {
      case "success":
        return theme.palette.success.main;
      case "error":
        return theme.palette.error.main;
      case "warning":
        return theme.palette.warning.main;
      case "info":
        return theme.palette.info.main;
      default:
        return theme.palette.info.main;
    }
  })(),
  color: "white",
}));

const Toast: React.FC<ToastProps> = ({ open, message, severity, onClose }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }} 
    >
      <StyledAlert onClose={onClose} severity={severity}>
        {message}
      </StyledAlert>
    </Snackbar>
  );
};

export default Toast;
