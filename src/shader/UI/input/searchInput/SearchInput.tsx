import TextField from "@mui/material/TextField";
import { Button, InputAdornment, styled } from "@mui/material";
import SearchIcon from "../../../../assets/icon/search";
import EXIcon from "../../../../assets/icon/x";
import SelectorMap from "./SelectorMap";
import { CustomInputProps } from "../../../helper/helper";

const SearchInput: React.FC<CustomInputProps> = ({
  Condition,
  Category,
  Subcategory,
  Country,
  variant = "outlined",
  value,
  onChange,
  resetSearch,
  conditionValue,
  categoryValue,
  subcategoryValue,
  countryValue,
  onConditionChange,
  onCategoryChange,
  onSubcategoryChange,
  onCountryChange,
  ...rest
}) => {
  const showExIcon =
    !!value ||
    !!conditionValue ||
    !!categoryValue ||
    !!subcategoryValue ||
    !!countryValue;

  return (
    <StyledInput
      value={value}
      onChange={onChange}
      variant={variant}
      fullWidth
      placeholder="Поиск"
      {...rest}
      InputProps={{
        startAdornment: (
          <InputAdornment
            position="start"
            style={{ padding: "0px 0px 0px 30px" }}
          >
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment
            position="start"
            style={{ padding: "0px 10px 0px 0px" }}
          >
            <SelectorMap
              name="Состояние"
              arrow={Condition}
              value={conditionValue}
              onChange={onConditionChange}
            />
            <SelectorMap
              name="Категория"
              arrow={Category}
              value={categoryValue}
              onChange={onCategoryChange}
            />
            <SelectorMap
              name="Подкатегория"
              arrow={Subcategory}
              value={subcategoryValue}
              onChange={onSubcategoryChange}
            />
            <SelectorMap
              name="Страна"
              arrow={Country}
              value={countryValue}
              onChange={onCountryChange}
            />
            {showExIcon && (
              <Button onClick={resetSearch} style={{ borderRadius: "50px" }}>
                <EXIcon />
              </Button>
            )}
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchInput;

const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    padding: "0px 0px",
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
