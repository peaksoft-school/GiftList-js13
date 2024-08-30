import { Action, Store } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_GIFTLIST_URL;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

let store: Store<RootState, Action>;

export const injectStore = (_store: Store<RootState, Action>) => {
  store = _store;
};

axiosInstance.interceptors.request.use(
  function (config) {
    const updatedConfig = { ...config };
    // const { token } = store.getState().auth;

    const token ="eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inppa2lyZGlub3ZhQGdtYWlsLmNvbSIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzI0NzU4NzE3LCJleHAiOjE3MjQ3NjU5MTd9.X4rtNTTArS56OHGMuyhIk1B26Ej5he2hHJccJ4DLSbBUiZHhsXLcO1jPNMGLN8snvsgvwYYvdTcrYd6fWAiiiw";

      


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
