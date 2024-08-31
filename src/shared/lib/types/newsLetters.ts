import cardImage from "../../../assets/images/rectangle.png";

export interface Newsletter {
  title: string;
  image: string;
  createDate: string;
}

export const newsletters: Newsletter[] = [
  { title: "Тема рассылки", createDate: "12.04.22", image: cardImage },
  { title: "Тема рассылки", createDate: "12.04.22", image: cardImage },
  { title: "Тема рассылки", createDate: "12.04.22", image: cardImage },
  { title: "Тема рассылки", createDate: "12.04.22", image: cardImage },
];
