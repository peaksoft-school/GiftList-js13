import React from "react";
import { styled } from "@mui/material/styles";
import { Box, IconButton, InputBase, Menu, MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledHeader>
      <SearchContainer>
        <StyledSearchBox>
          <SearchIcon />
          <InputBase
            placeholder="Поиск"
            style={{ marginLeft: 8, width: "100%" }}
          />
        </StyledSearchBox>
      </SearchContainer>
      <Box display="flex" alignItems="center">
        <IconButton>
          <NotificationsNoneIcon />
        </IconButton>
        <UserBox onClick={handleMenuClick}>
          <MenuIcon />
          <UserName>Mirlan Uzumaki</UserName>
          <ArrowDropDownIcon />
        </UserBox>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose}>
            Профиль
            <AccountBoxIcon style={{ marginLeft: "10px" }} />
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            Выйти
            <LogoutIcon style={{ marginLeft: "15px" }} />
          </MenuItem>
        </Menu>
      </Box>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "60px",
  padding: theme.spacing(1),
  borderBottom: "1px solid #e0e0e0",
  backgroundColor: "white",
  height: "60px",
}));

const SearchContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "50%",
}));

const StyledSearchBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(1),
  borderRadius: "8px",
  width: "100%",
  backgroundColor: "#fff8f85c",
  border: "1px solid #bdbdbd",
  "&:focus-within": {
    borderColor: "black",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginLeft: theme.spacing(2),
  cursor: "pointer",
}));

const UserName = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(1),
}));

const MenuIcon = styled(AccountCircleIcon)(({ theme }) => ({
  width: "60px",
  height: "40px",
}));
