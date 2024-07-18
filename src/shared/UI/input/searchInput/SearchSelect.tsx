import { FC } from "react";
import { SearchProps } from "../../../lib/types/helper";
import {
  Button,
  FormControl,
  InputAdornment,
  MenuItem,
  Select,
  styled,
  TextField,
} from "@mui/material";
import SearchIcon from "../../../../assets/icon/serchIcon.svg";
import showXIcon from "../../../../assets/icon/X.svg";
import ArrowIcon from "../../../../assets/icon/arrowToDown.svg";

const SearchInputSelector: FC<SearchProps> = ({
  array,
  value,
  onChange,
  clearClick,
  selectors,
  handleSelector,
}) => {
  const CustomArrowIcon = () => (
    <img
      src={ArrowIcon}
      alt="Arrow Icon"
      style={{ width: "1rem", height: "1rem" }}
    />
  );

  const showExIcon =
    !!value || Object.values(selectors).some((selector) => selector !== "");

  return (
    <StyledInput
      value={value}
      onChange={onChange}
      variant="outlined"
      fullWidth
      placeholder="Поиск"
      InputProps={{
        startAdornment: (
          <InputAdornment
            position="start"
            style={{ padding: "0px 0px 0px 30px" }}
          >
            <img src={SearchIcon} alt="Search Icon" />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment
            position="end"
            style={{ padding: "0px 30px 0px 0px" }}
          >
            {array?.map(({ fieldName, title, options }) => (
              <FormControl
                key={fieldName}
                fullWidth
                style={{ border: "none", boxShadow: "none" }}
              >
                <Select
                  IconComponent={CustomArrowIcon}
                  sx={{
                    boxShadow: "none",
                    ".MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                      {
                        padding: "0px 10px 0px 30px",
                        textOverflow: "-moz-initial",
                      },
                  }}
                  id={`selector-${fieldName}`}
                  value={selectors[fieldName]}
                  onChange={handleSelector(fieldName)}
                  displayEmpty
                  renderValue={(selected) => {
                    if (!selected) {
                      return <em style={{ color: "grey" }}>{title}</em>;
                    }
                    return selected as string;
                  }}
                  style={{ fontSize: "80%" }}
                >
                  {options.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ))}
            {showExIcon && (
              <Button style={{ borderRadius: "50px" }} onClick={clearClick}>
                <img src={showXIcon} alt="Clear Icon" />
              </Button>
            )}
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchInputSelector;

const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    padding: "0px",
    fontSize: "22px",
    borderRadius: "12px",
    "& fieldset": {
      margin: "5px 0",
      borderWidth: "2px",
    },
    "&:hover fieldset": {
      borderColor: theme.palette.primary.main,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },
  },
}));
