export type ArrowItem = {
  id: number;
  profileImg: string;
  name: string;
  birthday: string;
  namePost: string;
  fotoPost: string;
  datePost: string;
  profileBlockFoto: string;
  profileBlockState: string;
};

export type CartMapProps = {
  arrow: ArrowItem[];
  mapType: string;
  red?: boolean;
};
