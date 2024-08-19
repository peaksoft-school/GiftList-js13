import { FC } from "react";
import { Box, Typography, styled } from "@mui/material";

interface ProfileInfo {
  city: string;
  email: string;
  hobbies: string;
  money: string;
  birthday: string;
  phoneNumber: string;
  important: string;
  shoeSize: string;
}

const ProfileInfoSection: FC<{ profileInfo: ProfileInfo }> = ({
  profileInfo,
}) => (
  <InfoSectionContainer>
    <BoxRef>
      <Box>
        <StyledInfo variant="subtitle1">Основная информация</StyledInfo>
        <Box>
          <BoxData>
            <TypografyTitle variant="body2" paragraph>
              Город:
            </TypografyTitle>
            <TypografyTitleInfo variant="body2">
              {profileInfo.city}
            </TypografyTitleInfo>
          </BoxData>
          <BoxData>
            <TypografyTitle variant="body2" paragraph>
              Email:
            </TypografyTitle>
            <TypografyTitleInfo variant="body2">
              {profileInfo.email}
            </TypografyTitleInfo>
          </BoxData>
          <StyledInfo variant="subtitle1">Интересы, хобби:</StyledInfo>
          <BoxData>
            <TypografyTitle variant="body2" paragraph>
              Интересы, хобби:
            </TypografyTitle>
            <TypografyTitleInfo variant="body2">
              {profileInfo.hobbies}
            </TypografyTitleInfo>
          </BoxData>
          <StyledInfo variant="subtitle1">Доп. информация</StyledInfo>
          <BoxData>
            <TypografyTitle variant="body2" paragraph>
              Размер одежды:
            </TypografyTitle>
            <TypografyTitleInfo variant="body2">
              {profileInfo.money}
            </TypografyTitleInfo>
          </BoxData>
        </Box>
      </Box>
      <Box>
        <Box>
          <BoxData>
            <TypografyTitle variant="body2" paragraph>
              Дата рождения:
            </TypografyTitle>
            <TypografyTitleInfo variant="body2">
              {profileInfo.birthday}
            </TypografyTitleInfo>
          </BoxData>
          <BoxData>
            <TypografyTitle variant="body2" paragraph>
              Номер телефона:
            </TypografyTitle>
            <TypografyTitleInfo variant="body2">
              {profileInfo.phoneNumber}
            </TypografyTitleInfo>
          </BoxData>
          <BoxData>
            <TypografyTitle variant="body2" paragraph>
              Важно знать:
            </TypografyTitle>
            <TypografyTitleInfo variant="body2">
              {profileInfo.important}
            </TypografyTitleInfo>
          </BoxData>
          <BoxData>
            <TypografyTitle variant="body2" paragraph>
              Размер обуви:
            </TypografyTitle>
            <TypografyTitleInfo variant="body2">
              {profileInfo.shoeSize}
            </TypografyTitleInfo>
          </BoxData>
        </Box>
      </Box>
    </BoxRef>
  </InfoSectionContainer>
);

const InfoSectionContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-around",
  width: "100%",
  paddingTop: "50px",
}));

const BoxRef = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-around",
  alignItems: 'center',
  width: "100%",
}));

const StyledInfo = styled(Typography)(() => ({
  color: "rgba(134, 57, 181, 1)",
  fontSize: "18px",
  fontWeight: "500",
  lineHeight: "21px",
  marginBottom: "10px",
}));

const BoxData = styled(Box)(() => ({
  marginBottom: "10px",
}));

const TypografyTitle = styled(Typography)(() => ({
  color: "rgba(92, 92, 92, 1)",
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "18px",
  margin: "0",
}));

const TypografyTitleInfo = styled(Typography)(() => ({
  color: "rgba(0, 0, 0, 1)",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "20px",
  margin: "0",
  marginTop: "10px",
}));

export default ProfileInfoSection;








