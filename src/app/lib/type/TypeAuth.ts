import { NavigateFunction } from "react-router-dom";

export type TypeEmail = {
  email: string;
};

export type TypeNewDate = {
  newDate: {
    firstName?: string;
    lastName?: string;
    email: string;
    password: string;
  };
  navigate: NavigateFunction;
};

export type TypeChangePassword = {
  newDate: {
    token: string | undefined;
    newPassword: string;
    confirmNewPassword: string;
  };
};

export type TypeGoogleAuth = {
  tokenId?: string;
  navigate: NavigateFunction;
};
