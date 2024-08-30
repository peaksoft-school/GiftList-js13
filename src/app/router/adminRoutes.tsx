import { Navigate, RouteObject } from "react-router-dom";
import UserProfilePage from "../../pages/UserProfilePage";
import ComplaitsPages from "../../pages/adminPages/complaints/ComplaitsPages";
import CharityPages from "../../pages/adminPages/charity/CharityPages";
import MailingPages from "../../pages/adminPages/mailing/MailingPages";
import UsersPages from "../../pages/adminPages/users/UsersPages";

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

export const DataBreadcrumbs = [
  { label: "Пользователи", href: "users" },
  { label: "Благотворительность", href: "charity" },
  { label: "Жалобы", href: "complaits" },
  { label: "Рассылка", href: "mailing" },
];
