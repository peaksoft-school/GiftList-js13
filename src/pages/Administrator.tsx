import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { AppDispatch } from "../app/store/store";
import { logoutHandler } from "../app/store/auth/auth.thunk";

const AdminLayout = () => {
  const dispatch = useDispatch<AppDispatch>();

  const logOut = () => {
    dispatch(logoutHandler());
  };

  return (
    <div>
      <button onClick={logOut}>log out</button>
      <h1>Admin page</h1>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
