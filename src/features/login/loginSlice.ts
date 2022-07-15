import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState, ThunkExraArguments } from "../../store";
import { LoadErrorStatus, LoadStatus } from "../../types";
import { AppUser, LoginUser } from "../User/types";
import jwt_decode from "jwt-decode";

type LoginState = LoadErrorStatus;

const initialState: LoginState = {
  error: null,
  status: LoadStatus.idle,
};

export const loginAsync = createAsyncThunk<
  AppUser,
  LoginUser,
  { extra: ThunkExraArguments; rejectValue: string }
>("@@login/login", async (userData, { extra: { api }, rejectWithValue }) => {
  try {
    const { data } = await api.makePostRequest<LoginUser, { token: string }>(
      "/auth/login",
      userData
    );
    window.localStorage.setItem("token", data.token);
    const userInfo: AppUser = jwt_decode(data.token);
    return userInfo;
  } catch (err) {
    if (err instanceof Error) {
      return rejectWithValue(err.message);
    }
    return rejectWithValue("Something bad was happened!");
  }
});

export const loginSlice = createSlice({
  name: "@@login",
  initialState,
  reducers: {
    clearLogin: (state) => {
      return {
        ...state,
        error: initialState.error,
        status: initialState.status,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAsync.pending, (state) => {
      state.status = LoadStatus.loading;
      state.error = null;
    });
    builder.addCase(loginAsync.rejected, (state, action) => {
      state.status = LoadStatus.rejected;
      state.error = action.payload || action.error.message || "ERROR";
    });
    builder.addCase(loginAsync.fulfilled, (state) => {
      state.status = LoadStatus.fullfiled;
      state.error = null;
    });
  },
});

export const selectLoginInfo = (state: RootState) => state.login;

export const loginReducer = loginSlice.reducer;
