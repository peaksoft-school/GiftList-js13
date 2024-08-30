import { useState, MouseEvent, FC } from "react";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import { MeatballsType } from "../lib/types/MeatballType";
import { styled } from "@mui/system";

const Meatballs: FC<MeatballsType> = ({ data, onClick, cardId }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const meatClick = (id: number) => {
    if (cardId) {
      onClick(id, cardId);
    }
    handleClose();
  };

  return (
    <Box1>
      <StyledButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <img src="src/assets/icon/threeDots.svg" alt="menu icon" />
      </StyledButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {data.map(({ id, icon, title }) => (
          <MenuItem key={id} onClick={() => meatClick(id)}>
            <ImgStyled src={icon} alt={title} />
            {title}
          </MenuItem>
        ))}
      </Menu>
    </Box1>
  );
};

export default Meatballs;

const Box1 = styled(Box)(() => ({
  padding: "0",
  margin: "0",
}));
const StyledButton = styled(Button)(() => ({
  minWidth: "auto",
  padding: "0",
}));
const ImgStyled = styled("img")`
  width: 20px;
  height: 20px;
  margin: 5px 10px 5px 5px;
`;
