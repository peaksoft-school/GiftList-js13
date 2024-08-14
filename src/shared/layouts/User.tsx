import { FC } from "react";
import { Outlet } from "react-router-dom";

const User: FC = () => (
  <>
    <h1>User page</h1>
    <div>
      <Outlet />
    </div>
  </>
);

export default User;
