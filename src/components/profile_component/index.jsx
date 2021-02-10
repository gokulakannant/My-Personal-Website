import React from "react";
import Grid from "@material-ui/core/Grid";
import ProfileCard from "../layouts/cards/ProfileCard";
import ItemGrid from "../layouts/grid/ItemGrid";
import avator from "../../assets/images/ProfileImage.jpg";
import DownloadComponent from "./DownloadComponent";
import Grow from '@material-ui/core/Grow';

function ProfileComponent() {

  const JOINING_DATE = new Date("2016-11-28");

  const TODAY_DATE = new Date();

  const experience = () => {
    const diff = new Date(TODAY_DATE - JOINING_DATE);
    const years = diff.toISOString().slice(0, 4) - 1970;
    const months = diff.getMonth() + 1;
    // TODO: Use days when its needed
    // const days = diff.getDate();

    return `${years} years ${months} months`;
  }
  return (
    <Grow in={true} timeout={1000}>
      <Grid container>
        <ItemGrid item xs={12} sm={12} md={12}>
          <ProfileCard
            avatar={avator}
            subtitle={["Programmer", "Cricket Fanatic", "Music Lover", "Gamer"]}
            title={"GOKULAKANNAN T"}
            description={
              `Around ${experience()} of experience in web and database application of various systems. A passionate programmer who likes web technologies(both front end and back end) and loves to write clean and beautiful code.`
            }
            footer={<DownloadComponent />}
          />
        </ItemGrid>
      </Grid>
    </Grow>
  );
}

export default ProfileComponent;
