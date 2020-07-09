import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    flexGrow: 1,
    overflow: "hidden",
  },
  card: {
    textAlign: "center",
    border: "solid",
  },
  title: {
    fontSize: 17,
  },
  pos: {
    fontSize: 25,
  },
});

function GlobalTotalData() {
  const classes = useStyles();

  const [globalData, setGlobalData] = useState({});

  useEffect(() => {
    async function fetchapi() {
      const res = await fetch(
        "https://api.thevirustracker.com/free-api?global=stats"
      );
      let data = await res.json();
      setGlobalData(data.results[0]);
    }
    fetchapi();
  }, []);

  return (
    <div className={classes.root} item="true" xs={12}>
      <div>
        <h1>Global Contition Of World</h1>
        <Grid container spacing={3} style={{ justifyContent: "center" }}>
          <Grid item component={Card} xs={10} md={2}>
            <CardContent
              className={classes.card}
              style={{
                borderColor: "blue",
                backgroundColor: "#9199ff",
                color: "blue",
              }}
            >
              <Typography component={'span'} variant={'body2'} className={classes.title} gutterBottom>
                Total Cases
              </Typography>
              <br />
              <Typography component={'span'} variant={'body2'} className={classes.pos}>
                {globalData.total_cases}
              </Typography>
            </CardContent>
          </Grid>
          <Grid item component={Card} xs={10} md={2}>
            <CardContent
              className={classes.card}
              style={{
                borderColor: "green",
                backgroundColor: "#a9ff94",
                color: "green",
              }}
            >
              <Typography component={'span'} variant={'body2'} className={classes.title} gutterBottom>
                Total Recovered
              </Typography>
              <br />
              <Typography component={'span'} variant={'body2'} className={classes.pos}>
                {globalData.total_recovered}
              </Typography>
            </CardContent>
          </Grid>
          <Grid item component={Card} xs={10} md={2}>
            <CardContent
              className={classes.card}
              style={{
                borderColor: "red",
                backgroundColor: "#ff9e9e",
                color: "red",
              }}
            >
              <Typography component={'span'} variant={'body2'} className={classes.title} gutterBottom>
                Total Deaths
              </Typography>
              <br />
              <Typography component={'span'} variant={'body2'} className={classes.pos}>
                {globalData.total_deaths}
              </Typography>
            </CardContent>
          </Grid>
          <Grid item component={Card} xs={10} md={2}>
            <CardContent
              className={classes.card}
              style={{
                borderColor: "#aba503",
                backgroundColor: "#fcfaa4",
                color: "#aba503",
              }}
            >
              <Typography component={'span'} variant={'body2'} className={classes.title} gutterBottom>
                Active Cases
              </Typography>
              <br />
              <Typography component={'span'} variant={'body2'} className={classes.pos}>
                {globalData.total_unresolved}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </div>
      <div item="true" xs={12}>
        <h1>Today Condition of World</h1>
        <Grid container spacing={3} style={{ justifyContent: "center" }}>
          <Grid item component={Card} xs={10} md={2}>
            <CardContent
              className={classes.card}
              style={{
                borderColor: "blue",
                backgroundColor: "#9199ff",
                color: "blue",
              }}
            >
              <Typography component={'span'} variant={'body2'} className={classes.title} gutterBottom>
                New Cases
              </Typography>
              <br />
              <Typography component={'span'} variant={'body2'} className={classes.pos}>
                {globalData.total_new_cases_today}
              </Typography>
            </CardContent>
          </Grid>
          <Grid item component={Card} xs={10} md={2}>
            <CardContent
              className={classes.card}
              style={{
                borderColor: "red",
                backgroundColor: "#ff9e9e",
                color: "red",
              }}
            >
              <Typography component={'span'} variant={'body2'} className={classes.title} gutterBottom>
                New Deaths
              </Typography>
              <br />
              <Typography component={'span'} variant={'body2'} className={classes.pos}>
                {globalData.total_new_deaths_today}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default GlobalTotalData;