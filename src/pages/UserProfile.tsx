// import aida from "../assets/images/aida.png";
// import desiredBook from "../assets/images/desired-book.png";
// import mothersDay from "../assets/images/mothers-day.png";
// import kurbanAit from "../assets/images/kurban-ait.png";
// import kadyrTun from "../assets/images/kadyr-tun.png";
// import facebook from "../assets/icon/profile-facebook.svg";
// import instagram from "../assets/icon/profile-instagram.svg";
// import telegram from "../assets/icon/profile-telegram.svg";
// import vkontakte from "../assets/icon/profile-vk.svg";


// import { Box, Typography, Button, Grid, styled } from "@mui/material";
// import SideBar from "../shared/sideBar/SideBar";
// import { useState } from "react";

// const gifts = [
//   {
//     id: 1,
//     title: "Название подарка 1",
//     description: "День рождения",
//     imageUrl: desiredBook,
//     pending: "В ожидании",
//     date: "12.12.12",
//   },
//   {
//     id: 2,
//     title: "Название подарка 2",
//     description: "День рождения",
//     imageUrl: desiredBook,
//     pending: "В ожидании",
//     date: "13.13.13",
//   },
//   {
//     id: 3,
//     title: "Название подарка 3",
//     description: "День рождения",
//     imageUrl: desiredBook,
//     pending: "В ожидании",
//     date: "14.14.14",
//   },
// ];

// const charity = [
//   {
//     id: 1,
//     title: "Название благотворительности 1",
//     description: "12.04.2022",
//     imageUrl: desiredBook,
//   },
//   {
//     id: 2,
//     title: "Название благотворительности 2",
//     description: "12.04.2022",
//     imageUrl: desiredBook,
//   },
//   {
//     id: 3,
//     title: "Название благотворительности 3",
//     description: "12.04.2022",
//     imageUrl: desiredBook,
//   },
// ];

// const holidays = [
//   {
//     id: 1,
//     title: "День матери",
//     description: "12.05.2022",
//     imageUrl: mothersDay,
//   },
//   {
//     id: 2,
//     title: "Курбан айт",
//     description: "10.07.2022",
//     imageUrl: kurbanAit,
//   },
//   {
//     id: 3,
//     title: "Новый год",
//     description: "31.12.2022",
//     imageUrl: kadyrTun,
//   },
// ];

// const profileInfo = {
//   name: "Алия Каримова",
//   city: "Алматы",
//   floor: "Женский",
//   birthday: "12.04.1990",
//   email: "alik@gmail.com",
//   phoneNumber: "+79051234567",
//   hobbies: "Танцы, иностранные языки, готовка",
//   child: "Против спиртных напитков",
//   registrationDate: "15.01.2020",
//   profilePictureUrl: aida,
//   money: "12",
//   shoeSize: "36",
//   important: "Против спиртных напитков",
// };

// const ProfilePage: React.FC = () => {
//   const [showAllGifts, setShowAllGifts] = useState(false);
//   const [showAllHolidays, setShowAllHolidays] = useState(false);
//   const [showAllCharity, setShowAllCharity] = useState(false);

//   const handleShowAllGifts = () => setShowAllGifts((prev) => !prev);
//   const handleShowAllHolidays = () => setShowAllHolidays((prev) => !prev);
//   const handleShowAllCharity = () => setShowAllCharity((prev) => !prev);

//   const visibleGifts = showAllGifts ? gifts : gifts.slice(0, 3);
//   const visibleHolidays = showAllHolidays ? holidays : holidays.slice(0, 3);
//   const visibleCharity = showAllCharity ? charity : charity.slice(0, 3);

//   return (
//     <Box22 padding="20px">
//       <SideBar />
//       <Box>
//         <ProfileContainer>
//           <Box style={{ display: "flex" }}>
//             <ProfileHeader>
//               <Box>
//                 <ProfileImg
//                   src={profileInfo.profilePictureUrl}
//                   alt={profileInfo.name}
//                 />
//                 <ProfileInfo>
//                   <ProfileName variant="h5">{profileInfo.name}</ProfileName>

