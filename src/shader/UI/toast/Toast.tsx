import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { styled } from "@mui/system";

interface ToastProps {
  open: boolean;
  message: string;
  severity: "success" | "error" | "warning" | "info";
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ open, message, severity, onClose }) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
      <StyledAlert onClose={onClose} severity={severity}>
        <div dangerouslySetInnerHTML={{ __html: message }} />
      </StyledAlert>
    </Snackbar>
  );
};

const StyledAlert = styled(Alert)(() => ({
  width: "500px",
  height: "107px",
  borderRadius: "4px",
  border: "1px solid rgba(234, 251, 231, 1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "16px",
  boxSizing: "border-box",
  textAlign: "center",
  fontSize: "10px",
  color: "rgba(50, 50, 77, 1)",
  position: "relative",
  bottom: "155px",
  left: "40px",
}));

export default Toast;
