import { FC } from "react";
import SideBar from "../shared/sideBar/SideBar";
import SearchHeader from "../widgets/landimg/searchHeader/SearchHeader";
import FriendsCard from "../shared/UI/card/FriendsCard";
import { Friend } from "../shared/lib/types/CardType";
import { styled } from "@mui/material/styles";

const friendData: Friend[] = [
  {
    id: 1,
    name: "Иван",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpVxnVTq-f6zLfR2QSEJ52aQJfXAq576lhpQ&s",
    counter: 3,
    wish: "Желаний",
    counterTwo: 2,
    holiday: "Праздников",
  },
  {
    id: 2,
    name: "Иван",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpVxnVTq-f6zLfR2QSEJ52aQJfXAq576lhpQ&s",
    counter: 3,
    wish: "Желаний",
    counterTwo: 2,
    holiday: "Праздников",
  },
  {
    id: 3,
    name: "Иван",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpVxnVTq-f6zLfR2QSEJ52aQJfXAq576lhpQ&s",
    counter: 3,
    wish: "Желаний",
    counterTwo: 2,
    holiday: "Праздников",
  },
  {
    id: 4,
    name: "Иван",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpVxnVTq-f6zLfR2QSEJ52aQJfXAq576lhpQ&s",
    counter: 3,
    wish: "Желаний",
    counterTwo: 2,
    holiday: "Праздников",
  },
];

export const MyFriends: FC = () => {
  return (
    <Container>
      <SideBarWrapper>
        <SideBar />
      </SideBarWrapper>
      <MainContent>
        <SearchHeader />
        <FriendsContainer>
          {friendData.map((friend) => (
            <FriendsCard key={friend.id} friend={friend} />
          ))}
        </FriendsContainer>
      </MainContent>
    </Container>
  );
};

const Container = styled("div")({
  display: "flex",
  width: "1440px",
  height: "1024px",
});

const SideBarWrapper = styled("div")({
  width: "300px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

const MainContent = styled("div")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
});

const FriendsContainer = styled("div")({
  display: "flex",
});
