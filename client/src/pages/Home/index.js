import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./homestyles.css";
import PageDivider from "../../components/PageDivider";
import WelcomeCard from "../../components/Cards/WelcomeCard";
import HomePageLeftCard from "../../components/Cards/HomePageLeftCard";
import HomePageRightCard from "../../components/Cards/HomePageRightCard";
import CovidCard from "../../components/Cards/CovidCard";
import KidtasticIntroCard from "../../components/Cards/KidtasticIntroCard";
import LandScapeRightCard from "../../components/Cards/LandScapeRightCard";
import MobileFriendlyCard from "../../components/Cards/MobileFriendlyCard";
import KidSafeCard from "../../components/Cards/KidSafeCard";
import HundredPercentFreeCard from "../../components/Cards/HundredPercentFreeCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  spanK: {
    color: "#7f9fdb",
  },
  spanI: {
    color: "#98e3be",
  },
  spanD: {
    color: "#dea0f2",
  },
  spanT: {
    color: "#e7f0b4",
  },
  spanA: {
    color: "#ed8080",
  },
  spanS: {
    color: "#d6c8e0",
  },
  spanTT: {
    color: "#f2cf96",
  },
  spanII: {
    color: "pink",
  },
  spanC: {
    color: "#a59edb",
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className="bodyy">
      <div className={classes.root}>
        {/* Declare grid spacing */}
        <Grid container spacing={2}>
          {/* Grid Start - First Full Row */}
          <Grid item xs={12} lg={12}>
            <h1 className="kidfrontlogo">
              <span className={classes.spanK}>K</span>
              <span className={classes.spanI}>I</span>
              <span className={classes.spanD}>D</span>
              <span className={classes.spanT}>T</span>
              <span className={classes.spanA}>A</span>
              <span className={classes.spanS}>S</span>
              <span className={classes.spanTT}>T</span>
              <span className={classes.spanII}>I</span>
              <span className={classes.spanC}>C</span>
            </h1>
          </Grid>

          <Grid lg={2} xs={2}></Grid>
          <Grid item xs={12} lg={6}>
            <img
              src="./assets/fontpics/bigbang.png"
              alt="update"
              className="bigbang"
            ></img>
          </Grid>
          <Grid lg={2}></Grid>
          <Grid item xs={12} lg={3}>
            <HomePageLeftCard />
          </Grid>
          <Grid item xs={12} lg={6}>
            <WelcomeCard />
          </Grid>
          <Grid item xs={12} lg={3}>
            <HomePageRightCard />
          </Grid>

          <Grid item xs={12} lg={6}>
            <CovidCard />
          </Grid>
          <Grid item xs={12} lg={6}>
            <KidtasticIntroCard />
          </Grid>
          {/* <Grid item xs={6} lg={3}>
            <CoolThingsCard />
           
          </Grid> */}

          <Grid item xs={6} lg={6}>
            <MobileFriendlyCard />
          </Grid>
          <Grid item xs={6} lg={6}>
            <KidSafeCard />
          </Grid>
          <PageDivider />
          <Grid item xs={12} lg={12}>
            <LandScapeRightCard />
          </Grid>
          <Grid item xs={12} lg={12}>
            <HundredPercentFreeCard />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
