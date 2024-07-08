import { useState } from "react";
import { Box, Button, Modal, styled } from "@mui/material";
import ThreePoints from "../../assets/icon/iconModal/ThreePoints";
import { NestedModalProps } from "../helper/ModalTRype";

export function NestedModal({ array }: NestedModalProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={handleOpen}
        style={{ border: "none", backgroundColor: "white" }}
      >
        <ThreePoints />
      </button>
      <Modal open={open} onClose={handleClose}>
        <ModalBox>
          {array?.map((item) => (
            <MyButton key={item.description} onClick={item.onClick}>
              <img
                src={item.iconUrl}
                alt={item.description}
                style={{ width: "23px", height: "23px", marginRight: "15px" }}
              />
              <span>{item.description}</span>
            </MyButton>
          ))}
        </ModalBox>
      </Modal>
    </>
  );
}

const ModalBox = styled(Box)`
  width: 320px;
  padding: 10px;
  position: absolute;
  border-radius: 7px;
  background-color: white;
  box-shadow: 24px;
  margin: 0 auto;
  color: black;
`;

const MyButton = styled(Button)`
  margin: 4px;
  width: 100%;
  color: black;
  text-transform: none;
  justify-content: start;
`;
