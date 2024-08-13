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

axios.interceptors.request.use(
  function (config) {
    const updatedConfig = { ...config };
    const { token } = store.getState().auth;

    if (token) {
      updatedConfig.headers.Authorization = `Bearer ${token}`;
    }

    return updatedConfig;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);