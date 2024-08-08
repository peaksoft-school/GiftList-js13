import { Navigate } from "react-router-dom";
import { PropsType } from "../lib/type/TypePrivatRouter";

const PrivateRoutes = ({
  component,
  isAuth,
  role,
  fallbackPath,
  isAllowed,
}: PropsType) => {
  if (isAuth && isAllowed.includes(role)) {
    return component;
  }

  return <Navigate to={fallbackPath} />;
};

export default PrivateRoutes;
