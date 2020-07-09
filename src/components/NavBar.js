import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    textAlign: "center",
    fontSize: "50px",
    fontFamily: [
      "Lucida Sans",
      "Lucida Sans Regular",
      "Lucida Grande",
      "Lucida Sans Unicode",
      "Verdana",
      "sans-serif",
    ],
  },
}));

function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Covid-19 Tracker App
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;