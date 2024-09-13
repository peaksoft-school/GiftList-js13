import { Navigate, RouteObject } from "react-router-dom";
import CharityPages from "../../pages/adminPages/charity/CharityPages";
import ComplaitsPages from "../../pages/adminPages/complaints/ComplaitsPages";
import MailingPages from "../../pages/adminPages/mailing/MailingPages";
import UserProfilePage from "../../pages/UserProfilePage";
import Users from "../../shared/UI/card/Users";

export const adminRoutes: RouteObject[] = [
  { index: true, element: <Navigate to="users" /> },
  {
    path: "users",
    element: <Users />,
  },
  {
    path: "users/:id", 
    element: <UserProfilePage />,

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
];

export const DataAdminBreadcrumbs = [
  { label: "Пользователи", href: "users" },
  { label: "Благотворительность", href: "charity" },
  { label: "Жалобы", href: "complaits" },
  { label: "Рассылка", href: "mailing" },
];
