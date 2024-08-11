import { Box, Grid, styled, Typography } from "@mui/material";
import SideBar from "../shared/sideBar/SideBar";
import { useState } from "react";
import ProfileHeader from "../shared/UI/card/ProfileHeader";
import ProfileInfoSection from "../shared/UI/card/ProfileInfoSection";
import { Button } from "../shared/UI/button/Button";

import desiredBook from "../assets/images/desired-book.png";
import mothersDay from "../assets/images/mothers-day.png";
import kurbanAit from "../assets/images/kurban-ait.png";
import kadyrTun from "../assets/images/kadyr-tun.png";
import aida from "../assets/images/aida.png";
import SearchHeader from "../widgets/landimg/searchHeader/SearchHeader";

const gifts = [
  {
    id: 1,
    title: "Название подарка 1",
    description: "День рождения",
    imageUrl: desiredBook,
    pending: "В ожидании",
    date: "12.12.12",
  },
  {
    id: 2,
    title: "Название подарка 2",
    description: "День рождения",
    imageUrl: desiredBook,
    pending: "В ожидании",
    date: "13.13.13",
  },
  {
    id: 3,
    title: "Название подарка 3",
    description: "День рождения",
    imageUrl: desiredBook,
    pending: "В ожидании",
    date: "14.14.14",
  },
];

const charity = [
  {
    id: 1,
    title: "Название подарка",
    description: "12.04.2022",
    imageUrl: desiredBook,
  },
  {
    id: 2,
    title: "Название подарка",
    description: "12.04.2022",
    imageUrl: desiredBook,
  },
  {
    id: 3,
    title: "Название подарка",
    description: "12.04.2022",
    imageUrl: desiredBook,
  },
];

const holidays = [
  {
    id: 1,
    title: "День матери",
    description: "12.05.2022",
    imageUrl: mothersDay,
  },
  {
    id: 2,
    title: "Курбан айт",
    description: "10.07.2022",
    imageUrl: kurbanAit,
  },
  {
    id: 3,
    title: "Новый год",
    description: "31.12.2022",
    imageUrl: kadyrTun,
  },
];

const profileInfo = {
  name: "Алия Каримова",
  city: "Алматы",
  floor: "Женский",
  birthday: "12.04.1990",
  email: "alik@gmail.com",
  phoneNumber: "+79051234567",
  hobbies: "Танцы, иностранные языки, готовка",
  child: "Против спиртных напитков",
  registrationDate: "15.01.2020",
  profilePictureUrl: aida,
  money: "12",
  shoeSize: "36",
  important: "Против спиртных напитков",
};

