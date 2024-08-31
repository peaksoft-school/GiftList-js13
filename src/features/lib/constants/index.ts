import lentaIcon from "../../../assets/icon/Lenta.svg";
import wishListIcon from "../../../assets/icon/WishList.svg";
import bookedIcon from "../../../assets/icon/Booked.svg";
import myholidaysIcon from "../../../assets/icon/Myholidays.svg";
import charityIcon from "../../../assets/icon/Charity.svg";
import friendsIcon from "../../../assets/icon/Friends.svg";
import mailingIcon from "../../../assets/icon/mailingIcon.svg";
import complaintsIcon from "../../../assets/icon/complaintsIcon.svg";

export const menuItems = [
  { icon: lentaIcon, text: "Лента", navigate: "lenta" },
  { icon: friendsIcon, text: "Друзья", navigate: "friends" },
  { icon: wishListIcon, text: "Список желаний", navigate: "wishList" },
  { icon: bookedIcon, text: "Забронированные", navigate: "booket" },
  { icon: myholidaysIcon, text: "Мои праздники", navigate: "myHolidays" },
  { icon: charityIcon, text: "Благотворительность", navigate: "charity" },
];

export const menuItemsAdmin = [
  { icon: friendsIcon, text: "Пользователи", navigate: "users" },
  { icon: charityIcon, text: "Благотворительность", navigate: "charity" },
  { icon: complaintsIcon, text: "Жалобы", navigate: "complaits" },
  { icon: mailingIcon, text: "Рассылка", navigate: "mailing" },
];
