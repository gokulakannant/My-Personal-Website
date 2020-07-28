import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Grow from '@material-ui/core/Grow';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import RegularCard from "../layouts/cards/RegularCard";
import ItemGrid from "../layouts/grid/ItemGrid";
import ProjectCard from "../layouts/cards/ProjectCard";
import { projects, ownProjects } from "../../data/projects";
import ScrollToTop from "../layouts/common/ScrollToTop";

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

function ProjectsComponent(props) {
  const { classes } = props;
  return (
    <React.Fragment>
    <Grow in={true} timeout={1000}>
    <Grid container className={classes.root}>
      <ItemGrid item xs={12} sm={12} md={12}>
        <RegularCard
          cardTitle={"Projects"}
          headerColor={"orange"}
          content={
            <Grid container>
              {projects.map((project, index) => {
                return <ItemGrid key={index} item xs={12} sm={12} md={4}>
                          <ProjectCard
                            title={project.title}
                            description={project.description}
                            siteUrl={project.siteUrl}
                            technologyStack={project.technologyStack}
                          />
                        </ItemGrid>
              })}
            </Grid>
          }
        />
      </ItemGrid>
      <ItemGrid item xs={12} sm={12} md={9}>
        <RegularCard
          cardTitle={"Own Projects (Open source)"}
          headerColor={"green"}
          content={
            <Grid container>
              {ownProjects.map((project, index) => {
                return <ItemGrid key={index} item xs={12} sm={12} md={6}>
                          <ProjectCard
                            title={project.title}
                            description={project.description}
                            siteUrl={project.siteUrl}
                            technologyStack={project.technologyStack}
                          />
                        </ItemGrid>
              })}
            </Grid>
          }
        />
      </ItemGrid>
    </Grid>
    </Grow>
    <ScrollToTop {...props}>
      <Fab color="primary" size="medium" aria-label="scroll back to top">
        <KeyboardArrowUpIcon />
      </Fab>
    </ScrollToTop>
  </React.Fragment>
  );
}

ProjectsComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProjectsComponent);
