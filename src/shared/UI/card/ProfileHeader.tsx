// import { FC } from "react";
// import { Box, Typography, styled } from "@mui/material";
// import { Button } from "../button/Button";
// import facebook from "../../../assets/icon/profile-facebook.svg";
// import instagram from "../../../assets/icon/profile-instagram.svg";
// import telegram from "../../../assets/icon/profile-telegram.svg";
// import vkontakte from "../../../assets/icon/profile-vk.svg";
// import { profileInfo } from "../../lib/types/userProfile";

// const socialMediaIcons = [
//   { src: facebook, alt: "Facebook" },
//   { src: instagram, alt: "Instagram" },
//   { src: telegram, alt: "Telegram" },
//   { src: vkontakte, alt: "VK" },
// ];

// const ProfileHeader: FC<{ name: string; profilePictureUrl: string }> = ({
//   name,
//   profilePictureUrl,
// }) => (
//   <ProfileHeaderContainer>
//     <Box>
//       <ProfileImg src={profilePictureUrl} alt={name} />
//       <ProfileName variant="body1">{profileInfo.fullName}</ProfileName>
//       <ProfileInfo>
//         <ButtonProfile variant="contained">Добавить в друзья</ButtonProfile>
//         <Box display="flex" alignItems="center" marginTop="10px">
//           {socialMediaIcons.map((icon, index) => (
//             <ProfileIcons key={index} src={icon.src} alt={icon.alt} />
//           ))}
//         </Box>
//       </ProfileInfo>
//     </Box>
//   </ProfileHeaderContainer>
// );

// const ProfileHeaderContainer = styled(Box)(() => ({
//   display: "flex",
//   width:'190px',
//   height:'290px',
// }));

// const ProfileImg = styled("img")(() => ({
//   width: "190px",
//   height: "190px",
// }));

// const ProfileIcons = styled("img")(() => ({
//   cursor: "pointer",
//   width: "32px",
//   height: "32px",
//   margin: "0 10px",
//   transition: "transform 0.3s ease",

//   "&:hover": {
//     transform: "scale(1.2)",
//   },
// }));

// const ProfileInfo = styled(Box)(() => ({
//   flex: 1,
// }));

// const ProfileName = styled(Typography)(() => ({
//   color: "rgba(2, 2, 2, 1)",
//   fontSize: "18px",
//   fontWeight: "500",
//   lineHeight: "21px",
//   textAlign: "center",
// }));

// const ButtonProfile = styled(Button)(() => ({
//   color: "white",
//   margin: "10px 0",
//   width: "90%",
// }));

// export default ProfileHeader;






import { FC } from "react";
import { Box, Typography, styled } from "@mui/material";
import { Button } from "../button/Button";
import facebook from "../../../assets/icon/profile-facebook.svg";
import instagram from "../../../assets/icon/profile-instagram.svg";
import telegram from "../../../assets/icon/profile-telegram.svg";
import vkontakte from "../../../assets/icon/profile-vk.svg";

const socialMediaIcons = [
  { src: facebook, alt: "Facebook" },
  { src: instagram, alt: "Instagram" },
  { src: telegram, alt: "Telegram" },
  { src: vkontakte, alt: "VK" },
];

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
          {socialMediaIcons.map((icon, index) => (
            <ProfileIcons key={index} src={icon.src} alt={icon.alt} />
          ))}
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

const ButtonProfile = styled(Button)(() => ({
  color: "white",
  margin: "10px 0",
  width: "90%",
}));

export default ProfileHeader;