import { RootState } from "../../store";
import { UserRoles } from "../sidebar/sidebarSlice";
import { Rounds, Tournament, TournamentListItem } from "./types";

export const selectTournament = (state: RootState) =>
  state.tournament.tournament;
export const selectOwner = (state: RootState) => {
  return state.tournament.tournament.users.find(
    (i) => i.participant.role === UserRoles.owner
  );
};
export const selectPlayers = (tournament: TournamentListItem | Tournament) => {
  return tournament.users.filter(
    (i) => i.participant.role === UserRoles.player
  );
};
export const selectTournamentsList = (state: RootState) => {
  return state.tournament.tournamentList;
};
export const selectMatches = (state: RootState) => {
  const target = Math.log(state.tournament.tournament.size) / Math.log(2);
  let rounds: Rounds = {};
  let count = Math.ceil(target);
  while (count) {
    let teamsInRound = state.tournament.tournament.matches.filter(
      (item) => item.round === count
    );
    rounds[`round${count}` as keyof Rounds] = {};
    let sets = teamsInRound.length / 4;
    let setsCounter = 0;
    while (setsCounter < sets) {
      setsCounter++;
      rounds[`round${count}` as keyof Rounds][
        `set__${setsCounter}` as keyof Rounds
      ] = {};

      let pairsCounter = 0;
      let pairsPerSet = [...teamsInRound.splice(0, 4)];

      while (pairsPerSet.length) {
        pairsCounter++;
        rounds[`round${count}` as keyof Rounds][
          `set__${setsCounter}` as keyof Rounds
        ][`pair__${pairsCounter}` as keyof Rounds] = [
          ...pairsPerSet.splice(0, 2),
        ];
      }
    }

    count -= 1;
  }
  return rounds;
};
export const selectRoundsDates = (state: RootState) => {
  const target = Math.log(state.tournament.tournament.size) / Math.log(2);
  let count = Math.ceil(target);
  let res = [];
  while (count > 0) {
    const item = state.tournament.tournament.matches.find(
      (item) => item.round === count
    );

    if (item) {
      const { startAt } = item;
      res.push({ round: count, startAt });
    }

    count--;
  }
  return res;
};
export const selectListQueryParams = (state: RootState) => {
  return state.tournament.tournamentsListQueryState;
};
