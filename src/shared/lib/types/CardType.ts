export type Friend = {
  id: number;
  image: string;
  fullName: string;
  countOfWish: number;
  countOfHolidays: number;
};

export type FriendsCardProps = {
  friend: Friend;
};

export const friendData: Friend[] = [
  {
    id: 1,
    fullName: "Иван",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpVxnVTq-f6zLfR2QSEJ52aQJfXAq576lhpQ&s",
    countOfWish: 20,
    countOfHolidays: 20,
  },
  {
    id: 2,
    fullName: "Sarah",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpVxnVTq-f6zLfR2QSEJ52aQJfXAq576lhpQ&s",
    countOfWish: 3,
    countOfHolidays: 2,
  },
  {
    id: 3,
    fullName: "Иван",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpVxnVTq-f6zLfR2QSEJ52aQJfXAq576lhpQ&s",
    countOfWish: 3,
    countOfHolidays: 2,
  },
  {
    id: 4,
    fullName: "Иван",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpVxnVTq-f6zLfR2QSEJ52aQJfXAq576lhpQ&s",
    countOfWish: 3,
    countOfHolidays: 2,
  },
  {
    id: 5,
    fullName: "Иван",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpVxnVTq-f6zLfR2QSEJ52aQJfXAq576lhpQ&s",
    countOfWish: 3,
    countOfHolidays: 2,
  },
];