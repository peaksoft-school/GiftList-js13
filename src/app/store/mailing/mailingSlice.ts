import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Newsletter } from "../../../shared/lib/types/newsLetters";
import { fetchNewLetters, sendNewsletter } from "./mailingThunk";

interface NewsletterState {
  newsletters: Newsletter[];
  loading: boolean;
  error: string | null;
}

const initialState: NewsletterState = {
  newsletters: [],
  loading: false,
  error: null,
};

export const newsletterSlice = createSlice({
  name: "newsletter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewLetters.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchNewLetters.fulfilled,
        (state, action: PayloadAction<Newsletter[]>) => {
          state.loading = false;
          state.newsletters = action.payload;
        }
      )
      .addCase(fetchNewLetters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(sendNewsletter.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendNewsletter.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(sendNewsletter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
