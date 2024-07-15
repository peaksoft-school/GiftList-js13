// function App() {
//   return <></>;
// }
// export default App;

// src/App.tsx

// src/App.tsx
import React from "react";
import { Button } from "@mui/material";
import Toast from "../shader/toast/Toast";
import { showToast } from "../shader/toast/toastType";


const App: React.FC = () => {
  const handleShowSuccessToast = () => {
    showToast({
      type: "success",
      title: "Спасибо что сообщили нам об этом",
      message: "Ваши отзывы помогают нам сделать сообщество GIFT LIST безопасной средой для всех."
    });
  };

  return (
    <div className="App">
      <h1>Пример использования Toast</h1>
      <Button variant="contained" onClick={handleShowSuccessToast}>
        Показать успешный Toast
      </Button>
      <Toast />
    </div>
  );
};

export default App;

