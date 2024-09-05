export type Role = "GUEST" | "USER" | "ADMIN" | string;

export type PropsType = {
  component?: React.ReactNode;
  isAuth?: boolean;
  roles: Role;
  fallbackPath: string;
};

export type UserData = {
  isAuth: boolean;
  token: string;
  role: Role;
  email: string;
  isLoading: boolean;
  error: null | string;
};

export type TypeComplaits = {
  loading: boolean;
  complaints: [];
};
