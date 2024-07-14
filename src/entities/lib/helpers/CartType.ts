export type Friend = {
  id: number;
  name: string;
  imageUrl: string;
  counter: number;
  wish: string;
  counterTwo: number;
  holiday: string;
};

export type FriendsCardProps = {
  friends?: Friend[];
};



