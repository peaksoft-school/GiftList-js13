import { FC, useEffect } from "react";
import FriendsCard from "../shared/UI/card/FriendsCard";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store/store";
import { getAllMyFriends } from "../app/store/slice/userThunk";

export const MyFriends: FC = () => {
  const friends = useSelector((state: RootState) => state.user.friends);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllMyFriends());
  }, [dispatch]);

  console.log(friends);

  return (
    <Container>
      <SideBarWrapper>
      </SideBarWrapper>
      <MainContent>
        <FriendsContainer>
          {friends && friends.length > 0 ? (
            friends.map((friend) => (
              <FriendsCard key={friend.id} friend={friend} />
            ))
          ) : (
            <EmptyMessage>
              <h1>Pusto</h1>
            </EmptyMessage>
          )}
        </FriendsContainer>
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
  gap: "10px",
}));

const EmptyMessage = styled(Box)(() => ({
  gridColumn: "span 4", // Пример: чтобы сообщение занимало всю строку в сетке
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100px", // Задайте нужную высоту
}));