//                   <Box display="flex" alignItems="center" marginTop="10px">
//                     <ProfileIcons src={facebook} alt="" />
//                     <ProfileIcons src={instagram} alt="" />
//                     <ProfileIcons src={telegram} alt="" />
//                     <ProfileIcons src={vkontakte} alt="" />
//                   </Box>
//                 </ProfileInfo>
//               </Box>
//             </ProfileHeader>

//             <InfoSection>
//                 <Box>
//                   <Box>
//                     <StyledInfo variant="subtitle1">
//                       Основная информация
//                     </StyledInfo>
//                     <BoxData>
//                       <TypografyTitle variant="body2" paragraph>
//                         Город:
//                       </TypografyTitle>
//                       <TypografyTitleInfo variant="body2">
//                         {profileInfo.city}
//                       </TypografyTitleInfo>
//                     </BoxData>
//                     <BoxData>
//                       <TypografyTitle variant="body2" paragraph>
//                         Email:
//                       </TypografyTitle>
//                       <TypografyTitleInfo variant="body2">
//                         {profileInfo.email}
//                       </TypografyTitleInfo>
//                     </BoxData>
//                     <StyledInfo variant="subtitle1">
//                       Интересы, хобби:
//                     </StyledInfo>
//                     <BoxData>
//                       <TypografyTitle variant="body2" paragraph>
//                         Интересы, хобби:
//                       </TypografyTitle>
//                       <TypografyTitleInfo variant="body2">
//                         {profileInfo.hobbies}
//                       </TypografyTitleInfo>
//                     </BoxData>
//                     <StyledInfo variant="subtitle1">Доп. инфа</StyledInfo>
//                     <BoxData>
//                       <TypografyTitle variant="body2" paragraph>
//                         Размер одежды:
//                       </TypografyTitle>
//                       <TypografyTitleInfo variant="body2">
//                         {profileInfo.money}
//                       </TypografyTitleInfo>
//                     </BoxData>
//                   </Box>
//                 </Box>

//                 <Box>
//                   <Box>
//                     <BoxData>
//                       <TypografyTitle variant="body2" paragraph>
//                         Дата рождения:
//                       </TypografyTitle>
//                       <TypografyTitleInfo variant="body2">
//                         {profileInfo.birthday}
//                       </TypografyTitleInfo>
//                     </BoxData>
//                     <BoxData>
//                       <TypografyTitle variant="body2" paragraph>
//                         Номер телефона:
//                       </TypografyTitle>
//                       <TypografyTitleInfo variant="body2">
//                         {profileInfo.phoneNumber}
//                       </TypografyTitleInfo>
//                     </BoxData>
//                     <BoxData>
//                       <TypografyTitle variant="body2" paragraph>
//                         Важно знать:
//                       </TypografyTitle>
//                       <TypografyTitleInfo variant="body2">
//                         {profileInfo.important}
//                       </TypografyTitleInfo>
//                     </BoxData>
//                     <BoxData>
//                       <TypografyTitle variant="body2" paragraph>
//                         Размер обуви:
//                       </TypografyTitle>
//                       <TypografyTitleInfo variant="body2">
//                         {profileInfo.shoeSize}
//                       </TypografyTitleInfo>
//                     </BoxData>
//                   </Box>
//                 </Box>
//             </InfoSection>
//           </Box>
//         </ProfileContainer>

//         <Box marginBottom="20px">
//           <ProductsHeader>
//             <Typography variant="h6">Желаемые подарки</Typography>
//             <Button variant="text" color="primary" onClick={handleShowAllGifts}>
//               {showAllGifts ? "Скрыть" : "Смотреть все"}
//             </Button>
//           </ProductsHeader>
//           <Grid container spacing={2}>
//             {visibleGifts.map((gift) => (
//               <Grid item xs={12} sm={6} md={4} key={gift.id}>
//                 <ProductCard>
//                   <ProductImage src={gift.imageUrl} alt={gift.title} />
//                   <Box style={{ display: "flex" }}>
//                     <Typography variant="body1">{gift.title}</Typography>
//                     <Typography variant="body2">
//                       {gift.description}
//                     </Typography>
//                   </Box>
//                   <Box style={{ display: "flex" }}>
//                     <Typography variant="body2" color="textSecondary">
//                       {gift.pending}
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary">
//                       {gift.date}
//                     </Typography>
//                   </Box>
//                 </ProductCard>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>

