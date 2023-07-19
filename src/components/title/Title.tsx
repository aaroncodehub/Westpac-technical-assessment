import React from "react";
import Typography from "@material-ui/core/Typography";
import useStyles from "./titleStyles";
import LayoutContainer from "../layout/LayoutContainer";

function Title({ title }: { title: string }) {
  const classes = useStyles();
  return (
    <LayoutContainer>
      <div className={classes.root}>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
      </div>
    </LayoutContainer>
  );
}

export default React.memo(Title);
