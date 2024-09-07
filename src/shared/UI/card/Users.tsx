import { FC, useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Meatballs from "../Meatballs";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store/store";
import {
  blockUser,
  deleteUser,
  getUsersAdmin,
} from "../../../app/store/slice/userThunk";
import avatar from "../../../assets/images/avatar.png";
import { BlockIcon, DeleteIcon } from "../../../assets/icon";
import { useNavigate } from "react-router-dom";


const meatballsArr = [
  {
    id: 1,
    title: "заблокировать",
    icon: BlockIcon,
  },
  {
    id: 2,
    title: "удалить",
    icon: DeleteIcon,
  },
];

const Users: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  const handleClick = (key: number, cardId: number) => {
    switch (key) {
      case 1:
        dispatch(blockUser({ cardId }));
        return key;

      case 2:
        dispatch(deleteUser({ cardId }));
        return key;

      default:
        return key;
    }
  };

  useEffect(() => {
    dispatch(getUsersAdmin());
  }, [dispatch]);

  const handleUserClick = (name: string) => {
    const encodedName = encodeURIComponent(name.trim().replace(/\s+/g, "_"));
    navigate(`/admin/users/${encodedName}`);
  };
  return (
    <BoxContent>
      <GridContainer container spacing={2}>
        {users.map((user) => (
          <Grid key={user.id} item>
            <UserCard>
              <UserCardHeader />
              <UserImage
                src={avatar}
                alt={user.fullName}
                onClick={() => handleUserClick(user.fullName)}
              />
              <UserInfo>
                <TypographyName
                  variant="body1"
                  onClick={() => handleUserClick(user.fullName)}
                >
                  {user.fullName}
                </TypographyName>
                <TypographyWish variant="body2">
                  {user.countOfWish}
                </TypographyWish>
                <TypographyTitle>желаемых подарков</TypographyTitle>
              </UserInfo>
              <BoxMeatballs>
                <Meatballs
                  data={meatballsArr}
                  onClick={handleClick}
                  cardId={user.id}
                />
              </BoxMeatballs>
            </UserCard>
          </Grid>
        ))}
      </GridContainer>
    </BoxContent>
  );
};

export default Users;

const BoxContent = styled(Box)(() => ({
  width: "100%",
  maxWidth: "1086px",
  marginTop: "10px",
}));

const GridContainer = styled(Grid)(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "5px",
}));

const UserCard = styled(Box)(() => ({
  cursor: "pointer",
  width: "230px",
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
  width: "200px",
  textWrap: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  margin: "0 auto",
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
  width: "140px",
  margin: "0 auto",
}));

const BoxMeatballs = styled(Box)(() => ({
  textAlign: "right",
}));
