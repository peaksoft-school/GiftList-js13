import { FC, useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import SideBar from "../shared/sideBar/SideBar";
import ProfileInfoSection from "../shared/UI/card/ProfileInfoSection";
import SearchHeader from "../widgets/landimg/searchHeader/SearchHeader";
import ProfileHeader from "../shared/UI/card/ProfileHeader";
import HolidaySection from "./profile-page/HolidaySection";
import CharitySection from "./profile-page/CharitySection";
import WishSection from "./profile-page/WishSection";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store/store";
import {
  getAllWishes,
  getAllHolidays,
  getAllCharities,
  getProfileById,
} from "../app/store/slice/userThunk";
import {
  profileInfo,
  wish,
  holidays,
  charity,
} from "../shared/lib/types/userProfile";
import { useParams } from "react-router-dom";

const UserProfilePage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const decodedId = id ? decodeURIComponent(id) : "";
  const [showAllGifts, setShowAllGifts] = useState(false);
  const [showAllHolidays, setShowAllHolidays] = useState(false);
  const [showAllCharity, setShowAllCharity] = useState(false);

  const handleShowAllGifts = () => setShowAllGifts((prev) => !prev);
  const handleShowAllHolidays = () => setShowAllHolidays((prev) => !prev);
  const handleShowAllCharity = () => setShowAllCharity((prev) => !prev);

  const { isLoading, error } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (decodedId) {
      dispatch(getAllWishes());
      dispatch(getAllHolidays());
      dispatch(getAllCharities());
      dispatch(getProfileById(Number(decodedId)));
    }
  }, [dispatch, decodedId]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const visibleGifts = showAllGifts ? wish : wish.slice(0, 3);
  const visibleHolidays = showAllHolidays ? holidays : holidays.slice(0, 3);
  const visibleCharity = showAllCharity ? charity : charity.slice(0, 3);

  return (
    <BoxContainer>
      <SideBar />
      <ContentBox>
        <SearchHeader />
        <Box>
          <BoxHeader>
            <ProfileHeader
              name={profileInfo?.fullName || "Имя не указано"}
              profilePictureUrl={profileInfo?.image || "путь к изображению"}
            />
            <BoxProfileSection>
              <ProfileInfoSection profileInfo={profileInfo} />
            </BoxProfileSection>
          </BoxHeader>
        </Box>

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
  width: "1090px",
}));

const ContentBox = styled(Box)(() => ({
  padding: "20px",
  flexGrow: 1,
  // width: "1086px",
}));

const BoxHeader = styled(Box)(() => ({
  display: "flex",
  padding: "20px",
  // justifyContent:'space-around',
  backgroundColor: "#fbf5f5df",
  border: "1px solid #f1d5d5df",
  borderRadius: "5px",
}));

const BoxProfileSection = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-evenly",
  width: "100%",
}));

export default UserProfilePage;