//         <Box marginBottom="20px">
//           <ProductsHeader>
//             <Typography variant="h6">Праздники</Typography>
//             <Button
//               variant="text"
//               color="primary"
//               onClick={handleShowAllHolidays}
//             >
//               {showAllHolidays ? "Скрыть" : "Смотреть все"}
//             </Button>
//           </ProductsHeader>
//           <Grid container spacing={2}>
//             {visibleHolidays.map((holiday) => (
//               <Grid item xs={12} sm={6} md={4} key={holiday.id}>
//                 <ProductCard>
//                   <ProductImage src={holiday.imageUrl} alt={holiday.title} />
//                   <Typography variant="body1">{holiday.title}</Typography>
//                   <Typography variant="body2" color="textSecondary">
//                     {holiday.description}
//                   </Typography>
//                 </ProductCard>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>

//         <Box marginBottom="20px">
//           <ProductsHeader>
//             <Typography variant="h6">Благотворительность</Typography>
//             <Button
//               variant="text"
//               color="primary"
//               onClick={handleShowAllCharity}
//             >
//               {showAllCharity ? "Скрыть" : "Смотреть все"}
//             </Button>
//           </ProductsHeader>
//           <Grid container spacing={2}>
//             {visibleCharity.map((item) => (
//               <Grid item xs={12} sm={6} md={4} key={item.id}>
//                 <ProductCard>
//                   <ProductImage src={item.imageUrl} alt={item.title} />
//                   <Typography variant="body1">{item.title}</Typography>
//                   <Typography variant="body2" color="textSecondary">
//                     {item.description}
//                   </Typography>
//                 </ProductCard>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//       </Box>
//     </Box22>
//   );
// };

// const Box22 = styled(Box)({
//   display: "flex",
// });
// const ProfileContainer = styled(Box)({
//   padding: "20px",
//   backgroundColor: "#f5f5f5",
//   borderRadius: "10px",
//   marginBottom: "20px",
//   width:'1086px',
// });

// const ProfileHeader = styled(Box)({
//   marginBottom: "20px",
// });
// const ProfileImg = styled("img")({
//   width: "190px",
//   height: "190px",
// });
// const ProfileIcons = styled("img")({
//   width: "32px",
//   height: "32px",
//   margin: "0 10px",
// });

// const ProfileInfo = styled(Box)({
//   flex: 1,
// });

// const ProfileName = styled(Typography)({
//   color: "rgba(2, 2, 2, 1)",
//   fontSize: "18px",
//   fontWeight: "500",
//   lineHeight: "21px",
//   textAlign:'center',
// });

// const StyledInfo = styled(Typography)({
//   color: "rgba(134, 57, 181, 1)",
//   fontSize: "18px",
//   fontWeight: "500",
//   lineHeight: "21px",
//   marginBottom:'10px',
// });
// const InfoSection = styled(Box)({
//   display: "flex",
//   justifyContent: "space-around",
//   width: "100%",
//   paddingTop:'50px',

// });


// const ProductCard = styled(Box)({
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   backgroundColor: "#fff",
//   borderRadius: "10px",
//   boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
//   padding: "10px",
//   textAlign: "center",
//   width:'350px',
//   height:'250px',
// });

// const ProductImage = styled("img")({
//   width: "100%",
//   height: "auto",
//   borderRadius: "10px",
// });

// const ProductsHeader = styled(Box)({
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   width: "100%",
//   marginBottom: "10px",
// });

// const TypografyTitle = styled(Typography)({
//   color: "rgba(92, 92, 92, 1)",
//   fontSize: "14px",
//   fontWeight: "400",
//   lineHeight: "18px",
//   margin: "0",
// });

// const TypografyTitleInfo = styled(Typography)({
//   color: "rgba(0, 0, 0, 1)",
//   fontSize: "16px",
//   fontWeight: "400",
//   lineHeight: "20px",
//   margin: "0",
// });

// const BoxData = styled(Box)({
//   marginBottom:'10px',
// })


// export default ProfilePage;









