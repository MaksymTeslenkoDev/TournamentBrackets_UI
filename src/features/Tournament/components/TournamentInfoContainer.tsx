import React from "react";
import { useAppDispatch } from "../../../hooks";
import { getTournamentByIdAsync } from "../tournamentAsyncReducers";
import { TournamentInfoContent } from "./TournamentInfoContent";
import { WithSidebarHOC } from "./WithSidebarHOC";

interface TournamentInfoContainerProps {
  tournamentId: string;
  game: string;
}

const TournamentInfoContainerInner: React.FC<TournamentInfoContainerProps> = ({
  tournamentId,
}) => {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(getTournamentByIdAsync(+tournamentId));
  }, [tournamentId]);

  return <TournamentInfoContent />;
};

export default WithSidebarHOC(TournamentInfoContainerInner);
