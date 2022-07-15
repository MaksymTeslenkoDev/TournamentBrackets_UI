import { Box } from "@material-ui/core";
import React from "react";
import { useBracketSettingsSidebarStyles } from "./styles/useBracketSettingsSidebarStyles";
import { GameSelect } from "./SidebarGameSelect";
import { TournamentsSelect } from "./TournamentsSelect";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import {
  getUserTournamentsAsync,
  selectSidebar,
  setActive,
} from "../sidebarSlice";
import { selectUser } from "../../User/userSlice";
import { AuthStatus } from "../../User/types";
import { useParams } from "react-router-dom";

interface URLParams {
  game: string | undefined;
  activeTournament: string | undefined;
}
export const BracketSettingsSidebar: React.FC = () => {
  const classes = useBracketSettingsSidebarStyles();
  const { authStatus } = useAppSelector(selectUser);
  const { game } = useAppSelector(selectSidebar);
  const params: URLParams = useParams();
  const dispatch = useAppDispatch();

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

  return (
    <Box className={classes.root}>
      <GameSelect />
      <TournamentsSelect />
    </Box>
  );
};
