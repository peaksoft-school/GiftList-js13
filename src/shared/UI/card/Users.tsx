import { FC, useState } from "react";
import { users } from "../../lib/types/users";
import { Box, Typography, Grid } from "@mui/material";
import SearchHeader from "../../../widgets/landimg/searchHeader/SearchHeader";
import { styled } from "@mui/material/styles";
import Meatballs from "../Meatballs";
import SideBarUsers from "../../sideBar/SideBarUsers";

const userData = [
  {
    id: 1,
    title: "заблокировать",
    icon: "src/assets/icon/lock.svg",
  },
  {
    id: 2,
    title: "удалить",
    icon: "src/assets/icon/delete.svg",
  },
];

const Users: FC = () => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  return (
    <Wrapper>
      <SideBarUsers onSelectUser={setSelectedUser} />
      {selectedUser === "Пользователи" && (
        <BoxContent>
          <SearchHeader />
          <BoxTitle>
            <Typography variant="h6">Пользователи</Typography>
          </BoxTitle>
          <GridContainer container spacing={2}>
            {users.map((user) => (
              <GridItem item xs={12} sm={6} md={4} lg={3} key={user.id}>
                <UserCard>
                  <UserImage src={user.image} alt={user.fullName} />
                  <UserInfo>
                    <Typography variant="body1">{user.fullName}</Typography>
                    <Typography variant="body2">{user.countOfWish}</Typography>
                    <Typography variant="body2">желаемых подарков</Typography>
                  </UserInfo>
                  <Meatballs data={userData} />
                </UserCard>
              </GridItem>
            ))}
          </GridContainer>
        </BoxContent>
      )}
    </Wrapper>
  );
};

export default Users;

const Wrapper = styled(Box)(() => ({
  display: "flex",
  height: "100vh",
}));

const BoxContent = styled(Box)(() => ({
  flexGrow: 1,
  padding: "20px",
}));

const BoxTitle = styled(Box)(() => ({
  marginBottom: "20px",
}));

const GridContainer = styled(Grid)(() => ({
  paddingTop: "20px",
}));

const GridItem = styled(Grid)(() => ({
  display: "flex",
  justifyContent: "center",
}));

const UserCard = styled(Box)(() => ({
  width: "250px",
  backgroundColor: "#fff",
  border: '1px solid #33CCCC',
  borderRadius: "8px",
  padding: "16px",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
}));

const UserImage = styled("img")(() => ({
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  marginBottom: "12px",
}));

const UserInfo = styled(Box)(() => ({
  marginBottom: "12px",
}));
