import desiredBook from "../../../assets/images/desired-book.png";
import mothersDay from "../../../assets/images/mothers-day.png";
import kurbanAit from "../../../assets/images/kurban-ait.png";
import kadyrTun from "../../../assets/images/kadyr-tun.png";
import aida from "../../../assets/images/aida.png";

export interface Wish {
  id: number;
  giftTitle: string;
  image: string;
  description: string;
  giftLink: string;
  holidayTitle: string;
  dateHoliday: string;
  booked: boolean;
}

export interface Holiday {
  id: number;
  image: string;
  title: string;
  dateOfHoliday: string;
}

export interface Charity {
  id: number;
  image: string;
  giftName: string;
  statusGift: string;
  createdAt: string;
  isBooked: boolean;
}

export interface UserProfile {
  id: number;
  image: string;
  fullName: string;
  linkToVK: string;
  linkToFacebook: string;
  linkToInstagram: string;
  linkToTelegram: string;
  country: string;
  email: string;
  dateOfBirth: string;
  phoneNumber: string;
  hobby: string;
  peculiarity: string;
  clothingSize: string;
  shoesSize: string;
  wishList: Wish[];
  holidays: Holiday[];
  charities: Charity[];
}

export const wish: Wish[] = [
  {
    id: 1,
    giftTitle: "Название подарка 1",
    description: "Интересная книга",
    image: desiredBook,
    giftLink: "https://example.com/products/book1",
    holidayTitle: "День рождения",
    dateHoliday: "2024-08-17",
    booked: false,
  },
  {
    id: 2,
    giftTitle: "Название подарка 2",
    description: "Электронный гаджет",
    image: desiredBook,
    giftLink: "https://example.com/products/gadget2",
    holidayTitle: "Новый год",
    dateHoliday: "2024-12-31",
    booked: false,
  },
  {
    id: 3,
    giftTitle: "Название подарка 3",
    description: "Модная одежда",
    image: desiredBook,
    giftLink: "https://example.com/products/clothing3",
    holidayTitle: "8 марта",
    dateHoliday: "2024-03-08",
    booked: false,
  },
];

export const charity: Charity[] = [
  {
    id: 1,
    giftName: "Название подарка 1",
    statusGift: "Принят",
    createdAt: "12.04.2022",
    image: desiredBook,
    isBooked: false,
  },
  {
    id: 2,
    giftName: "Название подарка 2",
    statusGift: "Принят",
    createdAt: "15.05.2022",
    image: desiredBook,
    isBooked: false,
  },
  {
    id: 3,
    giftName: "Название подарка 3",
    statusGift: "Принят",
    createdAt: "20.06.2022",
    image: desiredBook,
    isBooked: false,
  },
];

export const holidays: Holiday[] = [
  {
    id: 1,
    title: "День матери",
    dateOfHoliday: "12.05.2022",
    image: mothersDay,
  },
  {
    id: 2,
    title: "Курбан айт",
    dateOfHoliday: "10.07.2022",
    image: kurbanAit,
  },
  {
    id: 3,
    title: "Новый год",
    dateOfHoliday: "31.12.2022",
    image: kadyrTun,
  },
];

export const profileInfo: UserProfile = {
  id: 1,
  image: aida,
  fullName: 'Аида Каримова',
  country: "Bishkek",
  email: 'Aika1998@gmail.com',
  dateOfBirth: '12.04.1998',
  phoneNumber: '+9967052364',
  clothingSize: "S",
  shoesSize: "40",
  peculiarity: "Против спиртных напитков",
  hobby: "Танцы, иностранные языки, готовка",
  linkToVK: "https://vk.com/yourprofile",
  linkToFacebook: "https://facebook.com/yourprofile",
  linkToInstagram: "https://instagram.com/yourprofile",
  linkToTelegram: "https://t.me/yourprofile",
  wishList: [],
  holidays: [],
  charities: [],
};

