import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./shader/theme/featureThemes";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import App from "./app/App";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</LocalizationProvider>
	</React.StrictMode>
);
