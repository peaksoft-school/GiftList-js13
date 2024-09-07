import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  Wish,
  Holiday,
  Charity,
  UserProfile,
} from "../../../shared/lib/types/userProfile";
import { axiosInstance } from "../../config/axiosInstance";
import { Users } from "../../../shared/lib/types/users";
import { Friend } from "../../../shared/lib/types/CardType";

interface ErrorResponse {
  response?: {
    data: {
      exceptionMessage: string;
    };
  };
  message?: string;
}

export const getAllWishes = createAsyncThunk<
  Wish[],
  void,
  { rejectValue: string }
>("user/getAllWishes", async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get<Wish[]>("/api/wish/getAll");
    console.log(response);
    return response.data;
  } catch (error) {
    const err = error as ErrorResponse;

    const errorMessage =
      err?.response?.data?.exceptionMessage ||
      err.message ||
      "Something went wrong";

    return rejectWithValue(errorMessage);
  }
});

export const getAllHolidays = createAsyncThunk<
  Holiday[],
  void,
  { rejectValue: string }
>("user/getAllHolidays", async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get<Holiday[]>("/api/holiday/getAll");
    console.log("Holiday API response:", response.data);
    return response.data;
  } catch (error) {
    const err = error as ErrorResponse;

    const errorMessage =
      err?.response?.data?.exceptionMessage ||
      err.message ||
      "Something went wrong";

    return rejectWithValue(errorMessage);
  }
});

export const getAllCharities = createAsyncThunk<
  Charity[],
  void,
  { rejectValue: string }
>("user/getAllCharities", async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get<Charity[]>("/api/charity/getAll");
    // console.log(response);
    return response.data;
  } catch (error) {
    const err = error as ErrorResponse;

    const errorMessage =
      err?.response?.data?.exceptionMessage ||
      err.message ||
      "Something went wrong";

    return rejectWithValue(errorMessage);
  }
});

// export const getProfileById = createAsyncThunk<
//   UserProfile,
//   number,
//   { rejectValue: string }
// >("user/getProfileById", async (id, { rejectWithValue }) => {
//   try {
//     const response = await axiosInstance.get<UserProfile>(
//       `/api/friends/getFriendProfile/${id}`
//     );
//     return response.data;
//   } catch (error) {
//     const err = error as ErrorResponse;

//     const errorMessage =
//       err?.response?.data?.exceptionMessage ||
//       err.message ||
//       "Something went wrong";

//     return rejectWithValue(errorMessage);
//   }
// });


export const getProfileById = createAsyncThunk<
  UserProfile,
  number,
  { rejectValue: string }
>("user/getProfileById", async (id, { rejectWithValue }) => {
  try {
    if (!id || isNaN(id)) {
      throw new Error("Invalid user ID");
    }

    const response = await axiosInstance.get<UserProfile>(
      `/api/friends/getFriendProfile/${id}`
    );
    return response.data;
  } catch (error) {
    const err = error as ErrorResponse;
    const errorMessage =
      err?.response?.data?.exceptionMessage || err.message || "Something went wrong";

    return rejectWithValue(errorMessage);
  }
});


// userAdmin


export const getUsersAdmin = createAsyncThunk<
  Users[],
  void,
  { rejectValue: string }
>("users/getUsersAdmin", async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get<Users[]>("/api/friends");
    return response.data;
  } catch (error) {
    const err = error as ErrorResponse;

    const errorMessage =
      err?.response?.data?.exceptionMessage ||
      err.message ||
      "Something went wrong";

    return rejectWithValue(errorMessage);
  }
});

export const deleteUser = createAsyncThunk<
  undefined,
  { cardId: number },
  { rejectValue: string }
>("users/deleteUser", async ({ cardId }, { rejectWithValue, dispatch }) => {
  try {
    await axiosInstance.delete(`/api/admin/deleteUser/${cardId}`);

    dispatch(getUsersAdmin());
  } catch (error) {
    const err = error as ErrorResponse;

    const errorMessage =
      err?.response?.data?.exceptionMessage ||
      err.message ||
      "Something went wrong";

    return rejectWithValue(errorMessage);
  }
});

export const blockUser = createAsyncThunk<
  undefined,
  { cardId: number },
  { rejectValue: string }
>("users/blockUser", async ({ cardId }, { rejectWithValue, dispatch }) => {
  try {
    await axiosInstance.patch(`/api/admin/userBlock${cardId}`);

    dispatch(getUsersAdmin());
  } catch (error) {
    const err = error as ErrorResponse;

    const errorMessage =
      err?.response?.data?.exceptionMessage ||
      err.message ||
      "Something went wrong";

    return rejectWithValue(errorMessage);
  }
});

// MyFriends


export const getAllMyFriends = createAsyncThunk<
  Friend[],
  void,
  { rejectValue: string }
>(
  "user/getAllMyFriends",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/api/friends/getAllMyFriends");
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue("Не удалось загрузить список друзей");
    }
  }
);
