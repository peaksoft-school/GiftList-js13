import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import { RootState } from "../store/store";
import { useAppSelector } from "../hooks/customHooks";
import { Roles, ROUTES } from "../utils/routes/routes";
import { userRoutes } from "./userRouter";
import AdminLayout from "../../shared/layouts/Administrator";
import UserLayout from "../../shared/layouts/User";
import Landing from "../../shared/layouts/Landing";
import Spinner from "../../shared/UI/Spiner";
import SignUp from "../../widgets/landimg/authForm/SingUp";
import SignIn from "../../widgets/landimg/authForm/SingIn";
import ForgotPassword from "../../widgets/landimg/authForm/ForgotPassword";
import ChangePassword from "../../widgets/landimg/authForm/ChangePassword";
import { adminRoutes } from "./adminRoutes";

const AppRouter: FC = () => {
  const { isAuth, isLoading } = useAppSelector(
    (state: RootState) => state.auth
  );
  const router = createBrowserRouter([
    {
      path: ROUTES.GUEST.index,
      element: (
        <PrivateRoutes
          component={
            <>
              {isLoading && <Spinner />}
              <Landing />
            </>
          }
          isAuth={!isAuth}
          roles={Roles.GUEST}
          fallbackPath={ROUTES.ADMIN.index}
        />
      ),
    },

    {
      path: ROUTES.USER.index,
      element: (
        <PrivateRoutes
          component={
            <>
              {isLoading && <Spinner />}
              <UserLayout />
            </>
          }
          isAuth={isAuth}
          roles={Roles.USER}
          fallbackPath={ROUTES.GUEST.index}
        />
      ),
      children: userRoutes,
    },

    {
      path: ROUTES.ADMIN.index,
      element: (
        <PrivateRoutes
          component={
            <>
              {isLoading && <Spinner />}
              <AdminLayout />
            </>
          }
          isAuth={isAuth}
          roles={Roles.ADMIN}
          fallbackPath={ROUTES.USER.index}
        />
      ),
      children: adminRoutes,
    },

    {
      path: "/singUp",
      element: (
        <>
          {isLoading && <Spinner />}
          <SignUp />
        </>
      ),
    },
    {
      path: "/singIn",
      element: (
        <>
          {isLoading && <Spinner />}
          <SignIn />
        </>
      ),
    },
    {
      path: "/forgotPassword",
      element: (
        <>
          {isLoading && <Spinner />}
          <ForgotPassword />
        </>
      ),
    },
    {
      path: "/changePassword",
      element: (
        <>
          {isLoading && <Spinner />}
          <ChangePassword />
        </>
      ),
    },

    {
      path: "*",
      element: <h1>Not found</h1>,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
