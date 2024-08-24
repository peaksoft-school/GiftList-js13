// import { FC } from "react";
// import AppRouter from "./router/AppRouter";

// const App: FC = () => <AppRouter />;

// export default App;

import { FC } from "react";
import AppRouter from "./router/AppRouter";
import Users from "../shared/UI/card/Users";

const App: FC = () => (
  <>
    <AppRouter />
    <Users />
  </>
);

export default App;
