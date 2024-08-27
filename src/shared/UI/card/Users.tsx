import { FC, useEffect, useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Meatballs from "../Meatballs";
import SideBarUsers from "../../sideBar/SideBarUsers";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store/store";
import { getUsersAdmin } from "../../../app/store/slice/userThunk";
import avatar from "../../../assets/images/avatar.png";
import SearchHeader from "../../../widgets/landimg/searchHeader/SearchHeader";

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
  const dispatch = useDispatch<AppDispatch>();
  const { users } = useSelector((state: RootState) => state.user);
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  useEffect(() => {
    if (selectedUser === "Пользователи") {
      dispatch(getUsersAdmin());
    }
  }, [dispatch, selectedUser]);

  return (
    <Wrapper>
      <SideBarUsers onSelectUser={setSelectedUser} />
      <MainContent>
        <SearchHeader />
        {selectedUser === "Пользователи" && (
          <BoxContent>
            <BoxTitle>
              <Typography variant="h6">Пользователи</Typography>
            </BoxTitle>
            <GridContainer container spacing={2}>
              {users.map((user) => (
                <Grid key={user.id} item>
                  <UserCard>
                    <UserCardHeader />
                    <UserImage src={avatar} alt={user.fullName} />
                    <UserInfo>
                      <TypographyName variant="body1">
                        {user.fullName}
                      </TypographyName>
                      <TypographyWish variant="body2">
                        {user.countOfWish}
                      </TypographyWish>
                      <TypographyTitle>желаемых подарков</TypographyTitle>
                    </UserInfo>
                    <BoxMeatballs>
                      <Meatballs data={userData} />
                    </BoxMeatballs>
                  </UserCard>
                </Grid>
              ))}
            </GridContainer>
          </BoxContent>
        )}
      </MainContent>
    </Wrapper>
  );
};

export default Users;

const Wrapper = styled(Box)(() => ({
  display: "flex",
  height: "100vh",
}));

const MainContent = styled(Box)(() => ({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
}));

const BoxContent = styled(Box)(() => ({
  flexGrow: 1,
  width: "100%",
  maxWidth: "1086px",
  margin: "0 auto",
}));

const BoxTitle = styled(Box)(() => ({
  marginBottom: "20px",
}));

const GridContainer = styled(Grid)(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '5px', 
}));



const UserCard = styled(Box)(() => ({
  cursor: "pointer",
  width: "230px",
  height: "290px",
  backgroundColor: "#fff",
  borderRadius: "8px",
  padding: "10px",
  textAlign: "center",
  border: "2px solid #33CCCC",
  position: "relative",
  transition: "all 0.3s ease-in-out",

  "&:hover": {
    transform: "scale(1.02)",
  },
}));

const UserCardHeader = styled(Box)(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "120px",
  background: "linear-gradient(to bottom, #D8BBFF 90%, #fff 50%)",
  zIndex: 0,
  transition: "background 0.3s ease-in-out",
}));

const UserImage = styled("img")(() => ({
  cursor: "pointer",
  position: "relative",
  zIndex: 1,
  width: "130px",
  height: "130px",
  borderRadius: "50%",
  marginTop: "20px",
  border: "1px solid #fff",
  transition: "border-color 0.3s ease-in-out, transform 0.3s ease-in-out",

  "&:hover": {
    borderColor: "#FF5733",
    transform: "rotate(5deg)",
  },
}));

const UserInfo = styled(Box)(() => ({
  marginTop: "12px",
  marginBottom: "12px",
}));

const TypographyName = styled(Typography)(() => ({
  color: "rgba(2, 2, 2, 1)",
  fontSize: "16px",
  fontWeight: 600,
  lineHeight: "20px",
  letterSpacing: "0.02em",
}));

const TypographyWish = styled(Typography)(() => ({
  color: "rgba(2, 2, 2, 1)",
  fontSize: "16px",
  fontWeight: 500,
}));

const TypographyTitle = styled(Typography)(() => ({
  color: "rgba(96, 96, 96, 1)",
  fontSize: "14px",
  fontWeight: 500,
}));

const BoxMeatballs = styled(Box)(() => ({
  textAlign: "right",
}));
