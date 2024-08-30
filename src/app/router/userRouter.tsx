import { Navigate } from "react-router-dom";
import Booket from "../../pages/userPages/booket/Booket";
import Charity from "../../pages/userPages/charity/Charity";
import Friends from "../../pages/userPages/friends/Friends";
import Lenta from "../../pages/userPages/lenta/Lenta";
import MyHolidays from "../../pages/userPages/myHolidays/MyHolidays";
import WishList from "../../pages/userPages/wishList/WishList";

export const userRoutes = [
  { index: true, element: <Navigate to="lenta" /> },
  {
    path: "lenta",
    element: <Lenta />,
  },
  {
    path: "friends",
    element: <Friends />,
  },
  {
    path: "wishList",
    element: <WishList />,
  },
  {
    path: "booket",
    element: <Booket />,
  },
  {
    path: "myHolidays",
    element: <MyHolidays />,
  },
  {
    path: "charity",
    element: <Charity />,
  },
];

export const DataUserBreadcrumbs = [
  { label: "Лента", href: "lenta" },
  { label: "Друзья", href: "friends" },
  { label: "Список желаний", href: "wishList" },
  { label: "Забронированные", href: "booket" },
  { label: "Мои праздники", href: "myHolidays" },
  { label: "Благотворительность", href: "charity" },
];
