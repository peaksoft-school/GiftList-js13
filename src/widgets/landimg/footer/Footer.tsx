import { FC } from "react";
import { Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import { Button } from "../../../shared/UI/button/Button";
import { Input } from "../../../shared/UI/input/Input";
import vk from "../../../assets/icon/vkontacte.svg";
import instagramm from "../../../assets/icon/instagramm.svg";
import facebook from "../../../assets/icon/facebookNew.svg";

const Footer: FC = () => {
  return (
    <StyledBox>
      <Box>
        <StyledBox5>
          <GridContainer>
            <InfoBox>
              <TypografyH6 variant="h6">GIFT LIST</TypografyH6>
              <TypografyBody2 variant="body2">
                Социальная сеть нового поколения
              </TypografyBody2>
              <Box mt={2}>
                <Icon src={vk} alt="VK" />
                <Icon src={instagramm} alt="Instagram" />
                <Icon src={facebook} alt="Facebook" />
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
                  <StyledInput
                    autoComplete="off"
                    placeholder="Введите ваш Email"
                  />
                  <StyledButton>
                    <NextIcon src="src/assets/icon/next.svg" alt="next" />
                  </StyledButton>
                </SubscriptionForm>
              </Box>
            </SubscriptionBox>
          </GridContainer>
        </StyledBox5>
        <TypographyLast variant="body1" paragraph>
          Peaksoft © 2024 Все права защищены
        </TypographyLast>
      </Box>
    </StyledBox>
  );
};

const StyledBox = styled(Box)(() => ({
  width: "100%",
}));

const GridContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
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
  width: "40px",

  "&:hover": {
    color: "black",
  },
}));

const StyledBox5 = styled(Box)(() => ({
  margin: "20px 0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem 0",
  borderBottom: "2px solid silver",
  borderTop: "2px solid silver",
  width: "100%",
  backgroundColor: "#FFF",
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

const TypographyLast = styled(Typography)(() => ({
  textAlign: "center",
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "14px",
}));

const SubscriptionBox = styled(Box)(() => ({}));

export default Footer;
