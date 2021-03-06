import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import RegularCard from "../layouts/cards/RegularCard";
import ItemGrid from "../layouts/grid/ItemGrid";
import { skill } from "../../data/skills";
import SkillsCard from "../layouts/cards/SkillsCard";
import ScrollToTop from "../layouts/common/ScrollToTop";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function SkillsComponent(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Grow in={true} timeout={1000}>
        <Grid container className={classes.root}>
          <ItemGrid item xs={12} sm={12} md={8}>
            <ItemGrid item xs={12} sm={12} md={12}>
              <RegularCard
                cardTitle={"Skills"}
                content={
                  Object.keys(skill).map((value, index) => {
                    return <Card key={index}>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {value}
                        </Typography>
                        <Grid container>
                        {skill[value].map((value, index) => {
                          return (
                            <React.Fragment key={index}>
                              <ItemGrid item>
                                <SkillsCard name={value.skill} icon={value.icon} rating={value.rating}/>
                              </ItemGrid>
                            </React.Fragment>
                          );
                        })}
                        </Grid>
                      </CardContent>
                    </Card>
                  })
                }
              />
            </ItemGrid>
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

SkillsComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SkillsComponent);
