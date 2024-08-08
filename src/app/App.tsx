import { FC } from "react";
import SignIn from "../widgets/landimg/authForm/SingIn";
import SignUp from "../widgets/landimg/authForm/SingUp";
import ForgotPassword from "../widgets/landimg/authForm/ForgotPassword";
import ChangePassword from "../widgets/landimg/authForm/ChangePassword";

const App: FC = () => (
  <>
    <SignUp />;
    <SignIn />
    <ForgotPassword />
    <ChangePassword />
  </>
);

export default App;
