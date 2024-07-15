import { Box, Modal, styled } from "@mui/material";
import { TypeModal } from "../helper/ModalType";

const NestedModal = ({ open, onClose, children }: TypeModal) => {
  return (
    <div>
      <Modal open={open} onClose={onClose}>
        <ModalBox>{children}</ModalBox>
      </Modal>
    </div>
  );
};

export default NestedModal;

const ModalBox = styled(Box)`
  width: 320px;
  padding: 10px;
  border-radius: 7px;
  background-color: white;
  box-shadow: 24px;
  margin: 20% auto;
`;
