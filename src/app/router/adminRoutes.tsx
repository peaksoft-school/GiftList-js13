import { Navigate, RouteObject } from "react-router-dom";
import UsersPages from "../../pages/adminPages/users/UsersPages";
import CharityPages from "../../pages/adminPages/charity/CharityPages";
import ComplaitsPages from "../../pages/adminPages/complaints/ComplaitsPages";
import MailingPages from "../../pages/adminPages/mailing/MailingPages";
import UserProfilePage from "../../pages/UserProfilePage";

export const adminRoutes: RouteObject[] = [
  { index: true, element: <Navigate to="users" /> },
  {
    path: "users",
    element: <UsersPages />,
  },

  {
    path: "charity",
    element: <CharityPages />,
  },
  {
    path: "complaits",
    element: <ComplaitsPages />,
  },
  {
    path: "mailing",
    element: <MailingPages />,
  },

  {
    path: "profile/:id",
    element: <UserProfilePage />,
  },
];

export const DataAdminBreadcrumbs = [
  { label: "Пользователи", href: "users" },
  { label: "Благотворительность", href: "charity" },
  { label: "Жалобы", href: "complaits" },
  { label: "Рассылка", href: "mailing" },
];
