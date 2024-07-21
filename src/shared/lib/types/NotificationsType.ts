export type MenuItemType = {
  id: number;
  label: string;
  avatar: string;
  name: string;
  date: string;
  onClick?: () => void;
};

export type TypeNotifications = {
  menuItems: MenuItemType[];
  onClickAllReads: () => void;
};
