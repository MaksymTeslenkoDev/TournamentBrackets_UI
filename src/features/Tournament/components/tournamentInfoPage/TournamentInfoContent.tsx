import { Box, Typography } from "@material-ui/core";
import React from "react";
import { useAppSelector } from "../../../../hooks";
import { selectOwner, selectTournament } from "../../state/tournamentSelectors";
import { InfoBlock } from "./InfoBlock";
import { useTournamentInfoContentStyles } from "./styles/useTournamentInfoContentStyles";

export const TournamentInfoContent: React.FC = () => {
  const classes = useTournamentInfoContentStyles();
  const { title } = useAppSelector(selectTournament);
  const owner = useAppSelector(selectOwner);

  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <Box>
          <Typography className={classes.title}>{title}</Typography>
          <Typography className={classes.subTitle}>{`by ${
            owner ? owner.name : ""
          }`}</Typography>
        </Box>
      </Box>
      <Box className={classes.bottom}>
        <InfoBlock />
      </Box>
    </Box>
  );
};
