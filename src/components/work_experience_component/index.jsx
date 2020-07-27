import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import RegularCard from "../layouts/cards/RegularCard";
import ItemGrid from "../layouts/grid/ItemGrid";
import WorkExperienceCard from "../layouts/cards/WorkExperienceCard";
import Typography from "@material-ui/core/Typography";

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

function WorkExperienceComponent(props) {
  const { classes } = props;
  return (
    <Grid container className={classes.root}>
      <ItemGrid item xs={12} sm={12} md={6}>
        <RegularCard
          cardTitle={"Work Experience"}
          cardSubtitle={"Nov 2016 - Present"}
          headerColor={"green"}
          content={
            <Grid container>
              <ItemGrid item xs={12} sm={12} md={6}>
                <WorkExperienceCard
                  logo={""}
                  title={"Contus Support Interactive Pvt. Ltd"}
                  subtitle={"November 28, 2016 - Present"}
                  description={
                    `Contus is a technology company which primarily provides mobile, web, and Cloud based solutions.
                    The company is headquartered at Chennai, India. Contus is a member of the Confederation of Indian Industry`
                  }
                  companyUrl={"https://www.contus.com/"}
                  experience={
                    <React.Fragment>
                      <Typography variant="h6">Work Experience:</Typography>
                      <Typography paragraph>
                      </Typography>
                      <Typography paragraph>
                        Involved in development of in-house products of Contus using React Js.
                      </Typography>
                      <Typography paragraph>
                        Working experience in React Js along with Material UI library.
                      </Typography>
                      <Typography paragraph>
                        Creating and consuming REST web-services using Node js
                        (Express Js), Lumen and Laravel for mobile applications as
                        well as for web.
                      </Typography>
                      <Typography paragraph>
                        Working knowledge in MySQL to design database schema and write SQL queries.
                      </Typography>
                      <Typography paragraph>
                        Strong object-oriented development - PHP and TypeScript.
                      </Typography>
                      <Typography paragraph>
                        Working experience in other technologies like Elastic Search, FFMPEG and etc.
                      </Typography>
                      <Typography paragraph>
                        Good understanding of Webpack for bundle the web applications.
                      </Typography>
                      <Typography paragraph>
                        Working knowledge in version control system (Git).
                      </Typography>
                      <Typography paragraph>
                        Worked in both Linux environment (Ubuntu Operating System) and Windows environment.
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ItemGrid>
              <ItemGrid item xs={12} sm={12} md={6}>
                <WorkExperienceCard
                  logo={""}
                  title={"Contus Support Interactive Pvt. Ltd (Client Place)"}
                  subtitle={"November 28, 2016 - Present"}
                  description={
                    `Contus is a technology company which primarily provides mobile, web, and Cloud based solutions.
                    The company is headquartered at Chennai, India. Contus is a member of the Confederation of Indian Industry`
                  }
                  companyUrl={"https://www.contus.com/"}
                  experience={
                    <React.Fragment>
                      <Typography variant="h6">Work Experience:</Typography>
                      <Typography paragraph>
                      </Typography>
                      <Typography paragraph>
                        Outsourced to Client place to work in one of their products, Phoenix Platform (Next Gen Vehicle Infotainment Platform).
                      </Typography>
                      <Typography paragraph>
                        Development using Node Js with TypeScript for facilitating services for web apps and C++ frameworks.
                      </Typography>
                      <Typography paragraph>
                        Worked in Electron js to build a hybrid applications which are supported in various platforms.
                      </Typography>
                      <Typography paragraph>
                        Involved in development of a studio which is simulates the all phoenix framework APIs
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ItemGrid>
            </Grid>
          }
        />
      </ItemGrid>
    </Grid>
  );
}

WorkExperienceComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WorkExperienceComponent);
