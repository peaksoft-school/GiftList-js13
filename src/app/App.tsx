import { ChangeEvent, useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import SearchInputSelector from "../shader/UI/input/searchInput/SearchSelect";
import { ArrType } from "../shader/lib/helper/helper";
const formFields: ArrType[] = [
  {
    title: "Состояние",
    fieldName: "state",
    options: ["Новое", "Использованное", "Отремонтированное", "Сломанное"],
  },
  {
    title: "Категория",
    fieldName: "category",
    options: ["Электроника", "Одежда", "Продукты", "Мебель"],
  },
  {
    title: "Подкатегория",
    fieldName: "subCategory",
    options: [
      "Смартфоны",
      "Ноутбуки",
      "Футболки",
      "Штаны",
      "Фрукты",
      "Овощи",
      "Столы",
      "Стулья",
    ],
  },
  {
    title: "Страна",
    fieldName: "country",
    options: [
      "Кыргызстан",
      "Азербайджан",
      "Россия",
      "Казахстан",
      "Узбекистан",
      "Таджикистан",
    ],
  },
];
function App() {
  const [value, setValue] = useState<string>("");
  const [selectors, setSelectors] = useState<{ [key: string]: string }>({
    state: "",
    category: "",
    subCategory: "",
    country: "",
  });

  console.log(selectors, value);

  const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSelectorChange =
    (field: string) => (event: SelectChangeEvent<string>) => {
      setSelectors((prev) => ({
        ...prev,
        [field]: event.target.value as string,
      }));
    };

  const clearValue = () => {
    setValue("");
    setSelectors({
      state: "",
      category: "",
      subCategory: "",
      country: "",
    });
  };

  return (
    <>
      <SearchInputSelector
        array={formFields}
        value={value}
        onChange={handleValueChange}
        clearClick={clearValue}
        selectors={selectors}
        handleSelector={handleSelectorChange}
      />
    </>
  );
}

export default App;
