export type ArrowItem = {
  id: number;
  name: string;
};

export type SelectorMapProps = {
  name?: string;
  arrow: ArrowItem[];
  value?: string;
  onChange?: (selectedItem: string) => void | "";
};

export type CustomInputProps = {
  Condition: ArrowItem[];
  Category: ArrowItem[];
  Subcategory: ArrowItem[];
  Country: ArrowItem[];
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  resetSearch?: () => void;
  variant?: "outlined" | "standard" | "filled";
  conditionValue?: string;
  categoryValue?: string;
  subcategoryValue?: string;
  countryValue?: string;
  onConditionChange?: (value: string) => void;
  onCategoryChange?: (value: string) => void;
  onSubcategoryChange?: (value: string) => void;
  onCountryChange?: (value: string) => void;
};
