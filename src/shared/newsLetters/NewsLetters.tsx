import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Button } from "../UI/button/Button";
import cardImage from "../../assets/foto/Rectangle 8.png";
import SendEmailModal from "./NewLettersModal";
import { useState } from "react";
import SideBar from "../sideBar/SideBar";
import SearchHeader from "../../widgets/landimg/searchHeader/SearchHeader";

const NewsLetters = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <StyledContainer>
      <SideBar />
        <SearchHeader />
      <StyleddNewLetter>
        <StyledLetters>Рассылка</StyledLetters>
        <StyledMailButton variant="contained" onClick={handleOpenModal}>
          <img src="src/assets/icon/mail.svg" alt="mail icon" />
          <StyledTextMail>Отправить рассылку</StyledTextMail>
        </StyledMailButton>
      </StyleddNewLetter>
      <StyledCards>
        <StyledCard>
          <StyledImage src={cardImage} />
          <StyledTypography variant="body1" fontWeight={600}>
            Тема рассылки
          </StyledTypography>
          <StyledDate>12.04.22</StyledDate>
        </StyledCard>
        <StyledCard>
          <StyledImage src={cardImage} />
          <StyledTypography variant="body1" fontWeight={600}>
            Тема рассылки
          </StyledTypography>
          <StyledDate>12.04.22</StyledDate>
        </StyledCard>
        <StyledCard>
          <StyledImage src={cardImage} />
          <StyledTypography variant="body1" fontWeight={600}>
            Тема рассылки
          </StyledTypography>
          <StyledDate>12.04.22</StyledDate>
        </StyledCard>
      </StyledCards>
      <SendEmailModal open={openModal} onClose={handleCloseModal} />
    </StyledContainer>
  );
};
export default NewsLetters;

const StyledLetters = styled(Typography)({
  fontSize: "20px",
  fontWeight: "500",
  textTransform: "none",
});

const StyledContainer = styled(Box)(() => ({
  backgroundColor: "#f7f8fa",
  padding: "20px",
}));

const StyleddNewLetter = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const StyledMailButton = styled(Button)(() => ({
  display: "flex",
  gap: "5px",
}));

const StyledTextMail = styled(Typography)(() => ({
  color: "#FFFFFF",
  fontSize: "16px",
  fontWeight: "600",
  textTransform: "none",
}));

const StyledCards = styled(Box)(() => ({
  display: "flex",
  gap: "20px",
  marginTop: "20px",
}));

const StyledCard = styled(Box)(() => ({
  width: "33%",
  padding: "20px",
  borderRadius: "10px",
  backgroundColor: "#FFFFFF",
  boxShadow: "0px 4px 8px rgba(217, 217, 217, 0.218)",
  textAlign: "center",
}));

const StyledImage = styled("img")(() => ({
  width: "100%",
  borderRadius: "10px",
  cursor: "pointer",
}));

const StyledTypography = styled(Typography)(() => ({
  fontSize: "16px",
  textAlign: "start",
  fontWeight: "props.fontWeight",
  marginTop: "16px",
  textTransform: "none",
}));

const StyledDate = styled(Typography)(() => ({
  fontSize: "14px",
  textAlign: "start",
  color: "#777",
  marginTop: "5px",
}));
