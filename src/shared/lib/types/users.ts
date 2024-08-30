import annette from "../../../assets/images/annette.png";
import jenny from "../../../assets/images/jenny.png";
import kristin from "../../../assets/images/kristin.png";
import jacob from "../../../assets/images/jacob.png";

export interface Users {
  id: number;
  image: string;
  fullName: string;
  countOfWish: number;
}

export const users: Users[] = [
  {
    id: 1,
    image: annette,
    fullName: "Annette Black",
    countOfWish: 12,
  },
  {
    id: 2,
    image: jenny,
    fullName: "Annette Black",
    countOfWish: 12,
  },
  {
    id: 3,
    image: kristin,
    fullName: "Annette Black",
    countOfWish: 12,
  },
  {
    id: 4,
    image: jacob,
    fullName: "Annette Black",
    countOfWish: 12,
  },
];

export type ResponseDeleteUser = {
  httpStatus: string;
  message: string;
};
