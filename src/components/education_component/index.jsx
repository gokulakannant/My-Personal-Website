import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import RegularCard from "../layouts/cards/RegularCard";
import ItemGrid from "../layouts/grid/ItemGrid";
import ExpansionPanel from "./ExpansionPanels";

const styles = theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function EducationComponent(props) {
  const { classes } = props;
  return (
    <Grid container className={classes.root}>
      <ItemGrid item xs={12} sm={12} md={6}>
        <RegularCard
          cardTitle={"Education"}
          headerColor={"blue"}
          content={
            <Grid container>
              <ExpansionPanel />
            </Grid>
          }
        />
      </ItemGrid>
    </Grid>
  );
}

EducationComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EducationComponent);
