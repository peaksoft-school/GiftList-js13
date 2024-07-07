import React from "react";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { SelectorMapProps } from "../../../helper/helper";

const SelectorMap: React.FC<SelectorMapProps> = ({
  name,
  arrow,
  value,
  onChange,
}) => {
  const handleChange = (event: SelectChangeEvent<string>): void => {
    const newValue = event.target.value;
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <FormControl fullWidth style={{ border: "none", boxShadow: "none" }}>
      <Select
        sx={{
          boxShadow: "none",
          ".MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
        id={`selector-${name}`}
        value={value}
        onChange={handleChange}
        displayEmpty
        renderValue={(selected) => {
          if (!selected) {
            return <em style={{ color: "grey" }}>{name}</em>;
          }
          return selected;
        }}
        style={{ fontSize: "85%" }}
      >
        {arrow.map((item) => (
          <MenuItem key={item.id} value={item.name}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectorMap;
