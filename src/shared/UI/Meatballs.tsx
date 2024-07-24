import { useState, MouseEvent, FC } from "react";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import styled from "styled-components";
import { MeatballsType } from "../lib/types/MeatballType";

const Meatballs: FC<MeatballsType> = ({ data }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  return (
    <Box>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <img src="src/assets/icon/threeDots.svg" alt="menu icon" />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {data.map(({ id, icon, title, onClick }) => (
          <MenuItem key={id} onClick={onClick || handleClose}>
            <ImgStyled src={icon} alt={title} />
            {title}
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
