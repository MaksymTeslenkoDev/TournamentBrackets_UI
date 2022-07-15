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
  const competitors = useAppSelector(() => selectPlayers(tournament));
  const { user } = useAppSelector(selectUser);

  const methods = useForm<{ invitationLink: string }>({
    mode: "onChange",
    defaultValues: {
      invitationLink: "",
    },
  });
  const { handleJoin } = useAddNewCompetitor(methods);

  if (!tournamentOwner) {
    return null;
  }
  return (
    <OverviewTemplate
      tournament={tournament}
      roundsDates={roundsDates}
      competitorsLength={competitors.length}
      showJoinSection={
        tournamentOwner.email === (user?.email || "") ||
        competitors.find((i) => i?.email === user?.email)
          ? false
          : true
      }
      {...methods}
      handleJoin={handleJoin}
    />
  );
};
