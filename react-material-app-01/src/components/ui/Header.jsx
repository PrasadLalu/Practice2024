import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { AppBar, Button, Tab, Tabs, Toolbar, useScrollTrigger } from "@mui/material";

import logo from "../../assets/logo.svg";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return children
    ? React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
      })
    : null;
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
  },
  logo: {
    height: "6em",
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    "&.MuiTab-root": {
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
      minWidth: 10,
      marginLeft: "25px",
      color: "white",
    },
  },
    button: {
        "&.MuiButton-root": {
            color: "white",
            borderRadius: "50px",
            marginLeft: "50px",
            marginRight: "25px",
        }
    },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <img className={classes.logo} alt="logo name" src={logo} />
            <Tabs className={classes.tabContainer} value={0}>
              <Tab
                className={classes.tab}
                style={{ color: "white", backgroundColor: "#0B72B9" }}
                label="Home"
              />
              <Tab className={classes.tab} label="Services" />
              <Tab className={classes.tab} label="The Revolution" />
              <Tab className={classes.tab} label="About Us" />
              <Tab className={classes.tab} label="Contact Us" />
            </Tabs>
            <Button variant="contained" className={classes.button} color="secondary">
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}></div>
    </React.Fragment>
  );
};

ElevationScroll.propTypes = {
  children: PropTypes.element,
};

export default Header;
