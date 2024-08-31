import { Navigate } from "react-router-dom";
import { PropsType } from "../lib/type/TypePrivatRouter";
import { useAppSelector } from "../hooks/customHooks";

const PrivateRoutes = ({
  component,
  isAuth,
  roles,
  fallbackPath,
}: PropsType) => {
  const { role } = useAppSelector((state) => state.auth);
  const isAllowed = roles === role;

  console.log("role", role, "roles", roles);

  if (isAuth && isAllowed) {
    return component;
  }

  return <Navigate to={fallbackPath} replace />;
};

export default PrivateRoutes;
