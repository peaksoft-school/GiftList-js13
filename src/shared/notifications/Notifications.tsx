import { useState, MouseEvent, FC } from "react";
import { Box, Button, Menu, MenuItem, styled, Typography } from "@mui/material";
import { TypeNotifications } from "../lib/types/NotificationsType";
import Choice from "./Choice";

const Notifications: FC<TypeNotifications> = ({ menuItems }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [items, setItems] = useState(menuItems);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAllReads = () => {
    setItems((prevItems) => prevItems.map((item) => ({ ...item, read: true })));
  };

  const handleItemClick = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, read: true } : item))
    );
  };

  return (
    <Box>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <img src="src/assets/icon/bell.svg" alt="bell" />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <HeaderStyle>
          <TextHeaderStyled>Уведомления</TextHeaderStyled>
          <Choice onClickAllReads={handleAllReads} />
        </HeaderStyle>

        {items.map((item) => (
          <MenuItemStyled
            key={item.id}
            read={item.read}
            onClick={() => handleItemClick(item.id)}
          >
            <Box>
              <Uved>
                <AvatarStyled src={item.avatar} alt="avatar" />
                <Box>
                  <Box
                    sx={{
                      textWrap: "wrap",
                      lineHeight: "0px",
                    }}
                  >
                    <NameStyled>{item.name}</NameStyled>
                    {"  "}
                    <LabelStyled>{item.label}</LabelStyled>
                  </Box>
                  <DateStyled>{item.date}</DateStyled>
                </Box>
              </Uved>
            </Box>
          </MenuItemStyled>
        ))}
      </Menu>
    </Box>
  );
};

export default Notifications;

const HeaderStyle = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  borderBottom: "1px solid #D9D9D9",
  padding: "10px 20px",
  marginBottom: "15px",
}));

const TextHeaderStyled = styled(Typography)(() => ({
  fontSize: "22px",
  fontWeight: "bold",
}));

const AvatarStyled = styled("img")(() => ({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  marginRight: "10px",
}));

const Uved = styled(Box)(() => ({
  display: "flex",
  paddingTop: "7px",
  width: "400px",
}));

const NameStyled = styled(Typography)(() => ({
  color: "#3772ff",
  lineHeight: "20px",
  display: "inline",
  fontSize: "18px",
}));

const LabelStyled = styled(Typography)(() => ({
  lineHeight: "20px",
  display: "inline",
  fontSize: "18px",
}));

const DateStyled = styled(Typography)(() => ({
  color: "#949494",
  fontSize: "15px",
  paddingBottom: "0 ",
}));

interface MenuItemStyledProps {
  read: boolean;
}

const MenuItemStyled = styled(MenuItem, {
  shouldForwardProp: (prop) => prop !== "read",
})<MenuItemStyledProps>(({ read }) => ({
  backgroundColor: read ? "#fff" : "#f3ecf8",
  "&:hover": {
    backgroundColor: read ? "#fff" : "#f3ecf8",
  },
}));
