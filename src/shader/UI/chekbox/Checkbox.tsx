import React from "react";
import { Checkbox as MuiCheckbox } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import { styled } from "@mui/material/styles";

interface CheckboxProps {
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  disabled?: boolean;
}

const StyledCheckbox = styled(MuiCheckbox)(() => ({
  "&.Mui-checked": {
    color: "rgba(134, 57, 181, 1)",
  },
  "&:hover": {
    "& .MuiSvgIcon-root": {
      color: "rgba(134, 57, 181, 1)",
    },
  },
  "& .Mui-disabled": {
    color: "rgba(0, 0, 0, 0.12)",
  },
}));

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
  disabled,
}) => {
  return (
    <FormControlLabel
      control={
        <StyledCheckbox
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
      }
      label={label}
      disabled={disabled}
    />
  );
};

export default Checkbox;
