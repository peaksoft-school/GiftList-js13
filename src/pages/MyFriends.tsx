import { FC, useEffect, useState } from "react";
import SideBar from "../shared/sideBar/SideBar";
import SearchHeader from "../widgets/landimg/searchHeader/SearchHeader";
import FriendsCard from "../shared/UI/card/FriendsCard";
// import { friendData } from "../shared/lib/types/CardType";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store/store";
import { getAllMyFriends } from "../app/store/slice/userThunk";

export const MyFriends: FC = () => {
  const friends = useSelector((state: RootState) => state.user.friends);
  const dispatch = useDispatch<AppDispatch>();
  const [selected, setSelected] = useState<string | null>(null);

  // const handleMenuClick = (text: string) => {
  //   if (text === "Друзья") {
  //     setSelected("Друзья");
  //   } else {
  //     setSelected(null);
  //   }
  // };

  useEffect(() => {
    if (selected === "Друзья") {
      dispatch(getAllMyFriends());
    }
  }, [dispatch, selected]);

  // const handleMenuClick = (text: string) => {
  //   setSelected(text === "Друзья" ? "Друзья" : null);
  // };

  const handleMenuClick = (text: string) => {
    if (text === "Друзья") {
      setSelected("Друзья");
    } else {
      setSelected(null);
    }
  };

  return (
    <Container>
      <SideBarWrapper>
        <SideBar onMenuClick={handleMenuClick} />
      </SideBarWrapper>
      <MainContent>
        <SearchHeader />
        {selected === "Друзья" && (
          <FriendsContainer>
            {friends &&
              friends.map((friend) => (
                <FriendsCard key={friend.id} friend={friend} />
              ))}
          </FriendsContainer>
        )}
      </MainContent>
    </Container>
  );
};

const Container = styled(Box)(() => ({
  display: "flex",
  margin: "20px",
}));

const SideBarWrapper = styled(Box)(() => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "5px",
}));

const MainContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
}));

const FriendsContainer = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
}));
