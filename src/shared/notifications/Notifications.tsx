import { useState, MouseEvent, FC } from "react";
import { Box, Button, Menu, MenuItem, styled, Typography } from "@mui/material";
import bell from "../../assets/icon/bell.svg";
import Choice from "./Choice";
import { TypeNotifications } from "../lib/types/NotificationsType";

const Notifications: FC<TypeNotifications> = ({
  menuItems,
  onClickAllReads,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <img src={bell} />
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
          <Choice clickAllReads={onClickAllReads} />
        </HeaderStyle>

        {menuItems?.map((item) => (
          <MenuItem key={item.id} onClick={handleClose}>
            <Box>
              <Uved>
                <AvatarStyled src={item.avatar} alt="avatar" />
                <Box>
                  <Typography
                    sx={{
                      textWrap: "wrap",
                      lineHeight: "0px",
                    }}
                  >
                    <NameStyled>{item.name}</NameStyled>{" "}
                    <LabelStyled>{item.label}</LabelStyled>
                  </Typography>
                  <DateStyled>{item.date}</DateStyled>
                </Box>
              </Uved>
            </Box>
          </MenuItem>
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
  padding: "10px 20px ",
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
}));