const ProfilePage: React.FC = () => {
  const [showAllGifts, setShowAllGifts] = useState(false);
  const [showAllHolidays, setShowAllHolidays] = useState(false);
  const [showAllCharity, setShowAllCharity] = useState(false);

  const handleShowAllGifts = () => setShowAllGifts((prev) => !prev);
  const handleShowAllHolidays = () => setShowAllHolidays((prev) => !prev);
  const handleShowAllCharity = () => setShowAllCharity((prev) => !prev);

  const visibleGifts = showAllGifts ? gifts : gifts.slice(0, 3);
  const visibleHolidays = showAllHolidays ? holidays : holidays.slice(0, 3);
  const visibleCharity = showAllCharity ? charity : charity.slice(0, 3);

  return (
    <BoxContainer>
      <SideBar />
      <ContentBox>
        <SearchHeader />
        <Box>
          <BoxHeader>
            <Box>
              <ProfileHeader
                name={profileInfo.name}
                profilePictureUrl={profileInfo.profilePictureUrl}
              />
            </Box>

            <ProfileInfoSection profileInfo={profileInfo} />
          </BoxHeader>
        </Box>
        <ButtonBox>
          <Button variant="outlined">Удалить</Button>
          <ButtonProfile variant="contained">Заблокировать</ButtonProfile>
        </ButtonBox>
        <Section>
          <ProductsHeader>
            <Typography variant="h6">Желаемые подарки</Typography>
            <TypographyWatch variant="body1" onClick={handleShowAllGifts}>
              {showAllGifts ? "Скрыть" : "Смотреть все"}
            </TypographyWatch>
          </ProductsHeader>
          <Grid container spacing={2}>
            {visibleGifts.map((gift) => (
              <Grid item xs={12} sm={6} md={4} key={gift.id}>
                <ProductCard>
                  <ProductImage src={gift.imageUrl} alt={gift.title} />
                  <ProductInfo>
                    <Typography variant="body1">{gift.title}</Typography>
                    <Typography variant="body2">{gift.description}</Typography>
                  </ProductInfo>
                  <ProductDetails>
                    <Typography variant="body2">{gift.date}</Typography>
                    <BoxTypografyWait>
                      <Typography variant="body2">{gift.pending}</Typography>
                      <TypographyDots variant="body2">...</TypographyDots>
                    </BoxTypografyWait>
                  </ProductDetails>
                </ProductCard>
              </Grid>
            ))}
          </Grid>
        </Section>

        <Section>
          <ProductsHeader>
            <Typography variant="h6">Праздники</Typography>
            <TypographyWatch variant="body1" onClick={handleShowAllHolidays}>
              {showAllHolidays ? "Скрыть" : "Смотреть все"}
            </TypographyWatch>
          </ProductsHeader>
          <Grid container spacing={2}>
            {visibleHolidays.map((holiday) => (
              <Grid item xs={12} sm={6} md={4} key={holiday.id}>
                <ProductCard>
                  <ProductImage src={holiday.imageUrl} alt={holiday.title} />

                  <TypographyHoliday variant="body1">
                    {holiday.title}
                  </TypographyHoliday>
                  <BoxDate>
                    <Typography variant="body2">
                      {holiday.description}
                    </Typography>
                    <TypographyDots variant="body2">...</TypographyDots>
                  </BoxDate>
                </ProductCard>
              </Grid>
            ))}
          </Grid>
        </Section>

        <Section>
          <ProductsHeader>
            <Typography variant="h6">Благотворительность</Typography>
            <TypographyWatch variant="body1" onClick={handleShowAllCharity}>
              {showAllCharity ? "Скрыть" : "Смотреть все"}
            </TypographyWatch>
          </ProductsHeader>
          <Grid container spacing={2}>
            {visibleCharity.map((charityItem) => (
              <Grid item xs={12} sm={6} md={4} key={charityItem.id}>
                <ProductCard>
                  <ProductImage
                    src={charityItem.imageUrl}
                    alt={charityItem.title}
                  />
                  <Box3>
                    <Typography variant="body1">{charityItem.title}</Typography>
                    <Typography variant="body1">Новый</Typography>
                  </Box3>
                  <Box4>
                    <Typography variant="body2">
                      {charityItem.description}
                    </Typography>
                    <Box5>
                      <Typography variant="body2">В ожидании</Typography>
                      <Typography variant="body2">...</Typography>
                    </Box5>
                  </Box4>
                </ProductCard>
              </Grid>
            ))}
          </Grid>
        </Section>
      </ContentBox>
    </BoxContainer>
  );
};

const BoxContainer = styled(Box)(() => ({
  display: "flex",
}));

const ContentBox = styled(Box)(() => ({
  padding: "20px",
}));

const BoxHeader = styled(Box)(() => ({
  display: "flex",
}));
const Section = styled(Box)(() => ({
  marginBottom: "20px",
}));

const ProductsHeader = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "20px 0",
}));

const ButtonBox = styled(Box)(() => ({
  marginLeft: "850px",
}));

const ButtonProfile = styled(Button)(() => ({
  color: "white",
  margin: "0 5px",
}));

const TypographyWatch = styled(Typography)(() => ({
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "19px",
  cursor: "pointer",

  "&:hover": {
    color: "rgba(55, 114, 255, 1)",
    textDecoration: "underline",
  },
}));
const ProductCard = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#fff",
  borderRadius: "10px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  padding: "10px",
  width: "350px",
  height: "250px",
}));

const TypographyHoliday = styled(Typography)(() => ({
  textAlign: "left",
  width: "100%",
  margin: "10px 0",
}));
const BoxDate = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
}));
const ProductImage = styled("img")(() => ({
  width: "100%",
  height: "auto",
  borderRadius: "10px",
}));

const ProductInfo = styled(Box)(() => ({
  width: "100%",
  padding: "10px 0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const ProductDetails = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
}));
const BoxTypografyWait = styled(Typography)(() => ({
  display: "flex",
}));

const TypographyDots = styled(Typography)(() => ({
  margin: "0 5px",
}));

const Box3 = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  margin: "10px 0",
}));
const Box4 = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
}));
const Box5 = styled(Box)(() => ({
  display: "flex",
}));
export default ProfilePage;
