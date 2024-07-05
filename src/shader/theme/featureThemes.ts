import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
	typography: {
		fontFamily:
			"Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
		h1: {
			fontSize: "2.5rem",
			fontWeight: 600,
		},
		h2: {
			fontSize: "2rem",
			fontWeight: 600,
		},
		h3: {
			fontSize: "1.75rem",
			fontWeight: 600,
		},
		h4: {
			fontSize: "1.5rem",
			fontWeight: 600,
		},
		h5: {
			fontSize: "1.25rem",
			fontWeight: 600,
		},
		body1: {
			fontSize: "1rem",
		},
		body2: {
			fontSize: "0.875rem",
		},
	},
	palette: {
		primary: {
			main: "#8639B5",
			contrastText: "#FFFFFF",
		},
		secondary: {
			main: "#8D949E",
			light: "#BDDBDD",
			dark: "#AEAEAE",
		},
		background: {
			default: "#F7F8FA",
			paper: "#FFFFFF",
		},
	},
});
