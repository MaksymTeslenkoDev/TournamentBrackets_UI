import { Box } from "@material-ui/core";
import React from "react";
import { useAppSelector } from "../../../hooks";
import { selectUser } from "../../User/userSlice";
import { useUpdateScore } from "../hooks/useUpdateScore";
import {
  selectMatches,
  selectOwner,
  selectRoundsDates,
  selectTournament,
} from "../tournamentSelectors";
import { Competitor } from "../types";
import { GridWrapper } from "./GridWrapper";
import { useBracketContainerStyles } from "./styles/useBracketContainerStyles";

export const BracketContainer: React.FC = () => {
  const matches = useAppSelector(selectMatches);
  const roundDates = useAppSelector(selectRoundsDates);
  const owner = useAppSelector(selectOwner);
  const user = useAppSelector(selectUser);
  const tournamentId = useAppSelector(selectTournament).id;
  const classes = useBracketContainerStyles();
  const { handleChangeScore } = useUpdateScore();

  return (
    <Box className={classes.root}>
      <GridWrapper
        matches={matches}
        roundDates={roundDates}
        isEditable={owner?.name === user.user?.name}
        handleChangeScore={handleChangeScore(+tournamentId)}
      />
    </Box>
  );
};
