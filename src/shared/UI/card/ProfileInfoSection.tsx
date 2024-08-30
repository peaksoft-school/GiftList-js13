// import { FC } from "react";
// import { Box, Typography, styled } from "@mui/material";
// import { UserProfile } from "../../lib/types/userProfile";

// const ProfileInfoSection: FC<{ profileInfo: UserProfile }> = ({
//   profileInfo,
// }) => (
//   <InfoSectionContainer>
//     <BoxRef>
//       <div>
//         <StyledInfo variant="subtitle1">Основная информация</StyledInfo>
//         <BoxData>
//           <TypografyTitle variant="body2" paragraph>
//             Город:
//           </TypografyTitle>
//           <TypografyTitleInfo variant="body2">
//             {profileInfo.country}
//           </TypografyTitleInfo>
//         </BoxData>
//         <BoxData>
//           <TypografyTitle variant="body2" paragraph>
//             Email:
//           </TypografyTitle>
//           <TypografyTitleInfo variant="body2">
//             {profileInfo.email}
//           </TypografyTitleInfo>
//         </BoxData>
//         <StyledInfo variant="subtitle1">Интересы, хобби:</StyledInfo>
//         <BoxData>
//           <TypografyTitle variant="body2" paragraph>
//             Интересы, хобби:
//           </TypografyTitle>
//           <TypografyTitleInfo variant="body2">
//             {profileInfo.hobby}
//           </TypografyTitleInfo>
//         </BoxData>
//         <StyledInfo variant="subtitle1">Доп. информация</StyledInfo>
//         <BoxData>
//           <TypografyTitle variant="body2" paragraph>
//             Размер одежды:
//           </TypografyTitle>
//           <TypografyTitleInfo variant="body2">
//             {profileInfo.shoesSize}
//           </TypografyTitleInfo>
//         </BoxData>
//       </div>

//       <div>
//         <BoxData>
//           <TypografyTitle variant="body2" paragraph>
//             Дата рождения:
//           </TypografyTitle>
//           <TypografyTitleInfo variant="body2">
//             {profileInfo.dateOfBirth}
//           </TypografyTitleInfo>
//         </BoxData>
//         <BoxData>
//           <TypografyTitle variant="body2" paragraph>
//             Номер телефона:
//           </TypografyTitle>
//           <TypografyTitleInfo variant="body2">
//             {profileInfo.phoneNumber}
//           </TypografyTitleInfo>
//         </BoxData>
//         <BoxData>
//           <TypografyTitle variant="body2" paragraph>
//             Важно знать:
//           </TypografyTitle>
//           <TypografyTitleInfo variant="body2">
//             {profileInfo.peculiarity}
//           </TypografyTitleInfo>
//         </BoxData>
//         <BoxData>
//           <TypografyTitle variant="body2" paragraph>
//             Размер обуви:
//           </TypografyTitle>
//           <TypografyTitleInfo variant="body2">
//             {profileInfo.clothingSize}
//           </TypografyTitleInfo>
//         </BoxData>
//       </div>
//     </BoxRef>
//   </InfoSectionContainer>
// );

// const InfoSectionContainer = styled(Box)(() => ({
//   display: "flex",
//   justifyContent: "space-around",
//   width: "100%",
//   paddingTop: "50px",
// }));

// const BoxRef = styled(Box)(() => ({
//   display: "flex",
//   justifyContent: "space-around",
//   // alignItems: 'center',
//   width: "100%",
// }));

// const StyledInfo = styled(Typography)(() => ({
//   color: "rgba(134, 57, 181, 1)",
//   fontSize: "18px",
//   fontWeight: "500",
//   lineHeight: "21px",
//   marginBottom: "10px",
// }));

// const BoxData = styled(Box)(() => ({
//   marginBottom: "10px",
// }));

// const TypografyTitle = styled(Typography)(() => ({
//   color: "rgba(92, 92, 92, 1)",
//   fontSize: "14px",
//   fontWeight: "400",
//   lineHeight: "18px",
//   margin: "0",
// }));

// const TypografyTitleInfo = styled(Typography)(() => ({
//   color: "rgba(0, 0, 0, 1)",
//   fontSize: "16px",
//   fontWeight: "400",
//   lineHeight: "20px",
//   margin: "0",
//   marginTop: "10px",
// }));

// export default ProfileInfoSection;

import { FC } from "react";
import { Box, Typography, styled } from "@mui/material";
import { UserProfile } from "../../lib/types/userProfile";

const ProfileInfoSection: FC<{ profileInfo: UserProfile }> = ({
  profileInfo,
}) => (
  <InfoSectionContainer>
    <BoxRef>
      <div>
        <StyledInfo variant="subtitle1">Основная информация</StyledInfo>
        <BoxData>
          <TypografyTitle variant="body2" paragraph>
            Город:
          </TypografyTitle>
          <TypografyTitleInfo variant="body2">
            {profileInfo.country}
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
            {profileInfo.hobby}
          </TypografyTitleInfo>
        </BoxData>
        <StyledInfo variant="subtitle1">Доп. информация</StyledInfo>
        <BoxData>
          <TypografyTitle variant="body2" paragraph>
            Размер одежды:
          </TypografyTitle>
          <TypografyTitleInfo variant="body2">
            {profileInfo.clothingSize}
          </TypografyTitleInfo>
        </BoxData>
      </div>

      <div>
        <BoxData>
          <TypografyTitle variant="body2" paragraph>
            Дата рождения:
          </TypografyTitle>
          <TypografyTitleInfo variant="body2">
            {profileInfo.dateOfBirth}
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
            {profileInfo.peculiarity}
          </TypografyTitleInfo>
        </BoxData>
        <BoxData>
          <TypografyTitle variant="body2" paragraph>
            Размер обуви:
          </TypografyTitle>
          <TypografyTitleInfo variant="body2">
            {profileInfo.shoesSize}
          </TypografyTitleInfo>
        </BoxData>
      </div>
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
