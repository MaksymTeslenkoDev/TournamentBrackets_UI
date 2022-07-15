import { makeStyles, Theme } from "@material-ui/core";
import React from "react";
import { HomeContainer } from "../features/home/components/HomeContainer";
import { Layout } from "../Layout/Layout";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
    padding: theme.spacing(1, 1),
  },
}));
export const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <Layout className={classes.root}>
      <HomeContainer />
    </Layout>
  );
};
