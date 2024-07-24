import { useState, MouseEvent, FC } from "react";
import { Box, Button, Menu, MenuItem } from "@mui/material";

type ChoiceProps = {
  onClickAllReads: () => void;
};

const Choice: FC<ChoiceProps> = ({ onClickAllReads }) => {
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
        sx={{ minWidth: "30px" }}
      >
        <img src="src/assets/icon/threeDotdColum.svg" />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={onClickAllReads}>
          Отметить все как прочитанные
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Choice;
