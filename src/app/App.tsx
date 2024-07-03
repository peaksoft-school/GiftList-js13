import { MyButton } from "../shader/UI/button/Button";

function App() {
  return (
    <>
    <br />
      <div>
        <MyButton variant="text">войти</MyButton>
        <MyButton variant="contained">добавить подарок</MyButton>
        <MyButton variant="outlined">отмена</MyButton>
      </div>
      <br />
      <div>
        <MyButton variant="text" disabled>
          войти
        </MyButton>
        <MyButton variant="contained" disabled>
          добавить подарок
        </MyButton>
        <MyButton variant="outlined" disabled>
          отмена
        </MyButton>
      </div>
      <MyButton  variant="text">jjh b</MyButton>
    </>
  );
}

export default App;
