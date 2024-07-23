export type MenuItemType = {
  id: number;
  label: string;
  avatar: string;
  name: string;
  date: string;
  read: boolean;
};

export type TypeNotifications = {
  menuItems: MenuItemType[];
};
