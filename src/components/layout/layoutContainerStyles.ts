import { Theme } from "@material-ui/core/styles";

const layoutContainerStyles = (theme: Theme) => ({
  root: {
    [theme.breakpoints.up("xs")]: {
      maxWidth: "375px",
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: "768px",
    },
  },
});

export default layoutContainerStyles;
