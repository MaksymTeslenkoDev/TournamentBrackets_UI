import React from "react";
import TournamentInfoContainer from "../features/Tournament/components/TournamentInfoContainer";
import { Layout } from "../Layout/Layout";
import { useLayoutStyles } from "./useLayoutStyles";

interface TournamentInfoPageProps {
  tournamentId: string;
  game: string;
}

export const TournamentInfoPage: React.FC<TournamentInfoPageProps> = ({
  tournamentId,
  game,
}) => {
  const classes = useLayoutStyles();
  return (
    <Layout className={classes.root}>
      <TournamentInfoContainer tournamentId={tournamentId} game={game} />
    </Layout>
  );
};
