import { SelectChangeEvent } from "@mui/material";
import { ChangeEvent } from "react";

export type ArrType = {
  title: string;
  fieldName: string;
  options: string[];
};
export type SearchProps = {
  array: ArrType[];
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  clearClick: () => void;
  selectors: { [key: string]: string };
  handleSelector: (field: string) => (event: SelectChangeEvent<string>) => void;
};
