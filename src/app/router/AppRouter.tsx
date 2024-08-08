import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "../../shared/layouts/Landing";
import User from "../../shared/layouts/User";
import Administrator from "../../shared/layouts/Administrator";
import PrivateRoutes from "./PrivateRoutes";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { userRoutes } from "./userRouter";
import { adminRoutes } from "./adminRoutes";

const AppRouter: FC = () => {
  const { isAuth, role } = useSelector((state: RootState) => state.auth);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Landing />
        </>
      ),
    },

    {
      path: "/user",
      element: (
        <PrivateRoutes
          component={<User />}
          isAuth={isAuth}
          role={role}
          isAllowed={["USER"]}
          fallbackPath="/"
        />
      ),
      children: userRoutes,
    },

    {
      path: "/admin",
      element: (
        <PrivateRoutes
          component={<Administrator />}
          isAuth={isAuth}
          role={role}
          isAllowed={["ADMIN"]}
          fallbackPath="/"
        />
      ),
      children: adminRoutes,
    },

    {
      path: "*",
      element: <h1>Not found</h1>,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
