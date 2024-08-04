import { FC } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store/store";
import { logoutHandler } from "../app/store/auth/auth.thunk";
import { Outlet } from "react-router-dom";

const User: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const logOut = () => {
    dispatch(logoutHandler());
  };
  return (
    <div>
      <button onClick={logOut}>log out</button>
      <h1>User page</h1>
      <Outlet />
    </div>
  );
};

export default User;
