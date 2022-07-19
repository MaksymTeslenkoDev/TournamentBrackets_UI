import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./Routes/HomePage";
import { checkIsAuthAsync } from "./features/User/userSlice";
import { TournamentInfoPage } from "./Routes/TournamentInfoPage";
import { TournamentsPage } from "./Routes/TournamentsPage";
import { useAppDispatch } from "./hooks";
import InvitedTournamentPageHOC from "./Routes/hoc/InvitedTournamentHOC";

const Routes: React.FC = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(checkIsAuthAsync());
  }, []);

  return (
    <Switch>
      <Route
        path="/"
        exact
        render={(props) => {
          return <Home />;
        }}
      />

      <Route
        path="/tournaments/:game/:activeTournament"
        exact
        render={(props) => {
          return (
            <TournamentInfoPage
              game={props.match.params.game}
              tournamentId={props.match.params.activeTournament}
            />
          );
        }}
      />
      <Route
        path="/tournaments/:game?"
        exact
        render={() => {
          return <TournamentsPage />;
        }}
      />
      <Route
        path="/invite"
        exact
        render={(props) => {
          const token = props.location.search.slice(
            1,
            props.location.search.length
          );
          return <InvitedTournamentPageHOC token={token} />;
        }}
      />
    </Switch>
  );
};

export default Routes;
