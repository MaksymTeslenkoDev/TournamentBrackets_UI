import React from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { AuthStatus } from "../User/types";
import { selectUser } from "../User/userSlice";
import {
  getUserTournamentsAsync,
  selectSidebar,
  setActive,
} from "./sidebarSlice";
interface URLParams {
  game: string | undefined;
  activeTournament: string | undefined;
}

export const useSidebar = () => {
  const params: URLParams = useParams();
  const dispatch = useAppDispatch();
  const { authStatus } = useAppSelector(selectUser);
  const { game } = useAppSelector(selectSidebar);

  React.useEffect(() => {
    if (params.game) {
      dispatch(setActive({ field: "game", value: params.game }));
    }
    dispatch(
      setActive({
        field: "activeTournament",
        value: params.activeTournament || "",
      })
    );
  }, [params]);

  React.useEffect(() => {
    if (authStatus === AuthStatus.Authorized) {
      dispatch(getUserTournamentsAsync(game));
    }
  }, [authStatus, game, dispatch]);

  return params;
};
