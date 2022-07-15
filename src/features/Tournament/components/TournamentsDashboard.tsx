import { Box } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { useQueryTournamentsList } from "../hooks/useFindTournamentsList";
import { selectTournamentsList } from "../tournamentSelectors";
import { setQueryField } from "../tournamentSlice";
import { useTournamentsDashboardInnerStyles } from "./styles/useTournamentDashboardStyles";
import { DashboardHeader } from "./TournamentsDashboardHeader";
import { TournamentsListTemplate } from "./TournamentsListTemplate";
import { WithSidebarHOC } from "./WithSidebarHOC";

interface URLDashboardParams {
  game: string;
}

export const TournamentsDashboardInner: React.FC = () => {
  const tournamentsList = useAppSelector(selectTournamentsList);
  const classes = useTournamentsDashboardInnerStyles();
  const params: URLDashboardParams = useParams();
  const dispatch = useAppDispatch();
  useQueryTournamentsList();
  const handleChangeQueryParam = (paramName: string, value: string) => {
    dispatch(setQueryField({ field: paramName, value }));
  };

  React.useEffect(() => {
    if (!params.game) {
      dispatch(setQueryField({ field: "game", value: "Dota" }));
    } else {
      dispatch(setQueryField({ field: "game", value: params.game }));
    }
  }, [params]);

  return (
    <Box className={classes.root}>
      <DashboardHeader
        count={tournamentsList.length}
        handleChangeQueryParam={handleChangeQueryParam}
      />
      <TournamentsListTemplate list={tournamentsList} />
    </Box>
  );
};

export default WithSidebarHOC(TournamentsDashboardInner);
