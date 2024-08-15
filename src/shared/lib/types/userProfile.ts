import desiredBook from "../../../assets/images/desired-book.png";
import mothersDay from "../../../assets/images/mothers-day.png";
import kurbanAit from "../../../assets/images/kurban-ait.png";
import kadyrTun from "../../../assets/images/kadyr-tun.png";
import aida from "../../../assets/images/aida.png";
import axios from "axios";

const wishUrl = import.meta.env.VITE_BASE_CARD_URL;

export const fetchWish = async () => {
  try {
    const response = await axios.get(`${wishUrl}/api/wish/getAll`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
fetchWish();

// export const gifts = [
//   {
//     id: 1,
//     title: "Название подарка 1",
//     description: "День рождения",
//     imageUrl: desiredBook,
//     pending: "В ожидании",
//     date: "12.12.12",
//   },
//   {
//     id: 2,
//     title: "Название подарка 2",
//     description: "День рождения",
//     imageUrl: desiredBook,
//     pending: "В ожидании",
//     date: "13.13.13",
//   },
//   {
//     id: 3,
//     title: "Название подарка 3",
//     description: "День рождения",
//     imageUrl: desiredBook,
//     pending: "В ожидании",
//     date: "14.14.14",
//   },
// ];

export const charity = [
  {
    id: 1,
    title: "Название подарка",
    description: "12.04.2022",
    imageUrl: desiredBook,
  },
  {
    id: 2,
    title: "Название подарка",
    description: "12.04.2022",
    imageUrl: desiredBook,
  },
  {
    id: 3,
    title: "Название подарка",
    description: "12.04.2022",
    imageUrl: desiredBook,
  },
];

export const holidays = [
  {
    id: 1,
    title: "День матери",
    description: "12.05.2022",
    imageUrl: mothersDay,
  },
  {
    id: 2,
    title: "Курбан айт",
    description: "10.07.2022",
    imageUrl: kurbanAit,
  },
  {
    id: 3,
    title: "Новый год",
    description: "31.12.2022",
    imageUrl: kadyrTun,
  },
];

export const profileInfo = {
  name: "Алия Каримова",
  city: "Bishkek",
  floor: "Женский",
  birthday: "12.04.1990",
  email: "alik@gmail.com",
  phoneNumber: "+79051234567",
  hobbies: "Танцы, иностранные языки, готовка",
  child: "Против спиртных напитков",
  registrationDate: "15.01.2020",
  profilePictureUrl: aida,
  money: "12",
  shoeSize: "36",
  important: "Против спиртных напитков",
};
