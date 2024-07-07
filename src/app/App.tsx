import { useState } from "react";
import SearchInput from "../shader/UI/input/searchInput/SearchInput";
import { SelectChangeEvent } from "@mui/material";

const Country = [
  { name: "Россия", id: 1 },
  { name: "США", id: 2 },
  { name: "Франция", id: 3 },
  { name: "Япония", id: 4 },
  { name: "Бразилия", id: 5 },
];

const Condition = [
  { name: "Женат", id: 1 },
  { name: "Холост", id: 2 },
  { name: "В отношениях", id: 3 },
  { name: "Разведен", id: 4 },
  { name: "Не в браке", id: 5 },
];

const Category = [
  { name: "Семейные пары", id: 1 },
  { name: "Одинокие люди", id: 2 },
  { name: "Пары", id: 3 },
  { name: "Разведенные", id: 4 },
];

const Subcategory = [
  { name: "Фотография", id: 1 },
  { name: "Гитара", id: 2 },
  { name: "Путешествия", id: 3 },
  { name: "Рисование", id: 4 },
  { name: "Чтение", id: 5 },
];

function App() {
  const [value, setValue] = useState<string>("");
  const [condition, setCondition] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [subcategory, setSubcategory] = useState<string>("");
  const [country, setCountry] = useState<string>("");

  console.log(condition, category, subcategory, country);

  const handleValueChange = (event: SelectChangeEvent<string>): void => {
    setValue(event.target.value);
  };

  const handleConditionChange = (value: string): void => {
    setCondition(value);
  };
  const handleCategoryChange = (value: string): void => {
    setCategory(value);
  };
  const handleSubcategoryChange = (value: string): void => {
    setSubcategory(value);
  };
  const handleCountryChange = (value: string): void => {
    setCountry(value);
  };

  const handleReset = (): void => {
    setValue("");
    setCondition("");
    setCategory("");
    setSubcategory("");
    setCountry("");
  };

  return (
    <>
      <div style={{ margin: "50px", width: "70%" }}>
        <SearchInput
          value={value}
          Condition={Condition}
          Category={Category}
          Subcategory={Subcategory}
          Country={Country}
          onChange={handleValueChange}
          resetSearch={handleReset}
          //
          conditionValue={condition}
          categoryValue={category}
          subcategoryValue={subcategory}
          countryValue={country}
          onConditionChange={handleConditionChange}
          onCategoryChange={handleCategoryChange}
          onSubcategoryChange={handleSubcategoryChange}
          onCountryChange={handleCountryChange}
        />
      </div>
    </>
  );
}

export default App;
