import { FC } from "react";
import { Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import macbook from "../../../assets/images/macbook Pro.png";
import { profiles } from "../../../shared/lib/types/projectProfiles";
import { Button } from "../../../shared/UI/button/Button";
import { Input } from "../../../shared/UI/input/Input";

const LandingAboutProject: FC = () => {
  return (
    <StyledBox>
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
            В разделе благотворительность вы можете найти список опубликованных
            вещей, забронировав, вы связываетесь с их обладателем.
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
      <StyledBox5>
        <GridContainer>
          <InfoBox>
            <TypografyH6 variant="h6">GIFT LIST</TypografyH6>
            <TypografyBody2 variant="body2">
              Социальная сеть нового поколения
            </TypografyBody2>
            <Box mt={2}>
              <Icon src="src/assets/icon/vkontacte.svg" alt="VK" />
              <Icon src="src/assets/icon/instagram.svg" alt="Instagram" />
              <Icon src="src/assets/icon/facebookNew.svg" alt="Facebook" />
            </Box>
          </InfoBox>
          <LinksBox>
            <Box>
              <StyledLink href="#navigation">Навигация</StyledLink>
              <StyledLink href="#project">О проекте</StyledLink>
              <StyledLink href="#charity">Благотворительность</StyledLink>
            </Box>
          </LinksBox>
          <SubscriptionBox>
            <TypografyBody3 variant="body2">
              Подписаться на рассылку
            </TypografyBody3>
            <Box>
              <SubscriptionForm component="form">
                <StyledInput placeholder="Введите ваш Email" />
                <StyledButton>
                  <NextIcon src="src/assets/icon/next.svg" alt="next" />
                </StyledButton>
              </SubscriptionForm>
            </Box>
          </SubscriptionBox>
        </GridContainer>
      </StyledBox5>
    </StyledBox>
  );
};

const StyledBox = styled(Box)(() => ({
  margin: "0 auto",
  width: "1440px",
}));

const BoxProject = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-around",
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
  justifyContent: "space-around",
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

const GridContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  width: "100%",
}));

const SubscriptionForm = styled(Box)(() => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "1rem",
}));

const StyledInput = styled(Input)(() => ({
  width: "322px",
  height: "39px",
}));

const StyledButton = styled(Button)(() => ({
  backgroundColor: "rgba(134, 57, 181, 1)",
  width: "49px",
  height: "49px",
  borderRadius: "50%",
  position: "absolute",
  right: "8px",
  top: "12px",
  minWidth: "49px",
  padding: "0",
}));

const NextIcon = styled("img")(() => ({
  width:"40px",

  "&:hover":{
    color:'black',
  }
}));

const StyledBox5 = styled(Box)(() => ({
  margin: "50px 0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem 0",
  borderBottom: "2px solid silver",
  borderTop: "2px solid silver",
  width: "100%",
  backgroundColor:"#FFF",
}));

const StyledLink = styled("a")(() => ({
  display: "block",
  color: "rgba(2, 2, 2, 1)",
  textDecoration: "none",
  margin: "0.5rem 0",
  "&:hover": {
    textDecoration: "underline",
  },
}));

const Icon = styled("img")(() => ({
  cursor: "pointer",
  margin: "0 10px",
  width: "22px",
  height: "22px",
  transition: "transform 0.3s ease, filter 0.3s ease",
  "&:hover": {
    transform: "scale(1.2)",
    filter: "contrast(150%)",
  },
}));

const InfoBox = styled(Box)(() => ({
  marginRight: "50px",
}));

const TypografyH6 = styled(Typography)(() => ({
  color: "rgba(2, 2, 2, 1)",
  fontSize: "24px",
  fontWeight: "700",
  lineHeight: "29px",
}));

const TypografyBody2 = styled(Typography)(() => ({
  color: "rgba(53, 58, 90, 1)",
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "18px",
  margin: "10px 0",
}));

const TypografyBody3 = styled(Typography)(() => ({
  color: "rgba(2, 2, 2, 1)",
  fontSize: "18px",
  fontWeight: "500",
  lineHeight: "18px",
}));

const LinksBox = styled(Box)(() => ({
  marginRight: "50px",
}));

const SubscriptionBox = styled(Box)(() => ({}));

export default LandingAboutProject;
