import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import RegularCard from "../layouts/cards/RegularCard";
import ItemGrid from "../layouts/grid/ItemGrid";
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  lists: {
    width: "100%",
    maxWidth: 450,
    backgroundColor: theme.palette.background.paper
  },
  hasHref: {
    cursor: "pointer"
  }
}));

export default function PersonalInfo() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <ItemGrid item xs={12} sm={12} md={4}>
        <RegularCard
          cardTitle={"Personal Info"}
          headerColor={"red"}
          content={
            <Grid container>
              <List className={classes.lists}>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <IconButton aria-label="Mobile">
                        <SvgIcon>
                          <path d="M19 2c0-1.104-.896-2-2-2h-10c-1.104 0-2 .896-2 2v20c0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2v-20zm-8.5 0h3c.276 0 .5.224.5.5s-.224.5-.5.5h-3c-.276 0-.5-.224-.5-.5s.224-.5.5-.5zm1.5 20c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm5-3h-10v-14.024h10v14.024z"/>
                        </SvgIcon>
                      </IconButton>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Mobile Number" secondary="9790352880" />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <IconButton aria-label="Email">
                        <SvgIcon>
                          <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                        </SvgIcon>
                      </IconButton>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Email"
                    secondary="gokulakannanthangaraji@gmail.com"
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <IconButton aria-label="Linked In">
                        <SvgIcon>
                          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                        </SvgIcon>
                      </IconButton>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    className={classes.hasHref}
                    onClick={() => { window.open("https://in.linkedin.com/in/gokulakannan-t-2b4499a3", "_blank"); }}
                    primary="Linked In"
                    secondary="https://in.linkedin.com/in/gokulakannan-t"
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <IconButton aria-label="GitHub">
                        <SvgIcon>
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </SvgIcon>
                      </IconButton>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    className={classes.hasHref}
                    onClick={() => { window.open("https://github.com/gokulakannant", "_blank"); }}
                    primary="GitHub"
                    secondary="https://github.com/gokulakannant"
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <IconButton aria-label="Skype">
                        <SvgIcon>
                          <path d="M22.987 13.966c1.357-7.765-5.416-14.412-13.052-12.979-5.821-3.561-12.503 3.226-8.935 9.029-1.387 7.747 5.384 14.48 13.083 13.01 5.832 3.536 12.493-3.26 8.904-9.06zm-10.603 5.891c-3.181 0-6.378-1.448-6.362-3.941.005-.752.564-1.442 1.309-1.442 1.873 0 1.855 2.795 4.837 2.795 2.093 0 2.807-1.146 2.807-1.944 0-2.886-9.043-1.117-9.043-6.543 0-2.938 2.402-4.962 6.179-4.741 3.602.213 5.713 1.803 5.917 3.289.101.971-.542 1.727-1.659 1.727-1.628 0-1.795-2.181-4.6-2.181-1.266 0-2.334.528-2.334 1.674 0 2.395 8.99 1.005 8.99 6.276-.001 3.039-2.423 5.031-6.041 5.031z"/>
                        </SvgIcon>
                      </IconButton>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Skype"
                    secondary="live:tgokulakannan95"
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <IconButton aria-label="Twitter">
                        <SvgIcon>
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </SvgIcon>
                      </IconButton>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    className={classes.hasHref}
                    onClick={() => { window.open("https://twitter.com/Iam_GKannan", "_blank"); }}
                    primary="Twitter"
                    secondary="https://twitter.com/Iam_GKannan"
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </List>
            </Grid>
          }
        />
      </ItemGrid>
    </Grid>
  );
}
