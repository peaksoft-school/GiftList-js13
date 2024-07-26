import { Box, styled, Typography } from "@mui/material";
import { FC } from "react";
import macbook from "../../../assets/images/macbook Pro.png";
import { profiles } from "../../../shared/lib/types/projectProfiles";
import Footer from "../footer/Footer";

const LandingAboutProject: FC = () => {
  return (
    <>
      <BoxContainer>
        <BoxProject>
          <BoxTitle>
            <StyledH4 variant="h4" gutterBottom>
              О проекте
            </StyledH4>
            <StyledTypography variant="body1" paragraph>
              Найти удачный подарок, который принесёт радость, не всегда простая
              задача. Благодаря нашему сервису у вас есть возможность не только
              обрадовать подарком, но и помочь другим приобрести необходимые им
              вещи. В разделе благотворительность вы можете найти список
              опубликованных вещей, забронировав, вы связываетесь с их
              обладателем.
            </StyledTypography>
            <StyledTypography variant="body1" paragraph>
              Найти удачный подарок, который принесёт радость, не всегда простая
              задача. Благодаря нашему сервису у вас есть возможность не только
              обрадовать подарком, но и помочь другим приобрести необходимые им
              вещи.
            </StyledTypography>
            <StyledTypography variant="body1" paragraph>
              В разделе благотворительность вы можете найти список
              опубликованных вещей, забронировав, вы связываетесь с их
              обладателем.
            </StyledTypography>
          </BoxTitle>
          <Macbook src={macbook} alt="Macbook" />
        </BoxProject>
        <ProfilesContainer>
          {profiles.map((profile, index) => (
            <StyledProfileCard key={index}>
              <img src={profile.img} alt={profile.name} />
              <Typography variant="body1">{profile.name}</Typography>
            </StyledProfileCard>
          ))}
        </ProfilesContainer>
        <Footer />
      </BoxContainer>
    </>
  );
};

const BoxContainer = styled(Box)(() => ({
  maxWidth: "1440px",
  display: "flex",
  flexDirection: "column",
  margin: "20px auto",
}));

const BoxProject = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const BoxTitle = styled(Box)(() => ({
  width: "600px",
  textAlign: "left",
}));

const StyledH4 = styled(Typography)(() => ({
  color: "rgba(2, 2, 2, 1)",
  fontSize: "46px",
  fontWeight: "500",
  lineHeight: "46px",
}));

const StyledTypography = styled(Typography)(() => ({
  color: "rgba(2, 2, 2, 1)",
  fontSize: "16px",
  lineHeight: "1.5",
  marginBottom: "1rem",
}));

const Macbook = styled("img")(() => ({
  width: "542px",
  height: "318px",
}));

const ProfilesContainer = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  gap: "16px",
  margin: "50px 0",
}));

const StyledProfileCard = styled(Box)(() => ({
  textAlign: "center",
  width: "150px",
  height: "200px",
  margin: "100px 0",
  "& img": {
    width: "170px",
    height: "170px",
  },
  "& p": {
    margin: "10px 0",
    color: "rgba(2, 2, 2, 1)",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "19px",
  },
}));

export default LandingAboutProject;

