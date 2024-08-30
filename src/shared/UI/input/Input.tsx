import {
  InputAdornment,
  TextField,
  TextFieldProps,
  styled,
} from "@mui/material";
import { ChangeEvent, MouseEvent, Ref, forwardRef } from "react";

type InputProps = Omit<TextFieldProps, "variant"> & {
  value?: string;
  label?: string;
  variant?: "outlined" | "standard" | "filled";
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickEye?: (event: MouseEvent<HTMLButtonElement>) => void;
  icon?: string;
  error?: boolean;
  helperText?: string;
  startIcon?: string;
};

export const Input = forwardRef(
  (props: InputProps, ref?: Ref<HTMLInputElement>) => {
    const {
      variant = "outlined",
      value,
      id,
      label,
      onChange,
      icon,
      helperText,
      error = false,
      onClickEye,
      startIcon,
      ...rest
    } = props;

    return (
      <div
        style={{
          fontFamily: "sans-serif",
          width: "100%",
        }}
      >
        <label
          htmlFor={id}
          style={{
            color: error ? "red" : "#818386",
            fontSize: "22px",
          }}
        >
          {label}
        </label>
        <StyledInput
          inputRef={ref}
          id={id}
          fullWidth
          variant={variant}
          value={value}
          onChange={onChange}
          error={error}
          {...rest}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={startIcon} alt="search icon" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {error && (
                  <img
                    style={{ width: "35px" }}
                    src="src/assets/icon/voscklicat.svg"
                    alt="Error icon"
                  />
                )}
                <button
                  type="button"
                  onClick={onClickEye}
                  style={{ backgroundColor: "white", border: "none" }}
                >
                  <img style={{ width: "25px" }} src={icon} />
                </button>
              </InputAdornment>
            ),
          }}
        />
        {error && (
          <div style={{ color: "red", textAlign: "right" }}>{helperText}</div>
        )}
      </div>
    );
  }
);

const StyledInput = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    fontSize: "22px",
    borderRadius: "12px",
    padding: "0px 15px",

    "& fieldset": {
      margin: "8px 0",
      borderWidth: "2px",
    },
    "&:hover fieldset": {
      borderColor: "#8639B5",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#8639B5",
    },
  },
  "& .MuiOutlinedInput-root.Mui-error": {
    "& fieldset": {
      borderColor: "red",
    },
    "& input": {
      color: "red",
    },
  },
}));
