import { Action, Store } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_GIFTLIST_URL;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

let store: Store<RootState, Action>;

export const injectStore = (_store: Store<RootState, Action>) => {
  store = _store;
};

axiosInstance.interceptors.request.use(
  function (config) {
    const updatedConfig = { ...config };
    // const { token } = store.getState().auth;

    const token =
      "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inppa2lyZGlub3ZhQGdtYWlsLmNvbSIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzI0MzE0Nzg5LCJleHAiOjE3MjQzMjE5ODl9.Lo5RsPbBRMItU0jv7jMwqvFyQltV_5vaY6KSHkEXx04wZFqNXqdcrnhuYd_5vwCs4R1BOw7cZrxWzeFq8dCaLg";

    if (token) {
      updatedConfig.headers.Authorization = `Bearer ${token}`;
    }

    return updatedConfig;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
