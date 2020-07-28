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
import Typography from "@material-ui/core/Typography";
import {Link} from 'react-router-dom';
import { registerPageVisit } from "../../../helpers/GoogleAnalytics";

const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1
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
    height: "50px",
    paddingTop: ".35rem",
    paddingBottom: ".35rem",
    marginRight: "1rem"
  },
  title: {

  },
  fullHeight: {
    ...theme.mixins.toolbar,
  },
  navBrand: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
  },
  labelContainer: {
    width: "auto",
    padding: 0
  },
  iconLabelWrapper: {
    flexDirection: "row"
  },
  tabText: {
      marginLeft: "3px"
  }
}));

function getTabValue(history) {
  if (history.location.pathname === "/") {
    return "profile";
  }
  return history.location.pathname.substr(1);
}

export default function App({ history }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(getTabValue(history));
  const matches = useMediaQuery('(min-width:600px)');
  registerPageVisit(value);

  function handleChange(event, newValue) {
    setValue(newValue);
    registerPageVisit(newValue);
  }

  const tabClassess = { 
      root: classes.fullHeight, 
      wrapper: classes.iconLabelWrapper
  }

  return (
    <Fragment>
      <div className={classes.root}>
        <AppBar position="static" color="default">
            <Toolbar  id="back-to-top-anchor">
                <Grid container alignItems="center" justify="space-between">
                    <Grid item className={classes.navBrand}>
                        <img
                            className={classes.logo}
                            src={"/images/GT.png"}
                            alt="Avator"
                        />
                        <Typography color="inherit" variant="h5">
                            GOKULAKANNAN T
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            variant={(matches)? "fullWidth" : "scrollable"}
                            scrollButtons="on"
                            indicatorColor="primary"
                            textColor="primary"
                            >
                            <Tab component={Link} to="/profile" icon={<><PersonPinIcon /> <span className={classes.tabText}>Profile</span></>} classes={tabClassess} value="profile"/>
                            <Tab component={Link} to="/skills" icon={<><Code /> <span className={classes.tabText}>Skills</span></>} classes={tabClassess} value="skills"/>
                            <Tab component={Link} to="/work" icon={<><Work /> <span className={classes.tabText}>Work</span></>} classes={tabClassess} value="work"/>
                            <Tab component={Link} to="/projects" icon={<><List /> <span className={classes.tabText}>Projects</span></>} classes={tabClassess} value="projects"/>
                            <Tab component={Link} to="/education" icon={<><School /> <span className={classes.tabText}>Education</span></>} classes={tabClassess} value="education"/>
                            <Tab component={Link} to="/contact" icon={<><ContactMail /> <span className={classes.tabText}>Contact</span></>} classes={tabClassess} value="contact"/>
                        </Tabs>
                    </Grid>
                </Grid>
          </Toolbar>
        </AppBar>
      </div>
    </Fragment>
  );
}
