import { createTheme } from "@material-ui/core/styles";
import uiColors from "./colors/uiColors";

const theme = createTheme({
  overrides: {
    MuiStepIcon: {
      root: {
        "&$completed": {
          color: "pink",
        },
        "&$active": {
          color: "#da1710",
        },
      },
    },
  },
  palette: {
    ...uiColors,
  },
  spacing: 8,
});

export default theme;
