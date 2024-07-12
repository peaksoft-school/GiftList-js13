import { Box, Modal } from "@mui/material";
import { TypeModal } from "../helper/ModalType";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid white",
  boxShadow: 24,
  p: 4,
};
const ModalProps = ({ open, onClose, children }: TypeModal) => {
  return (
    <div>
      <Modal open={open} onClose={onClose}>
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
};

export default ModalProps;
