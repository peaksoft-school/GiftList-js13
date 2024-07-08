import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App";
import { ThemeProvider } from "@mui/material";
import { theme } from "./shader/theme/featureThemes";

ReactDOM.createRoot(document.getElementById("root")!).render(
<<<<<<< HEAD
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
=======
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>
>>>>>>> e5d67eb91eb9d1560192d88d952883979f171bc5
);
