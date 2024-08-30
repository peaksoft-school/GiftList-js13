import { FC } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { logout } from "../../app/store/authSlice/authSlice";
import { AppDispatch } from "../../app/store/store";
import { useDispatch } from "react-redux";

const UserLayout: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const logoutFn = () => {
    dispatch(logout());
    navigate("/");
    console.log("logout");
  };
  return (
    <>
      <h1>User page</h1>
      <button onClick={logoutFn}>logout</button>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default UserLayout;
