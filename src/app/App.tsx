// import { FC } from "react";

// const App: FC = () => <h1>GIFT LIST_13</h1>;

// export default App;

import { FC } from "react";
import AppRouter from "./router/AppRouter";
import NewsLetters from "../shared/newsLetters/NewsLetters";

const App: FC = () => (
  <>
    <AppRouter />
    <NewsLetters />
  </>
);

export default App;
