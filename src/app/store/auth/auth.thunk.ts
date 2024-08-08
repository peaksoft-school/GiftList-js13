import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserData } from "../../lib/type/TypePrivatRouter";
import { routes } from "../../utils/routes/routes";

interface SignInParams {
  userData: UserData;
  navigate: (path: string) => void;
}

export const logoutHandler = createAsyncThunk("auth/logout", () => {
  localStorage.clear();
});

export const signIn = createAsyncThunk(
  "auth/signIn",
  async ({ userData, navigate }: SignInParams) => {
    try {
      const { token, email, role, firstName, lastName } = userData;

      localStorage.setItem(
        "GIFTLIST",
        JSON.stringify({ token, role, email, firstName, lastName })
      );

      if (routes[role]) {
        navigate(routes[role].index);
      } else {
        throw new Error(`Unknown role: ${role}`);
      }

      return userData;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);
