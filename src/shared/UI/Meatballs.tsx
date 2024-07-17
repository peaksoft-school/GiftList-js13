import { useState, MouseEvent, FC } from "react";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import threeDoys from "../../assets/icon/threeDots.svg";
import styled from "styled-components";
import { MeatballsType } from "../lib/types/MeatballType";

const Meatballs: FC<MeatballsType> = ({ menuItems }) => {
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
        <img src={threeDoys} alt="menu icon" />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuItems.map((item) => (
          <MenuItem key={item.id} onClick={item.onClick || handleClose}>
            <ImgStyled src={item.img} alt={item.title} />
            {item.title}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default Meatballs;

const ImgStyled = styled.img`
  width: 20px;
  height: 20px;
  margin: 5px 10px 5px 5px;
`;
