import { FC } from "react";
import { Outlet } from "react-router-dom";

const AdminLayout: FC = () => (
  <>
    <h1>Admin page</h1>;
    <div>
      <Outlet />
    </div>
  </>
);

export default AdminLayout;
