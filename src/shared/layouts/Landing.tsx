import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../UI/button/Button";
import LandingHeader from "../../widgets/landimg/header/LandingHeader";

const Landing: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <LandingHeader />

      <Button onClick={() => navigate("/changePassword")}>
        changePassword
      </Button>
    </>
  );
};

export default Landing;
