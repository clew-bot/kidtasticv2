import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";
import { VFXImg } from "react-vfx";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(6),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#87cfff",
    color: "black",
  },
  // headering: {
  //   fontSize: "3vw",
  //   color: "black",
  // },
}));

const WelcomeCard = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      {/* <h1 className={classes.headering}>Welcome Back!</h1> */}
      <VFXImg
        shader="pixelateTransition"
        src="./assets/images/molang.webp"
        alt="Molang"
        className="molang"
      ></VFXImg>
      <h4 className="intro">
        <Hidden only="xs">
          <VFXImg
            shader="pixelateTransition"
            src="./assets/images/adventure1.png"
            alt="adventure time"
            className="adventure"
          ></VFXImg>
        </Hidden>
        Welcome to Kidtastic 2.0! We have successfully migrated to better and
        faster servers for all your daily activities on here. Our team has been
        working long and hard from scratch to deliver un-matched, top notch
        quality. The Watch Page has increased in videos and content quality,
        Over 50 new and more awesome than ever videos have been added, so get
        your popcorn and drinks ready!
      </h4>
    </Paper>
  );
};

export default WelcomeCard;
