import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkExraArguments } from "../../../store";

import {
  Match,
  Tournament,
  TournamentBase,
  TournamentListItem,
  TournamentsListQueryParams,
  UpdateField,
} from "./types";

export const createNewTournamentAsync = createAsyncThunk<
  Tournament,
  TournamentBase,
  { extra: ThunkExraArguments; rejectValue: string }
>(
  "@@tournament/createNew",
  async (tournamentData, { extra: { api }, rejectWithValue }) => {
    try {
      const { data } = await api.makePostRequest<TournamentBase, Tournament>(
        "tournaments/create",
        tournamentData
      );
      return data;
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue("Something bad was happened!");
    }
  }
);

export const getTournamentByIdAsync = createAsyncThunk<
  Tournament,
  { tournamentId: number; userEmail?: string },
  { extra: ThunkExraArguments; rejectValue: string }
>(
  "@@tournament/getOne",
  async ({ tournamentId, userEmail }, { extra: { api }, rejectWithValue }) => {
    try {
      const { data } = await api.makeGetRequest<Tournament>(
        `tournaments/getById/${tournamentId}${userEmail ? "/" + userEmail : ""}`
      );
      return data;
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue("Something bad was happened!");
    }
  }
);

type UpdateTournamentParams = UpdateField & { tournamentId: number };
export const updateTournamentAsync = createAsyncThunk<
  Tournament,
  UpdateTournamentParams,
  { extra: ThunkExraArguments; rejectValue: string }
>(
  "@@tournament/update",
  async (params, { extra: { api }, rejectWithValue }) => {
    try {
      const { tournamentId, ...restParams } = params;
      const { data } = await api.makePostRequest<
        { field: string; value: string | number },
        Tournament
      >(`tournaments/update/${params.tournamentId}`, restParams);
      return data;
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue("Something bad was happened!");
    }
  }
);

type UpdateRoundMatchesParams = UpdateField & {
  tournamentId: number;
  round: number;
};

export const updateRoundMatchesAsync = createAsyncThunk<
  Array<Match>,
  UpdateRoundMatchesParams,
  { extra: ThunkExraArguments; rejectValue: string }
>(
  "@@tournament/updateRoundMatches",
  async (params, { extra: { api }, rejectWithValue }) => {
    try {
      const { tournamentId, round, ...restParams } = params;
      const { data } = await api.makePostRequest<
        { field: string; value: string | number },
        Array<Match>
      >(`matches/update/round/${round}/${tournamentId}`, restParams);
      return data;
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue("Something bad was happened!");
    }
  }
);

export const getTournamentsListAsync = createAsyncThunk<
  Array<TournamentListItem>,
  TournamentsListQueryParams,
  { extra: ThunkExraArguments; rejectValue: string }
>(
  "@@tournament/getList",
  async (queryParams, { extra: { api }, rejectWithValue }) => {
    try {
      const { data } = await api.makePostRequest<
        TournamentsListQueryParams,
        Array<TournamentListItem>
      >(`tournaments/getAll`, queryParams);
      return data;
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue("Something bad was happened!");
    }
  }
);

export const registerNewCompetitorsAsync = createAsyncThunk<
  Tournament,
  { maxNumberRound: number; tournamentId: number; tournamentPassword: string },
  { extra: ThunkExraArguments; rejectValue: string }
>(
  "@@tournament/registerNewCompetitor",
  async (params, { extra: { api }, rejectWithValue }) => {
    try {
      const { maxNumberRound, tournamentId, tournamentPassword } = params;
      const { data } = await api.makePostRequest<
        { maxNumberRound: number; tournamentPassword: string },
        Tournament
      >(`tournaments/addCompetitor/${tournamentId}`, {
        maxNumberRound,
        tournamentPassword,
      });
      return data;
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue("Something bad was happened!");
    }
  }
);

export const updateScoreAsync = createAsyncThunk<
  Tournament,
  {
    tournamentId: number;
    matchId: number;
    competitorId: number;
    scoreValue: number;
  },
  { extra: ThunkExraArguments; rejectValue: string }
>(
  "@@tournament/updateScore",
  async (params, { extra: { api }, rejectWithValue }) => {
    try {
      const { scoreValue, tournamentId, matchId, competitorId } = params;
      const { data } = await api.makePostRequest<{ value: number }, Tournament>(
        `matches/updateScore/${tournamentId}/${matchId}/${competitorId}`,
        {
          value: scoreValue,
        }
      );
      return data;
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue("Something bad was happened!");
    }
  }
);

export const deleteTournamentAsync = createAsyncThunk<
  undefined,
  { tournamentId: number },
  { extra: ThunkExraArguments; rejectValue: string }
>(
  "@@tournament/deleteTournament",
  async (params, { extra: { api }, rejectWithValue }) => {
    try {
      const { tournamentId } = params;
      const { data } = await api.makePostRequest<undefined, undefined>(
        `tournaments/delete/${tournamentId}`,
        undefined
      );
      return data;
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue("Something bad was happened!");
    }
  }
);

export const deletePlayerAsync = createAsyncThunk<
  Tournament,
  { tournamentId: number; userEmail: string; competitorId: number },
  { extra: ThunkExraArguments; rejectValue: string }
>(
  "@@tournament/deletePlayer",
  async (params, { extra: { api }, rejectWithValue }) => {
    try {
      const { data } = await api.makePostRequest<
        { tournamentId: number; userEmail: string; competitorId: number },
        Tournament
      >(`tournaments/deletePlayer/${params.tournamentId}`, { ...params });
      return data;
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue("Something bad was happened!");
    }
  }
);
