import { Box, styled, TextField, Typography } from "@mui/material";
import { Button } from "../UI/button/Button";
import ModalProps from "../modal/ModalProps";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store/store";
import { sendNewsletter } from "../../app/store/mailing/mailingThunk";

interface ModalType {
  open: boolean;
  onClose: () => void;
}

const SendEmailModal = ({ open, onClose }: ModalType) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  const handleFileInputClick = () => {
    const fileInput = document.getElementById(
      "fileInputModal"
    ) as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("text", text);

    if (file) {
      formData.append("image", file);
    }
    dispatch(sendNewsletter(formData));
    onClose();
  };

  return (
    <ModalProps open={open} onClose={onClose}>
      <ModalBox>
        <TypographyText variant="h6">Создание рассылки</TypographyText>
        <PhotoBox onClick={handleFileInputClick}>
          <FilePhoto src="src/assets/icon/filePhoto.svg" />
          <TextFile>Нажмите для добавления фотографии</TextFile>
          <input
            type="file"
            id="fileInputModal"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </PhotoBox>
        <StyledLabel>Тема</StyledLabel>
        <StyledTextField
          placeholder="Введите тему рассылки"
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <StyledLabel>Текст рассылки</StyledLabel>
        <StyledTextField
          placeholder="Введите текст рассылки"
          variant="outlined"
          fullWidth
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <ButtonsContainer>
          <CancelButton variant="outlined" onClick={onClose}>
            Отмена
          </CancelButton>
          <NewLetterBtn variant="contained" onClick={handleSubmit}>
            Отправить
          </NewLetterBtn>
        </ButtonsContainer>
      </ModalBox>
    </ModalProps>
  );
};

export default SendEmailModal;

const ModalBox = styled(Box)(() => ({
  backgroundColor: "white",
  borderRadius: "8px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  padding: "34px",
  width: "544px",
  height: "560px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const TypographyText = styled(Typography)(() => ({
  fontSize: "26px",
  fontWeight: 500,
  lineHeight: "32px",
  color: "rgba(35, 38, 47, 1)",
}));

const TextFile = styled(Typography)(() => ({
  color: "gray",
  textAlign: "center",
}));

const FilePhoto = styled("img")(() => ({
  width: "50px",
  height: "50px",
}));

const PhotoBox = styled(Box)(() => ({
  width: "280px",
  backgroundColor: "#DCDCE4",
  height: "200px",
  border: "1px solid #c8c8c8",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "25px 0",
  cursor: "pointer",
  textAlign: "center",
}));

const ButtonsContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  marginTop: "10px",
}));

const CancelButton = styled(Button)(() => ({
  width: "47%",
  borderRadius: "10px",
}));

const NewLetterBtn = styled(Button)(() => ({
  width: "47%",
  color: "white",
  borderRadius: "10px",
}));

const StyledTextField = styled(TextField)(() => ({
  width: "480px",
  marginBottom: "15px",
  outline: "none",

  "& .MuiInputBase-root": {
    height: "40px",
  },

  "& .MuiInputBase-input": {
    height: "100%",
    padding: "0 14px",
  },

  "& .MuiInputBase-input::placeholder": {
    color: "rgba(141, 148, 158, 1)",
    fontSize: "22px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "grey",
    },
    "&:hover fieldset": {
      borderColor: "grey",
    },
    "&.Mui-focused fieldset": {
      borderColor: "grey",
    },
  },
}));

const StyledLabel = styled("label")(() => ({
  width: "100%",
  marginBottom: "8px",
  fontSize: "13px",
  fontWeight: 400,
  color: "rgba(70, 68, 68, 1)",
}));
