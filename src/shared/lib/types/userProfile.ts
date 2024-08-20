import desiredBook from "../../../assets/images/desired-book.png";
import mothersDay from "../../../assets/images/mothers-day.png";
import kurbanAit from "../../../assets/images/kurban-ait.png";
import kadyrTun from "../../../assets/images/kadyr-tun.png";
import aida from "../../../assets/images/aida.png";

export interface Gift {
  id: number;
  giftTitle: string;
  description: string;
  imageUrl: string;
  giftLink: string;
  holidayTitle: string;
  dateHoliday: string;
  booked: boolean;
}

export interface Holiday {
  id: number;
  title: string;
  image: string;
  dateOfHoliday: string;
}

export interface Charity {
  id: number;
  giftTitle: string;
  description: string;
  imageUrl: string;
  giftLink?: string; // Поле может быть пустым
  holidayTitle?: string; // Поле может быть пустым
  dateHoliday?: string; // Поле может быть пустым
  booked?: boolean; // Поле может быть пустым
}

export const wish: Gift[] = [
  {
    id: 1,
    giftTitle: "Название подарка 1",
    description: "Интересная книга",
    imageUrl: desiredBook,
    giftLink: "https://example.com/products/book1",
    holidayTitle: "День рождения",
    dateHoliday: "2024-08-17",
    booked: true,
  },
  {
    id: 2,
    giftTitle: "Название подарка 2",
    description: "Электронный гаджет",
    imageUrl: desiredBook,
    giftLink: "https://example.com/products/gadget2",
    holidayTitle: "Новый год",
    dateHoliday: "2024-12-31",
    booked: false,
  },
  {
    id: 3,
    giftTitle: "Название подарка 3",
    description: "Модная одежда",
    imageUrl: desiredBook,
    giftLink: "https://example.com/products/clothing3",
    holidayTitle: "8 марта",
    dateHoliday: "2024-03-08",
    booked: true,
  },
];

export const charity: Charity[] = [
  {
    id: 1,
    giftTitle: "Название подарка 1",
    description: "12.04.2022",
    imageUrl: desiredBook,
    giftLink: '', 
    holidayTitle: '', 
    dateHoliday: '', 
    booked: false, 
  },
  {
    id: 2,
    giftTitle: "Название подарка 2", 
    description: "15.05.2022",
    imageUrl: desiredBook,
    giftLink: '', 
    holidayTitle: '', 
    dateHoliday: '', 
    booked: false, 
  },
  {
    id: 3,
    giftTitle: "Название подарка 3", 
    description: "20.06.2022",
    imageUrl: desiredBook,
    giftLink: '', 
    holidayTitle: '', 
    dateHoliday: '',
    booked: false, 
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

// export const profileInfo = {
//   image: aida,
//   country: "Bishkek",
//   shoesSize: "36",
//   name: "Алия Каримова",
//   floor: "Женский",
//   birthday: "12.04.1990",
//   email: "alik@gmail.com",
//   phoneNumber: "+79051234567",
//   hobbies: "Танцы, иностранные языки, готовка",
//   child: "Против спиртных напитков",
//   registrationDate: "15.01.2020",
//   money: "12",
//   important: "Против спиртных напитков",
// };



export const profileInfo = {
  image: aida, 
  country: "Bishkek",
  clothingSize: "S",
  shoesSize: "THIRTY_SIX", 
  peculiarity: "Против спиртных напитков",
  hobby: "Танцы, иностранные языки, готовка",
  linkToVK: "https://vk.com/yourprofile",
  linkToFacebook: "https://facebook.com/yourprofile",
  linkToInstagram: "https://instagram.com/yourprofile",
  linkToTelegram: "https://t.me/yourprofile",
};
