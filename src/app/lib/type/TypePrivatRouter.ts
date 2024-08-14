export type Role = "GUEST" | "USER" | "ADMIN";

export type PropsType = {
  component: React.ReactNode;
  isAuth: boolean;
  role: Role;
  fallbackPath: string;
  isAllowed: string[];
};

export type UserData = {
  token: string;
  email: string;
  role: Role;
  firstName: string;
  lastName: string;
};
