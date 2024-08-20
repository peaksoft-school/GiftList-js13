// import { FC, useEffect, useState } from "react";
// import { Box, styled } from "@mui/material";
// import SideBar from "../shared/sideBar/SideBar";
// import ProfileInfoSection from "../shared/UI/card/ProfileInfoSection";
// import SearchHeader from "../widgets/landimg/searchHeader/SearchHeader";
// import ProfileHeader from "../shared/UI/card/ProfileHeader";
// import HolidaySection from "./profile-page/HolidaySection";
// import CharitySection from "./profile-page/CharitySection";
// import WishSection from "./profile-page/WishSection";
// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "../app/store/store";
// import {
//   charity,
//   wish as wishData,
//   holidays,
//   profileInfo,
//   Gift,
// } from "../shared/lib/types/userProfile";
// import { getAllWishes } from "../app/store/slice/userThunk";

// const UserProfilePage:FC = () => {
//   const [wish, setWish] = useState<Gift[]>([]);
//   const [showAllGifts, setShowAllGifts] = useState(false);
//   const [showAllHolidays, setShowAllHolidays] = useState(false);
//   const [showAllCharity, setShowAllCharity] = useState(false);

//   const handleShowAllGifts = () => setShowAllGifts((prev) => !prev);
//   const handleShowAllHolidays = () => setShowAllHolidays((prev) => !prev);
//   const handleShowAllCharity = () => setShowAllCharity((prev) => !prev);

//   const visibleGifts = showAllGifts ? wish : wish.slice(0, 3);
//   const visibleHolidays = showAllHolidays ? holidays : holidays.slice(0, 3);
//   const visibleCharity = showAllCharity ? charity : charity.slice(0, 3);

//   const { status, error } = useSelector((state: RootState) => state.user);
//   const dispatch = useDispatch<AppDispatch>();

//   useEffect(() => {
//     if (status === "idle") {
//       dispatch(getAllWishes());
//     }
    
//     setWish(wishData);
//   }, [dispatch, status]);

//   if (status === "loading") return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <BoxContainer>
//       <SideBar />
//       <ContentBox>
//         <SearchHeader />
//         <Box>
//           <BoxHeader>
//             <ProfileHeader
//               name={profileInfo.name}
//               profilePictureUrl={profileInfo.profilePictureUrl}
//             />
//             <ProfileInfoSection profileInfo={profileInfo} />
//           </BoxHeader>
//         </Box>

//         <WishSection
//           wish={visibleGifts}
//           handleShowAll={handleShowAllGifts}
//           showAll={showAllGifts}
//         />
//         <HolidaySection
//           holidays={visibleHolidays}
//           handleShowAll={handleShowAllHolidays}
//           showAll={showAllHolidays}
//         />
//         <CharitySection
//           charity={visibleCharity}
//           handleShowAll={handleShowAllCharity}
//           showAll={showAllCharity}
//         />
//       </ContentBox>
//     </BoxContainer>
//   );
// };

// const BoxContainer = styled(Box)(() => ({
//   display: "flex",
// }));

// const ContentBox = styled(Box)(() => ({
//   padding: "20px",
//   flexGrow: 1,
// }));

// const BoxHeader = styled(Box)(() => ({
//   display: "flex",
//   justifyContent: "space-between",
// }));

// export default UserProfilePage;




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
import { getAllWishes, getAllHolidays, getAllCharities } from "../app/store/slice/userThunk";
import { profileInfo } from "../shared/lib/types/userProfile";

const UserProfilePage: FC = () => {
  const [showAllGifts, setShowAllGifts] = useState(false);
  const [showAllHolidays, setShowAllHolidays] = useState(false);
  const [showAllCharity, setShowAllCharity] = useState(false);

  const handleShowAllGifts = () => setShowAllGifts((prev) => !prev);
  const handleShowAllHolidays = () => setShowAllHolidays((prev) => !prev);
  const handleShowAllCharity = () => setShowAllCharity((prev) => !prev);

  const { wishes, holidays, charities, isLoading, error } = useSelector(
    (state: RootState) => state.user
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllWishes());
    dispatch(getAllHolidays());
    dispatch(getAllCharities());
  }, [dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const visibleGifts = showAllGifts ? wishes : wishes.slice(0, 3);
  const visibleHolidays = showAllHolidays ? holidays : holidays.slice(0, 3);
  const visibleCharity = showAllCharity ? charities : charities.slice(0, 3);

  return (
    <BoxContainer>
      <SideBar />
      <ContentBox>
        <SearchHeader />
        <Box>
          <BoxHeader>
            <ProfileHeader
              name={profileInfo.image}
              profilePictureUrl={profileInfo.image}
            />
            <ProfileInfoSection profileInfo={profileInfo} />
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
}));

const ContentBox = styled(Box)(() => ({
  padding: "20px",
  flexGrow: 1,
}));

const BoxHeader = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

export default UserProfilePage;
