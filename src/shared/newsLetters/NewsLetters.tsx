import { FC, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Button } from "../UI/button/Button";
import SendEmailModal from "./NewLettersModal";
import SideBar from "../sideBar/SideBar";
import SearchHeader from "../../widgets/landimg/searchHeader/SearchHeader";
import mail from "../../assets/icon/mail.svg";
import { fetchNewLetters } from "../../app/store/mailing/mailingThunk";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store/store";
import { Newsletter } from "../lib/types/newsLetters";
import avatar from "../../assets/images/rectangle.png";

const NewsLetters: FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { newsletters, loading, error } = useSelector(
    (state: RootState) => state.newsletter
  );

  const handleOpenModal = () => setOpenModal(true);

  const handleCloseModal = () => setOpenModal(false);

  useEffect(() => {
    dispatch(fetchNewLetters());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <StyledContainer>
      <SideBar />

      <ContentWrapper>
        <SearchHeader />

        <StyleddNewLetter>
          <StyledLetters>Рассылка</StyledLetters>

          <StyledMailButton variant="contained" onClick={handleOpenModal}>
            <MailIcon src={mail} alt="mail icon" />

            <StyledTextMail>Отправить рассылку</StyledTextMail>
          </StyledMailButton>
        </StyleddNewLetter>

        <StyledCards>
          {newsletters.map((newsletter: Newsletter, index: number) => (
            <StyledCard key={index}>
              <StyledImage src={avatar} alt={`newsletter-${index}`} />

              <StyledTypography variant="body1">
                {newsletter.title}
              </StyledTypography>

              <StyledDate>{newsletter.createDate}</StyledDate>
            </StyledCard>
          ))}
        </StyledCards>

        <SendEmailModal open={openModal} onClose={handleCloseModal} />
      </ContentWrapper>
    </StyledContainer>
  );
};

export default NewsLetters;

const StyledContainer = styled(Box)({
  width: "1400px",
  display: "flex",
  height: "100vh",
  backgroundColor: "#f7f8fa",
});

const ContentWrapper = styled(Box)({
  width: "1086px",
  // flexGrow: 1,
  padding: "20px",
});

const StyleddNewLetter = styled(Box)({
  width: "1086px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "40px",
});

const StyledLetters = styled(Typography)({
  fontSize: "20px",
  fontWeight: 500,
  textTransform: "none",
  lineHeight: "24px",
});

const StyledMailButton = styled(Button)({
  width: "235px",
  height: "41px",
  display: "flex",
  alignItems: "center",
});

const MailIcon = styled("img")(() => ({
  width: "16px",
  height: "16px",
  color: "rgba(255, 255, 255, 1)",
  marginRight: "8px",
}));

const StyledTextMail = styled(Typography)({
  color: "rgba(255, 255, 255, 1)",
  fontSize: "16px",
  fontWeight: 500,
});

const StyledCards = styled(Box)({
  width: "1086px",
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  marginTop: "30px",
});

const StyledCard = styled(Box)({
  cursor: "pointer",
  padding: "20px",
  borderRadius: "10px",
  backgroundColor: "#FFFFFF",
  boxShadow: "0px 4px 8px rgba(217, 217, 217, 0.218)",
  textAlign: "center",
  border: "2px solid #B0C4DE",
  margin: "10px",

  "&:hover": {
    backgroundColor: "#faf2f2",
    boxShadow: "0px 6px 12px rgba(217, 217, 217, 0.318)",
    borderColor: "#A9B2C3",
    transition:
      "background-color 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
  },
});

const StyledImage = styled("img")({
  width: "100%",
  borderRadius: "10px",
  cursor: "pointer",
});

const StyledTypography = styled(Typography)({
  fontSize: "16px",
  textAlign: "start",
  marginTop: "16px",
  fontWeight: 600,
  textTransform: "none",
});

const StyledDate = styled(Typography)({
  fontSize: "14px",
  textAlign: "start",
  color: "#777",
  marginTop: "5px",
});
