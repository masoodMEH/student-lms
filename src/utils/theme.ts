import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#1d232a", // Tailwind's `indigo-600` as an example
    },
    secondary: {
      main: "#d946ef", // Tailwind's `pink-500` as an example
    },
  },
});

export default theme;
