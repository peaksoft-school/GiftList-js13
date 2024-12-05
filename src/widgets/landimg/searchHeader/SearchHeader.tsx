import { FC, useState, MouseEvent } from "react";
import { Box, styled, Menu, MenuItem } from "@mui/material";
import { Input } from "../../../shared/UI/input/Input";
import serchIcon from "../../../assets/icon/serchIcon.svg";
import {
  BellIcon,
  ChevronsIcon,
  LogoutIcon,
  ProfileLogoutsIcon,
  ProfilesIcon,
} from "../../../assets/icon";
import { persistConfig } from "../../../app/store/store";
import { purgeStoredState } from "redux-persist";

const SearchHeader: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    purgeStoredState(persistConfig);
    setAnchorEl(null);
    window.location.reload();
  };

  return (
    <StyleContainer>
      <Input placeholder="Поиск" startIcon={serchIcon} />
      <StyleAccount src={BellIcon} alt="bell" sx={{ marginLeft: "20px" }} />
      <StyleProfile>
        <ProfileAccount onClick={handleClick}>
          <StyleAccount src={ProfilesIcon} alt="profile icon" />
          <UserName>Naruto Uzumaki</UserName>
          <StyleSelect src={ChevronsIcon} alt="dropdown icon" />
        </ProfileAccount>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)}>
          <StyledLogouts onClick={handleClose}>
            <img src={ProfileLogoutsIcon} alt="profiles" />
            Профиль
          </StyledLogouts>
          <StyledLogouts onClick={handleClose}>
            <img src={LogoutIcon} alt="profiles" />
            Выход
          </StyledLogouts>
        </Menu>
      </StyleProfile>
    </StyleContainer>
  );
};

export default SearchHeader;

const UserName = styled("p")(() => ({
  padding: "5px",
  color: "#020202",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "21.79px",
  cursor: "pointer",
}));

const StyledLogouts = styled(MenuItem)(() => ({
  display: "flex",
  gap: "10px",
  cursor: "pointer",
}));

const StyleAccount = styled("img")(() => ({
  cursor: "pointer",
}));

const StyleContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  padding: "10px 20px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
}));

const StyleSelect = styled("img")(() => ({
  cursor: "pointer",
  fontSize: "5px",
}));

const StyleProfile = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  width: "35%",
}));

const ProfileAccount = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
}));
