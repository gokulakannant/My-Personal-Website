import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import ContactMail from "@material-ui/icons/ContactMail";
import Work from "@material-ui/icons/Work";
import School from "@material-ui/icons/School";
import Code from "@material-ui/icons/Code";
import List from "@material-ui/icons/List";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createBrowserHistory } from "history";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  mobStepperOverride: {
    flex: "0 1 40px",
    width: "100%"
  },
  swipeableContainer: {
    height: "100% !important"
  },
  cr: {
    color: "red"
  },
  logo: {
    width: 135,
    height: 43.54
  }
}));

export default function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(-1);
  const matches = useMediaQuery('(min-width:600px)');

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Fragment>
      <div className={classes.root}>
        <AppBar position="static" color="default">
            <Toolbar style={{ alignItems: "center", justifyContent: "center" }}>
                <Grid justify={"center"} alignItems={"center"} container>
                    <Grid style={{ justifySelf: "flex-start" }} item>
                        <img
                            className={classes.logo}
                            src={
                            "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                            }
                            alt="Bosch Logo"
                        />
                    </Grid>
                    <Grid item>
                        <Grid container justify={"center"}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                variant={(matches)? "fullWidth" : "scrollable"}
                                scrollButtons="on"
                                indicatorColor="primary"
                                textColor="primary"
                                >
                                <Tab label="Gokulakannan T" icon={<PersonPinIcon />} />
                                <Tab label="Skills" icon={<Code />} />
                                <Tab label="Work" icon={<Work />} />
                                <Tab label="Projects" icon={<List />} />
                                <Tab label="Education" icon={<School />} />
                                <Tab label="personal Info" icon={<ContactMail />} />
                            </Tabs>
                        </Grid>
                    </Grid>
                </Grid>
          </Toolbar>
        </AppBar>
      </div>
    </Fragment>
  );
}
