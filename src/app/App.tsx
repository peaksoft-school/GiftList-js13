import { Input } from "../shader/UI/input/Input";

function App() {
  return (
    <>
      <div style={{ width: "30%", margin: "20px " }}>
        <Input
          placeholder="Введите название праздника"
          label="Название праздника"
          helperText="ошибка"
          id="1"
        />
        <Input
          placeholder="Введите название праздника"
          label="Название праздника"
          helperText="ошибка"
          id="1"
          error={true}
        />
      </div>
    </>
  );
}

export default App;
