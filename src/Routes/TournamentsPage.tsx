import React from "react";
import { Layout } from "../Layout/Layout";
import TournamentsDashboard from "../features/Tournament/components/tournamentsDashboard/TournamentsDashboard";
import { useLayoutStyles } from "./useLayoutStyles";

export const TournamentsPage: React.FC = () => {
  const classes = useLayoutStyles();
  return (
    <Layout className={classes.root}>
      <TournamentsDashboard />
    </Layout>
  );
};
