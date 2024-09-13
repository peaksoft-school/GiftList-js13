import { FC } from "react";
import { Box, Typography, styled } from "@mui/material";
import { Button } from "../button/Button";
// import instagram from "../../../assets/icon/profile-instagram.svg";
// import telegram from "../../../assets/icon/profile-telegram.svg";
// import vkontakte from "../../../assets/icon/profile-vk.svg";
// import facebookIcon from "../../../assets/icon/profile-telegram.svg";
import avatar from "../../../assets/images/avatar.png";
import { isValidUrl } from "../../../app/utils/imageConditions/UrlValid";
import { ProfileFacebookIcon, ProfileInstagrammIcon, ProfileTelegrammIcon, ProfileVkIcon } from "../../../assets/icon";

const socialMediaIcons = [
  { src: ProfileFacebookIcon, alt: "Facebook" },
  { src: ProfileInstagrammIcon, alt: "Instagram" },
  { src: ProfileTelegrammIcon, alt: "Telegram" },
  { src: ProfileVkIcon, alt: "VK" },
];

const ProfileHeader: FC<{ name: string; profilePictureUrl: string }> = ({
  name,
  profilePictureUrl,
}) => {
  return (
    <ProfileHeaderContainer>
      <Box>
        <ProfileImg
          src={isValidUrl(profilePictureUrl) ? profilePictureUrl : avatar}
          alt={name}
        />
        <ProfileInfo>
          <ProfileName variant="h5">{name}</ProfileName>
          <ButtonProfile variant="contained">Добавить в друзья</ButtonProfile>
          <Box display="flex" alignItems="center" marginTop="10px">
            {socialMediaIcons.map((icon, index) => (
              <ProfileIcons key={index} src={icon.src} alt={icon.alt} />
            ))}
          </Box>
        </ProfileInfo>
      </Box>
    </ProfileHeaderContainer>
  );
};

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

const ButtonProfile = styled(Button)(() => ({
  color: "white",
  margin: "10px 0",
  width: "90%",
}));

export default ProfileHeader;
