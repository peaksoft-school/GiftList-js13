import { RouteObject } from "react-router-dom";
import UserProfilePage from "../../pages/UserProfilePage";

export const adminRoutes: RouteObject[] = [
  {
    path: "profile/:id",
    element: <UserProfilePage />,
  },
];
