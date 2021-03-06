import { createTheme } from "@mui/material/styles";

// Get palette from theme
const { palette } = createTheme();
// Create a theme instance.
const theme = createTheme({
  // Include font in MUI components.
  typography: {
    fontFamily: ["Montserrat Alternates", "sans-serif"].join(","),
  },
  // Override the default palette and add custom colors.
  palette: {
    // mode: "dark" as PaletteMode,
    primary: {
      main: "#81ADC8",
      // contrastText: "#fff",
    },
    black: {
      main: "#000000",
      contrastText: "#fff",
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
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: "#CD4631 #F7EDE8",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "#F7EDE8",
            width: "15px",
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: "#CD4631",
            minHeight: 24,
            border: "3px solid #F7EDE8",
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
            {
              backgroundColor: "#81ADC8",
            },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
            {
              backgroundColor: "#CD4631",
            },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
            {
              backgroundColor: "#81ADC8",
            },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: "#CD4631",
          },
        },
      },
    },
  },
});

// define custom colors: https://mui.com/material-ui/customization/palette/
declare module "@mui/material/styles" {
  // define custom color types
  interface Palette {
    black: Palette["primary"];
    davysGrey: Palette["primary"];
    vermillion: Palette["primary"];
    champagne: Palette["primary"];
    aliceBlue: Palette["primary"];
  }

  // define custom color options types
  interface PaletteOptions {
    black: PaletteOptions["primary"];
    davysGrey: PaletteOptions["primary"];
    vermillion: PaletteOptions["primary"];
    champagne: PaletteOptions["primary"];
    aliceBlue: PaletteOptions["primary"];
  }
}

declare module "@mui/material" {
  interface ButtonPropsColorOverrides {
    black: true;
    davysGrey: true;
    vermillion: true;
    champagne: true;
    aliceBlue: true;
  }
}

export default theme;
