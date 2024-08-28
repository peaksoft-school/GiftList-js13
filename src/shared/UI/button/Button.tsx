import {
	Button as MuiButton,
	ButtonProps as MuiButtonProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

interface CustomButtonProps extends Omit<MuiButtonProps, "variant"> {
	variant?: "text" | "contained" | "outlined";
	children: React.ReactNode;
}

export const Button: React.FC<CustomButtonProps> = ({
	type,
	variant = "text",
	onClick,
	children,
	disabled,
	...rest
}) => {
  return (
    <StyledButton
      type={type}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      fullWidth
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(MuiButton)<{
	variant?: CustomButtonProps["variant"];
}>(({ variant }) => ({
  borderRadius: "10px",
  textTransform: "none",

  ...(variant === "text" && {
    backgroundColor: "rgba(250, 43, 86, 1)",
    color: "white",

    "&:hover": {
      backgroundColor: "rgba(221, 11, 55, 1)",
    },
    "&:active": {
      backgroundColor: "rgba(237, 99, 128, 1)",
    },
    "&.Mui-disabled": {
      backgroundColor: "rgba(28, 27, 31, 0.12)",
    },
  }),
  ...(variant === "contained" && {
    backgroundColor: "#8639b5",
    color: "white",

    "&:hover": {
      backgroundColor: "rgba(97, 35, 134, 1)",
    },
    "&:active": {
      backgroundColor: "rgba(171, 98, 216, 1)",
    },
    "&.Mui-disabled": {
      backgroundColor: "rgba(0, 0, 0, 0.12)",
    },
  }),
  ...(variant === "outlined" && {
    borderColor: "rgba(141, 148, 158, 1)",
    color: "black",

    "&:hover": {
      backgroundColor: "rgba(97, 35, 134, 1)",
      color: "white",
    },
    "&:active": {
      backgroundColor: "rgba(171, 98, 216, 1)",
    },
    "&.Mui-disabled": {
      borderColor: "rgba(0, 0, 0, 0.12)",
    },
  }),
}));
