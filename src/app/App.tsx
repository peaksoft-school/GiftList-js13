import { FC, useEffect } from "react";
import AppRouter from "./router/AppRouter";
import { useAppSelector } from "./hooks/customHooks";

const App: FC = () => {
  const { role } = useAppSelector((state) => state.auth);

  useEffect(() => {}, [role]);

  return <AppRouter />;
};

export default App;
