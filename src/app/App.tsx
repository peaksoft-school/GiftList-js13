import { FC } from "react";
import Meatballs from "../shared/UI/Meatballs";

const data = [
  {
    id: 1,
    title: "title",
    icon: "src/assets/icon/anonim.svg",
    onClick: () => {
      console.log("asd");
    },
  },
];

const App: FC = () => (
  <>
    <Meatballs data={data} />
  </>
);

export default App;
