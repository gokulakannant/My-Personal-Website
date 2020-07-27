import React from "react";
import { Grid, withStyles } from "@material-ui/core";

const style = {
  grid: {
    padding: "15px 15px !important"
  }
};

function ItemGrid({ ...props }) {
  const { classes, children, ...rest } = props;
  return (
    <Grid item {...rest} className={classes.grid}>
      {children}
    </Grid>
  );
}

export default withStyles(style)(ItemGrid);
