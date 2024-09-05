import { createSlice } from "@reduxjs/toolkit";
import { TypeComplaits } from "../../lib/type/TypePrivatRouter";
import { getComplaints } from "./complaitsThunk";

const initialState: TypeComplaits = {
  loading: false,
  complaints: [],
};

export const complaitsSlice = createSlice({
  name: "complaits",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getComplaints.pending, (state) => {
        state.loading = true;
      })
      .addCase(getComplaints.fulfilled, (state, action) => {
        state.complaints = action.payload;
        state.loading = false;
      })
      .addCase(getComplaints.rejected, (state) => {
        state.loading = false;
        console.log("error");
      });
  },
});
