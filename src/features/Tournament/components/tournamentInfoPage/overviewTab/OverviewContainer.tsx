import React from "react";
import { useAppSelector } from "../../../../../hooks";
import {
  selectOwner,
  selectRoundsDates,
  selectTournament,
} from "../../../state/tournamentSelectors";
import { OverviewTemplate } from "./OverviewTemplate";

export const OverviewContainer: React.FC = () => {
  const tournament = useAppSelector(selectTournament);
  const roundsDates = useAppSelector(selectRoundsDates);
  const tournamentOwner = useAppSelector(selectOwner);

  if (!tournamentOwner) {
    return null;
  }
  return <OverviewTemplate tournament={tournament} roundsDates={roundsDates} />;
};
