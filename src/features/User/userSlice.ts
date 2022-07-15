import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState, ThunkExraArguments } from "../../store";
import { LoadErrorStatus, LoadStatus } from "../../types";
import { loginAsync } from "../login/loginSlice";
import { AppUser, AuthStatus } from "./types";
import jwt_decode from "jwt-decode";

type UserState = {
  user: AppUser | null;
  authStatus: AuthStatus;
};

type InitialUserState = UserState & LoadErrorStatus;

const initialState: InitialUserState = {
  user: null,
  authStatus: AuthStatus.UnAuthorized,
  status: LoadStatus.idle,
  error: null,
};

export const checkIsAuthAsync = createAsyncThunk<
  AppUser,
  undefined,
  { extra: ThunkExraArguments; rejectValue: string }
>("@@user/check", async (_, { extra: { api }, rejectWithValue }) => {
  try {
    const { data } = await api.makeGetRequest<{ token: string }>("auth/check");

    window.localStorage.setItem("token ", JSON.stringify(data.token));
    const userInfo: AppUser = jwt_decode(data.token);
    return userInfo;
  } catch (err) {
    if (err instanceof Error) {
      return rejectWithValue(err.message);
    }
    return rejectWithValue("Something bad was happened!");
  }
});

const userSlice = createSlice({
  name: "@@user",
  initialState,
  reducers: {
    logOut: (state) => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(checkIsAuthAsync.rejected, (state, action) => {
      state.status = LoadStatus.rejected;
      state.error = action.payload || "Error";
    });
    builder.addCase(checkIsAuthAsync.pending, (state) => {
      state.status = LoadStatus.loading;
      state.error = null;
    });
    builder.addCase(checkIsAuthAsync.fulfilled, (state, action) => {
      state.user = action.payload;
      state.authStatus = AuthStatus.Authorized;
      state.status = LoadStatus.fullfiled;
    });
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      state.user = action.payload;
      state.authStatus = AuthStatus.Authorized;
      state.status = LoadStatus.fullfiled;
    });
    builder.addCase(loginAsync.pending, (state) => {
      state.status = LoadStatus.loading;
      state.error = null;
    });
  },
});

export const { logOut } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;

export const userReducer = userSlice.reducer;
