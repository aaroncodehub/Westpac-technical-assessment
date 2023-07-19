import { makeStyles, Theme } from "@material-ui/core/styles";

const formStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    rowGap: theme.spacing(2),
    padding: theme.spacing(4),
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    border: "1.5px solid #dedee1",
  },
}));

export default formStyles;
