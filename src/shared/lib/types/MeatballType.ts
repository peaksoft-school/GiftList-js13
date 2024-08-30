export type DataType = {
  id: number;
  title: string;
  icon: string;
};

export type MeatballsType = {
  data: DataType[];
  onClick: (key: number, cardId: number) => number;
  cardId?: number;
};
