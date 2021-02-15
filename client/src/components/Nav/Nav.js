import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import { Link } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Slide from "@material-ui/core/Slide";
import AdbIcon from "@material-ui/icons/Adb";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import Icon from "@material-ui/core/Icon";

const navLinks = [
  {
    link: "/",
    title: "Home",
    icon: <AdbIcon />,
  },
  {
    link: "/login",
    title: "Login",
    icon: <AcUnitIcon />,
  },
  {
    link: "/watch",
    title: "Watch",
    icon: <AcUnitIcon />,
  },
  {
    link: "/Draw",
    title: "Draw",
    icon: <AcUnitIcon />,
  },
];

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            {navLinks.map((link) => {
              return (
                <Link to={link.link}>
                  <Button
                    onClick={() => props.setActiveLink(link.link)}
                    style={
                      props.selected === link.link
                        ? {
                            textDecoration: "underline",
                          }
                        : {}
                    }
                    startIcon={link.icon}
                  >
                    <Typography variant="inherit">{link.title}</Typography>
                  </Button>
                </Link>
              );
            })}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container>
        {/* <Box my={2}>
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")}
        </Box> */}
      </Container>
    </React.Fragment>
  );
}
