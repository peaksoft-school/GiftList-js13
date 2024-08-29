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

    const token =
      "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTcyNDkxMDM3NiwiZXhwIjoxNzI0OTE3NTc2fQ.RjuGB8mZtWSeseUiRdYzkTTzkvBDciSygdxWr6D-WHAkJH2G7cpTfh0w4W-lnEDo4kRd8pEA2m2i77CcSwETNw";

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
