import { createTheme } from "@material-ui/core/styles";
import { SpacingOptions } from "@material-ui/core/styles/createSpacing";
export const useTheme = () => {
  const defaultTheme = createTheme();
  const theme = createTheme({
    palette: {
      //deep purple
      primary: {
        main: "#19227c",
        light: "#524aac",
        dark: "#00004f",
        contrastText: "#ffffff",
      },
      //grey
      secondary: {
        main: "#424242",
        light: "#6d6d6d",
        dark: "#1b1b1b",
        contrastText: "#ffffff",
      },
      //pink
      warning: {
        main: "#d81b60",
        light: "#ff5c8d",
        dark: "#a00037",
      },
      //blue
      info: {
        main: "#42a5f5",
        light: "#80d6ff",
        dark: "#0077c2",
      },
    },
    spacing: (factor: SpacingOptions) => `${factor}rem`,
    typography: {
      htmlFontSize: 16,
      fontFamily: "'Nunito','Roboto','Helvetica',sans-serif",
      h1: {
        fontSize: 38,
        fontWeight: "bold",
        lineHeight: 1.18,
        marginBottom: defaultTheme.spacing(4),
      },
      h2: {
        fontSize: 34,
        fontWeight: "bold",
        lineHeight: 1.3,
        marginBottom: defaultTheme.spacing(3),
      },
      subtitle1: {
        fontSize: 20,
        fontWeight: 500,
        lineHeight: 1.3,
        marginBottom: defaultTheme.spacing(1.5),
      },
    },
  });
  return [theme];
};
