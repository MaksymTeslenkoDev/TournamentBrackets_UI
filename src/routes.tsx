import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./Routes/HomePage";
import { AppDispatch } from "./store";
import { checkIsAuthAsync } from "./features/User/userSlice";
import { useDispatch } from "react-redux";
import { TournamentInfoPage } from "./Routes/TournamentInfoPage";
import { TournamentsPage } from "./Routes/TournamentsPage";

const Routes: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

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
    </Switch>
  );
};

export default Routes;
