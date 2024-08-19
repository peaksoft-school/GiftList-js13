import { RouteObject } from "react-router-dom";
import UserProfilePage from "../../pages/UserProfilePage";

export const userRoutes: RouteObject[] = [
  {
    path: "/profile",
    element: <UserProfilePage />,
  },
];
