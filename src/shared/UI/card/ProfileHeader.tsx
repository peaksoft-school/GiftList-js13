import { FC } from "react";
import { Box, Typography, styled } from "@mui/material";
import facebook from "../../../assets/icon/profile-facebook.svg";
import instagram from "../../../assets/icon/profile-instagram.svg";
import telegram from "../../../assets/icon/profile-telegram.svg";
import vkontakte from "../../../assets/icon/profile-vk.svg";
import { Button } from "../button/Button";

const ProfileHeader: FC<{ name: string; profilePictureUrl: string }> = ({
  name,
  profilePictureUrl,
}) => (
  <ProfileHeaderContainer>
    <Box>
      <ProfileImg src={profilePictureUrl} alt={name} />
      <ProfileInfo>
        <ProfileName variant="h5">{name}</ProfileName>
        <ButtonProfile variant="contained">Добавить в друзья</ButtonProfile>
        <Box display="flex" alignItems="center" marginTop="10px">
          <ProfileIcons src={facebook} alt="Facebook" />
          <ProfileIcons src={instagram} alt="Instagram" />
          <ProfileIcons src={telegram} alt="Telegram" />
          <ProfileIcons src={vkontakte} alt="VK" />
        </Box>
      </ProfileInfo>
    </Box>
  </ProfileHeaderContainer>
);

const ProfileHeaderContainer = styled(Box)(() => ({
  display: "flex",
}));

const ProfileImg = styled("img")(() => ({
  width: "190px",
  height: "190px",
}));

const ProfileIcons = styled("img")(() => ({
  cursor: "pointer",
  width: "32px",
  height: "32px",
  margin: "0 10px",
  transition: "transform 0.3s ease",

  "&:hover": {
    transform: "scale(1.2)",
  },
}));

const ProfileInfo = styled(Box)(() => ({
  flex: 1,
}));

const ProfileName = styled(Typography)(() => ({
  color: "rgba(2, 2, 2, 1)",
  fontSize: "18px",
  fontWeight: "500",
  lineHeight: "21px",
  textAlign: "center",
}));

const ButtonProfile = styled(Button)(()=>({
  color:'white',
  margin:'10px 0',
  width:'90%',
}))
export default ProfileHeader;
