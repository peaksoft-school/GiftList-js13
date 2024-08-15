import { Box, styled } from "@mui/material";
import SideBar from "../shared/sideBar/SideBar";
import { useEffect, useState } from "react";
import ProfileInfoSection from "../shared/UI/card/ProfileInfoSection";
import { Button } from "../shared/UI/button/Button";

import SearchHeader from "../widgets/landimg/searchHeader/SearchHeader";
import {
  charity,
  fetchWish,
  holidays,
  profileInfo,
} from "../shared/lib/types/userProfile";
import ProfileHeader from "../shared/UI/card/ProfileHeader";
import GiftSection from "./profile-page/GiftSection";
import HolidaySection from "./profile-page/HolidaySection";
import CharitySection from "./profile-page/CharitySection";

const UserProfilePage: React.FC = () => {
  interface Wish {
    giftTitle: string;
    image: string;
    description: string;
    giftLink: string;
    holidayTitle: string;
    dateHoliday: string; // лучше использовать Date, если это дата
    booked: boolean;
  }
  const [wish, setWish] = useState<Wish[]>([]);
  const [showAllGifts, setShowAllGifts] = useState(false);
  const [showAllHolidays, setShowAllHolidays] = useState(false);
  const [showAllCharity, setShowAllCharity] = useState(false);

  const handleShowAllGifts = () => setShowAllGifts((prev) => !prev);
  const handleShowAllHolidays = () => setShowAllHolidays((prev) => !prev);
  const handleShowAllCharity = () => setShowAllCharity((prev) => !prev);

  const visibleGifts = showAllGifts ? wish : wish.slice(0, 3);
  const visibleHolidays = showAllHolidays ? holidays : holidays.slice(0, 3);
  const visibleCharity = showAllCharity ? charity : charity.slice(0, 3);

  useEffect(() => {
    const wishData = async () => {
      try {
        const data = await fetchWish();
        setWish(data);
      } catch (error) {
        console.log(error);
      }
    };
    wishData();
  }, []);

  return (
    <BoxContainer>
      <SideBar />
      <ContentBox>
        <SearchHeader />
        <Box>
          <BoxHeader>
            <ProfileHeader
              name={profileInfo.name}
              profilePictureUrl={profileInfo.profilePictureUrl}
            />
            <ProfileInfoSection profileInfo={profileInfo} />
          </BoxHeader>
        </Box>
        <ButtonBox>
          <Button variant="outlined">Удалить</Button>
          <ButtonProfile variant="contained">Заблокировать</ButtonProfile>
        </ButtonBox>
        <GiftSection
          gifts={visibleGifts}
          handleShowAll={handleShowAllGifts}
          showAll={showAllGifts}
        />
        <HolidaySection
          holidays={visibleHolidays}
          handleShowAll={handleShowAllHolidays}
          showAll={showAllHolidays}
        />
        <CharitySection
          charity={visibleCharity}
          handleShowAll={handleShowAllCharity}
          showAll={showAllCharity}
        />
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

const ButtonBox = styled(Box)(() => ({
  marginLeft: "850px",
}));

const ButtonProfile = styled(Button)(() => ({
  color: "white",
  margin: "0 5px",
}));

export default UserProfilePage;
