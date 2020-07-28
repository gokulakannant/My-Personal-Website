import React from "react";
import ReactGA from 'react-ga';
import { withStyles } from "@material-ui/core/styles";
import {createMuiTheme} from "@material-ui/core";
import { ThemeProvider } from '@material-ui/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { createBrowserHistory } from 'history';
import ProfileComponent from "./components/profile_component";
import SkillsComponent from "./components/skills_component";
import WorkExperience from "./components/work_experience_component";
import Projects from "./components/projects_component";
import Education from "./components/education_component";
import PersonalInfo from "./components/personal_info_component";
import Header from "./components/layouts/common/Header";
import "./assets/scss/fonts.scss";

const styles = theme => ({
  mainDiv: {
    display: "flex",
    flexFlow: "column",
    height: "100%",
    width: "100%",
    backgroundColor: "#f5f5f5" // theme.palette.background.paper
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
  }
});

function initializeReactGA() {
  ReactGA.initialize("UA-142421407-1");
  ReactGA.pageview(window.location.pathname);
  ReactGA.event({
    category: 'Visiting',
    action: 'Visted the site',
    label: 'Home Page'
  });
}

initializeReactGA();

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Quicksand"
    ].join(','),
  }
});

class App extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <Router>
        <ThemeProvider theme={theme}>
            <div className={classes.mainDiv}>
                <Header history={createBrowserHistory()} />
                <Switch>
                  <Route exact path="/"><Redirect to="/profile" /></Route>
                  <Route exact={true} path='/profile' component={ProfileComponent} />
                  <Route exact={true} path='/skills' component={SkillsComponent} />
                  <Route exact={true} path='/work' component={WorkExperience} />
                  <Route exact={true} path='/projects' component={Projects} />
                  <Route exact={true} path='/education' component={Education} />
                  <Route exact={true} path='/contact' component={PersonalInfo} />
              </Switch>
            </div>
        </ThemeProvider>
      </Router>
    );
  }
}

export default withStyles(styles)(App);
