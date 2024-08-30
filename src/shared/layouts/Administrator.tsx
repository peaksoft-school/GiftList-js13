import { FC } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { AppDispatch } from "../../app/store/store";
import { logout } from "../../app/store/authSlice/authSlice";

const AdminLayout: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const logoutFn = () => {
    dispatch(logout());
    navigate("/");
    console.log("logout");
  };
  return (
    <>
      <h1>Admin page</h1>
      <button onClick={logoutFn}>logout</button>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default AdminLayout;
