import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SelectOption } from "../../Components/UiElements/Select/TBSelect";
import { createNewTournamentAsync } from "../Tournament/tournamentAsyncReducers";
import { RootState, ThunkExraArguments } from "../../store";
import { gamesArray } from "../Tournament/types";

type TournamentsOption = SelectOption & { role: string };
export enum UserRoles {
  owner = "Owner",
  admin = "Admin",
  player = "Player",
}
export interface SidebarState {
  game: number | string;
  tournamentsOptions: Array<TournamentsOption>;
  activeTournament: string | number;
}

export const getUserTournamentsAsync = createAsyncThunk<
  TournamentsOption[],
  string | number,
  { extra: ThunkExraArguments; rejectValue: string }
>(
  "@@sidebar/getUserTournaments",
  async (game, { extra: { api }, rejectWithValue }) => {
    try {
      const { data } = await api.makeGetRequest<
        Array<{
          tournaments: Array<{
            title: string;
            id: number;
            participant: { role: string };
          }>;
        }>
      >(`tournaments/get/${game}`);
      if (!data.length) {
        return [];
      }
      const options: TournamentsOption[] = data[0].tournaments.map((item) => {
        return {
          id: item.id,
          role: item.participant.role,
          label: item.title,
          value: item.id,
        };
      });

      return options;
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue("Something bad was happened!");
    }
  }
);

const initialState: SidebarState = {
  game: gamesArray[0].value,
  tournamentsOptions: [],
  activeTournament: "",
};

export const sidebarSlice = createSlice({
  name: "@@sidebar",
  initialState,
  reducers: {
    setActive: (state, action) => {
      state[action.payload.field as keyof SidebarState] = action.payload.value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createNewTournamentAsync.fulfilled, (state, action) => {
      state.game = action.payload.game;
    });
    builder.addCase(getUserTournamentsAsync.fulfilled, (state, action) => {
      state.tournamentsOptions = action.payload;
    });
  },
});

export const { setActive } = sidebarSlice.actions;
export const selectSidebar = (state: RootState) => state.sidebar;

export const sidebarReducer = sidebarSlice.reducer;
