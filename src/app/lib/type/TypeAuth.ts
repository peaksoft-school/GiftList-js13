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
  navigate: (path: string) => void;
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
  navigate: (path: string) => void;
};
