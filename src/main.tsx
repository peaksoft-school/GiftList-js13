import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./shared/theme/featureThemes";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import App from "./app/App";
import { StrictMode } from "react";
import { injectStore } from "./app/config/axiosInstance";
import { Provider } from "react-redux";
import { store } from "./app/store/store";

injectStore(store);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </LocalizationProvider>
    </Provider>
  </StrictMode>
);
