import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Landing from "../../shared/layouts/Landing";
import User from "../../shared/layouts/User";
// import Administrator from "../../shared/layouts/Administrator";
import PrivateRoutes from "./PrivateRoutes";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { userRoutes } from "./userRouter";
import { adminRoutes } from "./adminRoutes";
import AdminLayout from "../../shared/layouts/Landing";

const AppRouter: FC = () => {
  const { isAuth } = useSelector((state: RootState) => state.auth);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <AdminLayout />
        </>
      ),
      children: adminRoutes,
    },

    {
      path: "/user",
      element: (
        <PrivateRoutes
          component={<User />}
          isAuth={isAuth}
          roles=""
          fallbackPath="/"
        />
      ),
      children: userRoutes,
    },

    // {
    //   path: "/admin",
    //   element: (
    //     <PrivateRoutes
    //       component={<Administrator />}
    //       isAuth={isAuth}
    //       role={role}
    //       isAllowed={["ADMIN"]}
    //       fallbackPath="/"
    //     />
    //   ),
    //   children: adminRoutes,
    // },

    {
      path: "*",
      element: <h1>Not found</h1>,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
