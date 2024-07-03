import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import {
  InputAdornment,
  TextField,
  TextFieldProps,
  styled,
} from "@mui/material";
import { ChangeEvent } from "react";

type InputProps = Omit<TextFieldProps, "variant"> & {
  value?: string;
  label?: string;
  variant?: "outlined" | "standard" | "filled";
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
};

export const Input = (props: InputProps) => {
  const {
    value,
    id,
    label,
    variant = "outlined",
    onChange,
    error = false,
    helperText,
    ...rest
  } = props;
  return (
    <div>
      <label htmlFor={id} style={{ color: error ? "red" : "#5f6267" }}>
        {label}
      </label>
      <StyledInput
        id={id}
        fullWidth
        variant={variant}
        value={value}
        onChange={onChange}
        error={error}
        {...rest}
        InputProps={{
          endAdornment: error && (
            <InputAdornment position="end">
              <ErrorOutlineIcon sx={{ color: "red" }} />
            </InputAdornment>
          ),
        }}
      />
      {error && (
        <div style={{ color: "red", textAlign: "right" }}>{helperText}</div>
      )}
    </div>
  );
};

const StyledInput = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
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
