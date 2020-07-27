import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import RegularCard from "../layouts/cards/RegularCard";
import ItemGrid from "../layouts/grid/ItemGrid";
import ProjectCard from "../layouts/cards/ProjectCard";
import { projects, ownProjects } from "../../data/projects";

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
  );
}

ProjectsComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProjectsComponent);
