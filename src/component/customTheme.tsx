import { createTheme } from "@mui/material/styles";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#6200ea", // Replace with your desired shade of purple
    },
    secondary: {
      main: "#b388ff", // Replace with your desired shade of purple
    },
    text: {
      primary: "#fff",
      secondary: "#000",
    },
    background: {
      primary: "#f3f7fe",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif", // Replace with your desired font
  },
});

export default customTheme;
