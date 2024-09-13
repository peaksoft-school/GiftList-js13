
import { FC, useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import ProfileInfoSection from "../shared/UI/card/ProfileInfoSection";
import ProfileHeader from "../shared/UI/card/ProfileHeader";
import HolidaySection from "./profile-page/HolidaySection";
import CharitySection from "./profile-page/CharitySection";
import WishSection from "./profile-page/WishSection";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store/store";
import {
  getAllHolidays,
  getAllCharities,
  getProfileById,
} from "../app/store/slice/userThunk"; 
import { useParams } from "react-router-dom";
import { UserProfile } from "../shared/lib/types/userProfile";

const UserProfilePage: FC = () => {
  const { id } = useParams<{ id: string }>(); 
  const decodedId = id ? decodeURIComponent(id) : "";
  const [showAllGifts, setShowAllGifts] = useState(false);
  const [showAllHolidays, setShowAllHolidays] = useState(false);
  const [showAllCharity, setShowAllCharity] = useState(false);

  const handleShowAllGifts = () => setShowAllGifts((prev) => !prev);
  const handleShowAllHolidays = () => setShowAllHolidays((prev) => !prev);
  const handleShowAllCharity = () => setShowAllCharity((prev) => !prev);

  const { profile, isLoading, error } = useSelector((state: RootState) => state.user); 
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (decodedId) {
      dispatch(getProfileById(Number(decodedId))); 
      dispatch(getAllHolidays());
      dispatch(getAllCharities());
    }
  }, [dispatch, decodedId]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const visibleGifts = showAllGifts ? profile?.wishList : profile?.wishList.slice(0, 3);
  const visibleHolidays = showAllHolidays ? profile?.holidays : profile?.holidays.slice(0, 3);
  const visibleCharity = showAllCharity ? profile?.charities : profile?.charities.slice(0, 3);

  return (
    <BoxContainer>
      <ContentBox>
        <Box>
          <BoxHeader>
            <ProfileHeader
              name={profile?.fullName || "Имя не указано"}
              profilePictureUrl={profile?.image || "путь к изображению"}
            />
            <BoxProfileSection>
              <ProfileInfoSection profileInfo={profile || {} as UserProfile} />
            </BoxProfileSection>
          </BoxHeader>
        </Box>

        <WishSection
          wish={visibleGifts || []}
          handleShowAll={handleShowAllGifts}
          showAll={showAllGifts}
        />
        <HolidaySection
          holidays={visibleHolidays || []}
          handleShowAll={handleShowAllHolidays}
          showAll={showAllHolidays}
        />
        <CharitySection
          charity={visibleCharity || []}
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
  padding: "10px",
  flexGrow: 1,
}));

const BoxHeader = styled(Box)(() => ({
  width:'100%',
  display: "flex",
  padding: "20px",
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





