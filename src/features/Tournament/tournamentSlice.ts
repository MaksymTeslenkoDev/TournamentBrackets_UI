import { createSlice } from "@reduxjs/toolkit";
import { LoadStatus } from "../../types";
import { loginAsync } from "../login/loginSlice";
import { checkIsAuthAsync } from "../User/userSlice";
import {
  createNewTournamentAsync,
  getTournamentByIdAsync,
  getTournamentsListAsync,
  registerNewCompetitorsAsync,
  updateRoundMatchesAsync,
  updateScoreAsync,
  updateTournamentAsync,
} from "./tournamentAsyncReducers";
import {
  gameModesArray,
  gamesArray,
  OrderDirection,
  TournamentAccessType,
  TournamentsListQueryParams,
  TournamentState,
} from "./types";

const initialState: TournamentState = {
  tournament: {
    game: gamesArray[0].value,
    owner: "",
    format: "",
    game_format: gameModesArray[0].value,
    title: "",
    matches: [],
    tournamentType: "",
    users: [],
    picture_long: null,
    picture_small: null,
    picture_original: null,
    id: "",
    size: 0,
    accessType: TournamentAccessType.public,
    startAt: "",
    finishAt: "",
    invite: "",
  },
  tournamentList: [],
  tournamentsListQueryState: {
    skip: 0,
    limit: 20,
    orderBy: "startAt",
    orderDirection: OrderDirection.asc,
    game: "",
    accessType: TournamentAccessType.all,
    search: "",
  },
  error: null,
  status: LoadStatus.idle,
};

export const tournamentSlice = createSlice({
  name: "@@tournament",
  initialState,
  reducers: {
    setTournamentField: (state, action) => {
      state[action.payload.field as keyof TournamentState] =
        action.payload.value;
    },
    setQueryField: (state, action) => {
      state.tournamentsListQueryState = {
        ...state.tournamentsListQueryState,
        [action.payload.field as keyof TournamentsListQueryParams]:
          action.payload.value,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(checkIsAuthAsync.fulfilled, (state, action) => {
      state.tournament.owner = action.payload.name;
    });
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      state.tournament.owner = action.payload.name;
    });
    builder.addCase(createNewTournamentAsync.fulfilled, (state, action) => {
      state.tournament = action.payload;
    });
    builder.addCase(getTournamentByIdAsync.fulfilled, (state, action) => {
      state.tournament = action.payload;
    });
    builder.addCase(updateTournamentAsync.fulfilled, (state, action) => {
      state.tournament = action.payload;
    });
    builder.addCase(updateRoundMatchesAsync.fulfilled, (state, action) => {
      state.tournament.matches = action.payload;
    });
    builder.addCase(updateScoreAsync.fulfilled, (state, action) => {
      state.tournament = action.payload;
    });
    builder.addCase(registerNewCompetitorsAsync.fulfilled, (state, action) => {
      state.tournament = action.payload;
    });
    builder.addCase(getTournamentsListAsync.fulfilled, (state, action) => {
      state.tournamentList = action.payload;
    });
    builder.addMatcher(
      (action) => action.type.endsWith("/fulfilled"),
      (state, action) => {
        state.error = null;
        state.status = LoadStatus.fullfiled;
      }
    );
    builder.addMatcher(
      (action) => action.type.endsWith("/pending"),
      (state, action) => {
        state.status = LoadStatus.loading;
        state.error = null;
      }
    );
    builder.addMatcher(
      (action) => action.type.endsWith("/rejected"),
      (state, action) => {
        state.status = LoadStatus.rejected;
        state.error = action.payload || action.error.message || "ERROR";
      }
    );
  },
});

export const { setTournamentField, setQueryField } = tournamentSlice.actions;

export const tournamentReducer = tournamentSlice.reducer;
