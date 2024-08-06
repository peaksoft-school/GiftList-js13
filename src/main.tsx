import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { theme } from "./shared/theme/featureThemes";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import App from "./app/App";
import { StrictMode } from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</LocalizationProvider>
	</StrictMode>
);
