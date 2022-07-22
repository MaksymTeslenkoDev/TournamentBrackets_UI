import React from "react";
import { useForm } from "react-hook-form";
import { useAppSelector } from "../../../hooks";
import { selectUser } from "../../User/userSlice";
import { useAddNewCompetitor } from "../hooks/useAddNewCompetitor";
import {
  selectOwner,
  selectPlayers,
  selectRoundsDates,
  selectTournament,
} from "../tournamentSelectors";
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
