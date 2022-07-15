import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState, ThunkExraArguments } from "../../store";
import { LoadErrorStatus, LoadStatus } from "../../types";
import { User } from "../User/types";
export const signUp = createAsyncThunk<
  string,
  User,
  { extra: ThunkExraArguments; rejectValue: string }
>("@@signup/signup", async (userData, { extra: { api }, rejectWithValue }) => {
  try {
    const res = await api.makePostRequest<User, string>(
      "/auth/register",
      userData
    );
    window.localStorage.setItem("token ", JSON.stringify(res.data));
    return res.data;
  } catch (err) {
    if (err instanceof Error) {
      return rejectWithValue(err.message);
    }
    return rejectWithValue("Something bad was happened!");
  }
});

const initialState: LoadErrorStatus = {
  status: LoadStatus.idle,
  error: null,
};

const signUpSlice = createSlice({
  name: "@@signup",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUp.pending, (state) => {
      state.status = LoadStatus.loading;
      state.error = null;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.status = LoadStatus.rejected;
      state.error = action.payload || action.error.message || "ERROR";
    });
    builder.addCase(signUp.fulfilled, (state) => {
      state.status = LoadStatus.fullfiled;
      state.error = null;
    });
  },
});
export const selectSignUp = (state: RootState) => state.signUp;
export const signUpReducer = signUpSlice.reducer;
