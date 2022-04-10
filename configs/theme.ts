import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat Alternates", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#81ADC8",
      // contrastText: "#fff",
    },
    black: {
      main: "#000000",
      // contrastText: "#fff",
    },
    vermillion: {
      main: "#CD4631",
      // contrastText: "#fff",
    },
    davysGrey: {
      main: "#4D4D4D",
      // contrastText: "#fff",
    },
    champagne: {
      main: "#F7EDE8",
      // contrastText: "#fff",
    },
    aliceBlue: {
      main: "#EDF3F7",
      // contrastText: "#fff",
    },
  },
});

// define custom colors: https://mui.com/material-ui/customization/palette/
declare module "@mui/material/styles" {
  interface Palette {
    black: Palette["primary"];
    davysGrey: Palette["primary"];
    vermillion: Palette["primary"];
    champagne: Palette["primary"];
    aliceBlue: Palette["primary"];
  }

  interface PaletteOptions {
    black: PaletteOptions["primary"];
    davysGrey: PaletteOptions["primary"];
    vermillion: PaletteOptions["primary"];
    champagne: PaletteOptions["primary"];
    aliceBlue: PaletteOptions["primary"];
  }
}

export default theme;
