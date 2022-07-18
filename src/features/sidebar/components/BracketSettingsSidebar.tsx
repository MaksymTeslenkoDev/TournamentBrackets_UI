import { Box } from "@material-ui/core";
import React from "react";
import { useBracketSettingsSidebarStyles } from "./styles/useBracketSettingsSidebarStyles";
import { GameSelect } from "./SidebarGameSelect";
import { TournamentsSelect } from "./TournamentsSelect";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { getUserTournamentsAsync, selectSidebar } from "../sidebarSlice";
import { useHistory } from "react-router-dom";
import { useSidebarStore } from "../useSidebarStore";
import { useSidebar } from "../useSidebar";

export const BracketSettingsSidebar: React.FC = () => {
  const classes = useBracketSettingsSidebarStyles();
  const { game } = useAppSelector(selectSidebar);
  const dispatch = useAppDispatch();
  const { deleteTournament } = useSidebarStore();
  const history = useHistory();
  const params = useSidebar();

  const handleDeleteTournament = (id: number) => (e: React.MouseEvent) => {
    e.stopPropagation();
    if (params.activeTournament && +params.activeTournament === id) {
      history.push(`/tournaments/${params.game}`);
    }
    dispatch(getUserTournamentsAsync(game));
    deleteTournament(id);
  };

  return (
    <Box className={classes.root}>
      <GameSelect />
      <TournamentsSelect handleDeleteTournament={handleDeleteTournament} />
    </Box>
  );
};
