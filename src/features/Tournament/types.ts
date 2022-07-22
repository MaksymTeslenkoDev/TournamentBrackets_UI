import { SelectOption } from "../../Components/UiElements/Select/TBSelect";
import { LoadErrorStatus } from "../../types";
import { AppUser } from "../User/types";

type TournamentFormatOptions = SelectOption & { description: string };

export interface MatchCompetitor {
  competitorId: number;
  matchId: number;
  score: number;
}

export interface Competitor {
  id: number;
  userId: number;
  position: number;
  matchCompetitors: MatchCompetitor;
  user: AppUser;
}

export interface Match {
  id: number;
  comment: string | null;
  round: number;
  winner: number;
  external_id: number;
  winner_mid: number;
  position_0: number | null;
  position_1: number | null;
  startAt: string;
  competitors: Array<Competitor>;
}

export type TournamentUser = AppUser & { participant: { role: string } };
export enum TournamentAccessType {
  all = "all",
  private = "private",
  public = "public",
}
export interface Tournament {
  game: number | string;
  owner: string;
  game_format: number | string;
  title: string;
  format: string | number;
  matches: Array<Match>;
  tournamentType: string;
  users: Array<TournamentUser>;
  picture_long: null;
  picture_small: null;
  picture_original: null;
  id: string | number;
  size: number;
  accessType: TournamentAccessType;
  startAt: string;
  finishAt: string;
  invite: string;
  password: string;
  //complete hole entity of Tournament later
}

export type TournamentListItem = Pick<
  Tournament,
  | "game"
  | "title"
  | "accessType"
  | "size"
  | "format"
  | "startAt"
  | "game_format"
  | "id"
  | "matches"
  | "users"
>;

export type TournamentBase = Pick<
  Tournament,
  "game" | "owner" | "game_format" | "title" | "format"
>;
export enum OrderDirection {
  asc = "ASC",
  desc = "DESC",
}
export interface TournamentState extends LoadErrorStatus {
  tournament: Tournament;
  tournamentList: Array<TournamentListItem>;
  tournamentsListQueryState: TournamentsListQueryParams;
}

export const gamesArray: Array<SelectOption> = [
  { id: "1", label: "Dota 2", value: "Dota" },
  { id: "2", label: "CS:GO", value: "CsGo" },
  { id: "3", label: "PUBG", value: "Pubg" },
];

export const sortingFields: Array<SelectOption> = [
  { id: "1", label: "Starting at", value: "startAt" },
  { id: "2", label: "Size", value: "size" },
];

export const sortingDirections: Array<SelectOption> = [
  { id: "1", label: "ASC", value: OrderDirection.asc },
  { id: "2", label: "DESC", value: OrderDirection.desc },
];

export const gameModesArray: Array<SelectOption> = [
  { id: "1", label: "5v5", value: "5v5" },
  { id: "2", label: "2v2", value: "2v2" },
  { id: "3", label: "1v1", value: "1v1" },
];

export const accessTypesOptinsArray: Array<SelectOption> = [
  { id: "1", label: "All", value: TournamentAccessType.all },
  { id: "2", label: "Public", value: TournamentAccessType.public },
  { id: "3", label: "Private", value: TournamentAccessType.private },
];

export const tournamentFormatsArray: Array<TournamentFormatOptions> = [
  {
    id: "1",
    label: "Single Bracket",
    value: "Single Bracket",
    description: "Each player plays matches until they lose",
  },
];

export type Rounds = {
  [key: string]: { [keySet: string]: { [keyPair: string]: Array<Match> } };
};

export type UpdateField = {
  field: string;
  value: string | number;
};

export interface TournamentsListQueryParams {
  skip: number;
  limit: number;
  orderBy: string;
  orderDirection: OrderDirection;
  game: string;
  accessType: TournamentAccessType;
  search: string;
}
