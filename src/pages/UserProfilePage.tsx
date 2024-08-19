import { Box, styled } from "@mui/material";
import SideBar from "../shared/sideBar/SideBar";
import { useEffect, useState } from "react";
import ProfileInfoSection from "../shared/UI/card/ProfileInfoSection";
import { Button } from "../shared/UI/button/Button";
import SearchHeader from "../widgets/landimg/searchHeader/SearchHeader";
import ProfileHeader from "../shared/UI/card/ProfileHeader";
import HolidaySection from "./profile-page/HolidaySection";
import CharitySection from "./profile-page/CharitySection";
import WishSection from "./profile-page/WishSection";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store/store";
import { charity, wish as wishData, holidays, profileInfo } from "../shared/lib/types/userProfile";
import { getUserAll } from "../app/store/slice/userThunk";

const UserProfilePage: React.FC = () => {
  const [wish, setWish] = useState<Gift[]>([]);
  const [showAllGifts, setShowAllGifts] = useState(false);
  const [showAllHolidays, setShowAllHolidays] = useState(false);
  const [showAllCharity, setShowAllCharity] = useState(false);

  const handleShowAllGifts = () => setShowAllGifts((prev) => !prev);
  const handleShowAllHolidays = () => setShowAllHolidays((prev) => !prev);
  const handleShowAllCharity = () => setShowAllCharity((prev) => !prev);

  const visibleGifts = showAllGifts ? wish : wish.slice(0, 3);
  const visibleHolidays = showAllHolidays ? holidays : holidays.slice(0, 3);
  const visibleCharity = showAllCharity ? charity : charity.slice(0, 3);

  const { user, status, error } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (status === "idle") {
      dispatch(getUserAll());
    }
  }, [dispatch, status]);

  useEffect(() => {
    // Симулируем загрузку данных
    setWish(wishData);
  }, []);

  if (status === "loading") return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
        <WishSection
          wish={visibleGifts}
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
  flexGrow: 1,
}));

const BoxHeader = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

const ButtonBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "20px",
}));

const ButtonProfile = styled(Button)(() => ({
  color: "white",
  marginLeft: "5px",
}));

export default UserProfilePage;
