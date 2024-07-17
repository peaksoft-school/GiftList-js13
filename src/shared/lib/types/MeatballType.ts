export type MenuItemType = {
  id: number;
  title: string;
  img: string;
  onClick?: () => void;
};

export type MeatballsType = {
  menuItems: MenuItemType[];
};
